'use client';

import type { ReactNode } from "react";
import { useLanguageStore } from "~/APIs/store";

const Container = ({ children }: { children: ReactNode }) => {
  const language = useLanguageStore((state) => state.language); // Get the current language

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`m-0 mt-5 transform transition duration-300 ease-in ${
        language === "ar"
          ? "md:ml-[10px] md:mr-[130px] lg:mr-[170px]"
          : "md:ml-[130px] md:mr-[10px] lg:ml-[170px]"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
