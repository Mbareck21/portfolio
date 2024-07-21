"use client"; // For client-side rendering

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
        // Email successfully sent, you can display a success message
        alert("Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Handle errors, maybe display an error message to the user
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div className="containe h-[40rem] w-full lg:text-lg md:text-md sm:text-sm relative flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="min-w-lg p-4 rounded-lg shadow-md"
      >
        <h2 className="text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-40 mb-10">
          Contact Me
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block  font-bold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block  font-bold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block  font-bold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white transition duration-200 ease-linear font-bold"
        >
          Send
        </button>
      </form>
    </div>
  );
}
