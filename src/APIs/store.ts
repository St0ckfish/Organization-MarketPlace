import { create } from "zustand";
import { useEffect } from "react";

export type Language = "en" | "ar" | "fr";

type LanguageState = {
  language: Language; // Current language state
  isLoading: boolean; // Loading state
  setLanguage: (lang: Language) => void; // Function to update language
  setIsLoading: (loading: boolean) => void; // Function to update loading state
};

// Zustand store
export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en", // Default value for SSR
  isLoading: true, // Initially loading
  setLanguage: (lang) => {
    set(() => ({ language: lang }));
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  },
  setIsLoading: (loading) => set(() => ({ isLoading: loading })),
}));

// Hook to initialize the language from localStorage on the client side
export const useInitializeLanguage = () => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const setIsLoading = useLanguageStore((state) => state.setIsLoading);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage === "en" || savedLanguage === "ar" || savedLanguage === "fr") {
        setLanguage(savedLanguage as Language);
      }
    }
    setIsLoading(false); // Set loading to false after initialization
  }, [setLanguage, setIsLoading]);
};
