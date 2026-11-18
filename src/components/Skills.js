
"use client";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Building application logic and working with databases.",
    skills: ["PHP", "Laravel", "MySQL"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Technical Expertise
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools & Technologies
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            The technologies I use to design, develop and build
            functional digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-8 rounded-2xl bg-slate-900 border border-white/10 hover:border-blue-500/50 transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {group.title}
              </h3>

              <p className="text-gray-400 mb-7">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
