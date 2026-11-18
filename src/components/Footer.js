
export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/roniblaq",
    },
    {
      name: "X",
      url: "https://www.twitter.com/RoniBlaq",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ronnydigital_hub",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@ronnydigital_hub",
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">

        <a href="#top" className="text-2xl font-bold">
          Ronnydigital<span className="text-blue-400"> Hub.</span>
        </a>

        <p className="text-gray-400 mt-4 max-w-lg mx-auto leading-7">
          Building modern websites, web applications and digital
          experiences that help brands move forward.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Ronnydigital Hub on ${social.name}`}
              className="text-gray-400 hover:text-blue-400 transition"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 mt-10 pt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ronnydigital Hub.
            All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Founded and developed by Ronny.
          </p>
        </div>

      </div>
    </footer>
  );
}
