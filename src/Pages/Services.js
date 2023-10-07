import React from "react";
import NavBars from "../components/common/NavBars";
import NewNavBars from "../components/common/NewNavBars";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ExpertTalk from "../components/common/ExpertTalk";
import Footer from "../components/common/Footer";

const Services = () => {

    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);
    const [box5, setBox5] = useState(false);
    const [box6, setBox6] = useState(false);

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
            <div className="flex flex-col pb-[106px]">
                {
                    newNavBar ? (<NewNavBars/>) : (<NavBars/>)
                }

                <div className="w-full bg-gradient-to-r from-[#ECF2F6] to-white relative pb-[107px]">
                    <div className="flex flex-col pl-[115px] pt-[82px]">
                        <div className="flex flex-row items-center gap-3 pb-[20px] z-10">
                            <Link to="/">
                                <p className="text-[#999FAE] hover:text-[#5956E9] transition-all duration-700 font-pop text-[16px] font-[500]">
                                    Home
                                </p>
                            </Link>

                            <div className="w-[4px] h-[4px] bg-[#999FAE] rounded-full"></div>

                            <p className="text-[#5956E9] font-pop text-[16px] font-[500]">
                                Services - Weboin
                            </p>
                        </div>

                        <h1 className="text-[#292930] font-dm text-[60px] pt-[6px] font-[500] z-10">
                            All services
                        </h1>
                    </div>

                    <div className="absolute bottom-0 left-0">
                        <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/media/others/bubble-9.png" alt=""/>
                    </div>

                    <div className="absolute right-0 -top-[170px]">
                        <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/banner/bubble-17.png" alt=""/>
                    </div>

                    <div className="absolute left-0 -top-[6px]">
                        <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/media/others/line-4.png" alt=""/>
                    </div>

                </div>

                {/* Section 2 */}
                <div className="bg-white pt-[140px] w-full pb-[106px]">
                    {/* Cards */}
                    <div className="flex flex-wrap flex-row items-start pl-[114px] pr-[38px] gap-[30px] pb-[47px]">
                        {/* Card 1 */}
                        <div className="flex flex-row items-end w-[30%]">
                            <div className={`${box1 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-col rounded-[30px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(true) &
                                    setBox2(false) &
                                    setBox3(false) &
                                    setBox4(false) &
                                    setBox5(false) &
                                    setBox6(false)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-[51px] group">
                                    <div className="w-[68%]">
                                        <Link to="/digital-marketing-course">
                                            <img className="w-[85px] h-[56.66px]" src="https://dev.weboin.com/wp-content/uploads/2023/08/video-course-7893339-6323811.webp" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/digital-marketing-course">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm font-[500] tracking-tight">Digital marketing course</h1>
                                        </Link>
                                        <p className=" text-[16px] pt-2 pb-3 text-[#525260] font-pop tracking-tight">
                                            Our expert team of designers and developers combine aesthetics with functionality t...
                                        </p>
                                        <Link to="/digital-marketing-course" className="pb-6 flex flex-row items-center">
                                            {
                                                box1 ? (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                        <div className="w-[20px] transition-all duration-700"></div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                        <div className="w-[0px] transition-all duration-700"></div>
                                                    </div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${box1 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop font-[500] pt-[3px]`}>Find out more</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Learn more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="flex flex-row items-end w-[30%]">
                            <div className={`${box2 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-col rounded-[30px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(true) &
                                    setBox3(false) &
                                    setBox4(false) &
                                    setBox5(false) &
                                    setBox6(false)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-[51px] group">
                                    <div className="w-[68%]">
                                        <Link to="/pay-per-click">
                                            <img className="w-[85px] h-[56.66px]" src="https://dev.weboin.com/wp-content/uploads/2023/08/9419991.png" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/pay-per-click">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm font-[500] tracking-tight">Pay Per Click</h1>
                                        </Link>
                                        <p className=" text-[16px] pt-2 pb-3 text-[#525260] font-pop tracking-tight">
                                            Our expert team of designers and developers combine aesthetics with functionality t...
                                        </p>
                                        <Link to="/pay-per-click" className="pb-6 flex flex-row items-center">
                                            {
                                                box2 ? (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                        <div className="w-[20px] transition-all duration-700"></div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                        <div className="w-[0px] transition-all duration-700"></div>
                                                    </div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${box2 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop font-[500] pt-[3px]`}>Find out more</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Learn more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-row items-end w-[30%]">
                            <div className={`${box3 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-col rounded-[30px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(false) &
                                    setBox3(true) &
                                    setBox4(false) &
                                    setBox5(false) &
                                    setBox6(false)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-[51px] group">
                                    <div className="w-[68%]">
                                        <Link to="/digital-marketing">
                                            <img className="w-[85px] h-[56.66px]" src="https://dev.weboin.com/wp-content/uploads/2023/08/371-3714827_measurement-and-reporting-digital-marketing-icon-vector.jpg" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/digital-marketing">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm font-[500] tracking-tight">Digital Marketing</h1>
                                        </Link>
                                        <p className=" text-[16px] pt-2 pb-3 text-[#525260] font-pop tracking-tight">
                                            Our expert team of designers and developers combine aesthetics with functionality t...
                                        </p>
                                        <Link to="/digital-marketing" className="pb-6 flex flex-row items-center">
                                            {
                                                box3 ? (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                        <div className="w-[20px] transition-all duration-700"></div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                        <div className="w-[0px] transition-all duration-700"></div>
                                                    </div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${box3 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop font-[500] pt-[3px]`}>Find out more</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Learn more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-row items-end w-[30%]">
                            <div className={`${box4 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-col rounded-[30px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(false) &
                                    setBox3(false) &
                                    setBox4(true) &
                                    setBox5(false) &
                                    setBox6(false)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-[51px] group">
                                    <div className="w-[68%]">
                                        <Link to="/mobile-app-development-company">
                                            <img className="w-[85px] h-[56.66px]" src="https://dev.weboin.com/wp-content/uploads/2021/09/banner-thumb-4.png" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/mobile-app-development-company">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm font-[500] tracking-tight">Mobile app development</h1>
                                        </Link>
                                        <p className=" text-[16px] pt-2 pb-3 text-[#525260] font-pop tracking-tight">
                                            We design professional looking yet simple Logo. Our designs are search engine and user...
                                        </p>
                                        <Link to="/mobile-app-development-company" className="pb-6 flex flex-row items-center">
                                            {
                                                box4 ? (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                        <div className="w-[20px] transition-all duration-700"></div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                        <div className="w-[0px] transition-all duration-700"></div>
                                                    </div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${box4 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop font-[500] pt-[3px]`}>Find out more</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Learn more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="flex flex-row items-end w-[30%]">
                            <div className={`${box5 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-col rounded-[30px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(false) &
                                    setBox3(false) &
                                    setBox4(false) &
                                    setBox5(true) &
                                    setBox6(false)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-[51px] group">
                                    <div className="w-[68%]">
                                        <Link to="/lead-generation-services">
                                            <img className="w-[85px] h-[56.66px]" src="https://dev.weboin.com/wp-content/uploads/2021/10/banner-thumb-1-e1692874143355.png" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/lead-generation-services">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm font-[500] tracking-tight">Lead Generation Service</h1>
                                        </Link>
                                        <p className=" text-[16px] pt-2 pb-3 text-[#525260] font-pop tracking-tight">
                                            we understand that leads are the lifeblood of your business’s growth. Our lead generation...
                                        </p>
                                        <Link to="/lead-generation-services" className="pb-6 flex flex-row items-center">
                                            {
                                                box5 ? (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                        <div className="w-[20px] transition-all duration-700"></div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                        <div className="w-[0px] transition-all duration-700"></div>
                                                    </div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${box5 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop font-[500] pt-[3px]`}>Find out more</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Learn more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="flex flex-row items-end w-[30%]">
                            <div className={`${box6 ? "bg-gradient-to-b from-[#F8F8F8] to-[#ECF2F6]" : "bg-gradient-to-b from-[#F8F8F8] to-white"} flex flex-col rounded-[30px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(false) &
                                    setBox3(false) &
                                    setBox4(false) &
                                    setBox5(false) &
                                    setBox6(true)
                                )}
                            >
                                <div className="flex flex-row w-11/12 mx-auto justify-center gap-6 p-4 pt-[51px] group">
                                    <div className="w-[68%]">
                                        <Link to="/strategic-branding">
                                            <img className="w-[85px] h-[56.66px]" src="https://dev.weboin.com/wp-content/uploads/2023/07/New-Project-32.png" alt=""/>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <Link to="/strategic-branding">
                                            <h1 className="text-2xl hover:text-[#5956E9] hover:transition-all hover:duration-700 font-dm font-[500] tracking-tight">Strategic Branding</h1>
                                        </Link>
                                        <p className=" text-[16px] pt-2 pb-3 text-[#525260] font-pop tracking-tight">
                                            Our expert team of designers and developers combine aesthetics with functionality t...
                                        </p>
                                        <Link to="/strategic-branding" className="pb-6 flex flex-row items-center">
                                            {
                                                box6 ? (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[34px] h-[1px] bg-[#5956E9] transition-all duration-700"></div>
                                                        <div className="w-[20px] transition-all duration-700"></div>
                                                    </div>
                                                ) : (
                                                    <div className="flex flex-row transition-all duration-700">
                                                        <div className="w-[0px] h-[1px] transition-all duration-700"></div>
                                                        <div className="w-[0px] transition-all duration-700"></div>
                                                    </div>
                                                )
                                            }
                                            {/* <div className="w-[0px] h-[1px] transition-all duration-700 group-hover:w-[34px] group-hover:h-[1px] group-hover:bg-[#5956E9] group-hover:transition-all group-hover:duration-700"></div> */}
                                            <p className={`${box6 ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-pop font-[500] pt-[3px]`}>Find out more</p>
                                            {/* <p className="text-[#525260] group-hover:text-[#5956E9] group-hover:transition-all group-hover:duration-700">Learn more</p> */}
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Page numbers */}
                    <div className="flex flex-row h-[50px] items-center justify-center">
                        <div className="flex flex-row justify-center items-center w-[148px] h-[50px] gap-[6px]">
                            <Link to="/">
                                <p className="w-[42px] h-[44px] border-[1px] border-[#E3E6E9] flex items-center justify-center rounded-md hover:bg-[#5959E9] text-[#27272E] font-pop hover:text-white transition-all duration-700">
                                    1
                                </p>
                            </Link>
                            
                            <Link to="/services/page/2">
                                <p className="w-[42px] h-[44px] border-[1px] border-[#E3E6E9] flex items-center justify-center rounded-md text-[#27272E] font-pop hover:bg-[#5959E9] hover:text-white transition-all duration-700">
                                    2
                                </p>
                            </Link>
                            <Link to="/services/page/2">
                                <div className="w-[42px] h-[44px] border-[1px] border-[#E3E6E9] flex items-center justify-center rounded-md text-[#27272E] hover:bg-[#5959E9] hover:text-white transition-all duration-700">
                                    <BsArrowRight/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <ExpertTalk/>

                {/* Section 4 */}
                <Footer/>




            </div>

        </div>
    )
}

export default Services;