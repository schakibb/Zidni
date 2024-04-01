import connectMongoDB from "../../../lib/mongodb";
import { Module } from "../../../models/models";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, semester } = await request.json();
  await connectMongoDB();
  await Module.create({ name, semester });
  return NextResponse.json({ message: "Module Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Module.find();
  return NextResponse.json({ topics });
}

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }
