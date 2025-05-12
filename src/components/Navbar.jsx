import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container navbar flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className="font-extrabold text-[#46A358] text-2xl">GREENSHOP</p>
      </div>

      <ul className="flex gap-[50px]">
        <li className="hover:text-[#46A358] cursor-pointer transition duration-300 ease-in-out ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-[#46A358] cursor-pointer transition duration-300 ease-in-out">
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li className="hover:text-[#46A358] cursor-pointer transition duration-300 ease-in-out">
          Plant Care
        </li>
        <li className="hover:text-[#46A358] cursor-pointer transition duration-300 ease-in-out">
          Blogs
        </li>
      </ul>

      <div className="flex gap-[30px] items-center">
        <CiSearch className="w-[20px] h-[20px]" />
        <CiShoppingCart className="w-[20px] h-[20px]" />
        <button className="btn bg-[#46A358] text-white flex items-center gap-1">
          <IoIosLogOut />
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
