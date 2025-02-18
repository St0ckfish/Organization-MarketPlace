"use client";

import type { ReactNode } from "react";
import { useLanguageStore } from "~/APIs/store";

const Container = ({
  children,
  className = "",
  mr = true,
  ml = true,
  mt = true,
}: {
  children?: ReactNode;
  className?: string; // Allow passing custom classes
  mr?: boolean;
  // When ml if false i mean that no margin after the navbar, but there is a margin left for the page left, but the 20px after the navbar no.
  ml?: boolean;
  mt?: boolean;
}) => {
  const language = useLanguageStore((state) => state.language); // Get the current language

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`m-0 ${mt ? "mt-5" : ""} transform transition duration-300 ease-in ${
        language === "ar"
          ? `${mr ? "md:ml-[10px]" : ""} ${ml ? "md:mr-[130px] lg:mr-[170px]" : "md:mr-[110px] lg:mr-[150px]"}`
          : `${ml ? "md:ml-[130px] lg:ml-[170px]" : "md:ml-[110px] lg:ml-[150px]"} ${mr ? "md:mr-[10px]" : ""}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
