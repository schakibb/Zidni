"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/utils/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          Log out
        </button>
      ) : (
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          Log out
        </button>
      )}
    </main>
  );
}
