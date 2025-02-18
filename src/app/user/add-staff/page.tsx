/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { useLanguageStore } from "~/APIs/store";
import { Text } from "~/_components/Text";
import translations from "./translations";

function AddStaff() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const staffTypes = [
    { name: t.teacher, image: "/images/teaching.png" },
    { name: t.student, image: "/images/Graduated.png" },
    { name: t.employee, image: "/images/employee.png" },
    { name: t.trader, image: "/images/itr for traders.png" },
  ];

  return (
    <>
      <Container ml={false} mr={false} mt={false}>
        <Box rounded="none" style={{ height: `calc(100vh - 100px)` }}>
          <div className="container mx-auto px-6 py-12">
            <Text size={"3xl"} font={"bold"}>
              {t.addStaff}
            </Text>

            <Text
              font={"semiBold"}
              size={"xl"}
              color={"primary"}
              className="mx-8 mt-2 cursor-pointer hover:underline"
            >
              {t.selectStaff}
            </Text>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {staffTypes.map((staff, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer flex-col items-center rounded-2xl bg-bgPrimary p-6 text-center shadow-lg transition hover:shadow-xl"
                >
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="h-24 w-24 object-contain"
                  />
                  <Text size={"lg"} font={"semiBold"} className="mt-4">
                    {staff.name}
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

export default AddStaff;
