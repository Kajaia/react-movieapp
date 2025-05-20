import { useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../services/firebase";
import { alert } from "../../helpers";

const HOME = "/dashboard";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("user"));
    if (storage) setUser(storage);
  }, []);

  const register = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      alert(
        "Register success",
        "You registered successfully",
        "success",
        "Thanks"
      );
      navigate(HOME);
    } catch (error) {
      alert("Register error", error.message, "error", "Try again");
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      alert("Login success", "You logged in successfully", "success", "Thanks");
      navigate(HOME);
    } catch (error) {
      alert("Login error", error.message, "error", "Try again");
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);

      setUser(null);
      localStorage.removeItem("user");
      alert(
        "Logout success",
        "You logged out successfully",
        "success",
        "Thanks"
      );
    } catch (error) {
      alert("Logout error", error.message, "error", "Try again");
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
