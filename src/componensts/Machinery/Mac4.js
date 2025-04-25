import React from "react";
import Mac4 from "../assets/Mac4.jpg";

const Mac4 = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Kangen Water Machine Leveluk JRIV
      </h1>

      <img
        src={Mac4}
        alt="Leveluk JRIV Machine"
        className="w-full max-h-[400px] object-contain mb-6 rounded-lg shadow-md"
      />

      <p className="mb-4 text-lg">
        Are you looking for an affordable way to experience the benefits of high-quality ionized water?
        The Leveluk JRIV (JR4) is designed for individuals and small households who want a convenient and efficient
        water solution.
      </p>

      <p className="mb-4 text-lg">
        With its advanced water filtration and ionization technology, the JRIV produces 5 types of functional water
        to enhance your daily routine—from drinking and cooking to cleaning and skincare.
      </p>

      <p className="mb-4 text-lg">
        This compact yet powerful unit delivers exceptional water quality at a lower cost, making it a great entry-level
        choice for those new to ionized water.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why the Leveluk JRIV is a Smart Investment</h2>

      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li>
          <strong>Affordable Without Compromising Quality:</strong> One of the most budget-friendly Kangen machines,
          offering premium water without the high-end price.
        </li>
        <li>
          <strong>Compact & Energy-Efficient for Small Households:</strong> Perfect for singles and couples,
          the JRIV saves space and uses less power than larger models.
        </li>
        <li>
          <strong>Five Types of Functional Water for Everyday Use:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Kangen Water (pH 8.5–9.5):</strong> Ideal for hydration, brewing tea, and cooking.</li>
            <li><strong>Clean Water (pH 7.0):</strong> Perfect for baby formula and supplement intake.</li>
            <li><strong>Beauty Water (pH 6.0):</strong> Natural toner and hair rinse.</li>
            <li><strong>Strong Kangen Water (pH 11.5):</strong> Cleans fruits and vegetables thoroughly.</li>
            <li><strong>Strong Acidic Water (pH 2.5):</strong> Great for natural surface sanitization.</li>
          </ul>
        </li>
        <li>
          <strong>User-Friendly & Low Maintenance:</strong> Comes with a simple LCD control panel, automatic cleaning system,
          and filter replacement alerts for hassle-free use.
        </li>
      </ul>
    </div>
  );
};

export default Mac4;
