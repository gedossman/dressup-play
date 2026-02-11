import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="top" />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
