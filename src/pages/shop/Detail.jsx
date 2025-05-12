import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Detail = () => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products[15]))
      .catch((err) => console.log("Xatolik:", err));
  }, []);

  if (!product) return <div>Yuklanmoqda...</div>;

  const getSizeClass = (size) =>
    selectedSize === size
      ? "border border-[#46A358] text-[#46A358] rounded-full w-[28px] h-[28px] flex items-center justify-center cursor-pointer"
      : "border border-[#EAEAEA] text-[#727272] rounded-full w-[28px] h-[28px] flex items-center justify-center cursor-pointer";

  return (
    <div className="container flex flex-col gap-10 mt-[36px]">
      <div className="flex gap-2 items-center">
        <p>Home </p>
        <p>/ Shop</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[100px] h-[100px] border border-white hover:border-green-500 cursor-pointer transition duration-300 ease-in-out"
            />
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[100px] h-[100px] border border-white hover:border-green-500 cursor-pointer transition duration-300 ease-in-out"
            />
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[100px] h-[100px] border border-white hover:border-green-500 cursor-pointer transition duration-300 ease-in-out"
            />
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[100px] h-[100px] border border-white hover:border-green-500 cursor-pointer transition duration-300 ease-in-out"
            />
          </div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[400px] h-[400px]"
          />
        </div>

        <div className="flex flex-col gap-[20px] w-[573px]">
          <h2 className="text-[28px] font-bold">{product.title}</h2>

          <div className="flex items-center justify-between border-b pb-2 border-b-gray-500">
            <p className="text-[#46A358] font-bold text-[22px]">
              ${product.price}
            </p>
            <div className="flex gap-1">
              <FaStar className="text-[#FFAC0C]" />
              <FaStar className="text-[#FFAC0C]" />
              <FaStar className="text-[#FFAC0C]" />
              <FaStar className="text-[#FFAC0C]" />
              <FaStar className="text-[#C4C4C4]" />
              <p className="text-[15px] pl-1">19 Customer Review</p>
            </div>
          </div>

          <p className="font-medium text-[15px]">Short Description:</p>
          <p className="text-[14px] text-[#727272]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground.
          </p>

          <p className="text-[15px] font-medium mt-2">Size:</p>
          <div className="flex gap-[10px] mt-1">
            {["S", "M", "L", "XL"].map((size) => (
              <p
                key={size}
                onClick={() => setSelectedSize(size)}
                className={getSizeClass(size)}
              >
                {size}
              </p>
            ))}
          </div>
          <div className="flex gap-6">
            <div className="flex gap-[20px] items-center">
              <button className="btn rounded-full ">-</button>
              <p>1</p>
              <button className="btn">+</button>
            </div>
            <div className="flex gap-[10px]">
              <button className="btn">BUY NOW</button>
              <button className="border border-[#46A358] text-[#46A358] p-x-[17px] py-[7px] rounded-[6px]">
                ADD TO CART
              </button>
              <button className="border border-[#46A358] text-[#46A358] button">
                <CiHeart />
              </button>
            </div>
          </div>

          <p className="text-gray-500">SKU: {product.sku}</p>
          <p className="text-gray-500">Categories: {product.category}</p>
          <p className="text-gray-500">Brand: {product.brand}</p>
          <div className="flex items-center gap-[20px]">
            <p className="font-medium">Share this products:</p>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <CiMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
