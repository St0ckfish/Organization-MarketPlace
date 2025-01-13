/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Switch } from "~/components/ui/switch";
import { RiBook3Fill } from "react-icons/ri";
import { FaBagShopping } from "react-icons/fa6";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";

interface NavBarLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
}

const NavBarLink = ({ href, icon: Icon, label, url }: NavBarLinkProps) => {
  const isActive = url === href;
  return (
    <li
      className={`${isActive ? "border-primary text-primary" : ""} flex h-[85px] w-full cursor-pointer items-center justify-center text-navLinks hover:bg-bgThird hover:text-primary`}
    >
      <Link
        className={`text-md group mt-4 flex w-[40px] flex-col items-center gap-x-3.5 rounded-full border-primary font-sans font-semibold`}
        href={href}
      >
        <Icon className="h-6 w-6" />
        <p className={`${isActive ? "text-primary" : ""} mt-1 text-xs`}>
          {label}
        </p>
      </Link>
    </li>
  );
};

const NavBarMobile = () => {
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
              <div className="me-5 lg:me-0 lg:hidden">
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
                      href="/meeting"
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
            className={`hs-overlay hs-overlay-open:translate-x-0 fixed inset-x-0 bottom-0 z-[60] h-[90px] transform overflow-y-auto border-t border-borderPrimary bg-bgPrimary shadow-[0_-4px_6px_rgba(0,0,0,0.1)] drop-shadow-md transition-all duration-300 ease-in [--auto-close:lg] dark:bg-bgSecondary lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 lg:drop-shadow-none`}
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
