import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/auth/LoginScreen";
import JournalScreen from "../components/journal/JournalScreen";
import { login } from "../features/auth/authSlice";
import { auth } from "../firebase/firebase-config";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user));
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/auth/*"
            element={
              <PublicRoute isLogged={isLogged}>
                <AuthRouter />
              </PublicRoute>
            }
          />

          <Route
            exact
            path="/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <JournalScreen />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
