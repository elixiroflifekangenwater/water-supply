import React from "react";
import Mac1Img from "../../assets/Mac1.jpg"; 

const Mac1 = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">
        Kangen Water Machine Leveluk SD 501
      </h2>
      <img
        src={Mac1Img}
        alt="Kangen Water Machine Leveluk SD 501"
        className="w-full h-auto object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 text-lg mb-4">
        The <strong>Leveluk SD 501</strong> is the <strong>most popular Kangen Water machine</strong>,
        and for good reason: it <strong>delivers more than just water</strong>—it brings <strong>a lifestyle upgrade</strong>.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Water That Works for You</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Hydrate Like Never Before</strong> – Experience smoother, more refreshing water that absorbs easily into your body.
        </li>
        <li>
          <strong>Wash Fruits & Vegetables Naturally</strong> – Remove unwanted residues with <strong>Strong Kangen Water (pH 11.5)</strong>.
        </li>
        <li>
          <strong>Gentle Skincare with Beauty Water</strong> – Maintain radiant skin with <strong>Beauty Water (pH 6.0)</strong>—a natural toner used by professionals.
        </li>
        <li>
          <strong>Eco-Friendly Cleaning & Disinfection</strong> – Ditch chemical cleaners by using <strong>Strong Acidic Water (pH 2.5)</strong> for sanitizing surfaces.
        </li>
        <li>
          <strong>Safe & Pure for the Whole Family</strong> – Ideal for baby formula, cooking, and daily hydration.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">What Sets the Leveluk SD 501 Apart?</h3>
      {/* Add more points here if needed */}
    </div>
  );
};

export default Mac1;
