/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FaWindows } from 'react-icons/fa';
import { SiMicrosoftoffice } from 'react-icons/si';

const serviceData = [
  {
    icon: <FaWindows size={80} color='#0078d4'/>,
    keyname: 'Windows 10 Home',
    price: 750,
  },
  {
    icon: <SiMicrosoftoffice size={80} color='#eb3c00'/>,
    keyname: 'Office2019 PRO Plus',
    price: 1100,
  },
  {
    icon: <FaWindows size={80} color='#0078d4'/>,
    keyname: 'Windows 11 Home(OEM)',
    price: 3900,
  },
  {
    icon: <SiMicrosoftoffice size={80} color='#eb3c00'/>,
    keyname: 'Office2021 PRO Plus',
    price: 1300,
  },
  {
    icon: <FaWindows size={80} color='#0078d4'/>,
    keyname: 'Windows 11 PRO',
    price: 1100,
  },
  {
    icon: <SiMicrosoftoffice size={80} color='#eb3c00'/>,
    keyname: 'Office2021 PRO Plus(Bind)',
    price: 5500,
  },
  {
    icon: <FaWindows size={80} color='#0078d4'/>,
    keyname: 'Windows 10 PRO(OEM)',
    price: 3900,
  },
  {
    icon: <SiMicrosoftoffice size={80} color='#eb3c00'/>,
    keyname: 'Office2021 PRO Plus(Mac)',
    price: 7000,
  }
];

const ServiceBlock = (props) => {
  return (
    <div className=" bg-[#ffffff] border-solid border-2 shadow-xl p-4 rounded-3xl hover:bg-[#6E4294] flex flex-col items-center justify-center">
    {props.icon}
    <p className='p-2 text-[#c3c3c3] font-bold text-center'>{props.keyname}</p>
    <p className='p-1 text-[#c3c3c3]'>Activation Key</p>
    {/* <p className='p-1 text-[#c3c3c3]'>Rs.{props.price}</p> */}
  </div>
  );
};



function Services() {
  const navigate = useNavigate();
  const handleGoToServices = () => {
    navigate("/servicespage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-bold mt-7 mb-10">Our Services</h1>
      <div className="flex flex-wrap mx-auto px-4 lg:max-w-[1240px]">
        {serviceData.map((service, index) => (
          <div className="w-full sm:w-/2 md:w-1/4 lg:w-1/4 pl-12 pr-12 pt-10" key={index}>
            <ServiceBlock {...service} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
        className="pl-4 pr-4 bg-[#6E4294] hover:bg-[#FDA216] text-white font-bold rounded-3xl h-10 w-32"
        onClick={handleGoToServices}>
          More
          </button>
        </div>

    </div>
  );
}

export default Services;
