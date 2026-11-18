
import Image from "next/image";

const certificates = [
  {
    image: "/images/dsa.JPG",
    title: "Digital Skills Certificate",
  },
  {
    image: "/images/futureclan.JPG",
    title: "Future Clan Certificate",
  },
  {
    image: "/images/lita.JPG",
    title: "Ladies in Tech Certificate",
  },
];

export default function Certificate() {
  return (
    <section
      id="certificates"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-widest text-sm font-semibold mb-3">
            Learning & Growth
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & Achievements
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of learning experiences and certifications
            that represent my commitment to continuous development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition"
            >
              <div className="relative h-64 w-full bg-slate-800">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-3 group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
