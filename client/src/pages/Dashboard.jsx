import { useEffect, useState } from "react";
import api from "../services/api";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Dashboard() {
  const [discussions, setDiscussions] = useState([]);
  const [selected, setSelected] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  // LOAD DISCUSSIONS
  const load = async () => {
    const res = await api.get("/discussions");
    setDiscussions(res.data);
  };

  useEffect(() => {
    load();

    // REAL-TIME RECEIVE MESSAGE
    socket.on("message", (data) => {
      setChat(prev => [...prev, data]);
    });

    return () => socket.off("message");
  }, []);

  // CREATE DISCUSSION
  const createDiscussion = async () => {
    if (!title) return;

    await api.post("/discussions", {
      title,
      description,
      createdBy: "User"
    });

    setTitle("");
    setDescription("");
    load();
  };

  // JOIN DISCUSSION
  const join = (d) => {
    setSelected(d);
    setChat(d.messages || []);
    socket.emit("join", d._id);
  };

  // SEND MESSAGE (FIXED)
  const send = async () => {
    if (!msg || !selected) return;

    const data = {
      room: selected._id,
      user: "User",
      text: msg
    };

    // 1️⃣ Send to socket (real-time)
    socket.emit("message", data);

    // 2️⃣ Save in backend (IMPORTANT FIX)
    await api.post(`/discussions/${selected._id}/message`, data);

    // 3️⃣ Update UI instantly
    setChat(prev => [...prev, data]);

    setMsg("");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* LEFT */}
      <div style={{ width: "35%", padding: 10, borderRight: "1px solid gray" }}>
        <h2>Discussions</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button onClick={createDiscussion}>Create</button>

        <hr />

        {discussions.map(d => (
          <div
            key={d._id}
            onClick={() => join(d)}
            style={{ cursor: "pointer", padding: 10 }}
          >
            <b>{d.title}</b>
            <p>{d.description}</p>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div style={{ width: "65%", padding: 10 }}>

        {!selected ? (
          <h3>Select a discussion</h3>
        ) : (
          <>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>

            <hr />

            {/* CHAT MESSAGES */}
            <div style={{ height: "60vh", overflowY: "auto" }}>
              {chat.map((m, i) => (
                <p key={i}>
                  <b>{m.user}:</b> {m.text}
                </p>
              ))}
            </div>

            {/* INPUT */}
            <input
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder="Type message..."
            />

            <button onClick={send}>Send</button>
          </>
        )}

      </div>
    </div>
  );
}