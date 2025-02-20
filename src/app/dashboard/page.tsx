/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CourseCard from "~/_components/CourseCard";
import { useLanguageStore } from "~/APIs/store";
import { FaBroadcastTower } from "react-icons/fa";
import { LuUserRound } from "react-icons/lu";
import translations from "./translations";

function Dashboard() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const stats = [
    {
      title: t.allStudent,
      value: "7,265",
      change: "+11.01%",
      bgColor: "bg-primary2/15",
    },
    {
      title: t.allTeacher,
      value: "3,671",
      change: "-0.03%",
      bgColor: "bg-primary/15",
    },
    {
      title: t.newStudent,
      value: "156",
      change: "+15.03%",
      bgColor: "bg-primary2/15",
    },
    {
      title: t.activeUsers,
      value: "2,318",
      change: "+6.08%",
      bgColor: "bg-primary/15",
    },
  ];

  const contacts = [
    { avatar: "/images/profile.png", name: "Natali Craig" },
    { avatar: "/images/profile.png", name: "Drew Cano" },
    { avatar: "/images/profile.png", name: "Andi Lane" },
    { avatar: "/images/profile.png", name: "Koray Okumus" },
    { avatar: "/images/profile.png", name: "Kate Morrison" },
    { avatar: "/images/profile.png", name: "Melody Macy" },
  ];

  const activities = [
    {
      avatar: "/images/profile.png",
      message: "Changed the style.",
      time: t.justNow,
    },
    {
      avatar: "/images/profile.png",
      message: "Released a new version.",
      time: `59 ${t.minutesAgo}`,
    },
    {
      avatar: "/images/profile.png",
      message: "Submitted a bug.",
      time: `59 ${t.minutesAgo}`,
    },
    {
      avatar: "/images/profile.png",
      message: "Modified A data in Page X.",
      time: `59 ${t.minutesAgo}`,
    },
    {
      avatar: "/images/profile.png",
      message: "Deleted a page in Project X.",
      time: `59 ${t.minutesAgo}`,
    },
  ];

  const events = [
    {
      date: "06 - April - 2024",
      name: "Event Name",
      color: "text-warning",
      borderColor: "border-warning",
      bgColor: "bg-warning/10",
    },
    {
      date: "06 - April - 2024",
      name: "Event Name",
      color: "text-primary",
      borderColor: "border-primary",
      bgColor: "bg-primary/10",
    },
    {
      date: "06 - April - 2024",
      name: "Event Name",
      color: "text-success",
      borderColor: "border-success",
      bgColor: "bg-success/10",
    },
    {
      date: "06 - April - 2024",
      name: "Event Name",
      color: "text-pink",
      borderColor: "border-pink",
      bgColor: "bg-pink/10",
    },
  ];

  const data = [
    { month: "Jan", thisYear: 12000, lastYear: 10000 },
    { month: "Feb", thisYear: 9000, lastYear: 12000 },
    { month: "Mar", thisYear: 14000, lastYear: 15000 },
    { month: "Apr", thisYear: 22000, lastYear: 16000 },
    { month: "May", thisYear: 26000, lastYear: 18000 },
    { month: "Jun", thisYear: 23000, lastYear: 20000 },
    { month: "Jul", thisYear: 25000, lastYear: 27000 },
  ];

  const [selectedDate, setSelectedDate] = useState("Today");
  const courses = [
    {
      image: "/images/course_thumb.png",
      profilePhoto: "/images/profile.png",
      title: "Learning JavaScript With Imagination",
      instructor: "David Millar",
      rating: 4.8,
      category: "Development",
      progress: 90,
      lessons: 5,
      duration: "11h 20m",
      students: 22,
    },
    {
      image: "/images/course_thumb.png",
      profilePhoto: "/images/profile.png",
      title: "The Complete Graphic Design for Beginners",
      instructor: "Wilson",
      rating: 4.5,
      category: "Design",
      progress: 90,
      lessons: 60,
      duration: "70h 45m",
      students: 202,
    },
    {
      image: "/images/course_thumb.png",
      profilePhoto: "/images/profile.png",
      title: "The Complete Graphic Design for Beginners",
      instructor: "Wilson",
      rating: 4.5,
      category: "Design",
      progress: 90,
      lessons: 60,
      duration: "70h 45m",
      students: 202,
    },
  ];

  const notifications = [
    {
      icon: <LuUserRound className="rounded-lg bg-primary/10 p-2" size={35} />,
      message: "New user registered.",
      time: `59 ${t.minutesAgo}`,
    },
    {
      icon: (
        <FaBroadcastTower className="rounded-lg bg-primary/10 p-2" size={35} />
      ),
      message: "Andi Lane subscribed to you.",
      time: `59 ${t.minutesAgo}`,
    },
  ];

  return (
    <>
      <Container ml={false} mr={false} mt={false}>
        <Box rounded="none" className="pb-40">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full p-4 lg:w-3/4 lg:p-0">
              {/* Overview and four divs */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Text size="2xl" font="bold">
                    {t.overview}
                  </Text>
                  <div className="relative">
                    <button className="flex items-center gap-1 text-textSecondary">
                      {selectedDate} <MdKeyboardArrowDown />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {stats.map(({ title, value, change, bgColor }, index) => (
                    <div key={index} className={`rounded-lg p-6 ${bgColor}`}>
                      <Text size="sm" font={"medium"}>
                        {title}
                      </Text>
                      <div className="flex items-center justify-between">
                        <Text size="3xl" font="bold">
                          {value}
                        </Text>
                        <div className="flex items-center gap-2">
                          <Text size="sm" font={"medium"}>
                            {change}
                          </Text>
                          <FaArrowTrendUp />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Charts and events */}
              <div className="mt-6 flex flex-col gap-6 lg:flex-row">
                <div className="w-full lg:w-3/5">
                  <div className="rounded-lg bg-bgSecondary p-6 shadow">
                    <Text size="lg" font="bold">
                      {t.totalStudent}
                    </Text>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <XAxis dataKey="month" />
                        <YAxis
                          mirror={language === "ar"}
                          tick={{
                            textAnchor: language === "ar" ? "start" : "end",
                            dx: language === "ar" ? 40 : -10,
                          }}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="thisYear"
                          stroke="#3498DB"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="lastYear"
                          stroke="#AAB8C2"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="w-full lg:w-2/5">
                  <div className="rounded-lg bg-bgPrimary p-6 shadow">
                    <Text size="lg" font="bold" className="mb-4">
                      {t.popularEvents}
                    </Text>
                    <div className="space-y-3">
                      {events.map(
                        (
                          { date, name, color, borderColor, bgColor },
                          index,
                        ) => (
                          <div
                            key={index}
                            className={`flex items-center border-l-4 ${borderColor} justify-between rounded-r-lg p-2 pl-4 ${bgColor} bg-opacity-10 shadow-sm`}
                          >
                            <div className={`flex flex-col`}>
                              <Text size="sm" font="bold" className={color}>
                                {date}
                              </Text>
                              <Text size="md" font="bold" color={"gray"}>
                                {name}
                              </Text>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                <img
                                  src="/images/profile.png"
                                  className="h-6 w-6 rounded-full border-2 border-whiteOrBlack"
                                  alt="user"
                                />
                                <img
                                  src="/images/profile.png"
                                  className="h-6 w-6 rounded-full border-2 border-whiteOrBlack"
                                  alt="user"
                                />
                                <img
                                  src="/images/profile.png"
                                  className="h-6 w-6 rounded-full border-2 border-whiteOrBlack"
                                  alt="user"
                                />
                              </div>
                              <Text size="sm" font="medium" color={"gray"}>
                                {t.moreUsers}
                              </Text>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:p-6 lg:mt-0">
                <div className="flex justify-between px-4">
                  <Text size="2xl" font="semiBold">
                    {t.myCourses}
                  </Text>
                  <Text
                    size="sm"
                    font="semiBold"
                    color="primary"
                    className="cursor-pointer underline"
                  >
                    {t.seeAll}
                  </Text>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-6 md:p-6 lg:flex-row">
                <div className="flex w-full flex-col items-center lg:w-1/2">
                  <img
                    src="/images/meeting.jpg"
                    alt="Photo"
                    className="h- rounded-lg"
                  />
                  <div className="h-30 relative -top-10 w-4/5 rounded-xl bg-bgPrimary p-4 shadow-md">
                    <Text font={"bold"} size={"xl"}>
                      {t.scholarship}
                    </Text>
                    <Text
                      size={"sm"}
                      color={"gray"}
                      font={"medium"}
                      className="mt-2"
                    >
                      Ornare arcu dui vivamus arcu felis bibendum ut tristique
                      et tortor condimentum lacinia quis vel eros laoreet id
                      donec ultrices tincidunt arcu.
                    </Text>
                    <a
                      href="/scholarship-details"
                      className="mt-4 inline-flex items-center font-bold text-primary hover:underline"
                    >
                      {t.learnMore}{" "}
                      {language == "ar" ? (
                        <FaArrowLeft size={22} className="mx-1" />
                      ) : (
                        <FaArrowRight size={22} className="mx-1" />
                      )}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center lg:w-1/2">
                  <img
                    src="/images/meeting.jpg"
                    alt="Photo"
                    className="h- rounded-lg"
                  />
                  <div className="h-30 relative -top-10 w-4/5 rounded-xl bg-bgPrimary p-4 shadow-md">
                    <Text font={"bold"} size={"xl"}>
                      {t.scholarship}
                    </Text>
                    <Text
                      size={"sm"}
                      color={"gray"}
                      font={"medium"}
                      className="mt-2"
                    >
                      Ornare arcu dui vivamus arcu felis bibendum ut tristique
                      et tortor condimentum lacinia quis vel eros laoreet id
                      donec ultrices tincidunt arcu.
                    </Text>
                    <a
                      href="/scholarship-details"
                      className="mt-4 inline-flex items-center font-bold text-primary hover:underline"
                    >
                      {t.learnMore}{" "}
                      {language == "ar" ? (
                        <FaArrowLeft size={22} className="mx-1" />
                      ) : (
                        <FaArrowRight size={22} className="mx-1" />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4 w-full border-borderPrimary/50 md:px-6 lg:w-1/4 lg:border-l">
              <div className="mt-2">
                <Text size="lg" font="bold" className="mb-4">
                  {t.notifications}
                </Text>
                <div className="items-start space-y-3">
                  {notifications.map(({ icon, message, time }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg bg-bgPrimary"
                    >
                      <div className="rounded-full bg-bgPrimary">{icon}</div>
                      <div>
                        <Text font="medium">{message}</Text>
                        <Text size="sm" font="light" color={"gray"}>
                          {time}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Text size="lg" font="bold" className="mb-4">
                  {t.teacherActivities}
                </Text>
                <div className="space-y-4">
                  {activities.map(({ avatar, message, time }, index) => (
                    <div
                      key={index}
                      className="relative flex items-start gap-3"
                    >
                      <img
                        src={avatar}
                        alt="avatar"
                        className="h-8 w-8 rounded-full border-2 border-whiteOrBlack"
                      />
                      <div>
                        <Text size="md" font="medium">
                          {message}
                        </Text>
                        <Text size="sm" font="light" color={"gray"}>
                          {time}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Text size="lg" font="bold" className="mb-4">
                  {t.contacts}
                </Text>
                <div className="space-y-4">
                  {contacts.map(({ avatar, name }, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={avatar}
                        alt="avatar"
                        className="h-8 w-8 rounded-full border-2 border-whiteOrBlack"
                      />
                      <Text size="md" font="medium">
                        {name}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default Dashboard;
