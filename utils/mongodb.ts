import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

let cachedDb: mongoose.Connection | null = null;

export async function connectToDatabase(): Promise<mongoose.Connection> {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const opts = {
      bufferCommands: false,
    };

    const db = await mongoose.connect(MONGODB_URI, opts);

    db.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    db.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    cachedDb = db.connection;
    return cachedDb;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
