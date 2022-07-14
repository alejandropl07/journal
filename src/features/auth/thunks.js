import { auth, googleAuthProvider } from "../../firebase/firebase-config";
import { login } from "./authSlice";

export const startGoogleLogin = () => {
  return (dispatch) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      console.log(user);
      dispatch(login(user));
    });
  };
};
