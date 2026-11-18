
"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div>
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Let's Work Together
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Have a project in mind?
            <span className="text-blue-400"> Let's talk.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            Whether you need a business website, a web application
            or a stronger digital presence, I'd love to hear about
            your idea.
          </p>

          <p className="text-gray-300">
            Tell me what you're looking to build, and let's explore
            how we can bring it to life.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-slate-950 border border-white/10 rounded-2xl p-7 md:p-9 space-y-5 shadow-xl"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium mb-2"
            >
              Your Name
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              required
              className="w-full bg-slate-900 border border-white/10 rounded-lg p-3.5 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium mb-2"
            >
              Email Address
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              required
              className="w-full bg-slate-900 border border-white/10 rounded-lg p-3.5 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-medium mb-2"
            >
              Phone Number <span className="text-gray-500">(optional)</span>
            </label>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Enter your phone number"
              className="w-full bg-slate-900 border border-white/10 rounded-lg p-3.5 outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium mb-2"
            >
              Tell me about your project
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="What would you like to build?"
              required
              className="w-full bg-slate-900 border border-white/10 rounded-lg p-3.5 outline-none focus:border-blue-500 transition resize-y"
            />
          </div>

          {status === "success" && (
            <p role="status" className="text-green-400 text-sm">
              Your message has been sent successfully. Thank you for reaching out!
            </p>
          )}

          {status === "error" && (
            <p role="alert" className="text-red-400 text-sm">
              Sorry, your message couldn't be sent. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed py-3.5 rounded-lg font-semibold transition"
          >
            {status === "sending" ? "Sending..." : "Send Enquiry"}
          </button>

        </form>
      </div>
    </section>
  );
}
