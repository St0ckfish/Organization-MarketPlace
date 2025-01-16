"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/input-otp";

const translations = {
  en: {
    title: "Code Verification",
    description: "Write the Code sent to",
    verifyButton: "Verify",
    resendText: "Didn't you receive the Code?",
    resendLink: "Resend Code",
  },
  ar: {
    title: "التحقق من الرمز",
    description: "أدخل الرمز المرسل إلى",
    verifyButton: "تحقق",
    resendText: "لم تستلم الرمز؟",
    resendLink: "إعادة إرسال الرمز",
  },
  fr: {
    title: "Vérification du code",
    description: "Entrez le code envoyé à",
    verifyButton: "Vérifier",
    resendText: "Vous n'avez pas reçu le code?",
    resendLink: "Renvoyer le code",
  },
};

function ResetPassword() {
  const [isChecked, setIsChecked] = useState(false);

  const language = useLanguageStore((state) => state.language); // Get the current language
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
          <div className="flex gap-1">
            <Text className="text-textSecondary">{t.description}</Text>
            <Text font={"medium"}>User@gmail.com</Text>
          </div>
          <div className="space-y-16 py-8">
            <InputOTP maxLength={4}>
              <InputOTPGroup className="flex w-full justify-between">
                {[0, 1, 2, 3].map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="h-16 w-16 rounded-md border border-borderPrimary bg-bgSecondary text-2xl font-semibold"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <Button className="mb-10 py-6" color="primary">
              {t.verifyButton}
            </Button>
            <div className="flex justify-center gap-2">
              <Text>{t.resendText}</Text>
              <a
                href="sign-in"
                className="font-medium text-primary hover:underline"
              >
                {t.resendLink}
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

export default ResetPassword;
