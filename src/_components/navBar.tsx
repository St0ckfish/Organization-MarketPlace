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
import { Text } from "./Text";
import { IoIosArrowDropdownCircle } from "react-icons/io";

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

const NavBarLink = ({ href, icon: Icon, label, url }: NavBarLinkProps) => {
  const isActive = url === href;
  return (
    <li className="mt-4">
      <Link
        href={href}
        className={`text-md group flex flex-col items-center gap-2 rounded-full font-sans font-semibold transition-all duration-200`}
      >
        <div
          className={`rounded-full px-6 py-3 transition-transform duration-200 group-hover:scale-110 lg:px-8 ${isActive ? "bg-bgThird" : "bg-bgPrimary group-hover:bg-bgThird"}`}
        >
          <Icon
            className={`text-md h-5 w-5 md:w-6 lg:h-6 ${isActive ? "text-primary2" : "text-navLinks group-hover:text-primary2"}`}
          />
        </div>

        <p
          className={`mt-1 text-sm transition-all duration-200 ${isActive ? "text-primary2" : "text-textPrimary group-hover:text-primary2"}`}
        >
          {label}
        </p>
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [search, setSearch] = useState("");

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

  const DeleteCookie = () => {
    Cookie.remove("token");
    useUserDataStore.getState().clearUserData();
  };

  const navLinks = [
    { href: "/", icon: IoShareSocialSharp, label: "Social" },
    { href: "/organization", icon: FaBuildingColumns, label: "Organization" },
    { href: "/education", icon: RiBook3Fill, label: "Education" },
    { href: "/market", icon: FaBagShopping, label: "Market" },
    { href: "/communication", icon: FaUsers, label: "Communication" },
    { href: "/meeting", icon: FaVideo, label: "Meeting" },
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
              className="mx-auto flex w-full basis-full items-center px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
                <div className="hidden sm:block"></div>
                <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center lg:flex">
                  <div className="mb-3 hidden md:block">
                    <label htmlFor="icon" className="sr-only">
                      Search
                    </label>
                    <div className="relative md:min-w-80">
                      <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                        <svg
                          className="size-4 flex-shrink-0 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </div>
                      <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        id="icon"
                        name="icon"
                        className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-2">
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={handleThemeChange}
                    className="mx-1"
                  />
                  <Link
                    href="/calendar"
                    className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                  >
                    <FaCalendarAlt size={20} />
                  </Link>
                  <Link
                    href="/notifies"
                    className="relative inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-textPrimary hover:bg-bgSecondary disabled:pointer-events-none disabled:opacity-50"
                  >
                    <IoMdNotifications size={25} />
                  </Link>

                  <div className="hs-dropdown relative flex items-center justify-center rounded-full border border-borderPrimary p-2 [--placement:bottom-right] hover:bg-bgSecondary">
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button
                          onClick={toggleProfile}
                          id="hs-dropdown-with-header"
                          type="button"
                          className="flex items-center justify-center gap-x-2 rounded-full text-sm font-semibold outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <img
                              className="inline-block h-[38px] w-[38px] rounded-full ring-2 ring-bgSecondary"
                              src="/images/productOwnder.png"
                              alt="User Avatar"
                            />
                            <div className="flex flex-col">
                              <Text>Alex Rawles</Text>
                              <Text color={"gray"}>(Leaner)</Text>
                            </div>
                            <IoIosArrowDropdownCircle size={25} />
                          </div>
                        </button>
                      </DropdownMenu.Trigger>

                      {profile && (
                        <DropdownMenu.Content
                          className={`fixed right-[20px] top-[20px] min-w-60 rounded-lg bg-bgPrimary p-2 text-textPrimary shadow-md`}
                          aria-labelledby="hs-dropdown-with-header"
                          align="end"
                          sideOffset={5}
                        >
                          <div className="rounded-t-lg bg-bgPrimary px-5 py-3">
                            <p className="text-sm text-textPrimary">
                              Signed in as
                            </p>
                            <p className="text-sm font-medium text-textPrimary">
                              {userData?.email}
                            </p>
                          </div>
                          <div className="mt-2 py-2">
                            <DropdownMenu.Item asChild>
                              <Link
                                className="flex items-center gap-x-3.5 rounded-lg border-none px-3 py-2 text-sm text-textPrimary outline-none"
                                href="/profile"
                              >
                                <svg
                                  className="h-4 w-4 flex-shrink-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                  <circle cx="9" cy="7" r="4" />
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                Profile
                              </Link>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item asChild>
                              <a
                                onClick={() => DeleteCookie()}
                                className="flex items-center gap-x-3.5 rounded-lg border-none px-3 py-2 text-sm text-textPrimary outline-none"
                                href="/login"
                              >
                                Sign out
                              </a>
                            </DropdownMenu.Item>
                          </div>
                        </DropdownMenu.Content>
                      )}
                    </DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div
            dir={"ltr"}
            id="application-sidebar"
            className={`hs-overlay hs-overlay-open:translate-x-0 fixed inset-y-0 start-0 z-[60] w-[120px] transform overflow-y-auto bg-bgPrimary drop-shadow-2xl transition-all duration-300 ease-in [--auto-close:lg] lg:bottom-0 lg:end-auto lg:block lg:w-[150px] lg:translate-x-0 lg:drop-shadow-none`}
          >
            <div className="px-8 pt-4">
              <Link href="/">
                {/* <img
                      className="mt-5 scale-[2]"
                      src="/images/opreamIcon.png"
                      alt="Logo"
                    /> */}
                <img
                  className="-translate-7 w-[150px] translate-y-3"
                  src="/images/opreamIcon.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <nav
              className="hs-accordion-group flex w-full flex-col p-6"
              data-hs-accordion-always-open
            >
              <ul className="space-y-1.5">
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

export default NavBar;
