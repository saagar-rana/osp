import { useEffect, useState, useRef } from "react";
import SliderPuzzle from "./SliderPuzzle";
import activation from "../assets/activation.jpg";
import axios from "axios";

function Activation() {
  const [sliderValue, setSliderValue] = useState(0);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [showPuzzlePopup, setShowPuzzlePopup] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  // const [selectedService, setSelectedService] = useState("");
  const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [serialcheck, setSerialCheck] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [ackresponse, setAckresponse] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [serialNumberError, setSerialNumberError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [apiResponseReceived, setApiResponseReceived] = useState(false);
  const [formSubmissionError,setFormSubmissionError]=useState("");
  const [scrollToResponse, setScrollToResponse] = useState(false);

  const ackResponseRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const isMobileView = window.innerWidth <= 800;
    if (apiResponseReceived && ackResponseRef.current) {
      if (scrollToResponse && !isMobileView) {
      ackResponseRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToResponse(false);
      }
    }
  }, [apiResponseReceived,scrollToResponse]);

  const handlePuzzleSolved = () => {
    setPuzzleSolved(true);
    setShowPuzzlePopup(false);
    setCaptchaError("");
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (puzzleSolved) {
  //     axios
  //       .post("https://osp.com.np/api/keys/get-activation-key/", {
  //         phone: phone,
  //         serial_key: serialNumber,
  //       })
  //       .then((response) => {
  //         alert("Form submitted successfully!");
  //         console.log(response);
  //         console.log("response data:", response.data);
  //         setAckresponse(response.data);
  //       })
  //       .catch((error) => {
  //         alert("Error occurred while submitting the form.");
  //         console.log(error);
  //       });
  //   } else {
  //     alert("Please solve the puzzle before submitting the form!");
  //   }
  // };

  async function handleSubmit(event) {
    event.preventDefault();
    setPhoneError("");
    setSerialNumberError("");

    if (puzzleSolved && phone && serialNumber && serialcheck) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://osp.com.np/api/keys/get-activation-key/",
          {
            phone: phone,
            // email: email,
            serial_key: serialNumber,
          }
        );
        console.log(response);
        console.log("response data:", response.data);
        setAckresponse(response.data);
        setIsMessageSent(true);
        setApiResponseReceived(true);
        setScrollToResponse(true);
      } catch (error) {
        console.log(error.response.data.error);
        setFormSubmissionError(error.response.data.error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else if (!phone) {
      setPhoneError("Please fill this field");
    } else if (!serialNumber) {
      setSerialNumberError("Please fill this field");
    } else if (!serialcheck) {
      setSerialNumberError(
        "Please enter the serial number in the format XXXXX-XXXXX-XXXXX-XXXXX"
      );
    } else if (!puzzleSolved) {
      setCaptchaError("Please verify you are human");
    } else {
      setFormSubmissionError("Error submitting request.Please try again");
    }
  }

  const handlePhoneChange =(e) =>{
    setPhone(e.target.value);
    setIsMessageSent(false);
  }

  const handleCaptchaCheckboxChange = () => {
    setCaptchaChecked(!captchaChecked);
    if (!captchaChecked) {
      setShowPuzzlePopup(true);
    } else {
      setShowPuzzlePopup(false);
    }
  };

  // const handleServiceChange = (event) => {
  //   setSelectedService(event.target.value);
  // };

  const formatSerialNumber = (input) => {
    const formattedInput = input.replace(/\W/g, "").toUpperCase();
    let formattedSerial = "";
    for (let i = 0; i < formattedInput.length; i++) {
      if (i > 0 && i % 5 === 0) {
        formattedSerial += "-";
      }
      formattedSerial += formattedInput.charAt(i);
    }
    return formattedSerial;
  };

  const handleInputChange = (event) => {
    setIsMessageSent(false);
    const input = event.target.value.trim();
    const formattedSerial = formatSerialNumber(input);
    setSerialNumber(formattedSerial);
    setIsTyping(true);
    if (input.length === 23) {
      setSerialCheck(true);
    } else {
      setSerialCheck(false);
    }
  };

  const handleInputBlur = () => {
    setIsTyping(false);
    setPhoneError("");
    setSerialNumberError("");
    setFormSubmissionError("");
  };
  return (
    <>
      <div className="pl-8 pr-8">
        <div className="flex flex-col md:flex-row md:items-center font-poppins md:space-x-8">
          <div className="md:w-1/2 p-8 flex flex-col items-center md:items-start md:h-[550px]">
            <img
              src={activation}
              alt="Send details for Activation Key"
              className="h-full w-auto mb-4 -mt-10"
            />
          </div>
          <div className="md:w-1/2 p-10 md:h-[500px]">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  className={`w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                    phoneError ? "border-red-500" : ""
                  }`}
                  type="tel"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={handleInputBlur}
                />
                {phoneError && (
                  <p style={{ color: "red", fontSize: "12px" }}>{phoneError}</p>
                )}
              </div>
              {/* <div className="mb-4">
                <label htmlFor="email">Email(optional)</label>
                <input
                  id="email"
                  className="w-full p-3 rounded-2xl bg-[#d9d9d9]"
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div> */}
              <div>
                <label htmlFor="serial">Input Serial Number</label>
                <input
                  id="serial"
                  className={`w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                    serialNumberError ? "border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
                  value={serialNumber}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
                {isTyping && !serialcheck && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    Please enter the serial number in the format
                    XXXXX-XXXXX-XXXXX-XXXXX
                  </p>
                )}
                {serialNumberError && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {serialNumberError}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={captchaChecked}
                  onChange={handleCaptchaCheckboxChange}
                />
                <label className="ml-2">I'm not a robot (Captcha)</label>
                {captchaError && (
                  <p style={{ color: "red", fontSize: "12px" }}>{captchaError}</p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full bg-[#9271af] hover:bg-[#FDA216] text-white font-bold py-2 px-4 rounded-md`}
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="w-6 h-6 mx-auto animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM12 20c2.485 0 4.75-.896 6.53-2.38l-3-1.648A4.008 4.008 0 0012 16V4c4.418 0 8 3.582 8 8s-3.582 8-8 8z"
                    ></path>{" "}
                  </svg>
                ) : isMessageSent ? (
                  "Request Sent!"
                ) : (
                  "Submit"
                )}
              </button>
              {formSubmissionError && (
                  <p style={{ color: "red", fontSize: "12px" }}>{formSubmissionError}</p>
                )}
            </form>
          </div>
        </div>
      </div>
      {showPuzzlePopup && !puzzleSolved && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <SliderPuzzle
              sliderValue={sliderValue}
              onSliderChange={setSliderValue}
              onPuzzleSolved={handlePuzzleSolved}
            />
          </div>
        </div>
      )}
      <div ref={ackResponseRef}>
        {ackresponse && !ackresponse.message && (
          <div className="flex sm:max-md:flex-col gap-24 sm:max-md:gap-2 sm:max-md:items-center sm:max-md:justify-center items-center justify-center border-2 w-0.8 pt-5 pb-5">
            <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
              <p className="font-semibold  sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                {" "}
                Your Serial Key
              </p>
              <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                {ackresponse["serial key"]}
              </p>
              <br />
            </div>
            <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
              <p className="font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                Your Activation Key
              </p>
              <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                {ackresponse.activation_key}
              </p>
              <br />
            </div>
            {ackresponse["First Requested"] && (
              <>
                <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
                  <p className="font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                    Category
                  </p>
                  <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                    {ackresponse.Category}
                  </p>
                  <br />
                </div>
                <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
                  <p className="font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                    First Requested
                  </p>
                  <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                    {ackresponse["First Requested"]}
                  </p>
                  <br />
                </div>
                <div className="flex-col sm:max-md:items-center sm:max-md:justify-center -mt-7 sm:max-md:mt-0">
                  <p className="font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                    Requested from
                  </p>
                  <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                    {ackresponse["Requested from"]}
                  </p>
                </div>
              </>
            )}
          </div>
        )}
        {ackresponse.message && (
          <>
            <div className="flex sm:max-md:flex-col gap-24 sm:max-md:gap-2 sm:max-md:items-center sm:max-md:justify-center items-center justify-center border-2 w-0.8 pt-5 pb-5">
              <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
                <p className="font-semibold  sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
                  {" "}
                  {ackresponse.message}<br/>
                  Please contact us at 9801340008
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Activation;
