/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Spinner from "./Spinner";
import { Switch } from "~/components/ui/switch";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Cookie from "js-cookie";
import { useBooleanValue, useUserDataStore } from "~/APIs/store";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { RiBook3Fill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { Text } from "./Text";

const useWindowDimensions = () => {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(
    isClient
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: undefined, height: undefined },
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return windowSize;
};

interface NavBarLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
}

const NavBarLink = ({
  href,
  icon: Icon,
  label,
  url,
}: NavBarLinkProps) => {
  const isActive = url === href;
  return (
    <li className={`${isActive ? "border-primary text-primary" : ""} text-navLinks w-full flex justify-center items-center h-[85px] hover:bg-bgThird cursor-pointer hover:text-primary`}>
      <Link
        className={`text-md group mt-4 flex flex-col w-[40px] items-center gap-x-3.5 rounded-full border-primary font-sans font-semibold`}
        href={href}
      >
        <Icon
          className="h-7 w-7"
        />
        <p className={`${isActive ? "text-primary" : ""} text-sm mt-1`}>{label}</p>
      </Link>
    </li>
  );
};

const NavBarMobile = () => {
  const [profile, setProfile] = useState(false);
  const toggleProfile = () => {
    setProfile(!profile);
  };
  const [isClient, setIsClient] = useState(false);
  const userData = useUserDataStore.getState().userData;
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { theme, setTheme } = useTheme();
  const url = usePathname();

  const handleThemeChange = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const navLinks = [
    { href: "/organization", icon: FaBuildingColumns, label: "Organization" },
    { href: "/education", icon: RiBook3Fill, label: "Education" },
    { href: "/", icon: IoShareSocialSharp, label: "Social" },
    { href: "/market", icon: FaBagShopping, label: "Market" },
    { href: "/more", icon: IoIosMore, label: "More" },
  ];

  if (!isClient)
    return (
      <div className="absolute left-0 top-0 z-[9999] flex h-screen w-full items-center justify-center bg-bgPrimary">
        <Spinner />
      </div>
    );

  return (
    <>
      <header>
        <div>
          <header
            className={`sticky inset-x-0 top-0 z-[48] flex w-full flex-wrap bg-bgPrimary py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4 lg:ps-64`}
          >
            <nav
              className="mx-auto flex w-full items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex">
                <div className="md:hidden">
                  <button
                    type="button"
                    className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <IoSearch size={25} />
                  </button>
                </div>
                <Link
                  href="/calendar"
                  className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                >
                  <IoCalendarNumberOutline size={25} />
                </Link>
              </div>
              <div className="me-5  lg:me-0 lg:hidden">
                <Link
                  className="inline-block flex-none rounded-xl text-xl font-semibold focus:opacity-80 focus:outline-none"
                  href="/"
                  aria-label="Preline"
                >
                  <img src="/images/opreamIcon.png" alt="#" />
                </Link>
              </div>
              <div>
                <div className="ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
                  <div className="hidden sm:block"></div>

                  <div className="flex flex-row items-center justify-end gap-2">
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={handleThemeChange}
                      className="mx-1"
                    />

                    <Link
                      href="/notifies"
                      className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                    >
                      <IoNotificationsOutline size={25} />
                    </Link>
                    <Link
                      href="/communication"
                      className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                    >
                      <IoChatbubblesOutline size={25} />
                    </Link>
                    <Link
                      href="/communication"
                      className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                    >
                      <BsCameraVideo size={25} />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div
            dir={"ltr"}
            id="application-sidebar"
            className={`hs-overlay hs-overlay-open:translate-x-0 fixed inset-x-0 bottom-0 z-[60] h-[90px] transform overflow-y-auto border-t border-borderPrimary bg-bgPrimary drop-shadow-md shadow-[0_-4px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in [--auto-close:lg] lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 lg:drop-shadow-none`}
            >
            <nav
              className={`hs-accordion-group flex w-full`}
              // data-hs-accordion-always-open
            >
              <ul className="flex w-full justify-evenly">
                {navLinks.map((link) => (
                  <NavBarLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                    url={url}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBarMobile;
