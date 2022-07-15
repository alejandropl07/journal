import { auth, googleAuthProvider } from "../../firebase/firebase-config";
import { login } from "./authSlice";

export const startGoogleLogin = () => {
  return (dispatch) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(login(user));
    });
  };
};

export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);
        await user.updateProfile({ displayName: name });
        dispatch(login(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
