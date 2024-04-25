import { toast } from "sonner";
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

// Create a document in Firestore
export const createDocument = async ({
  userName,
  coursesFinished,
  quizzesTaken,
}) => {
  try {
    await addDoc(collection(db, "users"), {
      userName,
      coursesFinished,
      quizzesTaken,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const handleGoogleSignUp = async () => {
  const cred = await signInWithPopup(auth, provider);
  uid = cred.user.uid;
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
  // await addDoc(usersCollection, userData);
  router.push(href);
};
