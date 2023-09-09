import React, { useState, useEffect } from "react";

import logo from './assets/logo.png'
import Cookies from "universal-cookie";
import './conform.css'
import { Link } from "react-router-dom";

import BG from './assets/BG.png'


function Navbar() {
    const [userData, setUserData] = useState(null);


    const cookies = new Cookies();



    const val = cookies.get('BROWSER-X-RENDER-COOKIE');

    const linkHref = val === undefined ? '/login' : '/logout';
    const buttonText = val === undefined ? 'Login' : 'Logout';

    useEffect(() => {
        // Replace this with your actual API fetch logic
        // For example, using the fetch() function
        fetch(`http://127.0.0.1:8000/getuser/${val}`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error(error));
    }, []); // Make sure to provide an empty dependency array to useEffect to run it only once.

    console.log(userData)

    return (
        <>
            <header class="navbarglasscss text-gray-600 body-font fixed top-0 w-full">
               
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-items-start">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} alt="" className="w-7" />
                        <span class="ml-3 text-xl">RAGE VOTING</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                    <Link to={'/'}>
                        <a class="mr-5 hover:text-gray-900">Home</a>
                    </Link>

                    

                    <Link to={'/feature'}>
                        <a class="mr-5 hover:text-gray-900">Features</a>
                    </Link>
                        <a
                            className="mr-5 hover:text-gray-900 transition delay-100 duration-1000 hover:text-gray-600 ease-in-out"
                            href={userData && userData.isPremium === "TRUE" ? "/organize" : "/pricing"}
                        >
                            {userData && userData.isPremium === "TRUE" ? <h1>Organize</h1> : "Pricing"}
                        </a>


                    </nav>
                    <Link to={linkHref}>
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">{buttonText}
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Navbar;