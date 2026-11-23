import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Website Development Services | Ronnydigital Hub",
  description:
    "Ronnydigital Hub builds modern, responsive and user-friendly websites for businesses, organisations, entrepreneurs and individuals in Nigeria and beyond.",
  alternates: {
    canonical: "/website-development",
  },
  openGraph: {
    title: "Website Development Services | Ronnydigital Hub",
    description:
      "Get a professional website designed to showcase your brand, connect with your audience and grow your online presence.",
    url: "https://ronnydigitalhub.vercel.app/website-development",
    siteName: "Ronnydigital Hub",
    type: "website",
  },
};

export default function WebsiteDevelopment() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden px-6 pt-32 pb-20">

        {/* Background Effects */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">

          {/* Text Content */}
          <div>
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-5">
              Website Development Services
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Business Deserves More Than Just an{" "}
              <span className="text-blue-400">
                Online Presence.
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-7 max-w-xl">
              We design and develop modern, responsive and user-friendly
              websites that help businesses and organisations showcase
              their services, connect with their audience and grow online.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-lg font-semibold transition"
              >
                Start a Project
              </Link>

              <Link
                href="/#projects"
                className="border border-white/20 hover:border-blue-400 px-7 py-4 rounded-lg font-semibold transition"
              >
                Explore Our Work
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              Built for businesses, organisations and individuals.
            </p>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-4 shadow-2xl">

              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-400 rounded-full" />

                <div className="ml-3 bg-slate-800 rounded-md px-4 py-2 text-xs text-gray-400 flex-1">
                  yourbusiness.com
                </div>
              </div>

              <div className="py-10 px-5">
                <div className="h-3 w-24 bg-blue-500/70 rounded mb-6" />

                <div className="h-7 w-4/5 bg-white/90 rounded mb-3" />
                <div className="h-7 w-3/5 bg-white/90 rounded mb-6" />

                <div className="h-3 w-full bg-slate-700 rounded mb-3" />
                <div className="h-3 w-5/6 bg-slate-700 rounded mb-8" />

                <div className="h-10 w-36 bg-blue-600 rounded-lg" />

                <div className="grid grid-cols-3 gap-3 mt-12">
                  <div className="h-24 bg-blue-500/10 border border-blue-400/20 rounded-lg" />
                  <div className="h-24 bg-purple-500/10 border border-purple-400/20 rounded-lg" />
                  <div className="h-24 bg-blue-500/10 border border-blue-400/20 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 bg-slate-900 border border-white/10 rounded-xl px-5 py-4 shadow-xl">
              <p className="text-sm text-gray-400">Designed for</p>
              <p className="text-white font-semibold">
                People & Businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* Introduction Text */}
    <div>
      <span className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
        More Than Just a Website
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-4">
        Build a Stronger Digital Presence for Your Business.
      </h2>

      <p className="text-gray-400 leading-8 mt-6">
        Your website is often one of the first places potential customers
        visit when they want to learn about your business. It should
        communicate what you do, showcase your offerings and make it easy
        for people to connect with you.
      </p>

      <p className="text-gray-400 leading-8 mt-4">
        At Ronnydigital Hub, we develop websites that combine thoughtful
        design, useful functionality and responsive layouts. Whether
        you&apos;re launching a new business, growing an organisation or
        building your personal brand, we help bring your ideas online.
      </p>

      <Link
        href="/#contact"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mt-7 transition"
      >
        Let&apos;s discuss your project
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>

    {/* Key Benefits */}
    <div className="grid gap-5">

      <div className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition">
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4">
          ◈
        </div>

        <h3 className="text-xl font-semibold">
          Professional Online Presence
        </h3>

        <p className="text-gray-400 leading-7 mt-2">
          Present your business, services and brand with a website
          designed to build credibility and make a strong impression.
        </p>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition">
        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-4">
          ◎
        </div>

        <h3 className="text-xl font-semibold">
          Better Customer Connection
        </h3>

        <p className="text-gray-400 leading-7 mt-2">
          Give visitors a convenient way to discover your offerings,
          explore your business and get in touch.
        </p>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition">
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-4">
          ↗
        </div>

        <h3 className="text-xl font-semibold">
          Room to Grow
        </h3>

        <p className="text-gray-400 leading-7 mt-2">
          Build a digital platform that can evolve alongside your
          business, services and changing goals.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Types of Websites Section */}
