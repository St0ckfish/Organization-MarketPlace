/* eslint-disable @next/next/no-img-element */
"use client";

import { TbPhotoPlus } from "react-icons/tb";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Button from "~/_components/Button";
import translations from "./translations";
import { RiDeleteBinLine } from "react-icons/ri";

function AddAds() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];
  const [fileName, setFileName] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <>
      <Container mr={false} ml={false} mt={false}>
        <Box className="pb-28">
          <div className="flex flex-col items-center justify-center">
            <div className="w-3/5">
              <Text
                className="text-xl md:text-2xl md:text-primary2"
                font={"bold"}
              >
                {t.describeCampaign}
              </Text>
              <form className="mt-4 flex flex-col gap-4">
                <Input
                  label={t.adName}
                  border="gray"
                  type="text"
                  placeholder={t.promotionAds}
                  theme="transparent"
                />
                <Input
                  label={t.adTitle}
                  border="gray"
                  type="text"
                  placeholder={t.getDiscount}
                  theme="transparent"
                />

                <Input
                  label={t.productImages}
                  id="product-image"
                  name="product-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div
                  onClick={() =>
                    document.getElementById("product-image")?.click()
                  }
                  className="flex h-60 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-borderPrimary text-textSecondary"
                >
                  <div className="flex flex-col items-center">
                    <TbPhotoPlus size={50} />
                    {fileName ? (
                      <p className="mt-2 text-textPrimary">{fileName}</p>
                    ) : (
                      <p className="mt-2 text-textSecondary">
                        {t.browseDesktop}
                      </p>
                    )}
                  </div>
                </div>
                <Input
                  label={t.description}
                  border="gray"
                  type="text"
                  placeholder={t.productDescriptionPlaceholder}
                  theme="transparent"
                  className="pb-14"
                />
                <Text size={"2xl"} font={"bold"}>
                  {t.tags}
                </Text>
                <Text color={"limeGreen"} font={"bold"}>
                  {t.recommendedTags}
                </Text>
                <div>
                  <div className="flex flex-wrap gap-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex h-10 w-24 items-center justify-evenly rounded-full border border-primary text-primary md:h-12 md:w-28 md:border-primary2 md:text-primary2"
                      >
                        <Text
                          className="text-primary md:text-primary2"
                          font={"semiBold"}
                        >
                          {t.tags} {index + 1}
                        </Text>
                        {index % 2 === 0 ? (
                          <FaRegCircleCheck size={25} />
                        ) : (
                          <MdOutlineAddCircleOutline size={25} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-96">
                  <Input
                    label={t.setBudget}
                    type="number"
                    theme="transparent"
                    className="w-full"
                    border="gray"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 lg:flex-row">
                  <Input
                    type="date"
                    label={t.dateStart}
                    border="gray"
                    theme="transparent"
                  />
                  <Input
                    type="date"
                    label={t.dateEnd}
                    border="gray"
                    theme="transparent"
                  />
                </div>
              </form>
              <div className="mt-6 flex w-full justify-between gap-4">
                <div className="w-fit">
                  <Button
                    color="primary2"
                    theme="outline"
                    className="hidden cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary md:flex"
                  >
                    <RiDeleteBinLine />
                    {t.cancel}
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Button
                    color="primary2"
                    theme="outline"
                    className="hidden cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary md:flex"
                  >
                    {t.preview}
                  </Button>
                  <div className="w-full">
                    <div className="block">
                      <Button
                        color="primary2"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Publish <FaRegCircleCheck size={25} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
        >
          <div
            className="relative h-[400px] w-[300px] rounded-lg bg-bgPrimary p-6 text-center shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <img
              src="/images/Bubbles.png"
              alt="Bubbles"
              className="absolute z-10"
            />
            <img
              src="/images/Verified.png"
              alt="Verified"
              className="absolute left-1/2 top-44 z-20 -translate-x-1/2 -translate-y-1/2 transform"
            />
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform text-center">
              <Text size={"lg"} font={"bold"}>
                {t.congratulations}
              </Text>
              <Text font={"semiBold"} size={"sm"} color={"gray"}>
                {t.campaignPublished}
              </Text>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddAds;
