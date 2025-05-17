import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function DashboardPage() {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
      <p>
        Hello <strong>{user.email}</strong> 👋, welcome to the dashboard!
      </p>
    </div>
  );
}
