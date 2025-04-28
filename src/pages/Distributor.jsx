import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Distributor = () => {
    const COMMISSION_DATA = [
        { rank: "1A", sales: "1-2 Sales", amount: "€285" },
        { rank: "2A", sales: "3-10 Sales", amount: "€570" },
        { rank: "3A", sales: "11-20 Sales", amount: "€855" },
        { rank: "4A", sales: "21-50 Sales", amount: "€1,140" },
        { rank: "5A", sales: "51-100 Sales", amount: "€1,425" },
        { rank: "6A", sales: "101+ Sales", amount: "€1,710" },
      ];
    return (
        <main className="bg-[#f9f9fa] font-sans text-[#193d70]">
            {/* HERO Section */}
            <section
                className="relative overflow-hidden min-h-[350px] flex flex-col justify-end mt-15"
                style={{
                    background:
                        "url(https://ext.same-assets.com/3912226029/1967173589.jpeg) center/cover no-repeat",
                }}
            >
                <div className="bg-gradient-to-b from-white/70 via-white/60 to-transparent pt-12 pb-6 px-4 md:px-16">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-wide max-w-4xl">
                        Become an{" "}
                        <span className="border-b-4 border-[#d2a257] pb-1">Independent</span>
                        <br />
                        Enagic Distributor
                    </h1>
                </div>
            </section>

            {/* Distributor Section */}
            {/* <section className="relative bg-[#193d70] py-12 flex items-center justify-center min-h-[160px]">
                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase text-center shadow-black shadow max-w-4xl px-4">
                    Become an Enagic Independent Distributor
                </h3>
            </section> */}

            {/* Compensation Plan Intro */}
            <section className="py-10 px-4 md:px-24 bg-[#f9f9fa]">
                <p className="max-w-2xl mx-auto text-center text-lg leading-relaxed">
                    Enagic’s dynamically designed compensation plan, which offers you
                    several different ways of earning income, is truly exciting for
                    distributors.
                </p>
                <ul className="text-center space-y-1 my-4 text-[#334] max-w-xs mx-auto">
                    <li>Direct Sales Commission</li>
                    <li>Step-up Award</li>
                    <li>Educational Allowance</li>
                    <li>Title Incentive</li>
                    <li>Group Incentive</li>
                    <li>Ukon DD Commission</li>
                    <li>Filter Commission</li>
                </ul>
            </section>

            {/* Commission Structure Table */}
            <section className="py-10 px-2 md:px-10 bg-white">
                <h4 className="text-xl font-bold text-[#193d70] mb-6 text-center max-w-4xl mx-auto">
                    The Basic 8-Point Commission Structure
                </h4>
                <div className="overflow-auto rounded-lg shadow mx-auto bg-white max-w-4xl">
                    <table className="min-w-full text-sm border-collapse border border-[#ddd]">
                        <thead>
                            <tr className="bg-[#193d70] text-white">
                                {COMMISSION_DATA.map((item) => (
                                    <th
                                        key={item.rank}
                                        className="py-2 px-4 font-bold border-l border-[#2a4a7d]"
                                        scope="col"
                                    >
                                        {item.rank}
                                        <div className="text-xs font-normal mt-1">{item.sales}</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-center text-[#193d70]">
                            <tr className="bg-[#f9f9fa]">
                                {COMMISSION_DATA.map((item) => (
                                    <td
                                        key={item.rank}
                                        className="py-3 px-4 font-semibold text-lg border-l border-[#ccc]"
                                    >
                                        {item.amount}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* How to Earn Section */}
            <section className="py-10 px-4 md:px-24 bg-[#f9f9fa] max-w-5xl mx-auto">
                <h5 className="text-[1.25rem] font-bold mb-6 text-center">
                    How do I earn income?
                </h5>

                <div className="mb-10 max-w-xl mx-auto">
                    <h6 className="font-semibold text-[#193d70] mb-2">Becoming 3A</h6>
                    <p className="mb-3 leading-relaxed">
                        Bring in sales and help your team win:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 justify-center mb-3">
                        <img
                            src="https://ext.same-assets.com/3912226029/1014686730.png"
                            alt="machine"
                            className="h-14"
                            loading="lazy"
                        />
                        <span className="mx-2 text-2xl font-bold select-none">+</span>
                        <img
                            src="https://ext.same-assets.com/3912226029/1014686730.png"
                            alt="machine"
                            className="h-14"
                            loading="lazy"
                        />
                    </div>
                    <ul className="text-sm list-disc list-inside leading-relaxed text-[#334]">
                        <li>Direct sales: 3 = €285 × 3 = €855</li>
                        <li>1A → 2A → 3A progression</li>
                    </ul>
                </div>

                <div className="mb-10 max-w-xl mx-auto">
                    <h6 className="font-semibold text-[#193d70] mb-2">
                        Jumping from one rank to another
                    </h6>
                    <p className="mb-3 leading-relaxed">Rank up and rewards increase:</p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 justify-center mb-3">
                        <img
                            src="https://ext.same-assets.com/3912226029/1014686730.png"
                            alt="machine"
                            className="h-14"
                            loading="lazy"
                        />
                        <span className="mx-2 text-2xl font-bold select-none">+</span>
                        <img
                            src="https://ext.same-assets.com/3912226029/1014686730.png"
                            alt="machine"
                            className="h-14"
                            loading="lazy"
                        />
                        <span className="mx-2 text-2xl font-bold select-none">+</span>
                        <img
                            src="https://ext.same-assets.com/3912226029/1014686730.png"
                            alt="machine"
                            className="h-14"
                            loading="lazy"
                        />
                    </div>
                    <ul className="text-sm list-disc list-inside leading-relaxed text-[#334]">
                        <li>Direct sales: 6 = €285 × 6 = €1,710</li>
                        <li>1A → 2A → 3A progression</li>
                    </ul>
                </div>

                <div className="max-w-xl mx-auto">
                    <h6 className="font-semibold text-[#193d70] mb-2">
                        Fantastic compensation for 6A
                    </h6>
                    <ul className="text-sm list-disc list-inside leading-relaxed text-[#334]">
                        <li>Commissions increase at higher ranks!</li>
                        <li>Reach 101+ sales for top rewards.</li>
                    </ul>
                </div>
            </section>

            {/* 6A Highlight */}
            <section className="py-12 px-4 md:px-32 bg-white max-w-4xl mx-auto text-center">
                <h2 className="text-6xl font-bold text-[#d2a257] mb-4 select-none">6A</h2>
                <p className="text-lg text-[#193d70] max-w-2xl mx-auto mb-5 leading-relaxed">
                    The pinnacle of Enagic success. To reach{" "}
                    <span className="font-bold">6A</span>, you and your team need a
                    combined total of 101+ sales. At this level, you earn the highest
                    commissions and additional rewards.
                </p>
            </section>

            {/* Additional Income Streams */}
            <section className="py-10 px-4 md:px-24 bg-[#f9f9fa] max-w-7xl mx-auto">
                <h4 className="text-2xl font-bold mb-8 text-center">Additional Income Streams</h4>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    <div className="bg-white rounded shadow-md p-6">
                        <h5 className="text-[#193d70] font-bold mb-2 text-lg">
                            Educational Allowance
                        </h5>
                        <p className="text-sm text-[#333] leading-relaxed">
                            Earn bonuses while training other distributors through Enagic's
                            educational programs.
                        </p>
                    </div>
                    <div className="bg-white rounded shadow-md p-6">
                        <h5 className="text-[#193d70] font-bold mb-2 text-lg">
                            6A Step-up Award
                        </h5>
                        <p className="text-sm text-[#333] leading-relaxed">
                            Receive a special award when you reach 6A status.
                        </p>
                    </div>
                    <div className="bg-white rounded shadow-md p-6">
                        <h5 className="text-[#193d70] font-bold mb-2 text-lg">
                            6A Title Incentive
                        </h5>
                        <p className="text-sm text-[#333] leading-relaxed">
                            Exclusive incentives based on your continued success as a top
                            distributor!
                        </p>
                    </div>
                    <div className="bg-white rounded shadow-md p-6">
                        <h5 className="text-[#193d70] font-bold mb-2 text-lg">
                            6A Group Incentive (monthly)
                        </h5>
                        <p className="text-sm text-[#333] leading-relaxed">
                            Additional group incentives available every month for
                            high-performing 6A teams.
                        </p>
                    </div>
                    <div className="bg-white rounded shadow-md p-6">
                        <h5 className="text-[#193d70] font-bold mb-2 text-lg">
                            6A Group Sale Award
                        </h5>
                        <p className="text-sm text-[#333] leading-relaxed">
                            Get recognized and rewarded for the group sales you and your team
                            achieve!
                        </p>
                    </div>
                    <div className="bg-white rounded shadow-md p-6">
                        <h5 className="text-[#193d70] font-bold mb-2 text-lg">
                            Ukon® DD Commission
                        </h5>
                        <p className="text-sm text-[#333] leading-relaxed">
                            Earn extra commissions from sales of Ukon and related products.
                        </p>
                    </div>
                    <div className="bg-white rounded shadow-md p-6">
                        <h5 className="text-[#193d70] font-bold mb-2 text-lg">
                            Filter Commission
                        </h5>
                        <p className="text-sm text-[#333] leading-relaxed whitespace-pre-line">
                            Bonuses for helping customers maintain their water machines!
                            {"\n"}• Filter{"\n"}• E-Cleaner{"\n"}• Electrolysis Enhancer
                        </p>
                    </div>
                </div>
            </section>



            <Footer/>
        </main> 
    );
};

export default Distributor;
