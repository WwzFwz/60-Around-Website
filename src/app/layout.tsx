import "~/styles/globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientLayout from './ClientLayout'; // Import the ClientLayout component

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "go-around",
  description: "Information website for places around ITB",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="h-screen max-h-screen overflow-y-auto">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
