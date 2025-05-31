import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-5">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#4DB6E2] animate-pulse ">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            image: img1,
            title: "Kangen Demo",
            description: "Our Sales representative will visit your residence to explain all about the benefits of Kangen Water Machine and educate you on operation and e-cleaning.",
            extra: "Book Your Appointment Now!",
            link: "/services/kangendemo"
          },
          {
            image: img2,
            title: "Machine Installation",
            description: "Get your Enagic Kangen Water Ionizer installed by your washbasin—sleek, swift, and ready in under an hour with flexible wall or platform mounting!",
            extra: " Minimal Installation Charges", 
            link: "/services/machineinstallation"
          },
          {
            image: img3,
            title: "Deep Cleaning",
            description: "Annual deep cleaning service using submersible motor and citric acid to maintain optimal machine performance.",
            extra: "1 Year Free Service - Charges Thereafter",
            link: "/services/deepcleaning"
          }
        ].map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 relative pb-2">
                {service.title}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#4DB6E2] transition-all duration-300 group-hover:w-3/4 group-hover:-translate-x-1/2"></span>
              </h3>
              <div className="min-h-40 flex flex-col">
                <p className="text-gray-600 mb-4 flex-grow transition-colors duration-300 group-hover:text-gray-800">
                  {service.description}
                </p>
                {/* {service.extra && (
                  <p className="text-center text-sm text-[#4DB6E2] font-medium mb-4">
                    {service.extra}
                  </p>
                )} */}
              </div>
              {/* <div className="text-center mt-auto pt-4">
                <span className="bg-[#4DB6E2] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 w-full inline-block hover:scale-105 hover:shadow-lg transform origin-bottom">
                  View Details
                </span>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
