import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "../ProtectedRoute";
import Register from "../Register";
import Login from "../Login";
import Tasks from "../Tasks";
import PageError from "../PageError";

export default function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <div className="page">
      <Routes>

        <Route path="signin" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />

        <Route path="signup" element={isLoggedIn ? <Navigate to="/" replace /> : <Register />} />

        <Route path="/" element={<ProtectedRoute loggedIn={isLoggedIn} component={Tasks} />} />

        <Route path="*" element={<PageError />} />
      </Routes>
    </div>
  );
}
