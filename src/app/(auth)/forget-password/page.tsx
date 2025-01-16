"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  en: {
    title: "Forgot password",
    description:
      "Enter the email you registered earlier, then you will be sent an email.",
    emailLabel: "Email",
    emailPlaceholder: "Enter Your Email",
    nextButton: "Next",
    rememberPassword: "Well, remember the password?",
    loginLink: "Login!",
  },
  ar: {
    title: "نسيت كلمة المرور",
    description:
      "أدخل البريد الإلكتروني الذي سجلته مسبقًا، ثم سيتم إرسال بريد إلكتروني لك.",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    nextButton: "التالي",
    rememberPassword: "هل تتذكر كلمة المرور؟",
    loginLink: "تسجيل الدخول!",
  },
  fr: {
    title: "Mot de passe oublié",
    description:
      "Entrez l'e-mail que vous avez enregistré auparavant, puis un e-mail vous sera envoyé.",
    emailLabel: "E-mail",
    emailPlaceholder: "Entrez votre e-mail",
    nextButton: "Suivant",
    rememberPassword: "Eh bien, vous souvenez-vous du mot de passe?",
    loginLink: "Se connecter!",
  },
};

function ForgetPassword() {
  const [isChecked, setIsChecked] = useState(false);
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fetch translations for the current language

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="flex h-screen">
      {/* Left Section */}
      <div className="flex max-h-screen w-full items-start justify-center overflow-auto bg-bgPrimary py-16 pt-32 scrollbar-hide md:w-1/2 xl:w-3/5">
        <div className="w-4/5 lg:w-2/3 xl:w-1/2">
          <img
            src="/images/opreamIcon.png"
            alt="Opream Icon"
            className="mb-16"
          />
          <Text font={"bold"} size={"4xl"} className="mb-2">
            {t.title}
          </Text>
          <Text className="text-textSecondary">{t.description}</Text>
          <div className="space-y-16 py-8">
            <Input
              theme="gray"
              border="none"
              type="email"
              label={t.emailLabel}
              placeholder={t.emailPlaceholder}
            />
            <Button className="mb-10 py-6" color="primary">
              {t.nextButton}
            </Button>
            <div className="flex justify-center gap-2">
              <Text>{t.rememberPassword}</Text>
              <a
                href="sign-in"
                className="font-medium text-primary hover:underline"
              >
                {t.loginLink}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-2/5">
        <img
          src="/images/forgetPasswordPerson.png"
          alt="Right Side"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default ForgetPassword;
