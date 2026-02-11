export default function Footer() {
  return (
    <footer className="w-full border-t border-portfolio-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-portfolio-muted">
          &copy; Sofia Ossman 2024. All rights reserved.
        </p>
        <a
          href="#top"
          className="text-sm text-portfolio-muted hover:text-portfolio-accent transition-colors"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}
