import { auth, db, provider } from "./config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { signInWithRedirect } from "firebase/auth";

// Create a document in Firestore
export const createDocument = async ({
  userName,
  coursesFinished,
  quizzesTaken,
}) => {
  await addDoc(collection(db, "users"), {
    userName,
    coursesFinished,
    quizzesTaken,
  });
};

export const handleGoogleSignUp = async () => {
  const cred = await signInWithRedirect(auth, provider);
  const uid = cred.user.uid;
  const usersCollection = collection(db, "users");
  const userData = {
    userName: cred.user.displayName,
    email: cred.user.email,
    photoUrl: cred.user.photoURL,
    quizzesTaken: [
      { quiz: "sfsd", finished: false },
      { quiz: "algebra", finished: false },
      { quiz: "probability", finished: false },
    ],
    coursesFinished: [
      { course: "sfsd", enrolled: false },
      { course: "algebra", enrolled: false },
      { course: "probability", enrolled: false },
    ],
  };
  const ref = doc(usersCollection, uid);
  await setDoc(ref, userData);
};
