import React from "react";
import Mac2 from "../assets/Mac2.jpeg";

const Mac2 = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Kangen Water Machine Leveluk SD 501 Platinum
      </h1>
      <img
        src={Mac2}
        alt="Leveluk SD 501 Platinum"
        className="w-full max-h-[400px] object-contain mb-6 rounded-lg shadow-md"
      />

      <p className="mb-4 text-lg">
        Imagine having a machine in your kitchen that doesn’t just provide water—
        <strong> it transforms it into a powerhouse of hydration, beauty, and cleanliness</strong>. The
        Leveluk SD 501 Platinum takes everything you love about the standard Leveluk SD 501 and elevates
        it to a whole new level of sophistication.
      </p>

      <p className="mb-4 text-lg">
        With its sleek platinum finish, upgraded voice guidance in five languages, and cutting-edge water
        ionization technology, this machine is the perfect fusion of <strong>luxury and performance</strong>.
        Whether you're looking to get high quality drinking water, enhance your skincare routine, or sanitize
        your home naturally, the SD 501 Platinum delivers five types of functional water with just the press of a button.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Why Upgrade to the Leveluk SD 501 Platinum?</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>
          <strong>Same Advanced Technology—Sleek New Design:</strong> Features the same 7 platinum-coated
          titanium plates, but with a modern platinum-colored finish to elevate your kitchen.
        </li>
        <li>
          <strong>Multilingual Voice Guidance:</strong> Supports five languages—English, German, French,
          Italian, and Spanish—for easier, clearer operation.
        </li>
        <li>
          <strong>Hydration, Beauty, and Home Cleaning – All in One:</strong> Produces five types of water for
          every need.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Types of Water It Produces:</h2>
      <ul className="list-disc pl-6 space-y-1 text-lg">
        <li><strong>Kangen Water (pH 8.5-9.5):</strong> Superior hydration with antioxidants and better absorption.</li>
        <li><strong>Clean Water (pH 7.0):</strong> Ideal for baby formula and medication.</li>
        <li><strong>Beauty Water (pH 6.0):</strong> Naturally tightens and refreshes skin for a glowing complexion.</li>
        <li><strong>Strong Acidic Water (pH 2.5):</strong> A powerful, chemical-free disinfectant for sanitation.</li>
        <li><strong>Strong Kangen Water (pH 11.5):</strong> Removes pesticides and chemicals from fruits and vegetables.</li>
      </ul>
    </div>
  );
};

export default Mac2;
