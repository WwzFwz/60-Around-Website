import Navbar from "../components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-screen w-screen overflow-hidden">
      <body className="h-screen w-screen overflow-hidden bg-cover bg-center">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
