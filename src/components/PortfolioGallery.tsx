"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioImages } from "@/lib/portfolioData";
import Lightbox from "./Lightbox";

export default function PortfolioGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {portfolioImages.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setSelectedIdx(idx)}
            className="w-full block overflow-hidden cursor-pointer break-inside-avoid"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto hover:opacity-90 transition-opacity"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>
      {selectedIdx !== null && (
        <Lightbox
          images={portfolioImages}
          currentIdx={selectedIdx}
          onClose={() => setSelectedIdx(null)}
          onNavigate={setSelectedIdx}
        />
      )}
    </>
  );
}
