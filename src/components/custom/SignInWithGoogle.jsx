import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const SignInWithGoogle = () => {
  const { signupWithGoogle } = useAuth();
  return (
    <Dialog>
      <DialogTrigger className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-950 hover:cursor-pointer hover:-translate-y-2 transition duration-300 ease-in-out">
        Sign In to Generate Trip
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In with Google</DialogTitle>
          <DialogDescription>
            Sign in to generate a trip plan. We will not store any of your
            personal information.
          </DialogDescription>
        </DialogHeader>

        <Button
          variant="darkButton"
          className="font-playfair-display font-light tracking-wider hover:cursor-pointer"
          onClick={() => signupWithGoogle()}
        >
          Sign In with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SignInWithGoogle;
