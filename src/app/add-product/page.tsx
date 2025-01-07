/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { TbPhotoPlus } from "react-icons/tb";
import Button from "~/_components/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaCube, FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const AddProduct = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true); // Show modal
  };

  const closeModal = () => {
    setModalOpen(false); // Hide modal
  };

  const cancel = () => {
    toast.success("Product added Canceled successfully");
    router.push("/");
  };

  return (
    <>
      <Container>
        <Box
          rounded="none"
          className="-mt-5 flex justify-center pb-[120px] md:my-8 md:pb-[20px]"
        >
          <div className="flex w-full max-w-5xl flex-col items-center p-4 md:p-8">
            <div className="my-4 flex w-full justify-center gap-4 sm:gap-8">
              {[
                { step: 1, label: "Product Information" },
                { step: 2, label: "Product Detail Information" },
                { step: 3, label: "Product Variant Creation" },
                { step: 4, label: "Logistics and Shipment" },
                { step: 5, label: "Bulk Purchase Discounts" },
              ].map(({ step, label }) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      currentStep > step
                        ? "border-primary bg-primary font-semibold text-white md:border-primary2 md:bg-primary2"
                        : currentStep == step
                          ? "border-primaryHover bg-primaryHover font-semibold text-white md:border-primary2Hover md:bg-primary2Hover"
                          : "border-primary font-semibold text-primary md:border-primary2 md:text-primary2"
                    }`}
                  >
                    {currentStep > step ? <FaCheck size={20} /> : step}
                  </div>

                  <Text
                    font="bold"
                    className="mt-1 text-center text-xs md:text-sm"
                    color={"gray"}
                  >
                    {label}
                  </Text>
                </div>
              ))}
            </div>

            <Box border="none" shadow="none" className="mt-4 w-full">
              {currentStep === 1 && <StepOne />}
              {currentStep === 2 && <StepTwo previousStep={previousStep} />}
              {currentStep === 3 && <StepThree previousStep={previousStep} />}
              {currentStep === 4 && <StepFour previousStep={previousStep} />}
              {currentStep === 5 && <StepFive previousStep={previousStep} />}
            </Box>

            <div className="mt-4 flex w-full flex-col-reverse justify-between gap-4 p-4 md:flex-row">
              <div className="hidden w-full md:block md:w-40">
                <Button
                  color="primary2"
                  theme="outline"
                  onClick={cancel}
                  className="cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary"
                >
                  <RiDeleteBinLine size={20} />
                  Cancel
                </Button>
              </div>
              <div className="block w-full md:hidden md:w-40">
                <Button
                  color="primary"
                  theme="outline"
                  onClick={cancel}
                  className="cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary hover:bg-bgSecondary"
                >
                  <RiDeleteBinLine size={20} />
                  Cancel
                </Button>
              </div>
              <div className="flex w-full gap-4 md:w-[336px]">
                <Button
                  color="primary2"
                  theme="outline"
                  className="hidden cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary md:flex"
                >
                  <BsFileEarmarkText size={20} />
                  Save As a draft
                </Button>
                {currentStep === 5 ? (
                  <div className="w-full">
                    <div className="hidden md:block">
                      <Button
                        onClick={openModal}
                        color="primary2"
                        className="rounded-lg bg-primary2 px-4 py-2 font-bold text-white hover:bg-primary2"
                      >
                        Publish
                        <FaRegCircleCheck size={25} />
                      </Button>
                    </div>
                    <div className="block md:hidden">
                      <Button
                        onClick={openModal}
                        color="primary"
                        className="rounded-lg bg-primary2 px-4 py-2 font-bold text-white hover:bg-primary2"
                      >
                        Publish
                        <FaRegCircleCheck size={25} />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="hidden md:block">
                      <Button
                        onClick={nextStep}
                        color="primary2"
                        className="rounded-lg bg-primary2 px-4 py-2 font-bold text-white hover:bg-primary2"
                        disabled={currentStep === 5}
                      >
                        Continue
                      </Button>
                    </div>
                    <div className="block md:hidden">
                      <Button
                        onClick={nextStep}
                        color="primary"
                        className="rounded-lg bg-primary2 px-4 py-2 font-bold text-white hover:bg-primary2"
                        disabled={currentStep === 5}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Container>
      {isModalOpen && (
        <div
          className="fixed top-0 z-[1001] flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Close modal when clicking on the overlay
        >
          <div
            className="flex flex-col items-center justify-center rounded-lg bg-bgPrimary p-6 text-center shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="w-fit">
              <img src="/images/box-tick.png" alt="Product Published" />
            </div>
            <Text
              color={"primary2"}
              font={"semiBold"}
              size={"2xl"}
              className="mt-4"
            >
              Product Published
            </Text>
          </div>
        </div>
      )}
    </>
  );
};

const StepOne = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <Text className="md:text-primary2" size={"2xl"} font={"bold"}>
        Product Information
      </Text>
      <form className="mt-4 flex flex-col gap-4">
        <Input
          label="Product Name"
          border="gray"
          type="text"
          placeholder="Enter the product name"
          theme="transparent"
        />
        <Input
          label="Product Short Description"
          border="gray"
          type="text"
          placeholder="Enter product short description"
          theme="transparent"
        />

        <Input
          label="Product Images"
          id="product-image"
          name="product-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          onClick={() => document.getElementById("product-image")?.click()}
          className="flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-borderPrimary text-textSecondary"
        >
          <div className="flex flex-col items-center">
            <TbPhotoPlus size={50} />
            {fileName ? (
              <p className="mt-2 text-textPrimary">{fileName}</p>
            ) : (
              <p className="mt-2 text-textSecondary">Browse or Desktop</p>
            )}
          </div>
        </div>

        <Input
          label="Product Description"
          border="gray"
          type="text"
          placeholder="A detailed description of the product helps customers to learn more about the product."
          theme="transparent"
          className="pb-14"
        />
        <div className="flex items-center justify-start gap-4">
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="currency">
              Product Price Currency
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-48 rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
            >
              <option value="unselected">Unselected</option>
              <option value="$">$</option>
              <option value="PE">PE</option>
            </select>
          </div>

          <div className="w-80">
            <Input
              label="Product Price"
              type="number"
              theme="transparent"
              className="w-full"
              border="gray"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const StepTwo = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
      <div>
        <Text className="md:text-primary2" size={"2xl"} font={"bold"}>
          Product Detail Information
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <div>
            <label className="font-semibold" htmlFor="currency">
              Product Category
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
            >
              <option value="unselected">Category Name</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div>
            <label className="font-semibold" htmlFor="currency">
              SubCategory
            </label>
            <select
              name="SubCategory"
              id="SubCategory"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
            >
              <option value="unselected">Category Name</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <Text size={"2xl"} font={"bold"}>
            Product Specification
          </Text>
          <div className="grid w-full grid-cols-1 gap-4 md:w-3/4 md:grid-cols-2">
            <div>
              <label htmlFor="SubCategory1">Material</label>
              <select
                name="SubCategory1"
                id="SubCategory1"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory2">Weight</label>
              <select
                name="SubCategory2"
                id="SubCategory2"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory3">Production Technique</label>
              <select
                name="SubCategory3"
                id="SubCategory3"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory4">Absorbency</label>
              <select
                name="SubCategory4"
                id="SubCategory4"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <Text size={"2xl"} font={"bold"}>
            Product Tags
          </Text>
          <Text color={"limeGreen"} font={"bold"}>
            Recommended Tags
          </Text>
          <div>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-12 w-28 items-center justify-evenly rounded-full border border-primary text-primary md:border-primary2 md:text-primary2"
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
        </form>
      </div>
    </div>
  );
};

const StepThree = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
      <div>
        <Text className="md:text-primary2" size={"2xl"} font={"bold"}>
          Product Variant Creation
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <Text size={"xl"} font={"bold"}>
            Product Attributes
          </Text>
          <div className="grid w-full grid-cols-1 gap-4 md:w-3/4 md:grid-cols-2">
            <div>
              <label htmlFor="SubCategory1">Color</label>
              <select
                name="SubCategory1"
                id="SubCategory1"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory2">Style</label>
              <select
                name="SubCategory2"
                id="SubCategory2"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory3">Size</label>
              <select
                name="SubCategory3"
                id="SubCategory3"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory4">Edge Design</label>
              <select
                name="SubCategory4"
                id="SubCategory4"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">Test</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const StepFour = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
      <div>
        <Text className="md:text-primary2" size={"2xl"} font={"bold"}>
          Logistics and Shipment Information
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <div>
            <label className="font-semibold" htmlFor="currency">
              Container Type
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-3/4"
            >
              <option value="unselected">Test</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="w-full md:w-80">
            <Input
              label="Quantity in Container"
              type="number"
              theme="transparent"
              className="w-full"
              border="gray"
            />
          </div>
          <div>
            <label className="font-semibold" htmlFor="currency">
              Product Dimensions (H x W x D)
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-1/2"
            >
              <option value="unselected">Category Name</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="w-full md:w-80">
            <Input
              label="Product Weight"
              type="number"
              theme="transparent"
              className="w-full"
              border="gray"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const StepFive = ({ previousStep }: { previousStep: () => void }) => {
  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline size={25} className="text-textSecondary" />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          Back
        </Text>
      </div>
      <div>
        <Text className="md:text-primary2" size={"2xl"} font={"bold"}>
          Bulk Purchase Discounts
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 p-4 md:bg-bgSecondary">
            <div>
              <Text size={"xl"} color={"gray"} font={"bold"} className="mb-8">
                Specify product quantity range and discount rate for discounts
              </Text>
              <div className="my-8">
                <label className="font-semibold" htmlFor="currency">
                  Product Quantity
                </label>
                <select
                  name="currency"
                  id="currency"
                  className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-1/2"
                >
                  <option value="unselected">Test</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className="flex items-center gap-1">
                  <IoIosInformationCircle size={20} className="text-primary2" />
                  <Text color={"primary2"}>
                    How many product purchases do you want to determine the
                    product discount?
                  </Text>
                </div>
              </div>
              <div>
                <label className="font-semibold" htmlFor="currency">
                  Discount
                </label>
                <select
                  name="currency"
                  id="currency"
                  className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-1/6"
                >
                  <option value="unselected">Test</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className="flex items-center gap-1">
                  <IoIosInformationCircle size={20} className="text-primary2" />
                  <Text color={"primary2"}>
                    What percentage discount do you want to set?
                  </Text>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/Discount.png" alt="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
