import React from "react";
import Mac3Image from "../../assets/Mac3.jpg";

const Mac3 = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Kangen Water Machine Leveluk K8
      </h1>

      <img
        src={Mac3Image}
        alt="Leveluk K8 Machine"
        className="w-full max-h-[400px] object-contain mb-6 rounded-lg shadow-md"
      />

      <p className="mb-4 text-lg">
        <strong>Experience the Next Level of Kangen Water Technology</strong><br />
        The Leveluk K8 (Kangen 8) is the most advanced Kangen Water machine ever created. With 8 platinum-coated
        titanium plates, it delivers the highest level of water ionization, producing super-antioxidant water with
        exceptional efficiency. Whether you need water for drinking, cooking, skincare, or cleaning, the K8 provides
        5 different water types at the touch of a button—making it an essential upgrade for your home.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why the Leveluk K8 Stands Out</h2>

      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>
          <strong>Unmatched Power and Antioxidant Benefits:</strong> With 8 high-quality electrolysis plates, the K8 boosts
          ionization for greater antioxidant potential (up to -850 mV ORP). Enjoy smoother, cleaner water that supports your well-being.
        </li>

        <li>
          <strong>Five Versatile Water Types for Every Need:</strong><br />
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Kangen Water (pH 8.5–9.5):</strong> Ideal for daily hydration with rich antioxidants.</li>
            <li><strong>Clean Water (pH 7.0):</strong> Neutral water for baby formula and medication.</li>
            <li><strong>Beauty Water (pH 6.0):</strong> Perfect for refreshing and hydrating your skin.</li>
            <li><strong>Strong Acidic Water (pH 2.5):</strong> Natural disinfectant for home sanitization.</li>
            <li><strong>Strong Kangen Water (pH 11.5):</strong> Removes pesticides and chemicals from produce.</li>
          </ul>
        </li>

        <li>
          <strong>Cutting-Edge Features for Effortless Use:</strong><br />
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>8 Platinum-Coated Titanium Plates – Delivers premium ionized water quality.</li>
            <li>Full Touchscreen LCD Panel – Simple, user-friendly operation with voice guidance.</li>
            <li>Sleek, Modern Design – A stylish fit for any kitchen decor.</li>
            <li>Multilingual Support – Speaks 8 languages (English, German, French, Italian, Spanish, Portuguese, Japanese, and Chinese).</li>
            <li>Energy-Efficient Smart Tech – Automatically shuts off when idle to save energy.</li>
            <li>Convenient Cleaning System – Automated cleaning for easy maintenance (manual cleaning still recommended).</li>
            <li>Worldwide Voltage Compatibility – Supports 100-240V power supply for global usage.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Mac3;
