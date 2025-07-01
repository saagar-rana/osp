/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaWindows,FaServer } from "react-icons/fa";
import { SiMicrosoftoffice ,SiVmware,SiAdobe  } from "react-icons/si";
import { FaGoogleDrive } from "react-icons/fa6";
import googleDrive from "../assets/google-drive-svgrepo-com.svg"
import prof from "../assets/projectprofessional.png"
import vis from "../assets/Microsoft_Office_Visio_(2019).svg.png"
import access from "../assets/microsoft-access-2013-logo-svgrepo-com.svg"
import lumion from "../assets/all-business-no-fluff-lumion-3d-11562996320sgx1asth48.png"
import autodesk from "../assets/autodesk-svgrepo-com.svg"
import parallels from "../assets/parallels.png"
import antivirus from "../assets/antivirus.svg"
import openai from "../assets/openai.svg"
import netflix from "../assets/netflix-1-logo-svgrepo-com.svg"
import grammarly from "../assets/grammarly-svgrepo-com.svg"
import spotify from "../assets/spotify-color-svgrepo-com.svg"
import coral from "../assets/coral.jpeg"
import design from "../assets/design-education-learning-svgrepo-com.svg"
import linkedin from "../assets/linkedin-color-svgrepo-com.svg"
import ccleaner from "../assets/ccleaner-svgrepo-com.svg"
import macrorit from "../assets/macrorit.jpeg"
import aomei from "../assets/Aomei-Logo.png"
import invideo from "../assets/invideo.jpeg"
import canva from "../assets/canva.png"
import nitro from "../assets/nitro.png"
import quickbooks from "../assets/quickbooks.png"

const GOOGLE_SHEET_URL =
  "https://opensheet.elk.sh/1WFRl9SjAtreNdzTcryLuq4qE_ceIsqvNQNYs2z7Khig/Sheet1";

const getCategoryIcon = (category) => {
  const iconSize = 50; // Adjusted size for better fit
  switch (category.toLowerCase()) {
    case "windows":
    case "enterprise":
    case 'bundle keys':
      return <FaWindows size={iconSize} color="#0078d4" />;
    case 'project':
      return <img src={prof} alt="Project Professional 2021" className='h-20 w-20'/>
    case "office 365":
    case "office 2021":
    case "office 2019":
    case "office 2016":
    case "office 2024":
      return <SiMicrosoftoffice size={iconSize} color="#eb3c00" />;
    case "visio":
      return <img src={vis} alt="Visio" className='h-20 w-20'/>
    case "vmware":
      return <SiVmware size={iconSize} color="#eb3c00" />;
    case "google":
      return <FaGoogleDrive size={iconSize} color="#4285F4" />;
    case "access":
      return <img src={access} alt="Access" className='h-20 w-20'/>
    case "server":
      return <FaServer size={iconSize} color="#eb3c00" />;
    case "lumion":
      return <img src={lumion} alt="Lumion" className='h-20 w-20'/>
    case "google drive":
      return <img src={googleDrive} alt="Google Drive" className='h-20 w-20'/>
    case "autodesk":
      return <img src={autodesk} alt="Autodesk" className='h-20 w-20'/>
    case "parallel desktop":
      return <img src={parallels} alt="Parallels" className='h-20 w-20'/>
    case "antivirus":
      return <img src={antivirus} alt="Antivirus" className='h-20 w-20'/>
    case "chatgpt":
      return <img src={openai} alt="OpenAI" className='h-20 w-20'/>
    case "netflix":
      return <img src={netflix} alt="Netflix" className='h-20 w-20'/>
    case "adobe":
      return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/600px-Adobe_Corporate_Logo.png" alt="Adobe" className='h-20 w-20 object-contain'/>;
    case "grammarly":
      return <img src={grammarly} alt="Grammarly" className='h-20 w-20'/>
    case "spotify":
      return <img src={spotify} alt="Spotify" className='h-20 w-20'/>
    case "coraldraw":
      return <img src={coral} alt="Coral Draw" className='h-20 w-20'/>
    case "design softwares":
      return <img src={design} alt="Design" className='h-20 w-20'/>
    case "linkedin":
      return <img src={linkedin} alt="LinkedIn" className='h-20 w-20'/>
    case "macrorit":
      return <img src={macrorit} alt="Macrorit" className='h-20 w-20'/>
    case "ccleaner":
      return <img src={ccleaner} alt="Ccleaner" className='h-20 w-20'/>
    case "aomei":
      return <img src={aomei} alt="Aomei" className='h-20 w-20'/>
    case "invideo":
      return <img src={invideo} alt="Invideo" className='h-20 w-20'/>
    case "quickbooks":
      return <img src={quickbooks} alt="Quickbooks" className='h-20 w-20'/>
    case "nitro":
      return <img src={nitro} alt="Nitro" className='h-20 w-20'/>
    case "canva":
      return <img src={canva} alt="Canva" className='h-20 w-20'/>
      default:
      return <span style={{ fontSize: '2rem' }}>📦</span>; // Adjusted emoji size
  }
};

const Modal = ({ company, products, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-center">{company} Products</h2>
      <div className="divide-y divide-gray-300">
        {products.map((item, idx) => (
          <div key={idx} className="py-3 flex gap-3 items-center">
            <span>{getCategoryIcon(item.Category)}</span>
            <div className="flex-1">
              <div className="font-medium">{item.Product}</div>
              {item.Subscription && (
                <div className="text-xs text-gray-500">{item.Subscription}</div>
              )}
            </div>
            <span className="ml-2 text-sm text-gray-600 whitespace-nowrap">{item.Price}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={onClose}
          className="bg-[#6E4294] hover:bg-[#FDA216] text-white px-4 py-2 rounded-2xl"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

function Services() {
  const [products, setProducts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(GOOGLE_SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        const cleaned = data.filter((d) => d.Product && d.Price);
        setProducts(cleaned);
      })
      .catch((err) => console.error("Error fetching sheet:", err));
  }, []);

  const categories = [...new Set(products.map((p) => p.Category?.trim()))];
  
  const filtered = selectedCompany
    ? products.filter((p) => p.Category?.trim() === selectedCompany)
    : [];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-6">
        Our Software Products
      </h1>

      {/* CATEGORY BLOCKS */}
      {!selectedCompany && (
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {categories.slice(0, showAll ? categories.length : 12).map((category, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedCompany(category);
                }}
                className="cursor-pointer p-4 rounded-xl shadow-lg bg-white hover:bg-[#6E4294] hover:text-white text-[#c3c3c3] font-bold text-center transition-all duration-200 aspect-square flex flex-col items-center justify-center w-40"
              >
                <div className="flex justify-center items-center h-20 w-20 mb-3">
                  {getCategoryIcon(category)}
                </div>
                <span className="text-base line-clamp-2">{category}</span>
              </div>
            ))}
          </div>
          
          {categories.length > 12 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-[#6E4294] hover:bg-[#FDA216] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
              >
                {showAll ? 'Show Less' : `Show All (${categories.length})`}
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODAL WITH PRODUCTS */}
      {selectedCompany && (
        <Modal
          company={selectedCompany}
          products={filtered}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}

export default Services;
