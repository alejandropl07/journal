import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import JournalScreen from "../components/journal/JournalScreen";
import { login } from "../features/auth/authSlice";
import { auth } from "../firebase/firebase-config";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(login(user));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route exact path="/" element={<JournalScreen />} />
          <Route path="/*" element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
