/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { FaStar, FaStarHalf, FaCircle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Button from "~/_components/Button";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Products from "~/_components/Porducts";

const ProductDetails = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingClick = (index: any) => {
    setRating(index);
  };

  const handleReviewChange = (e: any) => {
    setReview(e.target.value);
  };

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

  return (
    <>
      <Container>
        <div className="flex justify-end md:justify-between">
          <div className="hidden md:block">
            <Text font={"bold"} size={"4xl"}>
              Product Details
            </Text>
          </div>
          <div className="flex w-fit items-center gap-4">
            <GrFavorite size={40} color="red" />
            <HiOutlineShoppingCart size={40} className="text-primary" />
            <Button>Add Product</Button>
          </div>
        </div>
        <Box className="my-8 pb-[120px] md:pb-[20px]">
          <div className="mt-24 flex flex-col gap-4">
            <div className="flex flex-col gap-20 p-4 md:flex-row">
              <div className="flex w-full flex-col-reverse items-center justify-center gap-4 md:w-1/2 md:flex-row md:items-start">
                <div className="flex flex-row gap-4 md:flex-col">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="flex max-h-[80px] min-h-[60px] min-w-[60px] max-w-[80px] items-center justify-center rounded-xl bg-[#19213D14] p-2 dark:bg-[#434750]"
                    >
                      <img
                        src="/images/iphone.png"
                        className="h-full w-full object-cover"
                        alt="Product Thumbnail"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex h-[300px] w-[300px] items-center justify-center rounded-xl bg-[#19213D14] p-8 dark:bg-[#434750] md:h-[400px] md:w-[400px]">
                  <img
                    src="/images/iphone.png"
                    alt="Main Product Photo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <Text
                  font={"bold"}
                  size={"4xl"}
                  className="text-center md:text-start"
                >
                  Smartphone
                </Text>
                <Text
                  font={"semiBold"}
                  size={"2xl"}
                  color={"gray"}
                  className="mt-2 text-center md:text-start"
                >
                  $49.00
                </Text>
                <div className="flex items-center justify-center gap-2 text-xl md:justify-start">
                  <div className="flex gap-1 border-r-2 border-borderPrimary py-2 pr-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                  <Text font={"semiBold"} size={"xl"} color={"gray"}>
                    5 Customer Reviews
                  </Text>
                </div>
                <Text size={"xl"} className="mt-4 text-center md:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Text
                  size={"xl"}
                  color={"gray"}
                  className="my-4 text-center md:text-start"
                >
                  Color
                </Text>
                <div className="mb-8 flex items-center justify-center gap-4 md:justify-start">
                  <FaCircle className="text-2xl text-red-500" />
                  <FaCircle className="text-2xl text-green-500" />
                  <FaCircle className="text-2xl text-blue-500" />
                </div>
                <div className="flex justify-center md:justify-start">
                  <Link
                    href="#"
                    className="rounded-xl border border-borderSecondary p-4 text-xl font-semibold"
                  >
                    Connect With Seller
                  </Link>
                </div>
                <div className="mt-14 border-b border-borderPrimary"></div>
                <table className="mt-10 w-full table-auto">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-gray-500">SKU</td>
                      <td className="px-4 py-2 text-gray-500">:</td>
                      <td className="px-4 py-2 text-gray-500">SS001</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-500">Category</td>
                      <td className="px-4 py-2 text-gray-500">:</td>
                      <td className="px-4 py-2 text-gray-500">Smartphone</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-500">Tags</td>
                      <td className="px-4 py-2 text-gray-500">:</td>
                      <td className="px-4 py-2 text-gray-500">
                        Electronics, Mobile, Gadgets
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4">
              <Text color={"primary2"} font={"bold"} size={"4xl"}>
                Details
              </Text>
              <Text font={"semiBold"} className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text font={"semiBold"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <ul className="mt-4 list-disc pl-5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="w-full p-4">
                <Text font={"bold"} size={"xl"} className="mb-4">
                  Reviews
                </Text>

                <div className="flex items-center justify-between border-b border-borderPrimary pb-2">
                  <div className="flex items-center">
                    <Text font={"bold"} size={"4xl"} className="pr-2">
                      4.2
                    </Text>
                    <Text color={"gray"} size={"xl"}>
                      - 54 Reviews
                    </Text>
                  </div>
                  <div className="relative inline-block w-48">
                    <label
                      htmlFor="sortBy"
                      className="mb-2 block text-textPrimary"
                    >
                      Sort By
                    </label>
                    <select
                      id="sortBy"
                      className="block w-full rounded border border-borderPrimary bg-bgPrimary px-3 py-2 text-gray-700 text-textPrimary shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="price">Price</option>
                      <option value="popularity">Popularity</option>
                      <option value="rating">Rating</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                </div>
                <div className="my-4 flex gap-4">
                  <div className="bg-bgThird my-4 flex h-[50px] w-[50px] items-center justify-center rounded-full text-primary2">
                    ED
                  </div>
                  <div className="w-full p-4">
                    <div className="flex w-full items-start justify-between">
                      <Text font={"semiBold"}>Emily Davis</Text>
                      <div className="flex gap-1 py-2 pr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                      </div>
                    </div>
                    <div>
                      <Text color={"gray"}>1 Week ago</Text>
                      <Text color={"gray"}>
                        This company always goes above and beyond to satisfy
                        their customers.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex gap-4">
                  <div className="bg-bgThird my-4 flex h-[50px] w-[50px] items-center justify-center rounded-full text-primary2">
                    ED
                  </div>
                  <div className="w-full p-4">
                    <div className="flex w-full items-start justify-between">
                      <Text font={"semiBold"}>Emily Davis</Text>
                      <div className="flex gap-1 py-2 pr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                      </div>
                    </div>
                    <div>
                      <Text color={"gray"}>1 Week ago</Text>
                      <Text color={"gray"}>
                        This company always goes above and beyond to satisfy
                        their customers.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="my-4 flex gap-4">
                  <div className="bg-bgThird my-4 flex h-[50px] w-[50px] items-center justify-center rounded-full text-primary2">
                    ED
                  </div>
                  <div className="w-full p-4">
                    <div className="flex w-full items-start justify-between">
                      <Text font={"semiBold"}>Emily Davis</Text>
                      <div className="flex gap-1 py-2 pr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                      </div>
                    </div>
                    <div>
                      <Text color={"gray"}>1 Week ago</Text>
                      <Text color={"gray"}>
                        This company always goes above and beyond to satisfy
                        their customers.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-4">
                <Text font={"bold"} size={"xl"}>
                  Add Review
                </Text>
                <div className="w-full space-y-4">
                  <div className="flex gap-4 py-2 text-yellow-500">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className={`cursor-pointer text-4xl ${
                            index < rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                          onClick={() => handleRatingClick(index + 1)}
                        />
                      ))}
                  </div>

                  <textarea
                    value={review}
                    onChange={handleReviewChange}
                    placeholder="Write your review here..."
                    rows={10}
                    className="w-full rounded border border-borderPrimary px-3 py-2 shadow focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button>Submit</Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                <Text
                  font={"bold"}
                  className="text-[30px] md:text-[42px] xl:text-[48px]"
                >
                  Top product
                </Text>
              </div>
            </div>
          </div>
          <Products products={products} />
        </Box>
      </Container>
    </>
  );
};

export default ProductDetails;
