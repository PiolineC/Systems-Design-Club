import './globals.css';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'The Quorum - Systems Design Book Club',
  description: 'A book club for systems design enthusiasts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Nav />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

