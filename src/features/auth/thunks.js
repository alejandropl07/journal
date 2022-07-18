import Swal from "sweetalert2";
import { auth, googleAuthProvider } from "../../firebase/firebase-config";
import { logoutCleaning } from "../notes/notesSlice";
import { finishLoading, startLoading } from "../ui/uiSlice";
import { login, logout } from "./authSlice";

export const startGoogleLogin = () => {
  return (dispatch) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(login(user));
    });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user));
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(finishLoading());
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user));
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await auth.signOut();
    dispatch(logout());
    dispatch(logoutCleaning());
  };
};
