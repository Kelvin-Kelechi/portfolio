import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/mlogo.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between  items-center px-4 bg-[#0a192f] text-gray-300 font-serif">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt=" logo image" style={{ width: "100px" }} />
        </Link>
      </div>
      {/*menu*/}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10 text-orange-500">
        {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      {/*Mobile-menu*/}

      <ul
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed w-[100%] text-center backdrop-blur-sm left-0 top-[80px] bg-black/60 h-full border-r border-gray-800 bg-blue ease-in-out duration-500 "
        }
      >
        <li className="p-6  uppercase  border-b border-gray-600">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-6  uppercase border-b border-gray-600">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-6  uppercase border-b border-gray-600">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-6  uppercase border-b border-gray-600">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="p-6  uppercase ">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social-icons*/}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/angigor-kelvin-21162023b/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[10px] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300 "
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
