
"use client";
import { useState } from "react";
import { z } from "zod";
export const runtime = "edge";
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );
  function isStringArray(value: unknown): value is string[] {
    return (
      Array.isArray(value) && value.every((item) => typeof item === "string")
    );
  }
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const result = contactFormSchema.safeParse({ ...formData, [name]: value });
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors as {
        [key: string]: string[] | undefined;
      };

      setErrors({
        ...errors,
        [name]: isStringArray(fieldErrors[name])
          ? fieldErrors[name][0]
          : undefined,
      });
    } else {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative min-w-md flex flex-col gap-4 items-center w-[40rem] bg-transparent justify-center mx-auto my-20 h-fit p-4"
    >
      <label htmlFor="name" className="w-full flex flex-col gap-2">
        Name:
        <input
          className="w-full border border-neutral-500 rounded-md px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 "
          placeholder="Enter your name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="email" className="w-full flex flex-col gap-2">
        Email:
        <input
          className="w-full border border-neutral-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="message" className="w-full flex flex-col gap-2">
        Message:
        <textarea
          className="border border-neutral-500 rounded-md px-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          id="message"
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      {Object.keys(errors).map(
        (fieldName) =>
          errors[fieldName] && (
            <p key={fieldName} className="text-red-500 text-sm">
              {errors[fieldName]}
            </p>
          )
      )}
      <div className="flex justify-start w-full">
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(17,33,51,0.9)] px-8 py-2 bg-[rgba(39,40,41,0.9)] rounded-md text-neutral-500 transition duration-200 ease-linear font-bold">
          Send
        </button>
      </div>
    </form>
  );
}
