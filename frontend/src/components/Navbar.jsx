import { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
import navlogo from "../assets/navlogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGoToActivation = () => {
    navigate("/activation");
    setIsMenuOpen(false);
  };
  const handleScrollToTop = () => {
    setIsMenuOpen(false);
    navigate("/");
  };
  const handleScrollToTopHome = () => {
    navigate("/");
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 bg-white ">
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
          <h1 className="text-3xl font-bold text-[black]">
            <img
            src={navlogo} 
            className="w-16 cursor-pointer"
            onClick={() => handleScrollToTopHome()}/>
          </h1>
          <ul className={`hidden md:flex items-center space-x-4 md:space-x-8`}>
            <li
              className="pl-4 pr-4 cursor-pointer"
              onClick={() => handleScrollToTopHome()}
            >
              Home
            </li>
            <li
              className="pl-4 pr-4 cursor-pointer"
              onClick={() => handleScrollToTop()}
            >
              <a href="/#services">Services</a>
            </li>
            <li
              className="pl-4 pr-4 cursor-pointer"
              onClick={() => handleScrollToTop()}
            >
              <a href="/#about">About us</a>
            </li>
            <li
              className="pl-4 pr-4 cursor-pointer"
              onClick={() => handleScrollToTop()}
            >
              <a href="/#contact">Contact us</a>
            </li>
            <li>
              <button
                className="pl-4 pr-4 bg-[#FDA216] hover:bg-[#6E4294] text-white font-bold rounded-3xl h-10"
                onClick={handleGoToActivation}
              >
                Get Activation Key
              </button>
            </li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden">
            <ul className="md:hidden flex flex-col items-center space-y-4 mt-2 bg-transparent">
              <li
                className="pl-4 pr-4 border-b border-gray-600 cursor-pointer"
                onClick={() => handleScrollToTopHome()}
              >
                Home
              </li>
              <li
                className="pl-4 pr-4 border-b border-gray-600 cursor-pointer"
                onClick={() => handleScrollToTop()}
              >
                <a href="/#services">Services</a>
              </li>
              <li
                className="pl-4 pr-4 border-b border-gray-600 cursor-pointer"
                onClick={() => handleScrollToTop()}
              >
                <a href="/#about">About us</a>
              </li>
              <li
                className="pl-4 pr-4 border-b border-gray-600 cursor-pointer"
                onClick={() => handleScrollToTop()}
              >
                <a href="/#contact">Contact us</a>
              </li>
              <li>
                <button
                  className="pl-4 pr-4 bg-[#FDA216] hover:bg-[#6E4294] text-white font-bold rounded-3xl h-10"
                  onClick={handleGoToActivation}
                >
                  Get Activation Key
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
