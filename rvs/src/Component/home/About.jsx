import React from 'react';
// import './final.css'
function About() {
  return (
    <>
      <div>
      <section className="px-4 lg:px-20 pt-16 bg-[#043A53] text-white">
        <div className="w-full flex justify-between flex-wrap mb-12">
          <h2 className="lg:w-6/12 lg:px-12 mb-2 text-2xl lg:text-4xl font-semibold">High-Level Sales <span className="text-[#F0B73F]">Teams & Professionals</span></h2>
          <p className="lg:w-6/12 lg:px-12">Circuit is flexible and affordable and offers you exceptional support to achieve your career goals. Circuit is a Global training provider based across the UK that specialises.</p>
        </div>
        <div className="w-[100%] lg:w-11/12 mx-auto relative flex justify-center">
          <img className="w-4/12 h-80 object-cover" src="https://media.tenor.com/ZGuBbvGLvhkAAAAM/vote-voting.gif" alt="" />
        </div>
      </section>
      </div>
    </>
  );
}

export default About;
