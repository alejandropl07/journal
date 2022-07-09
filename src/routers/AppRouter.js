import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
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
