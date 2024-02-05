import { useState } from "react";
import axios from "axios";
import contact from "../assets/contact.jpg";
import { AiOutlineMobile } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function ContactUs() {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [gmailError, setGmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [msgError, setMsgError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    sender_email: "",
    msz: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setIsMessageSent(false);
    if (name === "sender_email") {
      setIsValidEmail(value.endsWith("@gmail.com") || value === "");
    }
    if (name === "name") {
      setNameError("");
    }
    if (name === "msz") {
      setMsgError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      setNameError("Please enter your name");
      setLoading(false);
      return;
    } else {
      setNameError("");
    }

    if (!formData.msz) {
      setMsgError("Please enter your message");
      setLoading(false);
      return;
    } else {
      setMsgError("");
    }

    if (!isValidEmail) {
      setGmailError("Please enter a valid Gmail address.");
      setLoading(false);
      return;
    } else {
      setGmailError("");
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://osp.com.np/api/keys/contact/",
        formData
      );
      console.log("Contact Form sent successfully:", response.data);
      setIsMessageSent(true);
      setFormData({ name: "", sender_email: "", msz: "" });
    } catch (error) {
      console.error("Error sending form data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setIsValidEmail(value.endsWith("@gmail.com") || value === "");
    handleChange(e);
  };

  return (
    <div className="p-8 md:p-16">
      <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold p-8">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-16 md:items-center font-poppins md:space-x-8">
        <div className="md:w-12/3 p-8 flex-col items-center md:items-start md:h-[550px]">
          <img src={contact} alt="contact us" className="h-full w-full" />

          <div className="flex items-center mt-4 ml-2">
            <AiOutlineMobile className="mr-2 " />
            <a href="tel:9822777101" className="text-gray-600 text-xs">
              9822777101, 9822777102
            </a>
          </div>
          <div className="flex items-center mt-4 ml-2">
            <FiMail className="mr-2" />
            <a
              href="mailto:originalsoftwareproduct@gmail.com"
              className="text-gray-600 text-xs "
            >
              originalsoftwareproduct@gmail.com
            </a>
          </div>
        </div>
        <div className="md:w-1/3 p-10 border-2 rounded-3xl shadow-md  md:h-[510px]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className={`w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                  nameError ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {nameError && (
                <p style={{ color: "red", fontSize: "12px" }}>{nameError}</p>
              )}
            </div>
            <div className="pt-8 pb-8">
              <input
                className={`w-full p-3 rounded-2xl bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9] ${
                  (gmailError && formData.sender_email) || !isValidEmail
                    ? "border-red-500"
                    : ""
                }`}
                type="email"
                placeholder="Your Email"
                name="sender_email"
                value={formData.sender_email}
                onChange={handleEmailChange}
              />
              {gmailError && formData.sender_email && (
                <p style={{ color: "red", fontSize: "12px" }}>{gmailError}</p>
              )}
            </div>
            <div className="mb-4 pb-8">
              <textarea
                className="w-full p-3 h-40  md:pb-28 rounded-2xl resize-none bg-[#ffffff] shadow-md vorder-solid border-2 border-[#eae9e9]"
                placeholder="Your Message"
                name="msz"
                value={formData.msz}
                onChange={handleChange}
              />
              {msgError && (
                <p style={{ color: "red", fontSize: "12px" }}>{msgError}</p>
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
                "Message Sent!"
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
