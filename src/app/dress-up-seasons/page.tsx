import type { Metadata } from "next";
import Game from "@/components/Game";

export const metadata: Metadata = {
  title: "Woodland Dress Up - Digital Paper Dolls",
  description:
    "A charming digital dress-up game with woodland animal characters. Mix and match hats, tops, bottoms, and boots!",
};

export default function DressUpPage() {
  return <Game />;
}
