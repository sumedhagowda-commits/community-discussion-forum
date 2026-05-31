import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("login");
  const [token, setToken] = useState("");

  // AFTER LOGIN → GO TO DASHBOARD
  if (token) {
    return <Dashboard />;
  }

  return (
    <div>
      {page === "login" ? (
        <Login setPage={setPage} setToken={setToken} />
      ) : (
        <Register setPage={setPage} />
      )}
    </div>
  );
}