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

// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up the user & add firestore data
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      return db.collection("users").doc(cred.user.uid).set({
        bio: signupForm["signup-bio"].value,
      });
    })
    .then(() => {
      // close the signup modal & reset form
      const modal = document.querySelector("#modal-signup");
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});

export const getDocument = async (docId, collection) => {};

// Fetch all documents from a collection in Firestore
export const getAllDocuments = async (collection) => {};

// Update a document in Firestore
export const updateDocument = async (collection, docId, data) => {};

// Delete a document from Firestore
export const deleteDocument = async (collection, docId) => {};
