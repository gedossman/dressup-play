"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  portfolioImages,
  PORTFOLIO_TABS,
  getPortfolioYears,
  type PortfolioCategory,
} from "@/lib/portfolioData";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Lightbox from "./Lightbox";

const TARGET_ROW_HEIGHT = 250;
const GAP = 8;

type FilterMode = "category" | "year";

export default function PortfolioGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [filterMode, setFilterMode] = useState<FilterMode>("category");

  const years = useMemo(() => getPortfolioYears(), []);

  const filteredImages = useMemo(() => {
    if (filterMode === "year" && activeYear) {
      return portfolioImages.filter((img) => img.year === activeYear);
    }
    if (filterMode === "category" && activeCategory !== "all") {
      return portfolioImages.filter((img) => img.category === activeCategory);
    }
    return portfolioImages;
  }, [filterMode, activeCategory, activeYear]);

  function handleCategoryChange(value: string) {
    setActiveCategory(value as PortfolioCategory);
    setActiveYear(null);
    setFilterMode("category");
    setSelectedIdx(null);
  }

  function handleYearChange(year: number) {
    if (activeYear === year) {
      // Toggle off — back to all
      setActiveYear(null);
      setFilterMode("category");
      setActiveCategory("all");
    } else {
      setActiveYear(year);
      setFilterMode("year");
      setActiveCategory("all");
    }
    setSelectedIdx(null);
  }

  return (
    <div>
      {/* Category tabs */}
      <Tabs
        value={filterMode === "category" ? activeCategory : "all"}
        onValueChange={handleCategoryChange}
      >
        <TabsList variant="line" className="mb-6 gap-6 border-b border-portfolio-border pb-px">
          {PORTFOLIO_TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none border-0 bg-transparent px-0 py-2 text-xs uppercase tracking-widest text-portfolio-muted shadow-none hover:text-portfolio-heading data-[state=active]:bg-transparent data-[state=active]:text-portfolio-accent data-[state=active]:shadow-none data-[state=active]:after:bg-portfolio-accent"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Gallery with year sidebar */}
      <div className="flex gap-6">
        {/* Year timeline — left sidebar */}
        <nav className="hidden md:flex flex-col gap-1 pt-2 shrink-0">
          {years.map((year) => {
            const isActive = filterMode === "year" && activeYear === year;
            return (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`text-xs tabular-nums text-right py-1 pr-3 border-r-2 transition-colors cursor-pointer ${
                  isActive
                    ? "border-portfolio-accent text-portfolio-accent font-semibold"
                    : "border-transparent text-portfolio-faint hover:text-portfolio-muted hover:border-portfolio-faint"
                }`}
              >
                {year}
              </button>
            );
          })}
        </nav>

        {/* Image grid */}
        <div className="flex-1 min-w-0">
          {filteredImages.length === 0 ? (
            <p className="text-center text-portfolio-muted py-16">
              No images in this category yet.
            </p>
          ) : (
            <div className="flex flex-wrap" style={{ gap: GAP }}>
              {filteredImages.map((img, idx) => {
                const aspect = Math.max(img.width / img.height, 0.7);
                return (
                  <div
                    key={img.id}
                    className="relative overflow-hidden animate-fadeIn"
                    style={{
                      flexGrow: aspect,
                      flexBasis: `${TARGET_ROW_HEIGHT * aspect}px`,
                    }}
                  >
                    <button
                      onClick={() => setSelectedIdx(idx)}
                      className="block w-full cursor-pointer"
                      style={{
                        paddingBottom: `${100 / aspect}%`,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:opacity-90 transition-opacity"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        {...(idx < 6 ? { priority: true } : {})}
                      />
                    </button>
                  </div>
                );
              })}
              {/* Spacer absorbs remaining space in the last row */}
              <div aria-hidden="true" style={{ flexGrow: 999, maxHeight: 0 }} />
            </div>
          )}
        </div>
      </div>

      {selectedIdx !== null && (
        <Lightbox
          images={filteredImages}
          currentIdx={selectedIdx}
          onClose={() => setSelectedIdx(null)}
          onNavigate={setSelectedIdx}
        />
      )}
    </div>
  );
}
