import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    const user = login(email, password);
    if (!user) return alert("Invalid");

    if (user.role === "admin") navigate("/admin/dashboard");
    else navigate("/customer/dashboard");
  };

  return (
    <form onSubmit={handle}>
      <h2>Login</h2>
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
