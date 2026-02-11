"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { PortfolioImage } from "@/lib/portfolioData";

interface LightboxProps {
  images: PortfolioImage[];
  currentIdx: number;
  onClose: () => void;
  onNavigate: (idx: number) => void;
}

export default function Lightbox({
  images,
  currentIdx,
  onClose,
  onNavigate,
}: LightboxProps) {
  const image = images[currentIdx];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && currentIdx < images.length - 1)
        onNavigate(currentIdx + 1);
      if (e.key === "ArrowLeft" && currentIdx > 0)
        onNavigate(currentIdx - 1);
    },
    [currentIdx, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(255,255,255,0.94)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-3xl text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Previous arrow */}
      {currentIdx > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIdx - 1);
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Previous"
        >
          &#8249;
        </button>
      )}

      {/* Next arrow */}
      {currentIdx < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIdx + 1);
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Next"
        >
          &#8250;
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-5xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="max-h-[85vh] w-auto h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
