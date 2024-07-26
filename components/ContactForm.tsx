"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation (you can add more complex validation)
    const newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        router.push("/contact"); // Redirect to the same page to clear the form
      } else {
        // Handle error (e.g., show an error message)
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
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

      <div className="flex justify-center items-center w-full">
        <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(17,33,51,0.9)] px-8 py-2 bg-[rgba(34,54,75,0.9)] rounded-md text-zinc-100 text-center transition duration-200 ease-linear font-bold w-40">
          Send
        </button>
      </div>
    </form>
  );
}
