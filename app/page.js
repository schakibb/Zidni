"use client";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  console.log({ user });

  if (!user) {
    router.push("/signup");
    return null; // Redirecting, so no need to render anything
  }

  if (user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          Log out
        </button>
      </main>
    );
  }
}
