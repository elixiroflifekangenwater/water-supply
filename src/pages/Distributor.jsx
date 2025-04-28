import React from "react";
import { Link } from "react-router-dom";

const Distributor = () => {
    return (
       <section id="about" className="py-20 bg-white">
           <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row items-center">
               <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 pl-5">
                 <h2 className="text-3xl font-bold mb-6 text-gray-800">About Kangen Water</h2>
                 <p className="text-gray-600 mb-4">
                   Kangen Water is alkaline, antioxidant-rich, and micro-clustered water produced by Enagic's ionization process.
                   It's designed to help neutralize acid in the body and provide superior hydration.
                 </p>
                 <p className="text-gray-600 mb-6">
                   Our Kangen Water machines use advanced electrolysis technology to transform ordinary tap water into hydrogen-rich,
                   alkaline water that many believe offers significant health benefits.
                 </p>
                 <h1 className="text-3xl font-bold mb-6 text-gray-800">This is a dummy Page</h1>
               </div>
             </div>
           </div>
         </section>
    );
};

export default Distributor;
