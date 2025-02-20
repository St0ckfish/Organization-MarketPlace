"use client";

/* eslint-disable @next/next/no-img-element */
import { MessageSquare, Share2, Star } from "lucide-react";
import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import Container from "~/_components/Container";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";
import { Text } from "~/_components/Text";

const Profile = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  return (
    <Container>
      <div className="mx-auto max-w-4xl p-6">
        <div className="overflow-hidden rounded-lg bg-bgPrimary shadow-lg">
          {/* Profile Header */}
          <div className="relative">
            {/* Banner Image */}
            <div className="h-48 bg-gray-200">
              <img
                src="/images/profile-cover.png"
                alt="Forest banner"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="relative -mb-20 flex items-end space-x-4 px-6">
              <div className="-mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-bgPrimary">
                <img
                  src="/images/edit-profile.png"
                  alt="Stanford logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex mr-2 items-center justify-between">
                  <div>
                    <Text font={"bold"} size={"2xl"}>
                      {t.universityName}
                    </Text>
                    <Text color={"gray"}>@stanford</Text>
                  </div>
                  <button className="flex items-center gap-2 rounded-md bg-primary2 px-6 py-1 text-white">
                    <MdCampaign size={18} />
                    {t.campaign}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-b px-6 pt-24">
            <nav className="flex space-x-8">
              <a
                href="#"
                className="border-b-2 ml-6 border-blue-600 pb-4 font-medium text-blue-600"
              >
                {t.post}
              </a>
              <a href="#" className="pb-4 text-gray-500">
                {t.course}
              </a>
              <a href="#" className="pb-4 text-gray-500">
                {t.videos}
              </a>
              <a href="#" className="pb-4 text-gray-500">
                {t.images}
              </a>
            </nav>
          </div>

          {/* Post Content */}
          <div className="p-6">
            <div className="mb-4 rounded-lg border p-4">
              <div className="mb-4 flex items-center space-x-3">
                <div className="h-10 ml-4 w-10 overflow-hidden rounded-full">
                  <img
                    src="/images/edit-profile.png"
                    alt="Profile picture"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <Text font={'medium'}>{t.universityName}</Text>
                  <p className="flex items-center gap-2 text-xs text-gray-500 lg:text-sm">
                    5h. <FaEarthAmericas />
                  </p>
                </div>
              </div>

              <p className="mb-4">{t.description}</p>

              {/* Shelf Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="/images/post.png"
                  alt="Minimalist shelf design"
                  className="w-full object-cover"
                />
              </div>

              {/* Interaction Buttons */}
              <div className="flex items-center justify-between text-textSecondary">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-primary2 ml-2 lg:h-5 lg:w-5" />
                    <span>{t.likesCount}</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4 ml-2 lg:h-5 lg:w-5" />
                    <span>{t.comment}</span>
                  </button>
                  <button className="flex items-center space-x-1">
                    <Share2 className="h-4 w-4 ml-2 lg:h-5 lg:w-5" />
                    <span>{t.share}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
