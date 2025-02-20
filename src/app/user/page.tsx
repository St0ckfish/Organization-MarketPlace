/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import { LuSearch } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import Button from "~/_components/Button";
import { useRouter } from "next/navigation";
import translations from "./translations";

function User() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const router = useRouter();
  const [search, setSearch] = useState("");
  const users = [
    {
      name: "Mostafa Mohamed",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Kathryn Murphy",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Jacob Jones",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Jane Cooper",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Jerome Bell",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Arlene McCoy",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Cameron Williamson",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Devon Lane",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Ralph Edwards",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Cody Fisher",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Jenny Wilson",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Annette Black",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Brooklyn Simmons",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Annette Black",
      role: t.computerScience,
      image: "/images/profile.png",
    },
    {
      name: "Brooklyn Simmons",
      role: t.computerScience,
      image: "/images/profile.png",
    },
  ];

  return (
    <>
      <Container ml={false} mr={false} mt={false}>
        <Box rounded="none">
          {" "}
          <div className="relative mx-8 flex justify-between">
            <div className="flex w-1/3">
              <div className="relative w-full">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="icon"
                  name="icon"
                  className="block w-full rounded-lg border border-borderPrimary px-8 py-[14px] pl-10 text-sm outline-none focus:border-primary2 focus:ring-primary2 disabled:pointer-events-none disabled:opacity-50"
                  placeholder={t.searchPlaceholder}
                />
                <LuSearch
                  className="absolute left-3 top-[26px] -translate-y-1/2 text-textSecondary"
                  size={20}
                />
              </div>
              <VscSettings
                className={`rounded-lg border border-borderPrimary p-2 ${language == "ar" ? "mr-2" : "ml-2"} cursor-pointer text-textSecondary`}
                size={50}
              />
            </div>
            <div className="w-fit">
              <Button
                onClick={() => router.push("/user/add-staff")}
                className="px-8"
                color="primary2"
              >
                {t.addStaff}
              </Button>
            </div>
          </div>
          <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-bgPrimary p-6 text-center shadow-lg"
                >
                  <div className="relative flex justify-center">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-24 w-24 rounded-full border-4 border-whiteOrBlack object-cover shadow-md"
                    />
                    <button className="absolute right-0 top-0 text-textSecondary">
                      <span className="text-lg">⋮</span>
                    </button>
                  </div>
                  <Text size={"xl"} font={"semiBold"} className="mt-4">
                    {user.name}
                  </Text>
                  <Text color={"gray"}>{user.role}</Text>
                  <Text color={"gray"} size={"sm"} className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default User;
