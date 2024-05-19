// import connectMongoDB from "../../../utils/mongodb";
// import { Module } from "../../../models/models";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { name, semester } = await request.json();
//   await connectMongoDB();
//   await Module.create({ name, semester });
//   return NextResponse.json({ message: "Module Created" }, { status: 201 });
// }

// export async function GET() {
//   await connectMongoDB();
//   const modules = await Module.find();
//   return NextResponse.json({ modules });
// }
