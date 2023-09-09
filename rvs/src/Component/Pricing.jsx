import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Pricing() {
  const [users, setUsers] = useState([]);
  const [premiumPackage, setPackage] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    // Fetch user data when the component mounts
    const val = cookies.get('BROWSER-X-RENDER-COOKIE');
    fetchUserData(val);
  }, []);

  const fetchUserData = async (val) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/getuser/${val}`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      usid: cookies.get('BROWSER-X-RENDER-COOKIE'),
      isPremium: "TRUE",
      ifPremiumPlan: premiumPackage
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/setpricing/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Signup successful!");
        navigate("/");
      } else {
        console.error("Signup failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Check if the user is premium and navigate accordingly
  if (users.isPremium === "TRUE") {
    navigate('/');
  }

  return (
    <>
      <div className="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
        <br />
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 mt-10">Pricing</h1>
          <h3 className="text-xl font-medium mb-10">
            
          </h3>
        </div>

        {/* Pricing options */}
        <div className="max-w-4xl mx-auto md:flex gap-7">
          {/* Voter Package */}
          <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col hover:scale-105 hover:bg-gray-300 transition delay-100 duration-1000 ease-in-out">
            <div className="w-full flex-grow">
              <h2 className="text-center font-bold uppercase mb-4">Voter</h2>
              <h3 className="text-center font-bold text-4xl mb-5">Free</h3>
              <ul className="text-sm px-5 mb-8">
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> Only For Voting
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> Free Forever
                </li>
              </ul>
            </div>
            <div className="w-full">
              <Link to="/">
                <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Sign Up !!
                </button>
              </Link>
            </div>
          </div>

          {/* Institute Package */}
          <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-4 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col hover:scale-125 hover:bg-gray-200 transition delay-100 duration-1000 ease-in-out">
            <div className="w-full flex-grow">
              <h2 className="text-center font-bold uppercase mb-4">Bestseller</h2>
              <h3 className="text-center font-bold text-4xl md:text-5xl mb-5">
                ₹399/mo
              </h3>
              <ul className="text-sm px-5 mb-8">
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> 10 Election
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> 250 Participant
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> 6 Election Candidate
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> Temporary History
                </li>
              </ul>
            </div>
            <div className="w-full">
              <button
                onClick={(event) => {
                  setPackage("inst");
                  handleSubmit(event);
                }}
                className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full"
              >
                Continue
              </button>
            </div>
          </div>

          {/* Organization Package */}
          <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col hover:scale-105 hover:bg-gray-300 transition delay-100 duration-1000 ease-in-out">
            <div className="w-full flex-grow">
              <h2 className="text-center font-bold uppercase mb-4">Premium</h2>
              <h3 className="text-center font-bold text-4xl mb-5">₹3999/mo</h3>
              <ul className="text-sm px-5 mb-8">
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> 100 election
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> 500 participant
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> 50 Election Candidate
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i>Permanent Data
                </li>
                <li className="leading-tight">
                  <i className="mdi mdi-check-bold text-lg"></i> Much more...
                </li>
              </ul>
            </div>
            <div className="w-full">
              <button
                onClick={(event) => {
                  setPackage("orgs");
                  handleSubmit(event);
                }}
                className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
