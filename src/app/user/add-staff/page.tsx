/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { useLanguageStore } from "~/APIs/store";
import { Text } from "~/_components/Text";
import translations from "./translations";
import Button from "~/_components/Button";
import Input from "~/_components/Input";
import { FaLink } from "react-icons/fa6";

function AddStaff() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);

  const staffTypes = [
    { name: t.teacher, image: "/images/teaching.png", id: "teacher" },
    { name: t.student, image: "/images/Graduated.png", id: "student" },
    { name: t.employee, image: "/images/employee.png", id: "employee" },
    { name: t.trader, image: "/images/itr for traders.png", id: "trader" },
  ];

  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePermission = (id: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(id) ? prev.filter((perm) => perm !== id) : [...prev, id],
    );
  };

  const [isOpenModalEmailTeacher, setIsOpenModalEmailTeacher] = useState(false);
  const [isOpenModalEmailStudent, setIsOpenModalEmailStudent] = useState(false);
  const [isOpenModalEmailEmployee, setIsOpenModalEmailEmployee] =
    useState(false);
  const [isOpenModalEmailTrader, setIsOpenModalEmailTrader] = useState(false);

  const permissionsList = [
    { id: "createPost", label: "Create Post" },
    { id: "addCourse", label: "Add Course" },
    { id: "chat", label: "Chat" },
    { id: "createMeeting", label: "Create Meeting" },
  ];

  return (
    <>
      <Container ml={false} mr={false} mt={false}>
        <Box rounded="none" className="pb-40">
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
                  onClick={() => setSelectedStaff(staff.id)}
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
          {selectedStaff === "teacher" && (
            <div className="container mx-auto px-6 py-12">
              <div className="flex justify-between">
                <Text size={"xl"} font={"bold"} color={"primary"}>
                  {t.addTeacher}
                </Text>

                <div className="mt-6 flex w-fit justify-end">
                  <Button
                    color="primary2"
                    onClick={() => setIsOpenModalEmailTeacher(true)}
                  >
                    <FaLink />
                    {t.addEmail}
                  </Button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <Text size="sm" font="semiBold">
                    {t.fullName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nickName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.email}
                  </Text>
                  <Input border="none" placeholder={t.writeEmail} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.password}
                  </Text>
                  <Input
                    border="none"
                    type="password"
                    placeholder={t.enterPassword}
                  />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.gender}
                  </Text>
                  <Input border="none" placeholder={t.selectGender} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.country}
                  </Text>
                  <Input border="none" placeholder={t.selectCountry} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.address}
                  </Text>
                  <Input border="none" placeholder={t.writeAddress} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nationality}
                  </Text>
                  <Input border="none" placeholder={t.writeNationality} />
                </div>

                <div className="relative w-full">
                  <Text size="sm" font="semiBold">
                    {t.permission}
                  </Text>
                  <div
                    className="w-full cursor-pointer rounded-xl bg-bgSecondary px-4 py-3 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {t.selectPermission}
                  </div>
                  {isOpen && (
                    <div className="absolute mt-1 w-full rounded-xl bg-bgPrimary shadow-lg">
                      {permissionsList.map((perm) => (
                        <label
                          key={perm.id}
                          className="flex cursor-pointer items-center gap-3 p-3 hover:bg-bgSecondary"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPermissions.includes(perm.id)}
                            onChange={() => togglePermission(perm.id)}
                            className="h-4 w-4"
                          />
                          {perm.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.cardId}
                  </Text>
                  <Input border="none" placeholder={t.writeCardId} />
                </div>
              </div>
            </div>
          )}
          {selectedStaff === "student" && (
            <div className="container mx-auto px-6 py-12">
              <div className="flex justify-between">
                <Text size={"xl"} font={"bold"} color={"primary"}>
                  {t.addStudent}
                </Text>

                <div className="mt-6 flex w-fit justify-end">
                  <Button
                    color="primary2"
                    onClick={() => setIsOpenModalEmailStudent(true)}
                  >
                    <FaLink />
                    {t.addEmail}
                  </Button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <Text size="sm" font="semiBold">
                    {t.fullName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nickName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.email}
                  </Text>
                  <Input border="none" placeholder={t.writeEmail} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.password}
                  </Text>
                  <Input
                    border="none"
                    type="password"
                    placeholder={t.enterPassword}
                  />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.gender}
                  </Text>
                  <Input border="none" placeholder={t.selectGender} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.country}
                  </Text>
                  <Input border="none" placeholder={t.selectCountry} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.address}
                  </Text>
                  <Input border="none" placeholder={t.writeAddress} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nationality}
                  </Text>
                  <Input border="none" placeholder={t.writeNationality} />
                </div>

                <div className="relative w-full">
                  <Text size="sm" font="semiBold">
                    {t.permission}
                  </Text>
                  <div
                    className="w-full cursor-pointer rounded-xl bg-bgSecondary px-4 py-3 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {t.selectPermission}
                  </div>
                  {isOpen && (
                    <div className="absolute mt-1 w-full rounded-xl bg-bgPrimary shadow-lg">
                      {permissionsList.map((perm) => (
                        <label
                          key={perm.id}
                          className="flex cursor-pointer items-center gap-3 p-3 hover:bg-bgSecondary"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPermissions.includes(perm.id)}
                            onChange={() => togglePermission(perm.id)}
                            className="h-4 w-4"
                          />
                          {perm.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.age}
                  </Text>
                  <Input border="none" placeholder={t.writeAge} />
                </div>
              </div>
            </div>
          )}
          {selectedStaff === "employee" && (
            <div className="container mx-auto px-6 py-12">
              <div className="flex justify-between">
                <Text size={"xl"} font={"bold"} color={"primary"}>
                  {t.addEmployee}
                </Text>

                <div className="mt-6 flex w-fit justify-end">
                  <Button
                    color="primary2"
                    onClick={() => setIsOpenModalEmailEmployee(true)}
                  >
                    <FaLink />
                    {t.addEmail}
                  </Button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <Text size="sm" font="semiBold">
                    {t.fullName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nickName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.email}
                  </Text>
                  <Input border="none" placeholder={t.writeEmail} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.password}
                  </Text>
                  <Input
                    border="none"
                    type="password"
                    placeholder={t.enterPassword}
                  />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.gender}
                  </Text>
                  <Input border="none" placeholder={t.selectGender} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.country}
                  </Text>
                  <Input border="none" placeholder={t.selectCountry} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.address}
                  </Text>
                  <Input border="none" placeholder={t.writeAddress} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nationality}
                  </Text>
                  <Input border="none" placeholder={t.writeNationality} />
                </div>

                <div className="relative w-full">
                  <Text size="sm" font="semiBold">
                    {t.permission}
                  </Text>
                  <div
                    className="w-full cursor-pointer rounded-xl bg-bgSecondary px-4 py-3 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {t.selectPermission}
                  </div>
                  {isOpen && (
                    <div className="absolute mt-1 w-full rounded-xl bg-bgPrimary shadow-lg">
                      {permissionsList.map((perm) => (
                        <label
                          key={perm.id}
                          className="flex cursor-pointer items-center gap-3 p-3 hover:bg-bgSecondary"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPermissions.includes(perm.id)}
                            onChange={() => togglePermission(perm.id)}
                            className="h-4 w-4"
                          />
                          {perm.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.age}
                  </Text>
                  <Input border="none" placeholder={t.writeAge} />
                </div>
              </div>
            </div>
          )}
          {selectedStaff === "trader" && (
            <div className="container mx-auto px-6 py-12">
              <div className="flex justify-between">
                <Text size={"xl"} font={"bold"} color={"primary"}>
                  {t.addTrader}
                </Text>

                <div className="mt-6 flex w-fit justify-end">
                  <Button
                    color="primary2"
                    onClick={() => setIsOpenModalEmailTrader(true)}
                  >
                    <FaLink />
                    {t.addEmail}
                  </Button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <Text size="sm" font="semiBold">
                    {t.fullName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nickName}
                  </Text>
                  <Input border="none" placeholder={t.yourFirstName} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.email}
                  </Text>
                  <Input border="none" placeholder={t.writeEmail} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.password}
                  </Text>
                  <Input
                    border="none"
                    type="password"
                    placeholder={t.enterPassword}
                  />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.gender}
                  </Text>
                  <Input border="none" placeholder={t.selectGender} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.country}
                  </Text>
                  <Input border="none" placeholder={t.selectCountry} />
                </div>

                <div>
                  <Text size="sm" font="semiBold">
                    {t.address}
                  </Text>
                  <Input border="none" placeholder={t.writeAddress} />
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.nationality}
                  </Text>
                  <Input border="none" placeholder={t.writeNationality} />
                </div>

                <div className="relative w-full">
                  <Text size="sm" font="semiBold">
                    {t.permission}
                  </Text>
                  <div
                    className="w-full cursor-pointer rounded-xl bg-bgSecondary px-4 py-3 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {t.selectPermission}
                  </div>
                  {isOpen && (
                    <div className="absolute mt-1 w-full rounded-xl bg-bgPrimary shadow-lg">
                      {permissionsList.map((perm) => (
                        <label
                          key={perm.id}
                          className="flex cursor-pointer items-center gap-3 p-3 hover:bg-bgSecondary"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPermissions.includes(perm.id)}
                            onChange={() => togglePermission(perm.id)}
                            className="h-4 w-4"
                          />
                          {perm.label}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Text size="sm" font="semiBold">
                    {t.age}
                  </Text>
                  <Input border="none" placeholder={t.writeAge} />
                </div>
              </div>
            </div>
          )}
        </Box>
      </Container>
      {isOpenModalEmailTeacher && (
        <div
          onClick={() => setIsOpenModalEmailTeacher(false)}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full rounded-lg bg-bgPrimary p-6 shadow-lg lg:w-1/3"
          >
            <Text size="xl" className="mb-4" font="bold">
              {t.addEmail}
            </Text>

            <Input
              type="email"
              label="Email"
              placeholder="Enter Email"
              border="none"
              className="w-full rounded-lg px-4 py-2"
            />
            <div className="flex justify-center">
              <div className="mt-6 flex w-fit gap-4 px-8">
                <Button color="primary2" className="px-20">
                  {t.confirm}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenModalEmailStudent && (
        <div
          onClick={() => setIsOpenModalEmailStudent(false)}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full rounded-lg bg-bgPrimary p-6 shadow-lg lg:w-1/3"
          >
            <Text size="xl" className="mb-4" font="bold">
              {t.addEmail}
            </Text>

            <Input
              type="email"
              label="Email"
              placeholder="Enter Email"
              border="none"
              className="w-full rounded-lg px-4 py-2"
            />
            <div className="flex justify-center">
              <div className="mt-6 flex w-fit gap-4 px-8">
                <Button color="primary2" className="px-20">
                  {t.confirm}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenModalEmailEmployee && (
        <div
          onClick={() => setIsOpenModalEmailEmployee(false)}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full rounded-lg bg-bgPrimary p-6 shadow-lg lg:w-1/3"
          >
            <Text size="xl" className="mb-4" font="bold">
              {t.addEmail}
            </Text>

            <Input
              type="email"
              label="Email"
              placeholder="Enter Email"
              border="none"
              className="w-full rounded-lg px-4 py-2"
            />
            <div className="flex justify-center">
              <div className="mt-6 flex w-fit gap-4 px-8">
                <Button color="primary2" className="px-20">
                  {t.confirm}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenModalEmailTrader && (
        <div
          onClick={() => setIsOpenModalEmailTrader(false)}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full rounded-lg bg-bgPrimary p-6 shadow-lg lg:w-1/3"
          >
            <Text size="xl" className="mb-4" font="bold">
              {t.addEmail}
            </Text>

            <Input
              type="email"
              label="Email"
              placeholder="Enter Email"
              border="none"
              className="w-full rounded-lg px-4 py-2"
            />
            <div className="flex justify-center">
              <div className="mt-6 flex w-fit gap-4 px-8">
                <Button color="primary2" className="px-20">
                  {t.confirm}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddStaff;
