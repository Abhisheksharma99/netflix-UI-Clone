import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { firebaseAuth } from "./utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Netflix from "./pages/Netflix";
import VerifyEmail from "./pages/VerifyEmail";
import React, { useEffect } from "react";
import Player from "./pages/Player";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      !user && !user?.emailVerified
        ? navigate("/login")
        : user && !user?.emailVerified
        ? navigate("/verifyemail")
        : !user && user?.emailVerified
        ? navigate("/login")
        : navigate("/");
    });
    return () => unsubscribe();
  }, [navigate]);
  const currentLocation = useLocation();
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/" element={<Netflix />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/verifyemail" element={<VerifyEmail />} />
    </Routes>
  );
}

export default App;
