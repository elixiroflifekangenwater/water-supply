import React from "react";
import Mac5Img from "../../assets/Mac5.jpg";

const Mac5 = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Kangen Water Machine Leveluk Super 501
      </h1>

      <img
        src={Mac5Img}
        alt="Leveluk Super 501 Machine"
        className="w-full max-h-[400px] object-contain mb-6 rounded-lg shadow-md"
      />

      <p className="mb-4 text-lg">
        The Leveluk Super 501 is the **Powerhouse Kangen Water Ionizer** designed for high-demand environments.
        Whether you're running a café, restaurant, clinic, or have a large family, this machine delivers 
        exceptional performance and capacity without compromising quality.
      </p>

      <p className="mb-4 text-lg">
        Featuring a dual system of <strong>12 total electrode plates</strong>, this unit produces five distinct 
        types of water to meet all your hydration, cleaning, and skincare needs. It's the ideal solution 
        for those who require consistent, high-volume water ionization.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Why the Leveluk Super 501 is the Perfect Water Solution:
      </h2>

      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li><strong>Unmatched Water Production Capacity:</strong> Generates up to 7 liters per minute, making it perfect for businesses and large households.</li>
        <li><strong>Advanced Dual Plate System:</strong> Combines 7 plates for Strong Kangen/Acidic water and 5 for regular Kangen and Beauty water types.</li>
        <li><strong>Five Types of Water:</strong>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><strong>Kangen Water (pH 8.5–9.5):</strong> Supports optimal hydration.</li>
            <li><strong>Clean Water (pH 7.0):</strong> Safe for baby formula and meds.</li>
            <li><strong>Beauty Water (pH 6.0):</strong> Enhances skincare and natural glow.</li>
            <li><strong>Strong Acidic Water (pH 2.5):</strong> Perfect for chemical-free sanitation.</li>
            <li><strong>Strong Kangen Water (pH 11.5):</strong> Ideal for cleaning and detoxifying produce.</li>
          </ul>
        </li>
        <li><strong>Efficient Twin Hose System:</strong> Easily switch between water types and fill large containers quickly.</li>
        <li><strong>User-Friendly LCD Display:</strong> Simple push-button operation and large screen for ease of use.</li>
        <li><strong>Automatic Cleaning System:</strong> Reduces manual maintenance.</li>
        <li><strong>Smart Filter Technology:</strong> Notifies you when it’s time to replace the filter.</li>
        <li><strong>Compact Yet Powerful:</strong> Fits neatly into kitchens or business environments while delivering robust features.</li>
      </ul>
    </div>
  );
};

export default Mac5;
