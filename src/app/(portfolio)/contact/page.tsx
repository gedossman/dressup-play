import type { Metadata } from "next";
import { SocialLinks } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto px-6 py-24 text-center">
      <h1 className="text-2xl font-light text-gray-800 mb-8">Get in Touch</h1>
      <a
        href="mailto:hello@sofiaossman.com"
        className="text-lg text-gray-700 hover:text-black transition-colors underline underline-offset-4"
      >
        hello@sofiaossman.com
      </a>
      <div className="mt-10 flex justify-center">
        <SocialLinks className="gap-5" />
      </div>
    </div>
  );
}
