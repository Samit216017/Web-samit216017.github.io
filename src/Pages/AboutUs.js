import React from "react";
import NavBars from "../components/common/NavBars";
import NewNavBars from "../components/common/NewNavBars";
import Button from "../components/common/Button";
import { useState } from "react";
import ExpertTalk from "../components/common/ExpertTalk";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {

    const [newNavBar, setNewNavBar] = useState(false);

    const changeNavBars = () => {
        if(window.scrollY >= 220) {
            setNewNavBar(true);
        }
        else
        {
            setNewNavBar(false);
        }
    };

    window.addEventListener('scroll', changeNavBars);

    return (
        <div className="w-full bg-gradient-to-r from-[#ECF2F6] to-white">

            {
                newNavBar ? (<NewNavBars/>) : (<NavBars/>)
            }

            <div className="w-full mx-auto">
                {/* Section 1 */}
                <div className="w-11/12 mx-auto flex flex-row pt-40 relative">
                    <div className="w-[55%] flex flex-col items-start pl-[50px] pb-[262px]">
                        <h1 className="font-[545] text-[54px] leading-tight pb-5 text-[#000248]">We are specialized in Digital Marketing</h1>
                        <p className=" pt-5 text-[#525260] text-[18px] w-[70%] tracking-wide z-10">WEBOIN TECHNOLOGIES is one of the fastest growing digital marketing agency which works on a mission to meet all the needs of our clients in every possible way We are a young and energetic team of enthusiastic professionals who believe in innovative strategies and out-of-the-box solutions. We believe in leading this digital marketing world with our endless desires and addiction to the work. We strive to offer digital planning, strategizing, and creativity, resulting in fully managed and successful online campaigns.</p>
                    </div>
                    <img
                        className="absolute bottom-0 -left-[62px]"
                        src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/page-title/bubble-9.png" alt=""
                    />

                    <img
                        className="absolute -left-[63px] -bottom-[220px] h-[445px]"
                        src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/page-title/line-4.png" alt=""
                    />
                </div>
            </div>

            {/* Section 2 */}
            <div className="w-full mx-auto bg-gradient-to-r from-white ]">
                <div className="w-11/12 mx-auto flex flex-row pt-[137px] pl-[70px] pr-[60px] pb-[80px]">
                    {/* left */}
                    <div className="w-[50%]">
                        <div>
                            <img className="w-[640px] h-[640px] flex flex-row justify-center items-center" src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-10.png" alt=""/>
                        </div>
                    </div>

                    {/* right */}
                    <div className="w-[50%] pl-[55px] flex flex-col gap-5 pt-10">
                        <p className="text-[#C75C6F] text-[20px]">Who we are</p>

                        <h1 className="text-[#292930] text-[50px]">Our Principles</h1>

                        <p className="text-[#525260] text-[18px]">Our Principles At WEBOIN TECHNOLOGIES, we redefine how users interact with digital applications by making the interfaces visually appealing We research, solve, design, analyze and develop. Our primary aim is not designing for our clients, but designing for their users. We have our own effective design process which makes life easy and pleasurable for the user</p>

                        <div className="w-fit">
                            <Link to="/about-us">
                                <Button>
                                    About Us
                                </Button>
                            </Link>
                        </div>

                        <div className="flex flex-row pt-12 pb-10">
                            <div className="flex flex-col pr-[65px] border-r-2 border-[#C7C7D5]">
                                <p className="text-[#C75C6F] text-[55px]">15+</p>

                                <p className="text-[#525260]">Years on the market</p>
                            </div>

                            <div className="pl-[65px]">
                                <p className="text-[#C75C6F] text-[55px]">366+</p>

                                <p className="text-[#525260]">Projects delivered so far</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="w-full mx-auto bg-[#27272E] pb-[140px] relative">
                <div className="w-11/12 mx-auto pt-[137px] pl-[50px]">
                    <div className="pb-14">
                        <p className="text-[#C75C6F] text-xl font-[550] pb-2">why Choose Us?</p>

                        <h1 className="text-white text-5xl font-[550] pt-3 pb-5">Our Standards</h1>

                        <p className="text-[#99A1AA] pt-6 w-[50%] pr-11 text-lg font-pop z-10">
                            Weboin is the best platform to bring your product on the top in this digital world. We have all the sources that would make your business come to the next level, and by turning out your website into a profitable online business. Our main work is not only introducing your brand, its products, and services to the market, we also provide online customer support 24/7 to make customers feel promoted and high-powered. At WEBOIN TECHNOLOGIES, we have just One Goal. Delivering outstanding ROI for your Digital Marketing Budget. Come and join us to mark your place in this competitive business world. Call for Free Web Audit & SEO Quote!
                        </p>
                    </div>

                    <div className="flex flex-row w-full pr-14 pb-1">
                        <div className="flex flex-col gap-6 w-[33%] pr-4 z-10">
                            <div className="text-white w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#565677] via-[#27272E] to-[#27272E] flex flex-row justify-center items-center text-4xl font-semibold font-dm">1</div>

                            <h1 className="text-white text-2xl pt-4 font-dm tracking-tight">Our Approach</h1>

                            <p className="font-pop pt-2 text-[#99A1AA]">Our approach is built on a foundation of creativity, collaboration, and data-driven insights. We understand that every brand is distinctive, which is why we take the time to understand your business, industry, and target audience. From there, we craft bespoke strategies that seamlessly integrate with your brand's identity, resonating with your audience and driving tangible results.</p>
                        </div>

                        <div className="flex flex-col gap-6 w-[33%] pl-4">
                            <div className="text-white w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#565677] via-[#27272E] to-[#27272E] flex flex-row justify-center items-center text-4xl font-semibold font-dm">2</div>

                            <h1 className="text-white text-2xl pt-4 font-dm tracking-tight">Expertise</h1>

                            <p className="text-[#99A1AA] font-pop pt-2">Our team comprises skilled professionals with diverse backgrounds in digital marketing, design, content creation, and more. With a wealth of experience under our belts, we bring a holistic perspective to every project.</p>
                        </div>

                        <div className="flex flex-col gap-6 w-[33%] pl-8">
                            <div className="text-white w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#565677] via-[#27272E] to-[#27272E] flex flex-row justify-center items-center text-4xl font-semibold font-dm">3</div>

                            <h1 className="text-white text-2xl pt-4 font-dm tracking-tight">Innovation</h1>

                            <p className="text-[#99A1AA] font-pop pt-2">We don't just follow trends; we set them. We're committed to staying ahead of the curve by exploring new technologies, platforms, and strategies that can elevate your brand's digital presence.</p>
                        </div>
                    </div>
                    <div className="flex flex-row w-full pt-14 pr-14">
                        <div className="flex flex-col gap-6 w-[50%] pr-9">
                            <div className="text-white w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#565677] via-[#27272E] to-[#27272E] flex felx-row justify-center items-center text-4xl font-semibold font-dm">4</div>

                            <h1 className="text-white text-2xl pt-4 font-dm tracking-tight">Transparency</h1>

                            <p className="text-[#99A1AA] font-pop pt-2">Open communication is at the core of our client relationships. We keep you informed every step of the way, ensuring that you're involved in the process and aligned with our strategies.</p>
                        </div>

                        <div className="flex flex-col gap-6 w-[50%] pl-4">
                            <div className="text-white w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#565677] via-[#27272E] to-[#27272E] flex flex-row justify-center items-center text-4xl font-semibold font-dm">5</div>

                            <h1 className="text-white text-2xl pt-4 font-dm tracking-tight">Results</h1>

                            <p className="text-[#99A1AA] font-pop pt-2">We measure our success by your success. Our focus on data and analytics allows us to continuously refine our strategies for optimal performance and growth.</p>
                        </div>
                    </div>
                </div>

                <div className="absolute w-[100px] h-[100px] bg-[#464651] rounded-full left-[402px] bottom-[577px] z-0"></div>
            </div>

            {/* Section 4 */}
            <div className="w-full mx-auto bg-white pb-[115px]">
                <div className="w-11/12 mx-auto pt-[110px] flex flex-row">
                    <div className="w-[50%] pl-[50px]">
                        <img className="font-dm w-[640px] h-[736px]" src="https://dev.weboin.com/wp-content/uploads/2021/10/about-2.png" alt=""/>
                    </div>

                    <div className="w-[50%] pl-[90px] pt-[120px]">
                        <p className="text-[#C75C6F] font-dm text-[20px] font-medium">Our service</p>

                        <h1 className="text-[#292930] font-dm text-[58px] pt-1 font-medium tracking-[0.01em]">Behind the Scenes</h1>

                        <p className="text-[#525260] font-pop pt-5 pr-12 leading-[26px] text-lg pb-10">
                            Elevate your brand's online presence and drive results with our expert digital marketing solutions. We specialize in strategic SEO, captivating content creation, targeted social media campaigns, and data-driven analytics. Reach your audience effectively, boost engagement, and watch your business thrive in the digital landscape. Partner with us for measurable growth and a competitive edge in today's fast-paced online world."
                        </p>

                        <div className="w-fit">
                            <Button>
                                <div className=" font-pop">
                                    Our service
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5 */}
            <ExpertTalk/>

            {/* Section 6 */}
            <Footer/>
        </div>
    )
}

export default AboutUs;