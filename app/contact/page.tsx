"use client";
import ContactForm from "@/components/ContactForm";
import { secureHeapUsed } from "crypto";

export default function Form() {
  return (
    <div className="container w-full mx-auto mt-40 items-center flex flex-col justify-center">
      <div className="rounded-2xl p-4 overflow-hidden w-fullborder border-transparent dark:border-white/[0.2] group-hover:border-slate-700 flex flex-col items-center justify-center">
        <h1 className="text-zinc-100 font-bold tracking-wide mt-4 text-center">
          Send me a message!
        </h1>
        <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed p-4 lg: w-[60%] md:w-full sm: w-full">
          This component allows for basic form submission and, and it sends
          visitor's name, email and message to{" "}
          <span className="text-sky-500">Mongodb</span>. I'd then fetch the same
          data and display it on the home page. I used{" "}
          <span className="text-sky-500">Next.Js server</span> to handle the
          submission and <span className="text-sky-500">Mongoose</span> to build
          the data <span className="text-sky-500">schema</span> and handle the
          database connection.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
