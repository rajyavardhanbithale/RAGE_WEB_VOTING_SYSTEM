import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import image1 from "./home/assets/login_page-s.png";


function Login() {
    const [usernamer, setUsername] = useState("");
    const [passwordr, setPassword] = useState("");
    const [reserr, setReserr] = useState(null);
    const cookies = new Cookies();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username: usernamer,
            password: passwordr,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("OKDSF")
                
                const responseData = await response.json();
                console.log(responseData.content);
                cookies.set('BROWSER-X-RENDER-COOKIE', responseData.content, { path: '/' });
                
                setReserr(null);
                navigate('/')
            } else {
                // Handle unsuccessful login (e.g., show an error message)
                console.error("Login failed!");
                setReserr("Invalid Credentials ");
            }
        } catch (error) {
            // Handle network errors or other exceptions
            console.error("Error:", error);
        }
    };

    return (

        <>
        <br /><br /><br />
            <div className="h-screen flex bg-cover bg-[url('./assets/BG.png')] ">
                <img className="hidden lg:block w-1/2" src={image1} alt="" />

                <div className="flex flex-col justify-center items-center border w-full lg:w-1/2">
                    <div>
                        <div className="text-xl font-bold text-center ">
                            <span className="text-blue-400">&#9650;</span>
                            <span> RAGE VOTING SERVICE LOGIN</span>
                        </div>

                        <div className="mt-10 font-bold text-3xl text-center">
                            <h2>Hello,</h2>
                            <h2>Welcome Back</h2>
                        </div>


                        <form onSubmit={handleSubmit} className="mt-10 w-[80%] lg:w-96 mx-auto space-y-4">
                           
                            <input type="text" name="text" value={usernamer} className="border w-full px-4 py-2" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                            <input type="password" name="password" value={passwordr} className="border w-full px-4 py-2" placeholder="Password" id="" onChange={(e) => setPassword(e.target.value)} />
                            {/* <div className="text-blue-600 hover:text-blue-400">
                                Forgot your password ?
                            </div> */}
                            <button className="w-full mt-2 bg-blue-600 py-2 rounded text-white hover:bg-blue-400">Login</button>
                        </form>

                        <br />
                        <h5 id="eeeer" className="text-center text-red-600 font-bold">{reserr ? reserr : ""}</h5>


                        <div className="text-center space-y-4 mt-4">
                            <span>OR</span>
                            <div className="flex gap-8 justify-center items-center">

                                <i className="fa-brands fa-google text-2xl cursor-pointer"></i>

                            </div>
                        </div>
                        
                        <Link to="/signup">
                            <div className="mt-4 text-sm text-center">
                                Dont have an account ? 
                                <span className="text-blue-600 hover:text-blue-400 cursor-pointer"> Sign Up here</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
