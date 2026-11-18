"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white px-6 py-28">

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-14">

        {/* Text content */}
        <div className="text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-300 font-semibold tracking-widest uppercase text-sm mb-5"
          >
            Welcome to Ronnydigital Hub
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            We build digital experiences that move your brand forward.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg leading-relaxed mb-5 max-w-xl mx-auto md:mx-0"
          >
            From modern websites and web applications to digital branding,
            we help businesses and organisations establish a stronger
            presence online.
          </motion.p>

          <p className="text-gray-400 mb-8">
            I&apos;m Ronny, the developer behind Ronnydigital Hub, specialising in building responsive web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
           <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-center"
            >
              Explore Our Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="px-7 py-3.5 border border-white/40 hover:bg-white hover:text-slate-950 rounded-lg font-semibold transition text-center"
            >
              Start a Project
            </motion.a>

          </div>
        </div>

        {/* Founder image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-40" />

            <Image
              src="/images/ronny.JPG"
              alt="Ronny, founder of Ronnydigital Hub"
              width={400}
              height={450}
              priority
              className="relative w-72 h-80 sm:w-96 sm:h-[450px] object-cover rounded-3xl border border-white/20 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
