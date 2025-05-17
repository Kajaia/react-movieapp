import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoutes() {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
