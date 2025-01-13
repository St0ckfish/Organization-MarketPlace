"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/input-otp";

function ResetPassword() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex max-h-screen w-full items-start justify-center overflow-auto bg-bgPrimary py-16 pt-32 scrollbar-hide md:w-1/2 xl:w-3/5">
        <div className="w-4/5 lg:w-2/3 xl:w-1/2">
          <img
            src="/images/opreamIcon.png"
            alt="Opream Icon"
            className="mb-16"
          />
          <Text font={"bold"} size={"4xl"} className="mb-2">
            Code Verification
          </Text>
          <div className="flex gap-1">
            <Text className="text-textSecondary">Write the Code sent to</Text>
            <Text font={"medium"}>User@gmail.com</Text>
          </div>
          <div className="space-y-16 py-8">
            <InputOTP maxLength={4}>
              <InputOTPGroup className="flex w-full justify-between">
                <InputOTPSlot
                  index={0}
                  className="h-16 w-16 border border-borderPrimary bg-bgSecondary text-2xl font-semibold rounded-md"
                />
                <InputOTPSlot
                  index={1}
                  className="h-16 w-16 border border-borderPrimary bg-bgSecondary text-2xl font-semibold rounded-md"
                />
                <InputOTPSlot
                  index={2}
                  className="h-16 w-16 border border-borderPrimary bg-bgSecondary text-2xl font-semibold rounded-md"
                />
                <InputOTPSlot
                  index={3}
                  className="h-16 w-16 border border-borderPrimary bg-bgSecondary text-2xl font-semibold rounded-md"
                />
              </InputOTPGroup>
            </InputOTP>
            <Button className="mb-10 py-6" color="primary">
              Verify
            </Button>
            <div className="flex justify-center gap-2">
              <Text>Didn&apos;t you receive the Code?</Text>
              <a
                href="sign-in"
                className="font-medium text-primary hover:underline"
              >
                Resend Code
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
