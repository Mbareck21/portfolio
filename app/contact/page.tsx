"use client";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";


export default function Form() {
  return (
    <Suspense fallback="Loading...">
      <ContactForm />
    </Suspense>
  );
}
