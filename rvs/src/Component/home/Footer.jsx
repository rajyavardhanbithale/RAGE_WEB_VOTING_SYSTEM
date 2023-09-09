import React from 'react';
// import './final.css'
function Footer() {
  return (
    <>
      <div>
      <footer className="flex flex-wrap justify-evenly items-start pt-8 gap-y-3">
        <div>
          <img className="w-32" src="./assets/Logo.png" alt="" />
          <div className="my-4 flex items-center justify-evenly">
            <i className="text-gray-400 text-xl fa-brands fa-facebook"></i>
            <i className="text-gray-400 text-xl fa-brands fa-instagram"></i>
            <i className="text-gray-400 text-xl fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="md:text-justify px-4 md:px-8 lg:w-4/12">
          <p>An awesome & powerful tools for your business, increase business revenue. with evaluating in depth variety of data sets and including the speed of tech adaptation we can build bridges between any companies and their customers.</p>
        </div>

        <div className="w-full flex flex-wrap items-start justify-between bg-gray-200 text-slate-500 px-8 py-4 mt-4 gap-6">
          <div className="order-3 lg:order-none w-full lg:w-fit text-center">
            ©2023-2024 RAGE.
          </div>
          <div className="text-xs flex gap-x-4 mx-auto lg:w-fit">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Language</p>
          </div>
          <div className="order-2 lg:order-none w-full lg:w-fit text-center">
            <span><i className="fa-solid fa-globe"></i></span>
            <span>English</span>
            <span><i className="fa-sharp fa-solid fa-caret-down"></i></span>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Footer;
