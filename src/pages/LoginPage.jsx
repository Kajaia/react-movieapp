import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/layouts/Header";

export default function LoginPage() {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <Header>
      <form className="auth" onSubmit={(e) => handleForm(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus={true}
            placeholder="Ex: johndoe@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ex: 123456"
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </Header>
  );
}
