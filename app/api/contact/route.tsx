"use server";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Message from "@/lib/messageSchema";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await req.json();

    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newMessage = new Message(formData);

    await newMessage.save();

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
