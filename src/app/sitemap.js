
export default function sitemap() {
  return [
    {
      url: "https://ronnydigitalhub.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ronnydigitalhub.vercel.app/website-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ronnydigitalhub.vercel.app/web-applications",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
