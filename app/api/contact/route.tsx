// app/api/contact/route.tsx
import { NextRequest, NextResponse } from "next/server"; // Import from next/server
import { connectToDatabase } from "@/utils/mongodb";
import Message from "@/models/message";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: NextRequest) {
  // Named export for POST
  try {
    const body = await req.json(); // Parse the request body

    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { errors: result.error.format() },
        { status: 400 } // Bad Request
      );
    }

    const { name, email, message } = result.data;

    try {
      const db = await connectToDatabase();
      await Message.create({ name, email, message });
    } catch (connectionError) {
      console.error("MongoDB connection error:", connectionError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 } // Internal Server Error
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 } // OK
    );
  } catch (error) {
    console.error("Error saving message:", error);

    if (process.env.NODE_ENV === "development") {
      return NextResponse.json(
        { error: "Internal Server Error", details: error },
        { status: 500 } // Internal Server Error
      );
    } else {
      return NextResponse.json(
        { error: "An error occurred" },
        { status: 500 } // Internal Server Error
      );
    }
  }
}
