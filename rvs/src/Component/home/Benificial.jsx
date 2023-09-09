import React from 'react';
// import './final.css'
import image1 from "./assets/Illust 1.png";
import image2 from "./assets/Illust 2.png";
import image3 from "./assets/Illust 3.png";

function Benificial() {
  return (
    <>
      <div>
      <section className="mx-2 py-6">
        <div className="w-full flex flex-wrap justify-evenly items-center">
          <div className="w-full md:w-56 flex flex-col p-4 m-2">
            <div className="w-fit px-4 py-1 rounded-2xl bg-[#043A53] text-white">Beneficial</div>
            <h2 className="text-3xl font-semibold mt-6">Beneficial Elements</h2>
            <p className="mt-4">An awesome & powerful tools for your business, increase business revenue</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-56 p-4 m-2 flex flex-col bg-gray-100 rounded-xl hover:bg-orange-500">
              <img className="w-16" src= {image1} alt="" />
              <h2 className="text-lg font-semibold mt-4">Happy Customers</h2>
              <p className="mt-4">Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.</p>
            </div>
            <div className="w-full md:w-56 p-4 m-2 flex flex-col bg-gray-100 rounded-xl hover:bg-orange-500">
              <img className="w-16" src={image2} alt="" />
              <h2 className="text-lg font-semibold mt-4">Best Integrations</h2>
              <p className="mt-4">Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.</p>
            </div>
            <div className="w-full md:w-56 p-4 m-2 flex flex-col bg-gray-100 rounded-xl hover:bg-orange-500">
              <img className="w-16" src= {image3} alt="" />
              <h2 className="text-lg font-semibold mt-4">Grow Without Problems</h2>
              <p className="mt-4">Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Benificial;
