import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create public directory if it doesn't exist
const publicDir = join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Sample product data structure for sitemap generation
// This avoids the import error with the actual products module
const products = [
  { id: 1, name: "Bipolar Forceps" },
  { id: 2, name: "Surgical Scissors" },
  { id: 3, name: "Needle Holders" },
  { id: 4, name: "Scalpel Handles" },
  { id: 5, name: "Retractors" },
  { id: 6, name: "Hemostats" },
  { id: 7, name: "Suction Tubes" },
  { id: 8, name: "Surgical Clamps" },
  { id: 9, name: "Bone Curettes" },
  { id: 10, name: "Surgical Probes" },
];

// Create a sitemap stream
const sitemap = new SitemapStream({
  hostname: "https://dharmrajsurgicaltechnologies.com/", // Replace with your actual domain
});

// Add static pages
sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
sitemap.write({ url: "/products", changefreq: "daily", priority: 0.9 });
sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.7 });

// Add individual product pages
products.forEach((product) => {
  sitemap.write({
    url: `/product/${product.id}`,
    changefreq: "weekly",
    priority: 0.8,
  });
});

// End the stream
sitemap.end();

// Generate the XML and save to file
streamToPromise(sitemap)
  .then((data) => {
    createWriteStream(join(publicDir, "sitemap.xml")).write(data.toString());
    console.log("Sitemap generated successfully!");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });
