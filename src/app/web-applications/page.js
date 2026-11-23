import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Web Application Development | Ronnydigital Hub",
  description:
    "Ronnydigital Hub develops custom web applications that help businesses and organisations streamline processes, manage information and solve problems.",
  alternates: {
    canonical: "/web-applications",
  },
  openGraph: {
    title: "Web Application Development | Ronnydigital Hub",
    description:
      "Explore custom web application development services by Ronnydigital Hub. We build functional, user-friendly and scalable web solutions.",
    url: "https://ronnydigitalhub.vercel.app/web-applications",
    siteName: "Ronnydigital Hub",
    type: "website",
  },
};

export default function WebApplications() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden px-6 pt-32 pb-20">

        {/* Background Effects */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Hero Text */}
          <div>

            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-6">
              Web Application Development
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-7">
              Custom Web Applications
              <span className="block text-blue-400">
                Built Around Your Needs.
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-9">
              We build interactive and functional web applications that
              help businesses, organisations and individuals manage
              processes, solve problems and bring their ideas to life.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-4 rounded-full transition"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/#projects"
                className="border border-slate-600 hover:border-blue-400 text-white font-semibold px-7 py-4 rounded-full transition"
              >
                Explore Our Projects
              </Link>

            </div>
          </div>

          {/* Application Preview */}
          <div className="relative">

            <div className="rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-blue-950/40 overflow-hidden">

              {/* Browser Header */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-700">

                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>

                <div className="ml-4 flex-1 bg-slate-800 rounded-md px-4 py-2 text-xs text-slate-400">
                  yourapplication.com
                </div>

              </div>

              {/* Dashboard Preview */}
              <div className="p-6">

                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="h-3 w-28 bg-slate-600 rounded mb-2"></div>
                    <div className="h-2 w-40 bg-slate-700 rounded"></div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-blue-500/20"></div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">

                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-slate-800 rounded-xl p-4"
                    >
                      <div className="h-2 w-12 bg-slate-600 rounded mb-4"></div>
                      <div className="h-5 w-16 bg-blue-400/70 rounded"></div>
                    </div>
                  ))}

                </div>

                <div className="bg-slate-800 rounded-xl p-5 mb-4">

                  <div className="h-3 w-32 bg-slate-600 rounded mb-6"></div>

                  <div className="flex items-end gap-3 h-28">

                    {[45, 75, 55, 90, 65, 100, 70].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-md"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-3">

                  <div className="h-16 bg-slate-800 rounded-xl"></div>
                  <div className="h-16 bg-slate-800 rounded-xl"></div>

                </div>

              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 bg-blue-600/20 border border-blue-400/30 backdrop-blur-lg rounded-xl px-5 py-4">
              <p className="text-sm font-semibold text-blue-300">
                Built for real-world solutions
              </p>
            </div>

          </div>

        </div>
      </section>


{/* Introduction Section */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
        Beyond Traditional Websites
      </p>

      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
        Turn Your Ideas Into
        <span className="block text-blue-400">
          Functional Digital Solutions.
        </span>
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        A web application is an interactive software solution that
        people access through a web browser. Unlike a traditional
        website that mainly presents information, a web application
        allows users to perform tasks, submit information, manage
        activities and interact with digital services.
      </p>

      <p className="text-slate-400 leading-relaxed mb-8">
        From booking platforms and management dashboards to custom
        business tools, we develop web applications around the
        specific needs of your project.
      </p>

      <Link
        href="/#contact"
        className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition"
      >
        Let's discuss your idea
        <span aria-hidden="true">→</span>
      </Link>
    </div>

    <div className="grid sm:grid-cols-2 gap-5">

      {[
        {
          title: "Simplify Processes",
          description:
            "Reduce repetitive manual tasks with digital solutions.",
        },
        {
          title: "Manage Information",
          description:
            "Organise and access important information more efficiently.",
        },
        {
          title: "Improve User Experience",
          description:
            "Give users interactive tools that make tasks easier.",
        },
        {
          title: "Support Growth",
          description:
            "Build solutions that can evolve as your needs change.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition"
        >
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-5">
            0{index + 1}
          </div>

          <h3 className="text-lg font-bold mb-3">
            {item.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


{/* Types of Web Applications */}
<section className="px-6 py-24 bg-slate-950">
  <div className="max-w-7xl mx-auto">

    <div className="max-w-2xl mb-14">
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
        What We Develop
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Web Applications Designed to Solve Real Problems.
      </h2>

      <p className="text-slate-400 leading-relaxed">
        We develop custom web-based solutions for different needs,
        helping businesses and organisations manage activities,
        serve users and work more efficiently.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

      {[
        {
          number: "01",
          title: "Management Systems",
          description:
            "Applications that help businesses organise records, manage operations and keep important information in one place.",
        },
        {
          number: "02",
          title: "Booking & Appointment Systems",
          description:
            "Platforms that allow customers to schedule appointments, make bookings and manage reservations online.",
        },
        {
          number: "03",
          title: "Educational Platforms",
          description:
            "Interactive platforms that support learning, student activities, educational resources and academic management.",
        },
        {
          number: "04",
          title: "Business Applications",
          description:
            "Custom digital tools designed to support business activities, improve workflows and simplify everyday tasks.",
        },
        {
          number: "05",
          title: "Dashboards & Tracking Systems",
          description:
            "Applications that organise data, track activities and present useful information through clear dashboards.",
        },
        {
          number: "06",
          title: "Custom Web Solutions",
          description:
            "Purpose-built applications developed around unique ideas, specific requirements and real-world challenges.",
        },
      ].map((item) => (
        <div
          key={item.number}
          className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:-translate-y-2 transition duration-300"
        >
          <p className="text-blue-400 font-bold text-sm mb-8">
            {item.number}
          </p>

          <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition">
            {item.title}
          </h3>

          <p className="text-slate-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


{/* Features & Capabilities */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-7xl mx-auto">

    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
        Built Around Functionality
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Features That Make Your Application Work.
      </h2>

      <p className="text-slate-400 leading-relaxed">
        Every application has different requirements. We focus on
        building useful features that support its purpose and make
        it easier for people to use.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          title: "User Authentication",
          description:
            "Secure user registration, login and account access based on application requirements.",
          icon: "01",
        },
        {
          title: "Database Management",
          description:
            "Organised data storage and retrieval to help applications manage important information.",
          icon: "02",
        },
        {
          title: "Admin Dashboards",
          description:
            "Centralised interfaces for managing users, records, activities and application content.",
          icon: "03",
        },
        {
          title: "Responsive Interfaces",
          description:
            "User-friendly layouts designed to work across mobile phones, tablets and desktop screens.",
          icon: "04",
        },
        {
          title: "Interactive Functionality",
          description:
            "Dynamic features that allow users to submit information, perform tasks and interact with the application.",
          icon: "05",
        },
        {
          title: "Third-Party Integrations",
          description:
            "Connect applications with suitable external services and tools where the project requires them.",
          icon: "06",
        },
      ].map((feature) => (
        <div
          key={feature.icon}
          className="p-7 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition duration-300"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-6">
            {feature.icon}
          </div>

          <h3 className="text-lg font-bold mb-3">
            {feature.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


{/* Why Choose Us */}
<section className="px-6 py-24 bg-slate-950">
  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
          Why Ronnydigital Hub
        </p>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          We Build With Your
          <span className="block text-blue-400">
            Goals in Mind.
          </span>
        </h2>

        <p className="text-slate-400 leading-relaxed mb-8">
          Every project starts with a purpose. We take time to
          understand what you want to achieve and develop digital
          solutions around your requirements, users and goals.
        </p>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition"
        >
          Let's talk about your project
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">

        {[
          {
            title: "Purpose-Driven Development",
            description:
              "We focus on building solutions that address actual needs and serve a clear purpose.",
          },
          {
            title: "User-Focused Experience",
            description:
              "We consider how people will interact with your application and make usability a priority.",
          },
          {
            title: "Modern Technologies",
            description:
              "We use suitable modern development tools and technologies to build functional applications.",
          },
          {
            title: "Project-Focused Approach",
            description:
              "We consider your requirements, project scope and objectives throughout development.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition"
          >
            <div className="text-blue-400 font-bold text-sm mb-5">
              0{index + 1}
            </div>

            <h3 className="text-lg font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>


{/* Development Process */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-7xl mx-auto">

    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
        How We Work
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        From Idea to Application.
      </h2>
      <p className="text-slate-400">
        A clear development process that takes your idea from planning
        to a functional digital solution.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        ["01", "Discovery & Consultation", "We understand your idea, goals and requirements."],
        ["02", "Planning & Structure", "We define the application structure, features and workflow."],
        ["03", "Design & User Experience", "We plan an intuitive interface around your users."],
        ["04", "Development", "We build the application and implement its required functionality."],
        ["05", "Testing & Refinement", "We test the application and address issues before launch."],
        ["06", "Launch & Delivery", "We prepare the completed application for use."],
      ].map(([number, title, description]) => (
        <div key={number} className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
          <p className="text-blue-400 font-bold mb-5">{number}</p>
          <h3 className="text-lg font-bold mb-3">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Featured Projects */}
<section className="px-6 py-24 bg-slate-950">
  <div className="max-w-7xl mx-auto">

    <div className="mb-12">
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
        Our Work
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Web Applications We've Built.
      </h2>
      <p className="text-slate-400 max-w-2xl">
        Explore some of our projects that demonstrate our approach
        to building practical digital solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      <a
        href="https://mindease-smoky.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/images/sample.JPG"
            alt="MindEase web application"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="p-7">
          <p className="text-blue-400 text-sm mb-2">Web Application</p>
          <h3 className="text-xl font-bold mb-3">MindEase</h3>
          <p className="text-slate-400 leading-relaxed">
            A web application project designed around mental wellness
            and user interaction.
          </p>
          <span className="inline-block mt-5 text-blue-400 font-semibold">
            View Project →
          </span>
        </div>
      </a>

      <a
        href="https://penpixel-studio.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition"
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src="/images/screeenshot.png"
            alt="PenPixel Studio project"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="p-7">
          <p className="text-blue-400 text-sm mb-2">Web Application</p>
          <h3 className="text-xl font-bold mb-3">PenPixel Studio</h3>
          <p className="text-slate-400 leading-relaxed">
            A digital platform project built to provide an interactive
            online experience.
          </p>
          <span className="inline-block mt-5 text-blue-400 font-semibold">
            View Project →
          </span>
        </div>
      </a>

    </div>
  </div>
</section>


{/* FAQ Section */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-4xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
        Frequently Asked Questions
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Got Questions? We've Got Answers.
      </h2>
    </div>

    <div className="space-y-5">
      {[
        {
          q: "What is the difference between a website and a web application?",
          a: "A traditional website mainly presents information, while a web application allows users to interact with features, submit information and perform specific tasks.",
        },
        {
          q: "How much does it cost to develop a web application?",
          a: "The cost depends on the application's features, complexity, design and technical requirements. Contact us to discuss your project and receive a quote.",
        },
        {
          q: "How long does development take?",
          a: "The timeline depends on the scope of the application, its functionality and the requirements of the project.",
        },
        {
          q: "Can you build an application based on my idea?",
          a: "Yes. We can discuss your idea, understand your requirements and work towards developing a custom solution.",
        },
        {
          q: "Will my web application work on mobile devices?",
          a: "We develop responsive interfaces designed to work across smartphones, tablets and desktop screens.",
        },
        {
          q: "How do I get started?",
          a: "Contact us with your idea or project requirements. We'll discuss your needs and the next steps.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-slate-950 border border-slate-800"
        >
          <h3 className="font-bold text-lg mb-3">{item.q}</h3>
          <p className="text-slate-400 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Final CTA */}
<section className="px-6 py-24 bg-slate-950">
  <div className="max-w-5xl mx-auto text-center rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20 p-10 md:p-16">

    <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
      Let's Build Something Useful
    </p>

    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
      Have an Idea for a
      <span className="block text-blue-400">
        Web Application?
      </span>
    </h2>

    <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-9">
      Let's turn your idea into a functional digital solution.
      Tell us what you want to build and let's discuss how to make it happen.
    </p>

    <Link
      href="/#contact"
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition"
    >
      Discuss Your Project →
    </Link>

  </div>
</section>

    </main>
  );
}
