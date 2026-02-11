import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Portrait Header */}
      <div className="w-full mb-12">
        <Image
          src="/images/sofia-portrait.png"
          alt="Sofia Ossman"
          width={2127}
          height={224}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Bio */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Hi! &#x270E;&#x22C6;&#x2734;&#xFE0E;&#x02DA;&#x3002;&#x22C6; My
          name is Sofia Ossman. I&apos;m an award-winning illustrator based in
          San Francisco. I specialize in creating vibrant illustrations for young
          children, with an emphasis on cute characters and detailed scenes.
        </p>
        <p>
          With a background in Art History and Arts Management, I work across
          vector and raster techniques, starting projects with traditional paper
          sketches before transitioning to digital work.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
          Contact
        </h2>
        <a
          href="mailto:hello@sofiaossman.com"
          className="text-gray-700 hover:text-black transition-colors"
        >
          hello@sofiaossman.com
        </a>
      </div>

      {/* Selected Clients */}
      <div className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
          Selected Clients
        </h2>
        <p className="text-gray-700">
          Mudpuppy, Cottage Door Press, Edizione del Borgo, Image Group Holland,
          Child&apos;s Play
        </p>
      </div>

      {/* Awards */}
      <div className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
          Awards
        </h2>
        <ul className="text-gray-700 space-y-1">
          <li>dPICTUS longlist 2026</li>
          <li>iJungle Graphic Design Awards &ndash; Editorial Merit 2025</li>
          <li>
            Hiii Illustration finalist in Children&apos;s Picture Book 2025
          </li>
          <li>3x3 Honorable Mention in Children&apos;s Illustration 2025</li>
        </ul>
      </div>

      {/* Featured In */}
      <div className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
          Featured In
        </h2>
        <p className="text-gray-700">Adobe, Behance, 3x3mag, Stanford Arts</p>
      </div>
    </div>
  );
}
