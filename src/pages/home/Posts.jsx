import { postItems } from "../../statick";
import { GoArrowRight } from "react-icons/go";

const Posts = () => {
  return (
    <div className="container footer">
      <div className="flex flex-col items-center mb-[35px] greenshop">
        <p className="font-bold text-[36px]">Our Blog Posts</p>
        <p className="text-[14px] text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.{" "}
        </p>
      </div>

      <div className="flex gap-[44px]">
        {postItems?.map((item) => (
          <div className="flex flex-col gap-2">
            <img src={item.img} alt="" />

            <div>
              <p className="text-[#46A358] text-[14px]">{item.date}</p>
              <p className="text-[20px] font-bold">{item.title}</p>
              <p className="text-[14px]">{item.desc}</p>
              <p className="flex items-center gap-2 text-[14px] font-medium">
                {item.more}
                <GoArrowRight />{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
