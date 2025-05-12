import React from "react";
import { blogItems } from "../../statick";
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  return (
    <div className="container footer flex justify-between items-center">
      {blogItems?.map((item, inx) => (
        <div key={inx} className="flex items-center text-end">
          <img src={item.img} alt="" />
          <div className="flex flex-col gap-2">
            <p className="font-black text-[20px]">{item.title}</p>
            <p className="text-[14px] text-[#727272] footerUl">{item.desc}</p>
            <div className="flex justify-end">
              <button className="bg-[#46A358] btn flex items-center ">
                Fing More
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
