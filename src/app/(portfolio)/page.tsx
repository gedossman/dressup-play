import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PortfolioGallery />
    </div>
  );
}
