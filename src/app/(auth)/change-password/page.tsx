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
            Set a password
          </Text>
          <Text className="text-textSecondary">
            Your previous password has been reseted. Please set a new password
            for your account.
          </Text>
          <div className="space-y-8 py-8">
            <Input
              theme="gray"
              border="none"
              type="password"
              label="Create Password"
              placeholder="Enter Password"
            />
            <Input
              theme="gray"
              border="none"
              type="password"
              label="New Password"
              placeholder="Enter Password"
            />
            <Input
              theme="gray"
              border="none"
              type="password"
              label="Re-enter Password"
              placeholder="Enter Password"
            />
            <Button className="mb-10 py-6" color="primary">
              Confirm
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-2/5">
        <img
          src="/images/changePasswordPerson.png"
          alt="Right Side"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default ForgetPassword;
