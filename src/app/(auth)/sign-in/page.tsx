"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";

function Signin() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex max-h-screen w-full items-start justify-center overflow-auto bg-bgPrimary py-16 pt-40 scrollbar-hide md:w-1/2 xl:w-2/3">
        <div className="w-4/5 lg:w-2/3 xl:w-1/2">
          <img
            src="/images/opreamIcon.png"
            alt="Opream Icon"
            className="mb-8"
          />
          <Text font={"bold"} size={"4xl"} className="mb-2">
            Welcome Back
          </Text>
          <div className="flex gap-2">
            <Text className="mb-8 text-textSecondary">
              Don&apos;t have an account?
            </Text>
            <a href="/sign-up" className="text-primary font-medium hover:underline">Sign Up</a>
          </div>
          <div className="space-y-8 py-8">
            <Input
              theme="gray"
              border="none"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
            />
            <Input
              label="Password"
              theme="gray"
              border="none"
              placeholder="Enter Your Password"
              type="password"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <label className="flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <div
                    className={`h-6 w-6 rounded border-2 ${
                      isChecked
                        ? "border-primary bg-primary"
                        : "border-gray-400"
                    } flex items-center justify-center`}
                  >
                    {isChecked && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <Button className="mb-10 py-6" color="primary">
              Log in
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden bg-primary2 md:block md:w-1/2 xl:w-1/3">
        <img
          src="/images/signinPerson.png"
          alt="Right Side"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Signin;
