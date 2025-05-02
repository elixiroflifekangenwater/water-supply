import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto">
      {/* <div className="bg-white rounded-xl p-8 max-w-2xl w-full transform transition-all duration-300 ease-in-out shadow-lg"> */}
        {/* <div className="flex justify-between items-center mb-8">
          <button
            onClick={onClose}
            className=" mt-20bg-[#4DB6E2] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md"
          > */}
            {/* <button className="text-2xl">×</button> */}
          {/* </button> */}
        {/* </div> */}
        <div className="bg-white rounded-xl p-6 max-w-lg w-full transform transition-all duration-300 ease-in-out">
          {children}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Modal;
