// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import logo from "../assets/logo.svg";

function Footer() {
  const navigate = useNavigate();

  const handleGoToActivation = () => {
    navigate("/activation")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoToServices = () => {
    navigate("/servicespage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToSection = (section) => {
    navigate("/");
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigateToTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="top-0 bg-[#fcfcfc] pt-5 mt-8 pb-5 ">
        <div className="flex justify-between items-center h-32 max-w-[1240px] mx-auto px-4 text-black sm:max-md:flex-col sm:max-md:h-[600px]">
          <img
            src={logo}
            className=" h-1/4 w-auto cursor-pointer  ml-3 md:h-32"
            onClick={() => handleNavigateToTop()}
          />
          <ul
            className={`flex-col items-center justify-center gap-1  flex space-x-4`}
          >
            <li></li>
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToSection("home")}
            >
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToSection("services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToSection("about")}
            >
              About Us
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToSection("contact")}
            >
              Contact Us
            </li>
            <li>
              <button className="cursor-pointer" onClick={handleGoToActivation}>
                Get Activation Key
              </button>
            </li>
          </ul>
          <ul
            className={`flex-col items-center justify-center gap-1 flex space-x-41 font-light`}
          >
            <li></li>
            <li
              className=" cursor-pointer font-semibold"
              onClick={handleGoToServices}
            >
              Services
            </li>
            <li className=" cursor-pointer" onClick={handleGoToServices}>
              Windows
            </li>
            <li className="cursor-pointer" onClick={handleGoToServices}>
              Microsoft Office
            </li>
            <li className="cursor-pointer" onClick={handleGoToServices}>
              Microsoft SQL Server
            </li>
            <li className="cursor-pointer" onClick={handleGoToServices}>
              Windows Server
            </li>
          </ul>
          <ul
            className={`flex-col items-center justify-center gap-1 flex font-light`}
          >
            <li></li>
            <li className="cursor-pointer" onClick={handleGoToServices}>
              Visio Professional
            </li>
            <li className="cursor-pointer" onClick={handleGoToServices}>
              Project Professional
            </li>
            <li className="h-4 cursor-pointer"></li>
            <li className="flex justify-center items-center cursor-pointer">
              <AiOutlineMobile className="mr-2" />
              <a href="tel:9822777101" className="text-gray-600">
              9822777101, 9822777102
              </a>
            </li>
            <li className="flex justify-center items-center cursor-pointer">
              <AiOutlineMail className="mr-2" />
              <a
                href="mailto:originalsoftwareproduct@gmail.com"
                className="text-gray-600 "
              >
                originalsoftwareproduct@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Footer;
