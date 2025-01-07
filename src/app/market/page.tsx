/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Box from "~/_components/Box";
import CartItems from "~/_components/CartItems";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { IoMdArrowForward } from "react-icons/io";
import Button from "~/_components/Button";
import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Products from "~/_components/Porducts";
import { useRouter } from "next/navigation";
import { BsFillFilterSquareFill } from "react-icons/bs";

const Market = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("product");
  const [search, setSearch] = useState("");

  const handleButtonClick = (button: any) => {
    setSelected(button);
  };

  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/computer.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/mobile.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/airpods.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/airpods.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/mobile.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 6,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/computer.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
  ];

  const cartItemsService = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/service.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/service.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 6,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/iphone.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/iphone.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
  ];

  const productsService = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
  ];

  const handleClickButton = () => {
    router.push("/add-product");
  };
  return (
    <>
      <Container>
        <div className="flex gap-5">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary pl-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  Market Place
                </Text>
              </div>
            </div>
            <div className="gap-2 pr-2 pt-2">
              <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                <div className="mb-3 hidden md:block">
                  <label htmlFor="icon" className="sr-only">
                    Search
                  </label>
                  <div className="relative min-w-[150px]">
                    <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                      <svg
                        className="size-4 flex-shrink-0 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      id="icon"
                      name="icon"
                      className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      placeholder="Search for Market"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  selected === "product" ? "bg-bgPrimary" : "bg-transparent"
                } flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick("product")}
              >
                <img
                  src="/images/product.png"
                  alt="Product"
                  className="w-[25px]"
                />
                <Text font={"bold"}>Product</Text>
              </div>
              <div
                className={`${
                  selected === "service" ? "bg-bgPrimary" : "bg-transparent"
                } mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick("service")}
              >
                <img
                  src="/images/services.png"
                  alt="Service"
                  className="w-[25px]"
                />
                <Text font={"bold"}>Service</Text>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/5">
            <div className="flex items-center">
              <div className="mb-4 flex w-full justify-end">
                <div className="flex w-[220px] items-center gap-4 md:w-fit">
                  <GrFavorite
                    className="hidden md:block"
                    size={40}
                    color="red"
                  />
                  <HiOutlineShoppingCart
                    className="disabled -z-10 text-white md:block md:text-primary"
                    size={40}
                  />
                  {selected === "product" ? (
                    <Button
                      onClick={handleClickButton}
                      className="hidden md:block"
                    >
                      Add Product
                    </Button>
                  ) : (
                    <Button className="hidden md:block">Add Service</Button>
                  )}
                </div>
              </div>
            </div>
            <Box
              rounded="none"
              padding="0"
              className="-mt-[90px] px-0 pb-[120px] md:mb-8 md:px-4 md:pb-[20px]"
            >
              <div className="block pt-4 md:hidden">
                <div className="flex w-1/5 gap-2 p-4">
                  <div
                    className={`${
                      selected === "product"
                        ? "bg-bgSecondary"
                        : "bg-transparent"
                    } flex min-w-[150px] cursor-pointer gap-2 rounded-xl px-6 py-4`}
                    onClick={() => handleButtonClick("product")}
                  >
                    <img
                      src="/images/product.png"
                      alt="Product"
                      className="w-[25px]"
                    />
                    <Text font={"bold"}>Product</Text>
                  </div>
                  <div
                    className={`${
                      selected === "service"
                        ? "bg-bgSecondary"
                        : "bg-transparent"
                    } flex min-w-[150px] cursor-pointer gap-2 rounded-xl px-6 py-4`}
                    onClick={() => handleButtonClick("service")}
                  >
                    <img
                      src="/images/services.png"
                      alt="Service"
                      className="w-[25px]"
                    />
                    <Text font={"bold"}>Service</Text>
                  </div>
                </div>
              </div>
              {selected === "product" ? (
                <div>
                  <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-24">
                    <div className="flex flex-col items-center justify-center bg-bgThird md:bg-bgPrimary">
                      <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                        <Text
                          font={"bold"}
                          className="text-center text-[30px] md:text-[35px] xl:text-[48px]"
                        >
                          Shop for Success:
                        </Text>
                        <Text
                          font={"bold"}
                          className="text-center text-[30px] md:text-[35px] xl:text-[48px]"
                        >
                          Study Tools You Need
                        </Text>
                        <Text
                          font={"medium"}
                          size={"xl"}
                          className="mt-4 text-center"
                        >
                          Explore our wide selection of products designed to
                          enhance your study experience. From essential supplies
                          to innovative tools, discover everything you need to
                          stay organized, focused, and motivated. Start
                          equipping yourself for academic excellence today.
                        </Text>
                      </div>
                      <div className="min-w-[350px] mb-3 block md:hidden">
                        <label htmlFor="icon" className="sr-only">
                          Search
                        </label>
                        <div className="relative flex w-full">
                          <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            id="icon"
                            name="icon"
                            className="block w-full rounded-lg border shadow border-borderPrimary px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                            placeholder="Search for any product"
                          />
                          <BsFillFilterSquareFill className="cursor-pointer absolute right-2 top-[6px] text-primary" size={25} />
                        </div>
                      </div>
                      <div className="w-full">
                        <img
                          src="/images/devices.png"
                          alt="Devices Photo"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                      <Text
                        font={"bold"}
                        className="mt-6 text-center text-[30px] md:text-[42px] xl:text-[48px]"
                      >
                        View all products
                      </Text>
                      <Text
                        font={"medium"}
                        size={"xl"}
                        className="mt-4 text-center"
                      >
                        Find any product whether it&apos;s stuff you need for
                        studying
                      </Text>
                    </div>
                    <CartItems cartItems={cartItems} />
                    <Link
                      rel="stylesheet"
                      href="/opream"
                      className="flex items-center gap-2 rounded border-2 border-borderSecondary px-6 py-4 font-semibold hover:border-primary2 hover:bg-bgThird hover:text-primary2"
                    >
                      SEE ALL <IoMdArrowForward className="text-xl" />
                    </Link>
                    <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                      <Text
                        font={"bold"}
                        className="text-[30px] md:text-[42px] xl:text-[48px]"
                      >
                        Top product
                      </Text>
                    </div>
                  </div>
                  <Products products={products} />
                </div>
              ) : (
                <div>
                  <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-24">
                    <div className="flex flex-col items-center justify-center bg-bgThird md:bg-bgPrimary">
                      <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                        <Text
                          font={"bold"}
                          className="text-center text-[30px] md:text-[35px] xl:text-[48px]"
                        >
                          Boost Your Learning Journey:
                        </Text>
                        <Text
                          font={"bold"}
                          className="text-center text-[30px] md:text-[35px] xl:text-[48px]"
                        >
                          Interactive Lessons, Study Kits, and Expert Advice
                        </Text>
                      </div>
                    </div>
                    <div className="xl:1/2 mt-8 flex w-full flex-col items-center p-4 md:w-2/3">
                      <Text
                        font={"bold"}
                        className="text-center text-[30px] md:text-[42px] xl:text-[48px]"
                      >
                        View all Services
                      </Text>
                      <Text
                        font={"medium"}
                        size={"xl"}
                        className="mt-4 text-center"
                      >
                        Find services and resources to support your study needs!
                      </Text>
                    </div>
                    <CartItems cartItems={cartItemsService} />
                    <Link
                      rel="stylesheet"
                      href="/opream"
                      className="flex items-center gap-2 rounded border-2 border-borderSecondary px-6 py-4 font-semibold hover:border-primary2 hover:bg-bgThird hover:text-primary2"
                    >
                      SEE ALL <IoMdArrowForward className="text-xl" />
                    </Link>
                    <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                      <Text
                        font={"bold"}
                        className="text-[30px] md:text-[42px] xl:text-[48px]"
                      >
                        Top product
                      </Text>
                    </div>
                  </div>
                  <Products products={productsService} />
                </div>
              )}
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Market;
