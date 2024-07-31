"use client";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";


const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Must be 3 or more characters long" }),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, { message: "Must be 5 or more characters long" }),
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
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
    setIsSubmitting(true);
    setSubmissionStatus("idle");

    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.formErrors.fieldErrors as {
        [key: string]: string[] | undefined;
      };

      const formattedErrors = Object.keys(fieldErrors).reduce(
        (acc, fieldName) => {
          const fieldError = fieldErrors[fieldName];
          acc[fieldName] =
            fieldError && fieldError.length > 0 ? fieldError[0] : undefined;
          return acc;
        },
        {} as { [key: string]: string | undefined }
      );

      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex lg:w-[40rem] flex-col gap-4 items-center text-sm sm:w-full bg-transparent justify-center mx-auto my-20 h-fit p-4 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 rounded-2xl text-zinc-100 tracking-wide"
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
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>
      <label htmlFor="message" className="w-full flex flex-col gap-2">
        Message:
        <textarea
          className="w-full border border-neutral-500 bg-transparent rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500  "
          id="message"
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </label>

      {submissionStatus === "success" && (
        <p className="text-green-500 text-sm">Thank you for your message!</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-500 text-sm">
          Having issues with my Cloudflare deployment insisting on the edge
          runtime... You can try this on Vercel:{" "}
          <Link
            href={"https://portfolio-drab-nine-66.vercel.app/contact"}
            className="underline text-blue-500"
          >
            HERE
          </Link>
        </p>
      )}

      <div className="flex justify-start w-full">
        <button
          type="submit"
          className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(17,33,51,0.9)] px-8 py-2 bg-[rgba(39,40,41,0.9)] rounded-md text-neutral-500 transition duration-200 ease-linear font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
