import React, { useMemo } from "react";
import GalleryAnimated from '../animations/GalleryAnimation';

// --- Auto-import media from src/assets/gallery/ ---
const modules = import.meta.glob("../../assets/gallery/*.{png,jpg,jpeg,gif,webp}", {
  eager: true,
  import: "default",
});

// Media processing with robust error handling
const importedMedia = Object.entries(modules)
  .map(([path, url]) => {
    try {
      if (!url) return null;
      
      const filename = path.split("/").pop() || "untitled";
      
      const alt = filename
        .replace(/\.[^.]+$/, "") // Remove extension
        .replace(/[-_]+/g, " ")  // Replace underscores/dashes with spaces
        .replace(/\s{2,}/g, " ") // Collapse multiple spaces
        .trim() || `Gallery item`;
      
      return { 
        src: url, 
        alt,
      };
    } catch (e) {
      console.error(`Error processing file: ${path}`, e);
      return null;
    }
  })
  .filter(Boolean); // Remove any null entries

// Optimized Fisher-Yates shuffle
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Collage = () => {
  const mediaItems = useMemo(() => shuffle(importedMedia), []);

  return (
    <div className="hero">
      <div className="hero-content flex flex-col text-left">
        {/* Header */}
        <div className="w-full px-8 flex flex-row align-middle items-center justify-center gap-x-8 gap-y-2">
          <div className="hidden md:flex my-auto">
            <GalleryAnimated />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center">
            <h1 className="fade-up-scroll text-5xl font-bold flex flex-row gap-x-2">
              <div className="flex md:hidden my-auto">
                <GalleryAnimated />
              </div>
              My Gallery
            </h1>
            <p className="fade-up-scroll max-w-prose">
              Here's a collection of photos that capture my work, hobbies, 
              and passions. No particular order, just moments that represent what I enjoy.
            </p>
          </div>
        </div>

        {/* Masonry Gallery */}
        <section className="columns-2 md:columns-3 gap-4 my-12 px-6">
          {mediaItems.length === 0 ? (
            <div className="text-center opacity-70 col-span-full">
              No media found in <code>src/assets/gallery/</code>.
            </div>
          ) : (
            mediaItems.map((item, i) => (
              <div 
                key={`${item.alt}-${i}`} 
                className="fade-up-scroll mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover rounded-lg bg-gray-100"
                  loading="lazy"
                  width="100%"
                  height="auto"
                />
              </div>
            ))
          )}
        </section>

        <div className="w-full h-auto m-auto text-center">
          <h1 className="fade-up-scroll m-auto w-full">More content coming soon!</h1>
        </div>
      </div>
    </div>
  );
};

export default Collage;