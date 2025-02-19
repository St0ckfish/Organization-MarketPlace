"use client";

import { TbPhotoPlus } from "react-icons/tb";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import translations from "../add-product/steps/translations1";
import { useState } from "react";
import { useLanguageStore } from "~/APIs/store";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import Button from "~/_components/Button";
import { BsFileEarmarkText } from "react-icons/bs";

function AddAds() {
  const language = useLanguageStore((state) => state.language);
  const [fileName, setFileName] = useState<string | null>(null);
  const t = translations[language];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <>
      <Container mr={false} ml={false} mt={false}>
        <Box>
          <div className="flex flex-col items-center justify-center">
            <div className="w-3/5">
              <Text
                className="text-xl md:text-2xl md:text-primary2"
                font={"bold"}
              >
                Describe your campaign bellow
              </Text>
              <form className="mt-4 flex flex-col gap-4">
                <Input
                  label="Ad Name *"
                  border="gray"
                  type="text"
                  placeholder="Promotion Ads"
                  theme="transparent"
                />
                <Input
                  label="Ad Title *"
                  border="gray"
                  type="text"
                  placeholder="Get 70% Off Discount From Westered"
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
                  label="Description *"
                  border="gray"
                  type="text"
                  placeholder={t.productDescriptionPlaceholder}
                  theme="transparent"
                  className="pb-14"
                />
                <Text size={"2xl"} font={"bold"}>
                  Tags
                </Text>
                <Text color={"limeGreen"} font={"bold"}>
                  Recommended Tags
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
                          Tag {index + 1}
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
                    label="Set Budget"
                    type="number"
                    theme="transparent"
                    className="w-full"
                    border="gray"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 lg:flex-row">
                  <Input
                    type="date"
                    label="Date Start"
                    border="gray"
                    theme="transparent"
                  />
                  <Input
                    type="date"
                    label="Date End"
                    border="gray"
                    theme="transparent"
                  />
                </div>
              </form>
              <div className="mt-6 flex justify-between w-full gap-4">
                <div className="w-fit ">
                <Button
                  color="primary2"
                  theme="outline"
                  className="hidden cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary md:flex"
                >
                  Cancel
                </Button>
                </div>
                <div className="flex gap-4">
                <Button
                  color="primary2"
                  theme="outline"
                  className="hidden cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary md:flex"
                >
                  Preview
                </Button>
                <div className="w-full">
                  <div className="block">
                    <Button color="primary2">
                      publish
                      <FaRegCircleCheck size={25} />
                    </Button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default AddAds;
