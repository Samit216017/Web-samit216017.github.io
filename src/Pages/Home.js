import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ReviewCards from "../components/homePages/ReviewCards";
//import ReactStars from "react-rating-stars-component";
import StarRatings from "react-star-ratings";
import Navbar from "../components/common/Navbar";
import { useState } from "react";
import NewNavbar from "../components/common/NewNavbar";
import { SuccessBlue } from "../data/successBlueprint";
import { WorkDetails } from "../data/workData";
import ExpertTalk from "../components/common/ExpertTalk";
import Footer from "../components/common/Footer";

const Home = () => {
    
    const [newNavBar, setNewNavBar] = useState(false);

    const [card1, setCard1] = useState(true);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);

    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

    const [facebook, setFacebook] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [google, setGoogle] = useState(false);
    const [linkedIn, setLinkedIn] = useState(false);
    const [whatsApp, setWhatsApp] = useState(false);
    const [twitter, setTwitter] = useState(false);
    const [shareChat, setShareChat] = useState(false);
    const [youTube, setYouTube] = useState(false);

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

    // const IconSets = [];

    return (

        <div className="w-full">

            {
                newNavBar ? (<NewNavbar/>) : (<Navbar/>)
            }
            
            {/* Section 1 */}
            <div className="bg-[#ECF2F6] pt-32 h-fit relative overflow-hidden">
                <div className="flex flex-row justify-between w-11/12 mx-auto">
                    <div className="flex flex-col pl-12 w-[50%] gap-8">
                        <p className="font-[700] text-[#C75C6F] font-dm text-3xl tracking-widest">WEBOIN</p>

                        <p className="font-bold font-dm text-[#27272E] text-[65px] leading-tight tracking-wide pb-4">Connecting Brands with People</p>

                        <div className="text-[#5956E9] flex items-center w-[122px] h-[25px] justify-between group pt-5">
                            <Link to="/about-us" className="flex flex-row items-center justify-between w-full relative">
                                <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700 group-hover:transition-all group-hover:duration-700 group-hover:w-[122px] z-10"></div>

                                <p className="font-medium font-pop z-30 absolute right-0">About us</p>
                            </Link>
                        </div>
                    </div>

                    <div className="w-[50%] flex flex-row-reverse absolute right-[132px] top-14 z-10">
                        <img className="w-[450px] h-[450px]" src="https://dev.weboin.com/wp-content/uploads/2023/08/5700466.webp" alt=""/>
                    </div>
                </div>

                <div className="absolute -right-2 -bottom-16 z-0 overflow-hidden">
                    <img className="w-[446px] h-[460px]" src="https://dev.weboin.com/wp-content/uploads/2021/10/bubble-7-e1691832250992.png" alt=""/>
                </div>

                <div className="w-[48px] h-[48px] bg-[#6EC1E4] rounded-full absolute left-[275px] top-[28px]"></div>
                <div></div>
                <div></div>

                <div className="flex flex-row w-[100%]">
                    <div className="w-[50%] bg-[#ECF2F6] z-20"></div>
                    <div className="marquee-item flex flex-row z-10 w-[14%] right-0 bottom-0">
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                        <img src="https://dev.weboin.com/wp-content/uploads/2023/08/New-Project-4-3.png" alt=""/>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="bg-[#ECF2F6] w-full relative">
                <div className="w-11/12 mx-auto pt-28 pl-12">
                    <div>
                        <p className="text-[#C75C6F] font-[500] font-dm text-xl leading-[30px] pt-2 pb-2">
                            What We Can Do For You
                        </p>

                        <p className="text-[#292930] font-[500] font-dm text-[56px] w-[55%] leading-tight">
                            From strategy to execution, Services we excel in
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="w-fit flex flex-row gap-8 h-[555px]">
                        {/* card 1 */}
                        <div className="flex flex-row items-end w-[30%]">
                            <div className={`${card1 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-col rounded-3xl transition-all duration-700`}
                                onMouseEnter={() => (
                                    setCard1(true) &
                                    setCard2(false) &
                                    setCard3(false)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-12 group">
                                    <div className="w-[65%]">
                                        <Link to="/web-development-company">
                                            <img className="w-[85px] h-[59px]" src="https://dev.weboin.com/wp-content/uploads/2023/07/New-Project-31.png" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/web-development-company">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm">Web Development</h1>
                                        </Link>
                                        <p className=" text-sm pt-2 pb-3 text-[#525260] font-pop">
                                            Our expert team of designers and developers combine aesthetics with functionality t...
                                        </p>
                                        <Link to="/web-development-company" className="pb-6 flex flex-row items-center gap-5">
                                            {
                                                card1 ? (
                                                    <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                ) : (
                                                    <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${card1 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop`}>Learn More</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Learn more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="flex flex-row w-[30%] items-center">
                            <div className={`${card2 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-row justify-between rounded-3xl transition-all duration-700`}
                                onMouseEnter={() => (
                                    setCard1(false) &
                                    setCard2(true) &
                                    setCard3(false)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-12 group">
                                    <div className="w-[65%]">
                                        <Link to="/strategic-branding">
                                            <img className="w-[85px] h-[59px]" src="https://dev.weboin.com/wp-content/uploads/2023/07/New-Project-32.png" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/strategic-branding">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm">Stragic Branding</h1>
                                        </Link>
                                        <p className="text-sm pt-2 pb-3 text-[#525260] font-pop">
                                            Our expert team of designers and developers combine aesthetics with functionality t...
                                        </p>
                                        <Link to="/strategic-branding" className="pb-6 flex flex-row items-center gap-5">
                                            {
                                                card2 ? (
                                                    <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                ) : (
                                                    <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${card2 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop`}>Learn More</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Read more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="flex flex-row w-[30%] items-start">
                            <div className={`${card3 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-row justify-between rounded-3xl transition-all duration-700`}
                                onMouseEnter={() => (
                                    setCard1(false) &
                                    setCard2(false) &
                                    setCard3(true)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-12 group">
                                    <div className="w-[65%]">
                                        <Link to="/social-media-marketing-company">
                                            <img className="w-[85px] h-[85px]" src="https://dev.weboin.com/wp-content/uploads/2021/10/case-study-4.png" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/social-media-marketing-company">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm">Social Media</h1>
                                        </Link>
                                        <p className="text-sm pt-2 pb-3 text-[#525260] font-pop">
                                            We handle the technical nuances of social media marketing with precision and...
                                        </p>
                                        <Link to="/social-media-marketing-company" className="pb-6 flex flex-row items-center gap-5">
                                            {
                                                card3 ? (
                                                    <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                ) : (
                                                    <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${card3 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop`}>Learn More</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Read more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-[88px] h-[88px] bg-[#fdbdc9] rounded-full absolute left-[170px] bottom-[361px]"></div>
                <div className="w-[150px] h-[150px] absolute bg-[#edcc4b] rounded-full left-[776px] bottom-[498px]"></div>

            </div>

            {/* section 3 */}
            <div className="bg-[#ECF2F6] w-full">
                <div className=" pt-52 pb-[500px] flex flex-col items-center gap-1">
                    <h1 className="font-extrabold text-2xl font-pop">Excellent</h1>
                    
                    <StarRatings
                        rating={5}
                        starRatedColor="#ffd700"
                        numberOfStars={5}
                        starDimension="35px"
                        starSpacing=""
                    />
                    <p className="text-[17px] font-pop">Based on <strong className="font-bold font-pop">206 reviews</strong></p>
                    <img
                        className="w-[125px] h-[37px]"
                        src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt=""/>
                    <div></div>
                </div>

                <ReviewCards/>
            </div>

            {/* Section 4 */}
            <div className="bg-[#ECF2F6] w-full pt-[50px] pb-[64px] relative">
                <div className=" relative z-10">
                    <div className="pl-[114px] pr-[114.5px]">
                        <p className="text-[#C75C6F] font-dm text-[20px] font-[500]">
                            The undertakings we're involved in
                        </p>

                        <h1 className="text-[#292930] font-dm text-[56px] font-[500] pb-[58px] pt-[7px] tracking-wide">
                            A portion of our efforts
                        </h1>
                    </div>
                    <div>
                        <div className="pl-[114px] pr-[114.5px] pb-[60px]">
                            <p className="text-[#27272E] font-dm text-[20px] underline decoration-[#5956E9] decoration-2 underline-offset-[15px] font-[400]">All Works</p>
                        </div>

                        <div className="flex flex-wrap flex-row justify-between px-[100px]">
                            {
                                WorkDetails.map( (work, id) => (
                                    <div key={id} className="w-[25%] px-[15px] pb-[40px]">
                                        <div className="flex flex-col rounded-[30px] overflow-hidden group">
                                            <div className="group-hover:scale-125 transition-all duration-700">
                                                <img src={work.image} alt=""/>
                                            </div>

                                            <div className="bg-white relative z-20">
                                                <p className="text-[#292930] font-dm text-[24px] px-[30px] pt-[35px] pb-[48px] font-[500] tracking-tight">
                                                    {work.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="absolute -top-[3px] right-[200px]">
                    <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape7/circle-2.png" alt=""/>
                </div>

                <div className="absolute top-[120px] right-[580px]">
                    <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape7/bubble-2.png" alt=""/>
                </div>
                <div></div>
                <div></div>

            </div>

            {/* Section 5 */}
            <div className="bg-white pl-[114px] pr-[114.5px]">
                <div className="bg-[#ECF2F6] h-full relative">
                    <div className="relative z-10 pb-[138px]">
                        <div className="pl-[15.5px] pt-[138px] pr-[14px] pb-[87px]">
                            <p className="text-[#C75C6F] font-dm font-[500] text-xl pb-[7.5px]">
                                our 4- Major steps
                            </p>
                            <h1 className="text-[#292930] font-dm text-[57px] font-[500] pb-[22px]">
                                "Our Success Blueprint!"
                            </h1>
                            <p className="text-[#525260] font-pop text-[18px]">
                                To create a thriving digital marketing company, start by conducting thorough market research to identify a specialized niche. Develop a solid business plan, define clear goals, and craft a compelling brand identity. Offering a range of services, establish a strong online presence and network to acquire clients. Focus on data-driven strategies, maintain client relationships, and continuously adapt to industry changes.
                            </p>
                        </div>

                        <div className="w-full pl-[15.5px] pr-[14px] flex flex-col gap-[76px]">
                        {/* start map */}
                            {
                                SuccessBlue.map( (card, id) => (
                                    <div key={id}>
                                        {
                                            card.id % 2 === 0 ? (
                                                <div className="flex flex-row-reverse gap-4">
                                                    <div className="w-[32.5%]">
                                                        <img className="w-[410px] h-[410px] bg-white rounded-[30px]" src={card.image} alt=""/>
                                                    </div>

                                                    <div className="w-[42.5%] flex flex-col justify-center gap-4">
                                                        <p className="text-[#C75C6F] font-dm text-[20px] font-bold">
                                                            {card.title}
                                                        </p>

                                                        <h1 className="text-[#292930] font-dm text-[40px] font-[500] pb-2 tracking-wide">
                                                            {card.heading}
                                                        </h1>

                                                        <p className="text-[#737387] font-pop text-[16px] pr-[40px]">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex flex-row gap-4">
                                                    <div className="w-[36%]">
                                                        <img className="w-[410px] h-[410px] bg-white rounded-[30px]" src={card.image} alt=""/>
                                                    </div>

                                                    <div className="w-[50%] flex flex-col justify-center gap-4">
                                                        <p className="text-[#C75C6F] font-dm text-[20px] font-bold">
                                                            {card.title}
                                                        </p>

                                                        <h1 className="text-[#292930] font-dm text-[40px] font-[500] pb-2 tracking-wide">
                                                            {card.heading}
                                                        </h1>

                                                        <p className="text-[#737387] font-pop text-[16px] pr-[155px]">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="absolute top-0 left-0">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/bubble-24.png" alt=""/>
                    </div>

                    <div className="absolute top-[346px] right-0">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/bubble-23.png" alt=""/>
                    </div>

                    <div className="absolute left-0 top-[426px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-4.png" alt=""/>
                    </div>

                    <div className="absolute right-0 top-[851px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-5.png" alt=""/>
                    </div>

                    <div className="absolute left-0 bottom-[742px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-4.png" alt=""/>
                    </div>

                    <div className="absolute right-0 bottom-[268px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-5.png" alt=""/>
                    </div>

                </div>
            </div>

            {/* Section 6 */}
            <div className="w-full bg-gradient-to-b from-[#6EC0E4] to-[#DEBBC4] pt-[140px] pb-[110px] relative">
                <div className="pb-[27px] relative z-10">
                    <div className="flex flex-col items-center pb-[60px]">
                        <p className="text-[#FF1818] font-dm text-[20px] font-[600]">
                            Crafted by Time:
                        </p>

                        <h1 className="text-black font-dm text-[58px] font-[500] pb-6">
                            Our Years of Know-How
                        </h1>

                        <p className="text-black font-pop pl-[440px] pr-[450px] text-[17px] text-center tracking-wide">
                            With every challenge and triumph, our expertise has evolved, enabling us to deliver unmatched solutions to our clients.
                        </p>
                    </div>

                    <div className="flex flex-row justify-between px-[114px]">
                        <div className={`${box1 ? "bg-gradient-to-b from-[#27272E] to-[#303035]" : ""} w-[300px] flex flex-col items-center rounded-[30px] pb-[60px]`}
                            onMouseEnter={() => (
                                setBox1(true) &
                                setBox2(false) &
                                setBox3(false) &
                                setBox4(false)
                            )}
                        >
                            <div className="pt-[61px] pb-[16px]">
                                <img className="w-[32px] h-[32px]" src="https://dev.weboin.com/wp-content/uploads/2021/11/icon-1-7.png" alt=""/>
                            </div>
                            <div className="text-[#5956E9] flex flex-row">
                                <p className="font-inter text-[54px]">7</p>
                                <p className="font-dm text-[52px] pl-1">+</p>
                            </div>
                            <div className="text-white pt-[2px]">
                                <p className="font-dm text-[19px] font-[500]">Years of operation</p>
                            </div>
                        </div>

                        <div className={`${box2 ? "bg-gradient-to-b from-[#27272E] to-[#303035]" : ""} w-[300px] flex flex-col items-center rounded-[30px] pb-[60px]`}
                            onMouseEnter={() => (
                                setBox1(false) &
                                setBox2(true) &
                                setBox3(false) &
                                setBox4(false)
                            )}
                        >
                            <div className="pt-[61px] pb-[16px]">
                                <img className="w-[32px] h-[32px]" src="https://dev.weboin.com/wp-content/uploads/2021/11/icon-1-8.png" alt=""/>
                            </div>
                            <div className="text-[#5956E9] flex flex-row">
                                <p className="font-inter text-[54px]">1178</p>
                                <p className="font-dm text-[52px] pl-1">+</p>
                            </div>
                            <div className="text-white pt-[2px]">
                                <p className="font-dm text-[19px] font-[500]">Projects deliverd</p>
                            </div>
                        </div>

                        <div className={`${box3 ? "bg-gradient-to-b from-[#27272E] to-[#303035]" : ""} w-[300px] flex flex-col items-center rounded-[30px] pb-[60px]`}
                            onMouseEnter={() => (
                                setBox1(false) &
                                setBox2(false) &
                                setBox3(true) &
                                setBox4(false)
                            )}
                        >
                            <div className="pt-[61px] pb-[16px]">
                                <img className="w-[32px] h-[32px]" src="https://dev.weboin.com/wp-content/uploads/2021/11/icon-1-9.png" alt=""/>
                            </div>
                            <div className="text-[#5956E9] flex flex-row">
                                <p className="font-inter text-[54px]">748</p>
                                <p className="font-dm text-[52px] pl-1">+</p>
                            </div>
                            <div className="text-white pt-[2px]">
                                <p className="font-dm text-[19px] font-[500]">Happy customers</p>
                            </div>
                        </div>

                        <div className={`${box4 ? "bg-gradient-to-b from-[#27272E] to-[#303035]" : ""} w-[300px] flex flex-col items-center rounded-[30px] pb-[60px]`}
                            onMouseEnter={() => (
                                setBox1(false) &
                                setBox2(false) &
                                setBox3(false) &
                                setBox4(true)
                            )}
                        >
                            <div className="pt-[61px] pb-[16px]">
                                <img className="w-[32px] h-[32px]" src="https://dev.weboin.com/wp-content/uploads/2021/11/icon-1-10.png" alt=""/>
                            </div>
                            <div className="text-[#5956E9] flex flex-row">
                                <p className="font-inter text-[54px]">53</p>
                                <p className="font-dm text-[52px] pl-1">+</p>
                            </div>
                            <div className="text-white pt-[2px]">
                                <p className="font-dm text-[19px] font-[500]">Awards</p>
                            </div>
                        </div>
                    </div>

                    

                </div>

                <div className=" absolute top-[30px] left-[365px]">
                    <img className="w-[596.7px] h-[596.7px]" src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape5/circle-1.png" alt=""/>
                </div>

                {/* <div className="absolute bottom-0">
                    <img className=" transfo" src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape5/line-3.png" alt=""/>
                </div> */}

                <div className="absolute left-[160px] bottom-[110px]">
                    <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape5/bubble-5.png" alt=""/>
                </div>

                <div className="absolute top-[88px] left-[532px]">
                    <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape5/bubble-6.png" alt=""/>
                </div>

            </div>

            {/* Section 7 */}
            <div className="bg-[#27272E] pt-[140px] px-[115px] pb-[115px]">
                <div className="w-full pr-[93px] relative">
                    <div className="pb-[55px] relative z-20">
                        <p className="text-[#C75C6F] font-dm text-xl pb-1">
                            PARTNERS
                        </p>

                        <h1 className="text-white font-dm font-[500] text-[58px]">
                            A Partner, not a vendor
                        </h1>
                    </div>

                    <div className="flex flex-wrap flex-row justify-between gap-3 relative z-20">
                        <div onMouseEnter={() => (
                            setFacebook(true) &
                            setInstagram(false) &
                            setGoogle(false) &
                            setLinkedIn(false) &
                            setWhatsApp(false) &
                            setTwitter(false) &
                            setShareChat(false) &
                            setYouTube(false)
                        )}
                        >
                            <img 
                                className={`${facebook ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/Untitled-design-15.png" alt=""/>
                        </div>

                        <div onMouseEnter={() => (
                            setFacebook(false) &
                            setInstagram(true) &
                            setGoogle(false) &
                            setLinkedIn(false) &
                            setWhatsApp(false) &
                            setTwitter(false) &
                            setShareChat(false) &
                            setYouTube(false)
                        )}
                        >
                            <img 
                                className={`${instagram ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/m-2.png" alt=""/>
                        </div>

                        <div onMouseEnter={() => (
                            setFacebook(false) &
                            setInstagram(false) &
                            setGoogle(true) &
                            setLinkedIn(false) &
                            setWhatsApp(false) &
                            setTwitter(false) &
                            setShareChat(false) &
                            setYouTube(false)
                        )}
                        >
                            <img 
                                className={`${google ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/m-7.png" alt=""/>
                        </div>

                        <div onMouseEnter={() => (
                            setFacebook(false) &
                            setInstagram(false) &
                            setGoogle(false) &
                            setLinkedIn(true) &
                            setWhatsApp(false) &
                            setTwitter(false) &
                            setShareChat(false) &
                            setYouTube(false)
                        )}
                        >
                            <img 
                                className={`${linkedIn ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/Untitled-design-20.png" alt=""/>
                        </div>

                    </div>

                    <div className="flex flex-wrap flex-row justify-between gap-3 pt-3 relative z-20">
                        <div onMouseEnter={() => (
                            setFacebook(false) &
                            setInstagram(false) &
                            setGoogle(false) &
                            setLinkedIn(false) &
                            setWhatsApp(true) &
                            setTwitter(false) &
                            setShareChat(false) &
                            setYouTube(false)
                        )}
                        >
                            <img 
                                className={`${whatsApp ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/m-5.png" alt=""/>
                        </div>

                        <div onMouseEnter={() => (
                            setFacebook(false) &
                            setInstagram(false) &
                            setGoogle(false) &
                            setLinkedIn(false) &
                            setWhatsApp(false) &
                            setTwitter(true) &
                            setShareChat(false) &
                            setYouTube(false)
                        )}
                        >
                            <img 
                                className={`${twitter ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/Untitled-design-23.png" alt=""/>
                        </div>

                        <div onMouseEnter={() => (
                            setFacebook(false) &
                            setInstagram(false) &
                            setGoogle(false) &
                            setLinkedIn(false) &
                            setWhatsApp(false) &
                            setTwitter(false) &
                            setShareChat(true) &
                            setYouTube(false)
                        )}
                        >
                            <img 
                                className={`${shareChat ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/m.png" alt=""/>
                        </div>

                        <div onMouseEnter={() => (
                            setFacebook(false) &
                            setInstagram(false) &
                            setGoogle(false) &
                            setLinkedIn(false) &
                            setWhatsApp(false) &
                            setTwitter(false) &
                            setShareChat(false) &
                            setYouTube(true)
                        )}
                        >
                            <img 
                                className={`${youTube ? "grayscale-0" : "grayscale"} transition-all duration-700`}
                            src="https://dev.weboin.com/wp-content/uploads/2023/08/Untitled-design-31-1.png" alt=""/>
                        </div>
                    </div>

                    <div className="w-[114px] h-[114px] absolute bg-[#363640] rounded-full -top-[20px] left-[475px]"></div>

                    <div className="absolute -bottom-[115px] right-5">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape2/circle-1.png" alt=""/>
                    </div>

                    <div className="absolute -top-[140px] right-[385px]">
                        <img className="relative z-10" src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape2/line-3.png" alt=""/>
                    </div>

                </div>

            </div>

            {/* Section 8 */}
            <ExpertTalk/>

            {/* Section 9 */}
            <Footer/>

        </div>
    )
}

export default Home;