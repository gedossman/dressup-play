import type { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PortfolioGallery />
    </div>
  );
}
