import React, { useMemo } from "react";

// --- Auto-import every image in src/assets/gallery/ at build time ---
// Supported extensions: add/remove as needed.
const modules = import.meta.glob("../../assets/gallery/*.{png,jpg,jpeg,gif,webp,avif}", {
  eager: true,
  import: "default", // get the processed URL directly
});

// Convert Vite glob object -> array of {src, alt}
const importedImages = Object.entries(modules).map(([path, url]) => {
  const filename = path.split("/").pop() || "";
  const alt = filename
    .replace(/\.[^.]+$/, "") // strip extension
    .replace(/[-_]/g, " ")   // nicer label
    .replace(/\s+/g, " ")
    .trim();
  return { src: url, alt };
});

// Simple Fisher–Yates shuffle (pure)
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Collage = () => {
  // Shuffle once per mount so gallery order feels organic but stable during a session
  const images = useMemo(() => shuffle(importedImages), []);

  return (
    <div className="bg-base-100 bg-noise">
      {/* Header */}
      <div className="w-auto md:w-xl flex flex-col gap-y-2 mt-12">
        <h1 className="fade-up-scroll text-5xl font-bold">My Gallery</h1>
        <p className="fade-up-scroll max-w-prose">
          Here’s a bunch of photos that pretty much sum me up—my work, my hobbies,
          and the stuff I enjoy doing. No fancy order, just moments that show what I’m about.
        </p>
      </div>

      {/* Masonry Gallery */}
      <section id="Gallery" className="columns-2 md:columns-3 gap-4 my-12">
        {images.length === 0 ? (
          <div className="text-center opacity-70 col-span-full">
            No images found in <code>src/assets/gallery/</code>.
          </div>
        ) : (
          images.map((img, i) => (
            <div key={i} className="fade-up-scroll mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md">
              <img
                src={img.src}
                alt={img.alt || `Gallery image ${i + 1}`}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))
        )}
      </section>

      <div className="w-full h-auto m-auto text-center">
        <p className="fade-up-scroll m-auto w-full p-2">More content to be added here.</p>
      </div>

    </div>
  );
};

export default Collage;