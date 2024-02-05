import React, { useState } from "react";
import Button from "@mui/material/Button";
import CsvUpload from "./CsvUpload";
import CircularProgress from "@mui/material/CircularProgress";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

function AdminLogin() {
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiresponse, setApiresponse] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (user && pswd) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://osp.com.np/api/keys/login/",
          {
            username: user,
            password: pswd,
          }
        );
        console.log(response);
        console.log("response data:", response.data);
        setApiresponse(response.data.message);
      } catch (error) {
        console.log(error);
        setLoginError(error.response.data.message);
      } finally {
        setLoading(false);
      }
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {apiresponse === "Logged in successfully" ? (
        <CsvUpload />
      ) : (
        <div className="flex items-center justify-center h-auto bg-gray-300">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-6 bg-white rounded-lg shadow-md m-10"
          >
            <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter username"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="pswd" className="block font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="pswd"
                  value={pswd}
                  onChange={(e) => setPswd(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-lg pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-2 right-2 focus:outline-none"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
              className="w-full"
            >
              {loading ? "Logging In..." : "Login"}
            </Button>
            {loginError && (
              <p style={{ color: "red", fontSize: "12px" }}>{loginError}</p>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default AdminLogin;
