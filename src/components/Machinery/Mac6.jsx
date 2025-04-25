import React from "react";
import Mac6Img from "../../assets/Mac6.jpg"; // Make sure to place your Anespa DX image here

const Mac6 = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Anespa DX – Turn Your Bathroom into a Luxury Spa
      </h1>

      <img
        src={Mac6Img}
        alt="Anespa DX"
        className="w-full max-h-[400px] object-contain mb-6 rounded-lg shadow-md"
      />

      <p className="mb-4 text-lg">
        Ever dream of turning your ordinary bathroom into a natural hot spring resort? The Anespa DX makes that dream a reality. Designed to transform your shower into a spa-like experience, the Anespa DX creates a continuous stream of healthy, ionized mineral water. Say goodbye to harmful chemicals in your water and hello to softer skin, healthier hair, and a more relaxing bath.
      </p>

      <p className="mb-4 text-lg">
        This water filtration unit features a ceramic cartridge that removes almost 100% of chlorine and other harmful substances from tap water. The Anespa DX doesn’t just filter; it revitalizes your water with <strong>Tufa</strong>, <strong>MIC stone</strong>, and <strong>Power stone</strong>—sourced from the famous Futamata Radium Hot Spring in Hokkaido, Japan.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Why You’ll Love the Anespa DX:
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-lg">
        <li><strong>Natural Spa Water at Home:</strong> Mimics the therapeutic effects of a Japanese hot spring.</li>
        <li><strong>Healthier Skin and Hair:</strong> Removes chlorine and harmful pollutants for gentler bathing.</li>
        <li><strong>Relaxing Mineral Stones:</strong> Infuses your bath with calming and energizing ions.</li>
        <li><strong>Safe and Natural:</strong> Eco-friendly—operates without electricity.</li>
        <li><strong>Easy Installation:</strong> Quick setup, fits easily into any bathroom.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Technical Specifications:</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto border border-gray-300">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Filtration Media</td>
              <td className="p-2">Large ceramic cartridge that removes almost 100% of chlorine and harmful substances</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Special Stones</td>
              <td className="p-2">Tufa, MIC stone, and Power stone from Futamata Radium hot spring, Japan</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Generates</td>
              <td className="p-2">Mineral ion water for your bath or shower</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">pH Range</td>
              <td className="p-2">Same as tap water</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Wattage</td>
              <td className="p-2">Does not use electricity</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Total Weight</td>
              <td className="p-2">2.5 kg</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Dimensions (W × Diameter)</td>
              <td className="p-2">130 mm × 346 mm</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Production Rate</td>
              <td className="p-2">2.6 liters per minute</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-2 font-semibold">Ease of Use</td>
              <td className="p-2">Very simple to install and operate</td>
            </tr>
            <tr>
              <td className="p-2 font-semibold">Warranty</td>
              <td className="p-2">3 (Three) years</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mac6;
