/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import { Clock } from "lucide-react";
import CourseCard from "~/_components/CourseCard";
import Box from "~/_components/Box";
import { Calendar } from "~/components/ui/Calendar";
import { useRouter } from "next/navigation";
import translations from "./translations";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaUserGear } from "react-icons/fa6";
import Button from "~/_components/Button";
import { useState } from "react";
import Link from "next/link";

const Education = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const events = [
    {
      date: "06 - April - 2024",
      name: "Event Name",
      textColor: "text-warning",
      color: "border-warning bg-warning/5",
    },
    {
      date: "06 - April - 2024",
      name: "Event Name",
      textColor: "text-error",
      color: "border-error bg-error/5",
    },
    {
      date: "06 - April - 2024",
      name: "Event Name",
      textColor: "text-success",
      color: "border-success bg-success/5",
    },
    {
      date: "06 - April - 2024",
      name: "Event Name",
      textColor: "text-primary2",
      color: "border-primary2 bg-primary2/5",
    },
  ];

  const meetups = [
    {
      date: "06 - May - 2024",
      day: "Sun",
      color: "bg-warning/20 text-warning",
      progressColor: "bg-warning",
      progress: "w-10",
      timeIcon: "text-warning",
    },
    {
      date: "06 - May - 2024",
      day: "Sun",
      color: "bg-primary2/20 text-primary2",
      progressColor: "bg-primary2",
      progress: "w-14",
      timeIcon: "text-primary2",
    },
    {
      date: "06 - May - 2024",
      day: "Sun",
      color: "bg-lavender/20 text-lavender",
      progressColor: "bg-lavender",
      progress: "w-16",
      timeIcon: "text-lavender",
    },
  ];

  const timelineData = [
    {
      title: "Daily Standup Call",
      time: "9:00 AM",
      description: "Discuss team tasks for the day.",
      participants: [
        "/images/profile.png",
        "/images/profile.png",
        "/images/profile.png",
      ],
      isActive: true,
    },
    {
      title: "Brand Identity Meeting",
      time: "11:00 AM",
      description: "Discuss brand identity guidelines for the print media.",
      participants: [
        "/images/profile.png",
        "/images/profile.png",
        "/images/profile.png",
      ],
      isActive: false,
    },
    {
      title: "Brand Identity Meeting",
      time: "11:00 AM",
      description: "Discuss brand identity guidelines for the print media.",
      participants: [
        "/images/profile.png",
        "/images/profile.png",
        "/images/profile.png",
      ],
      isActive: false,
    },
  ];

  const categories = [
    { name: t.events, icon: "/images/events.png", url: "/events" },
    {
      name: t.workshop,
      icon: "/images/Graph Presentation.png",
      url: "/workshop",
    },
    { name: t.program, icon: "/images/elearning.png", url: "/program" },
    {
      name: t.scholarship,
      icon: "/images/Education Expenses, College Education Pricing.png",
      url: "/scholarship",
    },
  ];

  const handleClickModal = () => {
    setIsModalOpen((e) => !e);
  };

  return (
    <>
      <Container ml={false} mr={false}>
        <div>
          <Box
            rounded="none"
            padding="0"
            className="-mt-[90px] px-0 pb-[120px] pt-20 md:px-4 md:pb-[20px]"
          >
            <div className="flex flex-col xl:flex-row">
              <div className="w-full xl:w-[70%]">
                <div className="mx-4 flex flex-col lg:flex-row">
                  <div className="mt-14 flex w-full items-center justify-between rounded-2xl bg-bgFifth px-6 py-2 shadow lg:mx-4">
                    <div>
                      <Text size="2xl" font="semiBold" color="default">
                        {t.todayTask}
                      </Text>
                      <Text
                        size="md"
                        font="default"
                        color="gray"
                        className="mt-2"
                      >
                        {t.checkDailyTasks}
                      </Text>
                      <div className="w-fit">
                        <button className="mt-4 rounded-lg bg-primary px-4 py-2 font-medium text-white lg:rounded-xl lg:px-2 lg:py-1">
                          {t.todaysSchedule}
                        </button>
                      </div>
                    </div>
                    <div className="relative -top-14">
                      <img
                        src="/images/Time management.png"
                        alt="Illustration"
                        className="h-32 w-32 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
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
                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                      <CourseCard
                        key={index}
                        progress={false}
                        course={course}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="w-full p-6">
                    <div className="flex items-center justify-between">
                      <Text size={"xl"} font={"semiBold"}>
                        {t.events}
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

                    <div className="mt-4 grid grid-cols-1 gap-4 overflow-x-auto md:grid-cols-2 lg:grid-cols-4">
                      {events.map((event, index) => (
                        <div
                          key={index}
                          className={`rounded-lg border-l-4 p-4 shadow-md ${event.color}`}
                        >
                          <Text size={"sm"} className={`${event.textColor}`}>
                            {event.date}
                          </Text>
                          <Text
                            size={"lg"}
                            font={"semiBold"}
                            className={`${event.textColor}`}
                          >
                            {event.name}
                          </Text>
                          <Text color={"gray"} size={"sm"} className="mt-4">
                            They attended the event
                          </Text>
                          <div className="mt-1 flex items-center">
                            {/* Sample Avatars */}
                            <div className="flex -space-x-1">
                              {[1, 2, 3, 4].map((i) => (
                                <Image
                                  key={i}
                                  src={`/images/profile.png`}
                                  alt="User"
                                  width={24}
                                  height={24}
                                  className="h-6 w-6 rounded-full border border-white"
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">
                              +25 More
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between px-4">
                    <Text size="2xl" font="semiBold">
                      {t.otherCourses}
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
                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                      <CourseCard
                        key={index}
                        progress={false}
                        course={course}
                      />
                    ))}
                  </div>
                </div>
                <Text size={"2xl"} font={"bold"} className="-mb-6 mt-4 px-6">
                  {t.topScholarship}
                </Text>
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
                        {t.learnMore}
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
                        href="#"
                        className="mt-4 inline-flex items-center font-bold text-primary hover:underline"
                      >
                        {t.learnMore}
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
              <div className="w-full xl:w-[30%]">
                <div className="relative px-8">
                  {/* Button to Toggle Modal */}
                  <Button onClick={handleClickModal} color="primary2">
                    <FaUserGear />
                    {t.manageEducation}
                  </Button>

                  {/* Modal */}
                  {isModalOpen && (
                    <div className="absolute left-0 top-14 z-10 w-full max-w-md rounded-lg bg-bgPrimary p-6 shadow-lg">
                      <div className="grid grid-cols-2 gap-6">
                        {categories.map((category, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center space-y-2"
                          >
                            <Link href={category.url}>
                              <img
                                src={category.icon}
                                alt={category.name}
                                width={50}
                                height={50}
                              />
                              <span className="text-lg font-semibold text-textPrimary">
                                {category.name}
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{t.events}</h2>
                  </div>

                  <div className="mt-4 space-y-4">
                    {meetups.map((meetup, index) => (
                      <div key={index} className="flex items-center gap-4">
                        {/* Date Box */}
                        <div className="relative flex h-20 w-16 flex-col items-center justify-center rounded-lg shadow-md">
                          <div
                            className={`flex h-full w-full flex-col items-center justify-center rounded-lg ${meetup.color}`}
                          >
                            <span className="text-sm font-bold">6</span>
                            <span className="text-xs">{meetup.day}</span>
                          </div>
                          <div
                            className={`absolute -bottom-1 h-2 w-2 rounded-full ${meetup.progressColor}`}
                          ></div>
                        </div>

                        {/* Meetup Details */}
                        <div className="flex flex-1 items-center justify-between">
                          <div>
                            <Text color={"gray"} size={"sm"}>
                              {meetup.date}
                            </Text>
                            <h3 className="text-lg font-semibold text-textPrimary">
                              {t.meetupName}
                            </h3>

                            {/* Progress Bar */}
                            <div className="mt-2 h-1 w-24 rounded-full bg-bgSecondary">
                              <div
                                className={`h-1 rounded-full ${meetup.progressColor} ${meetup.progress}`}
                              ></div>
                            </div>
                          </div>
                          <div>
                            {/* Meetup Time */}
                            <div className="mt-1 flex items-center text-sm text-textPrimary">
                              <Clock
                                className={`mr-1 h-4 w-4 ${meetup.timeIcon}`}
                              />
                              7:00AM - 8:00AM
                            </div>

                            {/* Interested People */}
                            <Text size={"sm"} className="mt-1">
                              23 {t.interestedInMeetup}
                            </Text>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <Calendar />
                </div>

                <div className="relative mx-4 mt-6 lg:mx-0 lg:ml-6 lg:mt-0">
                  {/* Line */}
                  <div className="absolute left-[11px] top-10 h-full w-0.5 bg-primary"></div>

                  {timelineData.map((event, index) => (
                    <div key={index} className="relative mb-8 flex items-start">
                      {/* Circle */}
                      <div className="absolute mt-4 flex h-6 w-6 items-center justify-center rounded-full bg-bgPrimary">
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                      </div>

                      {/* Card */}
                      <div
                        className="relative ml-8 mt-4 h-full w-full flex-1 rounded-xl bg-primary bg-cover bg-center px-4 pt-4 shadow-lg"
                        style={{
                          backgroundImage: `url('/images/educationbg.png')`,
                        }}
                      >
                        <Text
                          size="lg"
                          font="semiBold"
                          className="z-[2] text-white"
                        >
                          {event.title}
                        </Text>
                        <Text size="sm" className="z-[2] text-white">
                          {event.description}
                        </Text>
                        <div className="z-[2] mt-2 flex items-center space-x-2">
                          {event.participants.map((src, i) => (
                            <img
                              key={i}
                              src={src}
                              alt="Participant"
                              className="h-8 w-8 rounded-full border-2 border-white"
                            />
                          ))}
                        </div>
                        <Text
                          size="sm"
                          font="bold"
                          className="mt-2 text-right text-white"
                        >
                          {event.time}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Container>
    </>
  );
};
export default Education;
