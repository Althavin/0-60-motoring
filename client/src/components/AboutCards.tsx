import React from "react";
import { BsTransparency } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { MdSupportAgent, MdWifiProtectedSetup } from "react-icons/md";

const AboutCards = () => {
  return (
    <div>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl "
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-primary duration-300 hover:text-white border-2 hover:border-white border-primary rounded-lg">
              <div className="grid place-items-center">
              <BsTransparency size={50} />

              </div>
              <h1 className="text-2xl ">Transparency</h1>
              
          
            </div>
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-primary duration-300 hover:text-white border-2 hover:border-white border-primary rounded-lg">
              <div className="grid place-items-center">
              <MdWifiProtectedSetup size={50} />


              </div>
              <h1 className="text-2xl ">Reliability</h1>
            
          
            </div>
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-primary duration-300 hover:text-white border-2 hover:border-white border-primary rounded-lg">
              <div className="grid place-items-center">
              <FaHandsHelping size={50} />


              </div>
              <h1 className="text-2xl ">Professionalism</h1>
           
          
            </div>
            <div className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-primary duration-300 hover:text-white border-2 hover:border-white border-primary rounded-lg">
              <div className="grid place-items-center">
              <MdSupportAgent size={50} />


              </div>
              <h1 className="text-2xl ">After Sales Support</h1>
             
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
