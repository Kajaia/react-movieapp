import { useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

const HOME = "/dashboard";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const register = async (email, password) => {
    setUser({ email, password });
    navigate(HOME);
  };

  const login = async (email, password) => {
    setUser({ email, password });
    navigate(HOME);
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
