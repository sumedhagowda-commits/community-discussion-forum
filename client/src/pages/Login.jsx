import { useState } from "react";
import api from "../services/api";

export default function Login({ setPage, setToken }) {
  const [form, setForm] = useState({});

  const login = async () => {
    try {
      const res = await api.post("/auth/login", form);

      // SAVE TOKEN + REDIRECT
      setToken(res.data.token);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <input
        placeholder="email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br />

      <button onClick={login}>Login</button>

      <p onClick={() => setPage("register")}>
        Create account
      </p>
    </div>
  );
}