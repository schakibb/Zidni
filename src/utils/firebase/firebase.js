import { db } from "./config";
// Create a document in Firestore
export const createDocument = async (collection, data) => {
  try {
    const docRef = await db.collection(collection).add(data);
    return docRef.id;
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

// Read a document from Firestore
// Read a document from Firestore
export const getDocument = async (collection, docId) => {
  try {
    const docRef = await db.collection(collection).doc(docId).get();
    if (docRef.exists) {
      return docRef.data();
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
};

// Fetch all documents from a collection in Firestore
export const getAllDocuments = async (collection) => {
  try {
    const querySnapshot = await db.collection(collection).get();
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push(doc.data());
    });
    return documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

// Update a document in Firestore
export const updateDocument = async (collection, docId, data) => {
  try {
    await db.collection(collection).doc(docId).update(data);
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

// Delete a document from Firestore
export const deleteDocument = async (collection, docId) => {
  try {
    await db.collection(collection).doc(docId).delete();
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};
