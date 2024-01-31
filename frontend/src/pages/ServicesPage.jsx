/* eslint-disable react/prop-types */
// import { FaWindows } from 'react-icons/fa';
// import { SiMicrosoftoffice, SiCanva } from 'react-icons/si';

import serviceData from './ServicesList'

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

function ServicesPage() {
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
    </div>
  );
}

export default ServicesPage;
