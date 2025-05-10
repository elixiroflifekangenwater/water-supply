import React from 'react';
import cer1 from '../assets/cer1.jpeg';
import cer2 from '../assets/cer2.png';
import cer3 from '../assets/cer3.jpeg';
import cer4 from '../assets/cer4.jpeg';
import cer5 from '../assets/cer5.png';

const CertificationsPage = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center text-[#4DB6E2] mb-8">CERTIFICATIONS</h1>
        
        {/* Description paragraph */}
        <p className="text-center text-gray-800 mb-4 max-w-4xl mx-auto">
          Enagic International is certified to ISO 9001, ISO 14001, and ISO 13485 for quality control and environmental management, to the Water Quality Association Gold Seal for product certification and other prestigious certifications.
        </p>
        
        
        
        {/* Certification badges */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Enagic Gold Standard */}
          <div className="w-36 h-48 flex items-center justify-center">
            <img src={cer1} alt="Enagic Gold Standard" className="w-full h-auto" />
          </div>
          
          {/* Water Quality Association */}
          <div className="w-48 h-48 flex items-center justify-center">
            <img src={cer2} alt="Water Quality Association Certification" className="w-full h-auto" />
          </div>
          
          {/* ISO 9001 */}
          <div className="w-48 h-48 flex items-center justify-center">
            <img src={cer3} alt="ISO 9001 Certification" className="w-full h-auto" />
          </div>
          
          {/* ISO 14001 */}
          <div className="w-48 h-48 flex items-center justify-center">
            <img src={cer4} alt="ISO 14001 Certification" className="w-full h-auto" />
          </div>
          
          {/* ISO 13485 */}
          <div className="w-48 h-48 flex items-center justify-center">
            <img src={cer5} alt="ISO 13485 Certification" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;