import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Dis from "../assets/Dis.jpeg";

const Distributor = () => {
    const COMMISSION_DATA = [
        { rank: "1A", sales: "1-2 Sales", amount: "€285", timeframe: "Per sale" },
        { rank: "2A", sales: "3-10 Sales", amount: "€570", timeframe: "Per sale" },
        { rank: "3A", sales: "11-20 Sales", amount: "€855", timeframe: "Per sale" },
        { rank: "4A", sales: "21-50 Sales", amount: "€1,140", timeframe: "Per sale" },
        { rank: "5A", sales: "51-100 Sales", amount: "€1,425", timeframe: "Per sale" },
        { rank: "6A", sales: "101+ Sales", amount: "€1,710", timeframe: "Per sale" },
    ];

    const TESTIMONIALS = [
        {
            name: "Maria S.",
            position: "6A Distributor",
            quote: "Joining Enagic changed my life. I started part-time and now earn a full-time income while helping others achieve better health.",
            image: "https://ext.same-assets.com/3912226029/distributor-success-1.jpg"
        },
        {
            name: "Thomas K.",
            position: "4A Distributor",
            quote: "I've built a sustainable business that provides financial freedom while promoting products I truly believe in.",
            image: "https://ext.same-assets.com/3912226029/distributor-success-2.jpg"
        },
        {
            name: "Sophie L.",
            position: "5A Distributor",
            quote: "The Enagic compensation plan is unlike anything else I've seen. The support system and training make success achievable for anyone willing to work.",
            image: "https://ext.same-assets.com/3912226029/distributor-success-3.jpg"
        }
    ];

    const INCOME_EXAMPLES = [
        { rank: "2A", monthlyPotential: "€1,710 - €5,700", salesVolume: "3-10 sales/month" },
        { rank: "4A", monthlyPotential: "€23,940 - €57,000", salesVolume: "21-50 sales/month" },
        { rank: "6A", monthlyPotential: "€172,710+", salesVolume: "101+ sales/month" }
    ];

    const [isVisible, setIsVisible] = useState({
        commission: false,
        steps: false,
        benefits: false,
        testimonials: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const commission = document.getElementById('commission-section');
            const steps = document.getElementById('steps-section');
            const benefits = document.getElementById('benefits-section');
            const testimonials = document.getElementById('testimonials-section');
            
            const isElementInViewport = (el) => {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.bottom >= 0
                );
            };

            if (commission && isElementInViewport(commission)) {
                setIsVisible(prev => ({ ...prev, commission: true }));
            }
            
            if (steps && isElementInViewport(steps)) {
                setIsVisible(prev => ({ ...prev, steps: true }));
            }
            
            if (benefits && isElementInViewport(benefits)) {
                setIsVisible(prev => ({ ...prev, benefits: true }));
            }
            
            if (testimonials && isElementInViewport(testimonials)) {
                setIsVisible(prev => ({ ...prev, testimonials: true }));
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

   

    return (
        <main className="bg-[#f9f9fa] font-sans text-blue-800">
            {/* Hero Section */}
            <motion.section
                className="relative min-h-[500px] flex flex-col justify-end mt-1"
            >
                {/* Sticky Background Image */}
                {/* <div className="fixed top-0 left-0 w-full h-screen -z-10">
                    <img
                        src={Dis}
                        alt="Distributor"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div> */}

                {/* Gradient Overlay and Text Content */}
                <div className="bg-gradient-to-b from-white/70 via-white/60 to-transparent  pb-10 px-4 md:px-16">
                    <motion.h1 
                        className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide max-w-4xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Transform Your Life as an{" "}
                        <span className="">Independent</span>
                        <br />
                        Enagic Distributor
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl max-w-2xl leading-relaxed"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Join thousands of successful entrepreneurs who have built thriving businesses
                        while promoting health and wellness worldwide.
                    </motion.p>
                </div>
            </motion.section>

            {/* Why Become a Distributor Section */}
            <section className="py-12 px-4 md:px-16 bg-white">
                <div className="max-w-5xl mx-auto">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-center mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Why Become an Enagic Distributor?
                    </motion.h2>
                    
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8"
                        variants={staggerChildren}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div 
                            className="bg-[#f9f9fa] p-6 rounded-lg shadow-md text-center"
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#193d70] rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Lucrative Compensation</h3>
                            <p className="text-gray-700">Earn substantial commissions with our industry-leading 8-point system that rewards your efforts from day one.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-[#f9f9fa] p-6 rounded-lg shadow-md text-center"
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#193d70] rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                            <p className="text-gray-700">Join a supportive network of entrepreneurs across 80+ countries who share your passion for health and success.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-[#f9f9fa] p-6 rounded-lg shadow-md text-center"
                            variants={fadeInUp}
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-[#193d70] rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Life-Changing Products</h3>
                            <p className="text-gray-700">Represent premium Kangen Water® systems that genuinely improve lives, creating loyal customers and repeat business.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Compensation Plan Section */}
            <section className="py-14 px-4 md:px-24 bg-[#f9f9fa]">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                ><div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
                        Industry-Leading Compensation Plan
                    </h3>
                    <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed mb-6">
                        Enagic offers one of the most generous and sustainable compensation plans in the direct sales industry. Our dynamic structure provides <span className="font-semibold">seven different ways to earn income</span>, allowing both part-time and full-time distributors to create lasting financial freedom.
                    </p>
                    
                    </div>
                </motion.div>
            </section>

            {/* Commission Structure Table (Demo) */}
<section id="commission-section" className="py-16 px-2 md:px-10 bg-white">
    <motion.div
        initial="hidden"
        animate={isVisible.commission ? "visible" : "hidden"}
        variants={fadeInUp}
    >
        <h4 className="text-2xl font-bold text-[#193d70] mb-8 text-center max-w-4xl mx-auto">
            Example Commission Structure Overview
        </h4>
        <div className="overflow-auto rounded-lg shadow-lg mx-auto bg-white max-w-5xl">
            <table className="min-w-full text-sm border-collapse border border-[#ddd]">
                <thead>
                    <tr className="bg-[#193d70] text-white">
                        <th className="py-3 px-4 font-bold border-l border-[#2a4a7d]" scope="col">
                            Level
                        </th>
                        {["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"].map((level, index) => (
                            <th
                                key={index}
                                className="py-3 px-4 font-bold border-l border-[#2a4a7d]"
                                scope="col"
                            >
                                {level}
                                <div className="text-xs font-normal mt-1">Demo Sales</div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-center text-[#193d70]">
                    <tr className="bg-[#f9f9fa]">
                        <td className="py-3 px-4 font-semibold text-lg border-l border-[#ccc]">
                            Commission
                        </td>
                        {["$X", "$Y", "$Z", "$A", "$B"].map((val, idx) => (
                            <td key={idx} className="py-3 px-4 font-semibold text-lg border-l border-[#ccc]">
                                {val}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td className="py-3 px-4 font-semibold border-l border-[#ccc]">
                            Timeframe
                        </td>
                        {["Flexible", "Monthly", "Quarterly", "On Target", "Annually"].map((val, idx) => (
                            <td key={idx} className="py-3 px-4 border-l border-[#ccc]">
                                {val}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>

        <h4 className="text-xl font-bold text-[#193d70] mt-12 mb-6 text-center max-w-4xl mx-auto">
            Potential Income (For Illustration Only)
        </h4>
        <div className="overflow-auto rounded-lg shadow-lg mx-auto bg-white max-w-3xl">
            <table className="min-w-full text-sm border-collapse border border-[#ddd]">
                <thead>
                    <tr className="bg-[#d2a257] text-white">
                        <th className="py-3 px-4 font-bold border-l border-[#c69347]" scope="col">
                            Level
                        </th>
                        <th className="py-3 px-4 font-bold border-l border-[#c69347]" scope="col">
                            Estimated Output
                        </th>
                        <th className="py-3 px-4 font-bold border-l border-[#c69347]" scope="col">
                            Income Potential
                        </th>
                    </tr>
                </thead>
                <tbody className="text-center text-[#193d70]">
                    {[
                        { level: "Level 1", output: "Low", income: "$100 - $500" },
                        { level: "Level 2", output: "Moderate", income: "$500 - $1,000" },
                        { level: "Level 3", output: "Consistent", income: "$1,000 - $3,000" },
                        { level: "Level 4", output: "High", income: "$3,000 - $6,000" },
                        { level: "Level 5", output: "Very High", income: "$6,000+" },
                    ].map((item, index) => (
                        <tr key={item.level} className={index % 2 === 0 ? "bg-[#f9f9fa]" : ""}>
                            <td className="py-3 px-4 font-semibold border-l border-[#ccc]">
                                {item.level}
                            </td>
                            <td className="py-3 px-4 border-l border-[#ccc]">
                                {item.output}
                            </td>
                            <td className="py-3 px-4 font-semibold text-[#193d70] border-l border-[#ccc]">
                                {item.income}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <p className="text-sm text-center mt-4 text-gray-500 max-w-3xl mx-auto">
            *This data is purely illustrative and does not represent any real earnings or sales figures.
        </p>
    </motion.div>
</section>


           
         

           {/* Additional Income Streams (Demo Version) */}
<section id="benefits-section" className="py-16 px-4 md:px-24 bg-[#f9f9fa] max-w-7xl mx-auto">
    <motion.div
        initial="hidden"
        animate={isVisible.benefits ? "visible" : "hidden"}
        variants={fadeInUp}
    >
        <h4 className="text-2xl font-bold mb-10 text-center">Additional Income Opportunities</h4>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <motion.div 
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#193d70]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <h5 className="text-[#193d70] font-bold mb-3 text-lg">Training Bonus</h5>
                <p className="text-sm text-[#333] leading-relaxed">
                    Earn additional rewards when mentoring new team members through training programs. 
                    Support growth and receive leadership incentives.
                </p>
            </motion.div>
            <motion.div 
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#193d70]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <h5 className="text-[#193d70] font-bold mb-3 text-lg">Achievement Award</h5>
                <p className="text-sm text-[#333] leading-relaxed">
                    Unlock a special milestone award upon reaching an advanced rank. 
                    This reward acknowledges your commitment and success.
                </p>
            </motion.div>
            <motion.div 
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#193d70]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <h5 className="text-[#193d70] font-bold mb-3 text-lg">Performance Incentive</h5>
                <p className="text-sm text-[#333] leading-relaxed">
                    Receive monthly bonuses based on your role level and ongoing performance. 
                    These bonuses reflect your consistency and dedication.
                </p>
            </motion.div>
            <motion.div 
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#193d70]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <h5 className="text-[#193d70] font-bold mb-3 text-lg">Team Success Bonus</h5>
                <p className="text-sm text-[#333] leading-relaxed">
                    Eligible members may earn additional recurring bonuses based on the monthly performance 
                    of their team. More activity equals greater rewards.
                </p>
            </motion.div>
            <motion.div 
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#193d70]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <h5 className="text-[#193d70] font-bold mb-3 text-lg">Sales Milestone Recognition</h5>
                <p className="text-sm text-[#333] leading-relaxed">
                    Special awards are provided when your team hits key sales achievements. 
                    Celebrate collective effort with recognition bonuses.
                </p>
            </motion.div>
            <motion.div 
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#193d70]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <h5 className="text-[#193d70] font-bold mb-3 text-lg">Subscription-Based Income</h5>
                <p className="text-sm text-[#333] leading-relaxed">
                    Earn recurring commissions through select subscription product sales. 
                    Build residual income while supporting repeat customers.
                </p>
            </motion.div>
            
        </div>
    </motion.div>
</section>


           {/* Testimonials Section */}
<section id="testimonials-section" className="py-16 px-4 md:px-16 bg-white">
  <motion.div
    initial="hidden"
    animate={isVisible.testimonials ? "visible" : "hidden"}
    variants={fadeInUp}
  >
    <h4 className="text-2xl font-bold mb-12 text-center">Success Stories from Real Distributors</h4>
    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      {[
        {
          name: "Sophia Williams",
          position: "Team Leader, UK",
          image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
          quote: "Joining this business changed my life! I've grown personally and financially beyond what I imagined."
        },
        {
          name: "James Chen",
          position: "Distributor, Singapore",
          image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
          quote: "The community and support are incredible. Every step has been empowering and rewarding."
        },
        {
          name: "Alicia Gomez",
          position: "Senior Associate, Spain",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
          quote: "I was able to build a flexible lifestyle and help others succeed—it's truly fulfilling!"
        }
      ].map((testimonial, index) => (
        <motion.div 
          key={testimonial.name}
          className="bg-[#f9f9fa] rounded-lg shadow-md overflow-hidden"
          whileHover={{ y: -10 }}
         
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.8 }}
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
              loading="lazy" 
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d2a257]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-[#334] italic mb-4">"{testimonial.quote}"</blockquote>
            <div className="border-t border-gray-200 pt-4">
              <h5 className="font-semibold text-[#193d70]">{testimonial.name}</h5>
              <p className="text-sm text-[#d2a257]">{testimonial.position}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


            {/* Timeline Section */}
            <section className="py-16 px-4 md:px-16 bg-[#f9f9fa]">
                <div className="max-w-5xl mx-auto">
                    <motion.h4 
                        className="text-2xl font-bold mb-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Your Journey to Enagic Success
                    </motion.h4>
                    
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#d2a257]"></div>
                        
                        {/* Timeline Items */}
                        {[
                            {
                                position: "right",
                                title: "Day 1: Get Started",
                                content: "Register as an Enagic distributor and receive your welcome kit with all the tools and training you need to launch your business."
                            },
                            {
                                position: "left",
                                title: "Month 1: First Sales",
                                content: "Complete your product training and make your first 1-2 sales, qualifying you for 1A rank and your first commission payments."
                            },
                            {
                                position: "right",
                                title: "Month 3-6: Build Team",
                                content: "Reach 2A-3A status by expanding your customer base and recruiting your first team members who start their own Enagic businesses."
                            },
                            {
                                position: "left",
                                title: "Year 1+: 6A Achievement",
                                content: "Develop a thriving organization of 100+ sales, achieving 6A status and unlocking the highest commissions and exclusive rewards Enagic offers."
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                className={`mb-20 flex ${item.position === "right" ? "justify-end pr-8 md:pr-16" : "justify-start pl-8 md:pl-16"} relative w-1/2 ${item.position === "left" ? "ml-auto" : ""}`}
                                initial={{ x: item.position === "right" ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className={`absolute ${item.position === "right" ? "right-0" : "left-0"} top-6 transform ${item.position === "right" ? "translate-x-1/2" : "-translate-x-1/2"} w-4 h-4 rounded-full bg-[#193d70] border-4 border-[#d2a257] z-10`}></div>
                                <div className="bg-white p-5 rounded-lg shadow-md max-w-xs">
                                    <h5 className="text-lg font-semibold mb-2 text-[#193d70]">{item.title}</h5>
                                    <p className="text-sm text-[#334]">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
           

            {/* FAQ Section */}
            <section className="py-16 px-4 md:px-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h4>
                    
                    <div className="space-y-6">
                        {[
                            {
                                question: "How much does it cost to become a distributor?",
                                answer: "There is no cost to register as an Enagic distributor. You simply purchase your own Kangen Water® machine, which qualifies you to represent the products and earn commissions. This approach ensures distributors truly believe in the products they represent."
                            },
                            {
                                question: "Do I need prior sales experience?",
                                answer: "No prior sales experience is required. Enagic provides comprehensive training and support to help you succeed. Many of our top distributors came from non-sales backgrounds but had passion for the products and a desire to help others."
                            },
                            {
                                question: "How quickly can I start earning commissions?",
                                answer: "You can earn your first commission as soon as you make your first sale. Enagic pays commissions quickly, usually within 10 business days after a sale is processed and finalized. This immediate compensation is one of the many benefits of our program."
                            },
                            {
                                question: "Is this a full-time or part-time opportunity?",
                                answer: "It can be either! Many distributors start part-time while maintaining their current jobs, then transition to full-time as their Enagic business grows. The flexibility allows you to build at your own pace according to your personal goals and time availability."
                            }
                        ].map((faq, index) => (
                            <motion.div 
                                key={index}
                                className="bg-[#f9f9fa] rounded-lg shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <details className="group">
                                    <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-[#193d70]">
                                        <span>{faq.question}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-sm text-[#334]">
                                        <p>{faq.answer}</p>
                                    </div>
                                </details>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </main>
    );
};

export default Distributor;