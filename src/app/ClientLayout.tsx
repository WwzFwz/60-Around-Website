"use client"; // Mark this as a client-side component

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from './components/NavBar'; // Main navbar for general use
import CategoriesNavbar from "./components/CategoriesNavbar"; // Navbar for categories
import { usePathname } from 'next/navigation'; // To get the current route

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  return (
    <>
      {pathname !== "/game" && (
        pathname.startsWith("/explore/") ? (
          <CategoriesNavbar />
        ) : (
          <Navbar />
        )
      )}

      <TRPCReactProvider>{children}</TRPCReactProvider>
    </>
  );
}

