import logo from "../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#46A358] font-semibold border-b-2 border-[#46A358] pb-2"
      : "hover:text-[#46A358] transition duration-300 ease-in-out";

  return (
    <div className="container navbar flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className="font-extrabold text-[#46A358] text-2xl">GREENSHOP</p>
      </div>

      <ul className="flex gap-[50px]">
        <li>
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/plant-care" className={navLinkClass}>
            Plant Care
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className={navLinkClass}>
            Blogs
          </NavLink>
        </li>
      </ul>

      <div className="flex gap-[30px] items-center">
        <CiSearch className="w-[20px] h-[20px]" />
        <CiShoppingCart className="w-[20px] h-[20px]" />
        <button className="btn bg-[#46A358] text-white flex items-center gap-1 px-4 py-2 rounded">
          <IoIosLogOut />
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
