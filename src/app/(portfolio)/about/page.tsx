import type { Metadata } from "next";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Two-column: Bio + Photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          {/* Bio */}
          <div className="space-y-6 leading-relaxed">
            <p>
              Hi! &#x270E;&#x22C6;&#x2734;&#xFE0E;&#x02DA;&#x3002;&#x22C6; My
              name is <strong>Sofia Ossman</strong>.
            </p>
            <p>
              I&apos;m an award-winning illustrator based in San Francisco,
              represented by{" "}
              <a
                href="https://illoagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:text-portfolio-accent transition-colors"
              >
                Illo Agency.
              </a>{" "}
              I create playful, vibrant illustrations for babies and toddlers,
              focusing on cute characters and busy scenes, where I bring joy to
              my work using color, texture, and pattern.
            </p>
            <p>
              With a background in Art History and Arts Management, my artistic
              skills are complemented by formal education. I work in both vector
              and raster techniques, but every project begins with sketches on
              paper, helping me explore ideas before moving to digital.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-portfolio-muted mb-2">
              Contact
            </h2>
            <a
              href="mailto:hello@sofiaossman.com"
              className="hover:text-portfolio-accent transition-colors"
            >
              hello@sofiaossman.com
            </a>
            <SocialLinks className="mt-4" />
          </div>

          {/* Selected Clients */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-portfolio-muted mb-2">
              Selected Clients
            </h2>
            <p>
              Mudpuppy, Cottage Door Press, Edizione del Borgo, Image Group
              Holland, Child&apos;s Play
            </p>
          </div>

          {/* Awards */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-portfolio-muted mb-2">
              Awards
            </h2>
            <ul className="space-y-1">
              <li>dPICTUS longlist 2026</li>
              <li>
                iJungle Graphic Design Awards &ndash; Editorial Merit 2025
              </li>
              <li>
                Hiii Illustration finalist in Children&apos;s Picture Book 2025
              </li>
              <li>
                3x3 Honorable Mention in Children&apos;s Illustration 2025
              </li>
            </ul>
          </div>

          {/* Featured In */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-portfolio-muted mb-2">
              Featured In
            </h2>
            <p>
              Adobe, Behance, 3x3mag, Stanford Arts
            </p>
          </div>
        </div>

        {/* Photo */}
        <div>
          <Image
            src="/images/sofia-photo.png"
            alt="Sofia Ossman holding her illustrated books"
            width={1121}
            height={1126}
            className="w-full h-auto rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
