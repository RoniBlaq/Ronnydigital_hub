import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "We build modern, responsive and user-friendly websites that help businesses and organisations establish a strong online presence.",
    href: "/website-development",
    tags: ["Business Websites", "Corporate Websites", "E-commerce"],
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "We develop functional and interactive web applications designed to solve problems, simplify processes and support your goals.",
    href: "/web-applications",
    tags: ["Custom Applications", "Dashboards", "Business Solutions"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-6 py-24 bg-slate-900/60 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
            What We Do
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Website &Web Application Development Services
          </h2>

          <p className="text-slate-400 leading-relaxed"> At Ronnydigital Hub, we provide professional website development and web application development services for businesses, organisations and individuals in Nigeria and beyond. We build modern digital solutions that help you establish, improve and grow your online presence. </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-7">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition duration-300 hover:-translate-y-2"
            >
              <p className="text-blue-400 font-bold text-sm mb-8">
                {service.number}
              </p>

              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed mb-7">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-slate-300 bg-slate-800 px-3 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition"
              >
                Explore Service
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
