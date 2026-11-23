"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Oxygen Foundation",
    description:
      "A responsive website developed for an organisation to showcase its mission, share information and establish a professional online presence.",
    image: "/images/oxygen.jpeg",
    link: "https://oxygen-foundation.vercel.app",
    stack: "Web Development",
  },
  {
    name: "PenPixel Studio",
    description:
      "A modern creative studio website developed to showcase services, highlight projects and help  potential clients connect with the business.",
    image: "/images/screeenshot.png",
    link: "https://penpixel-studio.vercel.app",
    stack: "Next.js • Tailwind CSS",
  },
  {
    name: "Todo List",
    description:
      "A functional task management web application design to help users organise activities, manage tasks and track their daily progress.",
    image: "/images/todo.jpeg",
    link: "https://todo-list-five-chi-70.vercel.app",
    stack: "Web Application",
  },
  {
    name: "Iconic Travels",
    description:
      "A responsive travel website designed to showcase travel services and provide visitors with an engaging browsing experience.",
    image: "/images/iconic.jpeg",
    link: "https://roniblaq.github.io/IconicTravels",
    stack: "HTML • Bootstrap • JavaScript",
  },
  {
    name: "MindEase",
    description:
      "A full-stack web application developed to provide users with an interactive digital plartform, using Next.js, Tailwind CSS, PHP and MySQL.",
    image: "/images/sample.JPG",
    link: "https://mindease-smoky.vercel.app",
    stack: "Next.js • PHP • MySQL",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Selected Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects & Case Studies
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that reflect my approach to
            building functional, responsive and user-friendly
            digital experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-blue-500/50 transition duration-300"
            >

              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  {project.stack}
                </p>

                <h3 className="text-xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition"
                >
                  View Project <span aria-hidden="true">↗</span>
                </a>
              </div>

            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}
