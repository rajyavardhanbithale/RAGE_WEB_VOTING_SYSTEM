import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Signup() {
  // State variables for form inputs
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [emailr, setEmailr] = useState("");
  const [passwd, setPasswd] = useState("");
  const [aadharr, setAadharr] = useState("");
  const [reserr, setReserr] = useState(null);

  // Create cookies instance
  const cookies = new Cookies();

  // Use navigate to redirect to a different page after successful signup
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with form field values
    const data = {
      firstname: fname,
      lastname: lname,
      pnumber: mnumber,
      password: passwd,
      aadhar: aadharr,
      email: emailr,
      isPremium: "FALSE",
      ifPremiumPlan: "None",
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // If signup is successful, set cookies and navigate to the pricing page
        const responseData = await response.json();
        console.log(responseData.content);
        cookies.set('BROWSER-X-RENDER-COOKIE', responseData.content, { path: '/' });
        navigate('/pricing');
        setReserr(null);
      } else {
        // Handle unsuccessful signup (e.g., show an error message)
        console.error("Signup failed!");
        setReserr("Server Error or Application Error");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div>
        <div className="h-screen flex bg-cover bg-[url('./assets/BG.png')] justify-center">
          {/* Signup section */}
          <div className="flex flex-col justify-center items-center border w-full lg:w-1/2">
            <div>
              <div className="text-xl font-bold text-center ">
                <span className="text-blue-400">&#9650;</span>
                <span> RAGE VOTING SERVICE </span>
              </div>

              <div className="mt-10 font-bold text-3xl text-center">
                <h2>Sign up</h2>
              </div>
              <form onSubmit={handleSubmit} to="/pricing" className="mt-10 w-[80%] lg:w-96 mx-auto space-y-4">
                <h4>Login to manage your account</h4>
                <div className="flex gap-4">
                  <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First Name" className="border w-full px-4 py-2 rounded-md" id="" />
                  <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last Name" className="border w-full px-4 py-2 rounded-md" id="" />
                </div>
                <div className="flex gap-4">
                  <input type="text" name="mnumber" value={mnumber} onChange={(e) => setMnumber(e.target.value)} maxLength="10" minLength="10" placeholder="Mobile Number" className="border w-full px-4 py-2 rounded-md" id="" />
                  <input type="text" name="aadharr" value={aadharr} onChange={(e) => setAadharr(e.target.value)} maxLength="12" minLength="12" placeholder="Aadhar Number" className="border w-full px-4 py-2 rounded-md" id="" />
                </div>
                <input type="email" name="emailr" value={emailr} onChange={(e) => setEmailr(e.target.value)} className="border w-full px-4 py-2 rounded-md" placeholder="Email" />
                <input type="password" name="passwd" value={passwd} onChange={(e) => setPasswd(e.target.value)} className="border w-full px-4 py-2 rounded-md" placeholder="Password" id="" />
                <button className="w-full mt-2 bg-blue-600 py-2 rounded text-white hover:bg-blue-400">Signup</button>
              </form>
              <div className="text-center space-y-4 mt-4">
                <span>OR</span>
              </div>
              <Link to="/login" >
                <div className="mt-4 text-sm text-center">
                  Dont have an account?
                  <span className="text-blue-600 hover-text-blue-400 cursor-pointer">Log in here</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
