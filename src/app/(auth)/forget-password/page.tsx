"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";

function ForgetPassword() {
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
            Forgot password
          </Text>
            <Text className="text-textSecondary">
            Enter the email you registered earlier, then you will be sent an email.
            </Text>
          <div className="space-y-16 py-8">
            <Input
              theme="gray"
              border="none"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
            />
            <Button className="mb-10 py-6" color="primary">
              Next
            </Button>
            <div className="flex justify-center gap-2">
                <Text>Well, remember the password?</Text>
                <a href="sign-in" className="text-primary font-medium hover:underline">Login!</a>
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
