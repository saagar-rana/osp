import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

function CsvUpload() {
  const [csvfile, setCsvfile] = useState(null);
  const [ackfile, setAckfile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUpdateCategory, setSelectedUpdateCategory] = useState("");
  const [activationKey, setActivationKey] = useState("");
  const [phone, setPhone] = useState("");
  const [serialKey, setSerialKey] = useState("");
  const [loadingCsv, setLoadingCsv] = useState(false);
  const [loadingAck, setLoadingAck] = useState(false);
  const [loadingAcKeyUpdate, setLoadingAcKeyUpdate] = useState(false);
  const [ackresponse, setAckresponse] = useState("");
  const [ackeyUpdateError, setAckeyUpdateError] = useState("");
  const [deleteActivationKey, setDeleteActivationKey] = useState("");
  const [loadingDeleteKey, setLoadingDeleteKey] = useState(false);
  const [deleteKeyResponse, setDeleteKeyResponse] = useState("");
  const [deleteKeyError, setDeleteKeyError] = useState("");
  const [recentlyUsedKeysResponse, setRecentlyUsedKeysResponse] = useState(null);
  const [unusedKeysResponse, setUnusedKeysResponse] = useState(null);

  const handleDeleteKeyChange = (event) => {
    const formattedInput = formatSerialNumber(event.target.value);
    setDeleteActivationKey(formattedInput);
    setDeleteKeyError("");
  };

  const handleDeleteKeySubmit = (event) => {
    event.preventDefault();
    setDeleteKeyError("");

    if (!deleteActivationKey) {
      alert("Please enter the activation key to delete.");
      return;
    }

    setLoadingDeleteKey(true);

    const data = {
      activation_key: deleteActivationKey,
    };

    axios
      .delete(
        "https://th1.thulo.com/api/keys/delete_activation_keys/",
        {
          data: data,
        }
      )
      .then((response) => {
        console.log(response);
        setDeleteKeyResponse("Activation key deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
        setDeleteKeyError(
          error.response
            ? error.response.data.message
            : "Error occurred while deleting the activation key."
        );
      })
      .finally(() => {
        setLoadingDeleteKey(false);
      });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCsvFileChange = (event) => {
    setCsvfile(event.target.files[0]);
  };

  const handleAckFileChange = (event) => {
    setAckfile(event.target.files[0]);
  };

  const handleUpdateCategoryChange = (event) => {
    setSelectedUpdateCategory(event.target.value);
  };

  const handleSerialChange = (event) => {
    const input = event.target.value.trim();
    const formattedSerial = formatSerialNumber(input);
    setSerialKey(formattedSerial);
  };
  const handleActivateChange = (event) => {
    const input = event.target.value.trim();
    const formattedSerial = formatSerialNumber(input);
    setActivationKey(formattedSerial);
  };

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

  const handleAcKeyUpdate = (event) => {
    event.preventDefault();
    setAckeyUpdateError("");

    if (!activationKey || !selectedUpdateCategory || !phone || !serialKey) {
      alert("Please fill all the fields.");
      return;
    }

    const data = {
      activation_key: activationKey,
      category: selectedUpdateCategory,
      phone: phone,
      serial_key: serialKey,
    };
    setLoadingAcKeyUpdate(true);
    axios
      .put("https://th1.thulo.com/api/keys/edit-key/", data)
      .then((response) => {
        console.log(response);
        setAckresponse(response.data);
      })
      .catch((error) => {
        console.log(error);
        setAckeyUpdateError(error.response.data.error);
      })
      .finally(() => {
        setLoadingAcKeyUpdate(false);
      });
  };
  const handleInputBlur = () => {
    setAckeyUpdateError("");
  };

  const handleCsvFileUpload = (event) => {
    event.preventDefault();

    if (!csvfile) {
      alert("Please select a file.");
      return;
    }
    if (!selectedCategory) {
      alert("Select category");
      return;
    }

    setLoadingCsv(true);

    const formData = new FormData();
    formData.append("file", csvfile);
    formData.append("category", selectedCategory);

    axios
      .post(
        "https://th1.thulo.com/api/keys/upload-csv/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        alert("File sent successfully!");
        console.log(response);
      })
      .catch((error) => {
        alert("Error occurred while sending the file.");
        console.log(error);
      })
      .finally(() => {
        setLoadingCsv(false);
      });
  };

  const handleAckFileUpload = (event) => {
    event.preventDefault();

    if (!ackfile) {
      alert("Please select a file.");
      return;
    }
    setLoadingAck(true);
    const formData = new FormData();
    formData.append("file", ackfile);
    axios
      .post(
        "https://th1.thulo.com/api/keys/upload-activation-keys/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        alert("File sent successfully!");
        console.log(response);
      })
      .catch((error) => {
        alert("Error occurred while sending the file.");
        console.log(error);
      })
      .finally(() => {
        setLoadingAck(false);
      });
  };

  const fetchRecentlyUsedKeys = () => {
    axios
      .get("https://th1.thulo.com/api/keys/view_used_keys/")
      .then((response) => {
        setRecentlyUsedKeysResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recently used keys:", error);
      });
  };

  const fetchUnusedKeys = () => {
    axios
      .get("https://th1.thulo.com/api/keys/view_unused_keys/")
      .then((response) => {
        setUnusedKeysResponse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching unused keys:", error);
      });
  };

  return (
    <>
      <div className="p-8">
        <form onSubmit={handleCsvFileUpload} className="mb-8">
          <label htmlFor="csvupload" className="block mb-2 font-bold">
            Serial Key Upload
          </label>
          <input
            id="csvupload"
            type="file"
            onChange={handleCsvFileChange}
            className="border p-2 rounded-lg w-full"
          />
          <div className="mb-4">
            <label htmlFor="categories" className="block mt-4 font-bold">
              Select a category:
            </label>
            <select
              id="categories"
              name="categories"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="border p-2 rounded-lg bg-gray-100 w-full"
            >
              <option value="">--Category--</option>
              <option value="a">Windows 10 Home</option>
              <option value="b">Windows 10 Home OEM</option>
              <option value="c">Windows 10 Pro</option>
              <option value="d">Windows 10 Pro OEM</option>
              <option value="e">Windows 11 Home</option>
              <option value="f">Windows 11 Home OEM</option>
              <option value="g">Windows 11 Pro</option>
              <option value="h">Windows 11 Pro OEM</option>
              <option value="i">Office 2019</option>
              <option value="j">Office 2019 Bind</option>
              <option value="k">Office 2021</option>
              <option value="l">Office 2021 Bind</option>
              <option value="m">Office 2021 Mac Bind</option>
              <option value="n">Office Home Business Win</option>
              <option value="o">Office Home Business Mac</option>
              <option value="p">Office Home Student Win</option>
              <option value="q">Office Home Student Mac</option>
              <option value="r">Office 2021 Home Basic</option>
              <option value="s">Project Professional2019</option>
              <option value="t">Project Professional 2021</option>
              <option value="u">Visio Professional 2019</option>
              <option value="v">Visio Professional 2021</option>
              <option value="w">Windows Server 2016 Essential</option>
              <option value="x">Windows Server 2019 Standard</option>
              <option value="y">Windows Server 2019 Datacenter</option>
              <option value="z">Windows Server 2022 Datacenter</option>
              <option value="aa">Microsoft SQL Server 2019 Standard</option>
              <option value="ab">Microsoft SQL Server 2019 Enterprise</option>
              <option value="ac">Microsoft SQL Server 2022 Standard</option>
              <option value="ad">Microsoft SQL Server 2022 Enterprise</option>
            </select>
          </div>
          {/* <button
            type="submit"
            className="bg-[#9271af] hover:bg-[#FDA216] text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
            
          </button> */}
          <Button
            type="submit"
            variant="contained"
            disableElevation
            disabled={loadingCsv}
            startIcon={loadingCsv && <CircularProgress size={20} />}
          >
            {loadingCsv ? "Submitting..." : "Submit"}
          </Button>
        </form>
        <form onSubmit={handleAckFileUpload}>
          <label htmlFor="ackupload" className="block mb-2 font-bold">
            Activation Key Upload
          </label>
          <input
            id="ackupload"
            type="file"
            onChange={handleAckFileChange}
            className="border p-2 rounded-lg w-full mb-4"
          />
          {/* <button
            type="submit"
            className="bg-[#9271af] hover:bg-[#FDA216] text-white font-bold py-2 px-4 mb-10 rounded-lg mt-4"
          >
            Submit
          </button> */}
          <Button
            type="submit"
            variant="contained"
            disableElevation
            disabled={loadingAck}
            startIcon={loadingAck && <CircularProgress size={20} />}
          >
            {loadingAck ? "Submitting..." : "Submit"}
          </Button>
        </form>
        <form
          onSubmit={handleAcKeyUpdate}
          className="mb-8 mt-8"
          onBlur={handleInputBlur}
        >
          <label htmlFor="serialupload" className="block mb-2 font-bold">
            Activation Key Update
          </label>
          <label htmlFor="serialupload" className="font-light">
            Serial Key
          </label>
          <input
            id="serialupload"
            type="text"
            value={serialKey}
            onChange={handleSerialChange}
            className="border p-2 rounded-lg w-full"
            placeholder="Enter serial key"
          />
          <div className="mb-4">
            <label htmlFor="categories" className="block mt-4 font-bold">
              Select a category:
            </label>
            <select
              id="categories"
              name="categories"
              value={selectedUpdateCategory}
              onChange={handleUpdateCategoryChange}
              className="border p-2 rounded-lg bg-gray-100 w-full"
            >
              <option value="">--Category--</option>
              <option value="Windows">Windows</option>
              <option value="Office">Office</option>
              <option value="Professional">Professional</option>
              <option value="Server">Server</option>
              <option value="SQL">SQL</option>
            </select>
          </div>
          <label htmlFor="phoneupload" className="font-light">
            Phone number
          </label>
          <input
            id="phoneupload"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 mb-2 rounded-lg w-full"
            placeholder="Enter phone number"
          />
          <label htmlFor="acupload" className="font-light">
            New Activation Key
          </label>
          <input
            id="acupload"
            type="text"
            value={activationKey}
            onChange={handleActivateChange}
            className="border p-2 mb-4 rounded-lg w-full"
            placeholder="Enter new activation key"
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            disabled={loadingAcKeyUpdate}
            startIcon={loadingAcKeyUpdate && <CircularProgress size={20} />}
          >
            {loadingAcKeyUpdate ? "Submitting..." : "Submit"}
          </Button>
          {ackeyUpdateError && (
            <p style={{ color: "red", fontSize: "12px" }}>{ackeyUpdateError}</p>
          )}
        </form>
        <form onSubmit={handleDeleteKeySubmit} className="mb-8 mt-8">
          <label htmlFor="deleteActivationKey" className="block mb-2 font-bold">
            Delete Activation Key
          </label>
          <input
            id="deleteActivationKey"
            type="text"
            value={deleteActivationKey}
            onChange={handleDeleteKeyChange}
            className="border p-2 mb-2 rounded-lg w-full"
            placeholder="Enter activation key to delete"
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            disabled={loadingDeleteKey}
            startIcon={loadingDeleteKey && <CircularProgress size={20} />}
          >
            {loadingDeleteKey ? "Deleting..." : "Delete Key"}
          </Button>
          {deleteKeyResponse && (
            <p style={{ color: "green", fontSize: "12px" }}>
              {deleteKeyResponse}
            </p>
          )}
          {deleteKeyError && (
            <p style={{ color: "red", fontSize: "12px" }}>{deleteKeyError}</p>
          )}
        </form>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={fetchRecentlyUsedKeys}
        >
          View Recently Used Keys
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={fetchUnusedKeys}
          style={{ marginLeft: "10px" }}
        >
          View Unused Keys
        </Button>

        {recentlyUsedKeysResponse && (
         <div className="mt-8">
          <h2 className="font-bold text-2xl">Recently Used Keys:</h2>
         <table className="w-full mt-4 border-collapse border border-gray-400">
           <thead>
             <tr>
               <th className="border border-gray-400 p-2">Activation Key</th>
               <th className="border border-gray-400 p-2">Category</th>
               <th className="border border-gray-400 p-2">Expiry Date</th>
             </tr>
           </thead>
           <tbody>
             {recentlyUsedKeysResponse.map((keyData) => (
               <tr key={keyData.activation_key}>
                 <td className="border border-gray-400 p-2">
                   {keyData.activation_key}
                 </td>
                 <td className="border border-gray-400 p-2">
                   {keyData.category}
                 </td>
                 <td className="border border-gray-400 p-2">
                   {keyData.expiry_date}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
        )}

        {unusedKeysResponse && (
         <div className="mt-8">
          <h2 className="font-bold text-2xl">Unused Keys:</h2>
         <table className="w-full mt-4 border-collapse border border-gray-400">
           <thead>
             <tr>
               <th className="border border-gray-400 p-2">Activation Key</th>
               <th className="border border-gray-400 p-2">Category</th>
               <th className="border border-gray-400 p-2">Expiry Date</th>
             </tr>
           </thead>
           <tbody>
             {unusedKeysResponse.map((keyData) => (
               <tr key={keyData.activation_key}>
                 <td className="border border-gray-400 p-2">
                   {keyData.activation_key}
                 </td>
                 <td className="border border-gray-400 p-2">
                   {keyData.category}
                 </td>
                 <td className="border border-gray-400 p-2">
                   {keyData.expiry_date}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
        )}
      </div>
      {ackresponse && (
        <div className="flex sm:max-md:flex-col gap-24 sm:max-md:gap-2 sm:max-md:items-center sm:max-md:justify-center items-center justify-center border-2 w-0.8 pt-5 pb-5">
          <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
            <p className="font-semibold  sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
              {" "}
              Serial Key
            </p>
            <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
              {serialKey}
            </p>
            <br />
          </div>
          <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
            <p className="font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
              New Activation Key
            </p>
            <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
              {ackresponse.activation_key}
            </p>
            <br />
          </div>
          <div className="flex-col sm:max-md:items-center sm:max-md:justify-center">
            <p className="font-semibold sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
              Category
            </p>
            <p className="sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center">
              {ackresponse.Category}
            </p>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default CsvUpload;
