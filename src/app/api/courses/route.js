import axios from "axios";
import {
  createDocument,
  getAllDocuments,
  getDocument,
} from "../../../utils/firebase/firebase";
import { NextResponse } from "next/server";
// export const POST = async (courseData) => {
//   try {
//     const response = await createDocument("courses", courseData);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating course:", error);
//     throw error;
//   }
// };

// Function to get all courses
export async function GET() {
  const response = await getDocument("quizzes", "lgsJork9NPuEQ3SNL8rI");
  return NextResponse.json(response);
}

// // Function to update a course
// export const PUT = async (courseId, courseData) => {
//   try {
//     const response = await axios.put(`/api/courses/${courseId}`, courseData);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating course:", error);
//     throw error;
//   }
// };

// // Function to delete a course
// export const DELETE = async (courseId) => {
//   try {
//     const response = await axios.delete(`/api/courses/${courseId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting course:", error);
//     throw error;
//   }
// };
