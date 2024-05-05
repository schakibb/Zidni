// import connectMongoDB from "../../../../../utils/mongodb";
// import { Quiz } from "../../../../../models/models";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { question, answer1, answer2, answer3, correctAnswer, lesson } =
//     await request.json();
//   await connectMongoDB();
//   await Quiz.create({
//     question,
//     answer1,
//     answer2,
//     answer3,
//     correctAnswer,
//     lesson,
//   });
//   return NextResponse.json({ message: "Quiz Created" }, { status: 201 });
// }

// export async function GET() {
//   await connectMongoDB();
//   const quizzes = await Quiz.find();
//   return NextResponse.json({ quizzes });
// }

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Quiz.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Quiz deleted" }, { status: 200 });
// }
