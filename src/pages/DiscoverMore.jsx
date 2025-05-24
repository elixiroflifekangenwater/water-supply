import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import CertificatePage from '../components/Certificate';

const DiscoverMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#f9f9fa] font-sans text-blue-800">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex flex-col justify-end bg-gradient-to-b from-[#4DB6E2]/20 to-transparent">
        <div className="container mx-auto px-4 py-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Change Your Water, Change Your Life!
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Using advanced technology from Japan, our Kangen Water machine converts ordinary drinking water into delicious alkaline drinking water.
          </motion.p>
        </div>
      </section>

      {/* What is Kangen Water Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-[#2a5885]">What Is Kangen Water?</h2>
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-sm">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Kangen Water® is a revolutionary alkaline water produced by Enagic's advanced water ionization technology. Originating from Japan, this innovative water transforms ordinary tap water into a powerful, health-enhancing elixir through a sophisticated electrolysis process. Since 1974, Enagic has been at the forefront of water technology, bringing this exceptional water to millions worldwide.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  What sets Kangen Water apart is its unique combination of three transformative properties that work in harmony to support your body's natural processes and promote optimal well-being.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#4DB6E2] hover:border-[#2a5885]"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#4DB6E2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#4DB6E2]">pH</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#2a5885]">Alkaline</h3>
                  <p className="text-gray-600">Kangen Water's optimal pH level (8.5-9.5) helps neutralize acid waste in the body, creating an environment where your cells can thrive. This alkalizing effect may help combat the effects of our typically acidic modern diets and lifestyles.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#4DB6E2] hover:border-[#2a5885]"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#4DB6E2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#4DB6E2]">H₂</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#2a5885]">Antioxidant-Rich</h3>
                  <p className="text-gray-600">Packed with active hydrogen molecules, Kangen Water acts as a powerful antioxidant, helping to neutralize harmful free radicals that contribute to aging and various health concerns. This molecular hydrogen is easily absorbed by your cells for maximum benefit.</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#4DB6E2] hover:border-[#2a5885]"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#4DB6E2]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <span className="text-2xl text-[#4DB6E2]">H₂O</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#2a5885]">Micro-Clustered</h3>
                  <p className="text-gray-600">The electrolysis process restructures water molecules into smaller clusters, making it up to six times more hydrating than conventional water. This enhanced hydration means better nutrient absorption and more efficient detoxification at the cellular level.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Kangen Water Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-[#2a5885]">Why Choose Kangen Water?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the transformative power of water that goes beyond basic hydration to support your overall health and wellness journey.
            </p>
            <div className="w-24 h-1.5 bg-[#4DB6E2] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#4DB6E2]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#4DB6E2]/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-[#4DB6E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#2a5885]">Superior Hydration</h3>
                  <p className="text-gray-600 leading-relaxed">Kangen Water's micro-clustered molecular structure allows for 6x better cellular hydration compared to regular water. These smaller water clusters are more easily absorbed by your cells, ensuring optimal hydration at the deepest levels. This enhanced hydration supports better nutrient absorption, improved cellular function, and more efficient toxin removal.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#4DB6E2]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#4DB6E2]/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-[#4DB6E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#2a5885]">Powerful Antioxidant</h3>
                  <p className="text-gray-600 leading-relaxed">Kangen Water is rich in active hydrogen, one of the most powerful antioxidants available. These hydrogen molecules neutralize harmful free radicals that contribute to aging, inflammation, and various health concerns. Regular consumption helps combat oxidative stress, supports your immune system, and promotes cellular repair and regeneration throughout your body.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#4DB6E2]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#4DB6E2]/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-[#4DB6E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#2a5885]">Complete Detoxification</h3>
                  <p className="text-gray-600 leading-relaxed">Kangen Water's unique properties support your body's natural detoxification systems. The smaller water clusters and negative ORP (Oxidation-Reduction Potential) help break down and flush out accumulated toxins, heavy metals, and acidic waste more effectively than regular water. This gentle yet thorough detox process can lead to increased energy levels, improved digestion, and better overall health.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#4DB6E2]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-start">
                <div className="bg-[#4DB6E2]/10 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-[#4DB6E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#2a5885]">Optimal pH Balance</h3>
                  <p className="text-gray-600 leading-relaxed">Modern diets high in processed foods, sugar, and animal products can lead to chronic low-grade acidosis. Kangen Water's natural alkalinity (pH 8.5-9.5) helps neutralize excess acidity in the body, promoting a more balanced internal environment. This optimal pH balance supports better enzyme function, improved metabolism, and may help reduce the risk of chronic health issues associated with prolonged acidity.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 bg-gradient-to-r from-[#2a5885] to-[#4DB6E2] p-8 rounded-xl shadow-lg max-w-5xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center">The Kangen Water Difference</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  Kangen Water stands apart from ordinary filtered or bottled water through its unique electrolysis process that restructures water at the molecular level. This transformation creates water that's not just clean, but actively works to support your health in multiple ways.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The Enagic® water ionizer uses a sophisticated 7-plate electrolysis chamber with medical-grade titanium plates coated in platinum. This advanced technology transforms ordinary tap water into Kangen Water® with its unique properties that support overall wellness.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Kangen Water Benefits at a Glance:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Superior hydration at the cellular level</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Powerful antioxidant properties</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Natural detoxification support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Optimal pH balance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Improved nutrient absorption</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-lg leading-relaxed mt-6 text-center">
              From professional athletes to health-conscious families, people around the world are experiencing the Kangen Water difference. Join the millions who have made the switch to better hydration and better health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      {/* <section className="py-16 bg-[#f9f9fa]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#4DB6E2]">ISO</h3>
                <p className="text-sm">Certified to ISO 9001, ISO 14001, and ISO 13485 for quality control and environmental management.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#4DB6E2]">WQA</h3>
                <p className="text-sm">Gold Seal certification granted by Water Quality Association (WQA).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#4DB6E2]">DSA</h3>
                <p className="text-sm">Member in good standing of the prestigious Direct Selling Association (DSA).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-3 text-[#4DB6E2]">BBB</h3>
                <p className="text-sm">A+ accreditation given by Better Business Bureau (BBB).</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      
      {/* Expert Opinion Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">What Experts Say About Kangen Water</h2>
            <div className="bg-[#f9f9fa] p-8 rounded-lg shadow-md">
              <blockquote className="text-lg italic mb-4">
                "Kangen water is considered the very best drinking water because of its incomparable powers of hydration, detoxification and anti-oxidation."
              </blockquote>
              <p className="text-right font-semibold">- Dr. Hiromi Shinya, The Enzyme Factors</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 bg-[#f9f9fa]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Global Presence</h2>
            <p className="text-xl mb-8">
              We have Global Offices in 23 Countries all around the world.
            </p>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg mb-6">
                Our commitment to spreading TRUE HEALTH worldwide is based on three major principles:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-[#4DB6E2]">Healthy BODY</h3>
                  <p>Through pure, healthy drinking water</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-[#4DB6E2]">Healthy FINANCIAL</h3>
                  <p>Through exciting business opportunities</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-[#4DB6E2]">Healthy MIND</h3>
                  <p>Through personal growth opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <CertificatePage />
    </main>
  );
};

export default DiscoverMore; 