import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "@/service/firebase";
import { toast } from "sonner";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signupWithGoogle = async (e) => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    toast("User signed in successfully");
  } catch (error) {
    console.error(error);
    toast("Failed to sign in");
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast("User signed out successfully");
  } catch (error) {
    console.error("Error signing out:", error);
    toast("Failed to sign out");
  }
};

export { signupWithGoogle, logout };
