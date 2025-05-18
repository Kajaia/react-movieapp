import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { alert } from "../helpers";
import Header from "../components/layouts/Header";

export default function RegisterPage() {
  const { register } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (password === repeatPassword) register(email, password);
    else
      alert("Register error", "Passwords did not match", "error", "Try again");
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
          <label htmlFor="repeat_password">Repeat password</label>
          <input
            type="password"
            id="repeat_password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Ex: 123456"
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </Header>
  );
}