<section className="px-6 py-24 bg-slate-950">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="max-w-2xl mx-auto text-center mb-16">
      <span className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
        Our Website Solutions
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold mt-4">
        Websites Built Around Your Needs
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        Every business and organisation has different goals.
        We develop different types of websites to help you
        establish your online presence and serve your audience.
      </p>
    </div>

    {/* Website Categories */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Business Websites */}
      <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-blue-500/60 hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-3xl mb-6">
          ◈
        </div>

        <h3 className="text-xl font-bold mb-3">
          Business Websites
        </h3>

        <p className="text-gray-400 leading-7">
          Give your business a professional online presence.
          We build websites that showcase your products, services,
          business information and contact details.
        </p>
      </div>

      {/* Portfolio Websites */}
      <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-3xl mb-6">
          ✦
        </div>

        <h3 className="text-xl font-bold mb-3">
          Portfolio Websites
        </h3>

        <p className="text-gray-400 leading-7">
          Showcase your skills, experience, projects and achievements
          with a portfolio website designed to help you stand out.
        </p>
      </div>

      {/* Corporate Websites */}
      <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-blue-500/60 hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-3xl mb-6">
          ▦
        </div>

        <h3 className="text-xl font-bold mb-3">
          Corporate Websites
        </h3>

        <p className="text-gray-400 leading-7">
          Establish a strong corporate identity with structured
          websites that communicate your organisation&apos;s values,
          services and activities.
        </p>
      </div>

      {/* E-commerce Websites */}
      <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-3xl mb-6">
          🛍
        </div>

        <h3 className="text-xl font-bold mb-3">
          E-commerce Websites
        </h3>

        <p className="text-gray-400 leading-7">
          Take your products online with an e-commerce website
          where customers can browse products, place orders
          and shop conveniently.
        </p>
      </div>

      {/* Booking Websites */}
      <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-blue-500/60 hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-3xl mb-6">
          ◷
        </div>

        <h3 className="text-xl font-bold mb-3">
          Booking & Appointment Websites
        </h3>

        <p className="text-gray-400 leading-7">
          Make scheduling easier with websites that allow
          customers to explore available services and submit
          booking or appointment requests.
        </p>
      </div>

      {/* NGO Websites */}
      <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-3xl mb-6">
          ♡
        </div>

        <h3 className="text-xl font-bold mb-3">
          NGO & Organisational Websites
        </h3>

        <p className="text-gray-400 leading-7">
          Help your organisation communicate its mission,
          showcase its projects, share updates and connect
          with supporters and communities.
        </p>
      </div>

      {/* Educational Websites */}
      <div className="group bg-slate-900 border border-white/10 rounded-2xl p-7 hover:border-blue-500/60 hover:-translate-y-2 transition duration-300 sm:col-span-2 lg:col-span-3 lg:max-w-[calc(33.333%-1rem)] lg:mx-auto lg:w-full">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-3xl mb-6">
          ✎
        </div>

        <h3 className="text-xl font-bold mb-3">
          Educational Websites
        </h3>

        <p className="text-gray-400 leading-7">
          Give schools, learning centres and educational organisations
          a platform to share information, showcase programmes
          and connect with students and parents.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Why Choose Us Section */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="max-w-2xl mb-16">
      <span className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
        Why Work With Us
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold mt-4">
        More Than Just Code. We Build With Purpose.
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        A good website should look great, work smoothly and
        make it easier for people to interact with your brand.
        That&apos;s the approach we bring to every project.
      </p>
    </div>

    {/* Features */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="flex gap-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl">
          ◉
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Responsive Development
          </h3>

          <p className="text-gray-400 leading-7 mt-2">
            Websites designed to adapt to different screen sizes,
            providing a consistent experience across phones,
            tablets and desktops.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl">
          ✦
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Thoughtful User Experience
          </h3>

          <p className="text-gray-400 leading-7 mt-2">
            Clear layouts and intuitive navigation that help
            visitors find information and interact with your website
            more easily.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl">
          ⚙
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Functional Solutions
          </h3>

          <p className="text-gray-400 leading-7 mt-2">
            We focus on useful features and functionality that
            support your website&apos;s purpose and business needs.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl">
          ◈
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Modern Technologies
          </h3>

          <p className="text-gray-400 leading-7 mt-2">
            We work with modern development technologies to
            create maintainable websites and reliable digital
            experiences.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl">
          ◷
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Performance & Accessibility
          </h3>

          <p className="text-gray-400 leading-7 mt-2">
            We consider loading performance, accessibility
            and usability when developing your website.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl">
          ♡
        </div>

        <div>
          <h3 className="text-lg font-bold">
            Project-Focused Approach
          </h3>

          <p className="text-gray-400 leading-7 mt-2">
            We consider your goals, audience and requirements
            so the website we build reflects what you actually need.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

{/* Our Development Process */}
<section className="px-6 py-24 bg-slate-950">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="max-w-2xl mx-auto text-center mb-16">
      <span className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
        How We Work
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold mt-4">
        From Your Idea to a Website That Works.
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        Every successful website starts with a clear understanding
        of what it needs to achieve. Here&apos;s how we approach your
        project at Ronnydigital Hub.
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Step 1 */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-7">
        <span className="text-5xl font-bold text-blue-500/30">
          01
        </span>

        <h3 className="text-xl font-bold mt-5">
          Discovery & Consultation
        </h3>

        <p className="text-gray-400 leading-7 mt-3">
          We discuss your business, project goals, target audience
          and the features you need to understand what your website
          should accomplish.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-7">
        <span className="text-5xl font-bold text-purple-500/30">
          02
        </span>

        <h3 className="text-xl font-bold mt-5">
          Planning & Structure
        </h3>

        <p className="text-gray-400 leading-7 mt-3">
          We organise the website&apos;s content, pages, features
          and overall structure to create a clear development
          direction.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-7">
        <span className="text-5xl font-bold text-blue-500/30">
          03
        </span>

        <h3 className="text-xl font-bold mt-5">
          Design & User Experience
        </h3>

        <p className="text-gray-400 leading-7 mt-3">
          We work on the website&apos;s visual presentation,
          layout and navigation to create an experience
          that suits your brand and audience.
        </p>
      </div>

      {/* Step 4 */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-7">
        <span className="text-5xl font-bold text-purple-500/30">
          04
        </span>

        <h3 className="text-xl font-bold mt-5">
          Development
        </h3>

        <p className="text-gray-400 leading-7 mt-3">
          We bring the approved design to life, implementing
          the required features and functionality while making
          the website responsive.
        </p>
      </div>

      {/* Step 5 */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-7">
        <span className="text-5xl font-bold text-blue-500/30">
          05
        </span>

        <h3 className="text-xl font-bold mt-5">
          Testing & Refinement
        </h3>

        <p className="text-gray-400 leading-7 mt-3">
          We check the website&apos;s functionality, responsiveness,
          navigation and overall performance, making necessary
          adjustments before launch.
        </p>
      </div>

      {/* Step 6 */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-7">
        <span className="text-5xl font-bold text-purple-500/30">
          06
        </span>

        <h3 className="text-xl font-bold mt-5">
          Launch & Delivery
        </h3>

        <p className="text-gray-400 leading-7 mt-3">
          Once everything is ready and approved, we prepare
          your website for launch and hand over the completed
          project.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Featured Projects Section */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="max-w-2xl mx-auto text-center mb-16">
      <span className="text-blue-400 uppercase tracking-widest text-sm font-semibold">
        Our Work
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold mt-4">
        Projects That Bring Ideas to Life.
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        Explore some of the websites we&apos;ve developed for different
        purposes. Each project reflects our approach to creating
        functional and engaging digital experiences.
      </p>
    </div>

    {/* Project Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Oxygen Foundation */}
      <article className="group bg-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition duration-300">

        <div className="relative h-56 overflow-hidden">
          <Image
            src="/images/oxygen.jpeg"
            alt="Oxygen Foundation website developed by Ronnydigital Hub"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-6">
          <span className="text-blue-400 text-sm font-medium">
            Organisational Website
          </span>

          <h3 className="text-xl font-bold mt-3">
            Oxygen Foundation
          </h3>

          <p className="text-gray-400 leading-7 mt-3">
            An organisational website designed to present the
            foundation, communicate its work and provide visitors
            with information about its activities.
          </p>

          <a
            href="https://oxygen-foundation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 font-semibold mt-6 hover:text-blue-300 transition"
          >
            Visit Live Website <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>

      {/* PenPixel Studio */}
      <article className="group bg-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition duration-300">

        <div className="relative h-56 overflow-hidden">
          <Image
            src="/images/screeenshot.png"
            alt="PenPixel Studio website developed by Ronnydigital Hub"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-6">
          <span className="text-purple-400 text-sm font-medium">
            Creative Digital Platform
          </span>

          <h3 className="text-xl font-bold mt-3">
            PenPixel Studio
          </h3>

          <p className="text-gray-400 leading-7 mt-3">
            A creative platform developed to establish a digital
            presence and present its services and offerings.
          </p>

          <a
            href="https://penpixel-studio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 font-semibold mt-6 hover:text-blue-300 transition"
          >
            Visit Live Website <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>

      {/* Iconic Travels */}
      <article className="group bg-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition duration-300">

        <div className="relative h-56 overflow-hidden">
          <Image
            src="/images/iconic.jpeg"
            alt="Iconic Travels website developed by Ronnydigital Hub"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-6">
          <span className="text-blue-400 text-sm font-medium">
            Travel Website
          </span>

          <h3 className="text-xl font-bold mt-3">
            Iconic Travels
          </h3>

          <p className="text-gray-400 leading-7 mt-3">
            A travel-focused website created to present travel
            information and provide visitors with an engaging
            online experience.
          </p>

          <a
            href="https://roniblaq.github.io/IconicTravels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 font-semibold mt-6 hover:text-blue-300 transition"
          >
            Visit Live Website <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>

    </div>

    {/* View All Projects */}
    <div className="text-center mt-14">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-3 border border-white/20 hover:border-blue-400 hover:bg-blue-500/10 px-8 py-4 rounded-lg font-semibold transition"
      >
        View All Projects
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>

  </div>
</section>

{/* FAQ Section */}
<section className="px-6 py-24 bg-slate-900/60">
  <div className="max-w-4xl mx-auto">

    <div className="text-center mb-14">
      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
        Frequently Asked Questions
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Got Questions? We&apos;ve Got Answers.
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto">
        Here are answers to some common questions about our website
        development services.
      </p>
    </div>

    <div className="space-y-5">

      {[
        {
          question: "How much does it cost to build a website?",
          answer:
            "The cost depends on the type of website, its features, design requirements and overall complexity. Get in touch with us to discuss your project and receive a quote based on your needs.",
        },
        {
          question: "How long does it take to develop a website?",
          answer:
            "The development timeline depends on the size and complexity of the project, the features required and how quickly content and feedback are provided.",
        },
        {
          question: "Will my website work on mobile phones?",
          answer:
            "Yes. We build responsive websites designed to work across smartphones, tablets, laptops and desktop screens.",
        },
        {
          question: "Can you redesign my existing website?",
          answer:
            "Absolutely. We can help improve your existing website's appearance, user experience, responsiveness and functionality.",
        },
        {
          question: "Do you provide domain and hosting services?",
          answer:
            "We can guide you through choosing and setting up a domain name and suitable hosting for your website. The requirements depend on your project.",
        },
        {
          question: "How do I get started?",
          answer:
            "Simply contact us and tell us about your idea, business or organisation. We&apos;ll discuss your requirements and the best way to bring your project to life.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-slate-950 border border-slate-800"
        >
          <h3 className="text-lg font-semibold text-white mb-3">
            {faq.question}
          </h3>

          <p className="text-slate-400 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

{/* Final CTA Section */}
<section className="px-6 py-24">
  <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20 p-10 md:p-16 text-center">

    <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -top-32 -left-20"></div>

    <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -bottom-32 -right-20"></div>

    <div className="relative z-10">

      <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
        Let&apos;s Build Something Great
      </p>

      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
        Ready to Build Your
        <span className="block text-blue-400">
          Online Presence?
        </span>
      </h2>

      <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-9">
        Whether you&apos;re starting a new business, growing an existing
        organisation or bringing a fresh idea to life, we&apos;re ready to
        help you build a website that works for you.
      </p>

      <Link
        href="/#contact"
        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition duration-300 shadow-lg shadow-blue-600/20"
      >
        Let&apos;s Discuss Your Project
        <span aria-hidden="true">→</span>
      </Link>

    </div>
  </div>
</section>
  </main>
  );
}