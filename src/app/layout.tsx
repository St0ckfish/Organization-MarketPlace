"use client";
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import "react-toastify/dist/ReactToastify.css";
import { TRPCReactProvider } from "~/trpc/react";
import NavBar from "../_components/navBar";
import ThemeProvider from "./providers/themeProvider";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBarMobile from "~/_components/navBarMobile";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname(); 
  const isAuthPage =
    pathname === "/sign-up" || pathname === "/sign-in" || pathname === "/forget-password" || pathname === "/reset-password" || pathname === "/change-password"; 

  useEffect(() => {
    (document.documentElement.style as any).zoom = "1";

    const handleZoom = (e: WheelEvent | KeyboardEvent) => {
      if ((e as KeyboardEvent).ctrlKey || (e as WheelEvent).ctrlKey) {
        e.preventDefault();

        const currentZoom = (document.documentElement.style as any).zoom
          ? parseFloat((document.documentElement.style as any).zoom)
          : 1;

        let newZoom = currentZoom;

        if (e.type === "wheel") {
          const wheelEvent = e as WheelEvent;
          if (wheelEvent.deltaY < 0) {
            newZoom = Math.min(currentZoom + 0.1, 1.1);
          } else {
            newZoom = Math.max(currentZoom - 0.1, 0.7);
          }
        }

        if (e.type === "keydown") {
          const keyEvent = e as KeyboardEvent;
          if (keyEvent.key === "+" || keyEvent.key === "=") {
            newZoom = Math.min(currentZoom + 0.1, 1.1);
          } else if (keyEvent.key === "-") {
            newZoom = Math.max(currentZoom - 0.1, 0.7);
          }
        }

        (document.documentElement.style as any).zoom = newZoom.toString();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    let lastTouchEnd = 0;
    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    window.addEventListener("wheel", handleZoom as any, { passive: false });
    window.addEventListener("keydown", handleZoom as any);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleZoom as any);
      window.removeEventListener("keydown", handleZoom as any);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Person</title>
        <meta name="description" content="MarketPlace Person" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, initial-scale=1.0, user-scalable=yes"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="bg-bgPrimary md:bg-bgSecondary">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {!isAuthPage && (
            <>
              <div className="hidden md:block">
                <NavBar />
              </div>
              <div className="block md:hidden">
                <NavBarMobile />
              </div>
            </>
          )}
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
