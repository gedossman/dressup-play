import Link from "next/link";
import "./game.css";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="game-root">
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            background: "#FFF8EE",
            color: "#6B4226",
            border: "2px solid #DAA520",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          &larr; Sofia Ossman
        </Link>
      </div>
      {children}
    </div>
  );
}
