import { useState } from "react";
import api from "../services/api";

export default function Register({ setPage }) {
  const [form, setForm] = useState({});

  const register = async () => {
    await api.post("/auth/register", form);
    alert("Registered! Now login");
    setPage("login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      <input placeholder="name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <br />

      <input placeholder="email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <br />

      <input placeholder="password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <br />

      <button onClick={register}>Register</button>

      <p onClick={() => setPage("login")}>Go to Login</p>
    </div>
  );
}