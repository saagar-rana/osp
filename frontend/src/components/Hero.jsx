import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.jpg";

function Hero() {
  const navigate = useNavigate();

  const handleGoToActivation = () => {
    navigate("/activation")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center font-poppins">
      <div className="md:w-1/2 p-10 md:ml-10">
        <h1 className="text-4xl md:text-4xl font-light mb-4">
          Planting Digitalization
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Original Software Product
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Building a Digital Future Together! Unlock the full potential of
          Microsoft software with our genuine activation keys and explore world
          of possibilities.
        </p>
        <div className="flex flex-col gap-2">
          <div>
            <a href="/#about">
              <button className="border-none bg-[#6E4294] hover:bg-[#FDA216] h-12 w-40 text-white font-bold py-2 px-4 rounded-3xl">
                About us
              </button>
            </a>
          </div>
          <div>
            <button className="md:hidden pl-5 pr-4 bg-[#FDA216] hover:bg-[#6E4294] text-white font-bold rounded-3xl h-12"
            onClick={handleGoToActivation}>
            Get Activation Key
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-8 mr-10">
        <img
          src={image1}
          alt="Planting Digitalization"
          className="w-5/6 h-auto ml-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
