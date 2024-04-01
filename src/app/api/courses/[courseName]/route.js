import connectMongoDB from "../../../../lib/mongodb";
import { Course } from "../../../../models/models";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Course.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Course updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const course = await Course.findOne({ _id: id });
  return NextResponse.json({ course }, { status: 200 });
}
