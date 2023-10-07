import React from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import { FooterLink1 } from "../../data/footer-links";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-white mx-auto overflow-hidden">
            <div className="w-11/12 mx-auto flex flex-col items-center pb-[80px]">
                <div className="flex flex-row w-full justify-between px-52 pt-2 pb-20">
                    <Link to="https://www.facebook.com/weboin" target="_blank">
                        <FaFacebookF className="text-3xl text-[#999AB8] hover:text-[#5956E9]"/>
                    </Link>
                    <Link to="https://www.instagram.com/weboin" target="_blank">
                        <FaInstagram className="text-3xl text-[#999AB8] hover:text-[#5956E9]"/>
                    </Link>
                    <Link to="https://linkedin.com/company/weboin" target="_blank">
                        <FaLinkedinIn className="text-3xl text-[#999AB8] hover:text-[#5956E9]"/>
                    </Link>
                    <Link to="https://twitter.com/weboin" target="_blank">
                        <FaTwitter className="text-3xl text-[#999AB8] hover:text-[#5956E9]"/>
                    </Link>
                    <Link to="https://pinterest.com/weboin7" target="_blank">
                        <FaPinterestP className="text-3xl text-[#999AB8] hover:text-[#5956E9]"/>
                    </Link>
                </div>

                <div className="flex flex-row w-full pl-12">
                    <div className="w-[594px] h-[560px] flex flex-col gap-7 pl-1 border-r-[1px] border-r-[#C7C7D5] pr-[80px]">
                        <div className="w-[509px]">
                            <p className="font-dm text-2xl font-[700]">
                                Location
                            </p>
                        </div>

                        <div className="w-[509px] h-[500px]">
                            <Iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.390164917588!2d80.24973209826673!3d13.061270199740308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526604f33cea8f%3A0x93dfce45454eb81c!2sWeboin%20-%20Digital%20Marketing%20Company!5e0!3m2!1sen!2sin!4v1696279030149!5m2!1sen!2sin" 
                                alt=""
                                width="509" 
                                height="500" 
                                //style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                            ></Iframe>
                        </div>
                    </div>

                    <div className="lg:w-[70%] max-w-maxContent flex flex-wrap flex-row justify-between">
                        <div className="w-full flex flex-row justify-between pl-[70px] gap-28">
                            
                            {
                                FooterLink1.map( (ele, i) => {
                                    return (
                                        <div key={i} className="w-[660px] flex flex-col gap-8">
                                            <h1 className="font-dm text-2xl font-[700]">
                                                {ele.title}
                                            </h1>
                                            <div className="flex flex-col gap-4 w-full">
                                                {
                                                    ele.links.map( (link, index) => {
                                                        return (
                                                            <div key={index} className="font-pop text-lg text-[#525260]">
                                                                <Link to={link.link}>
                                                                    {link.title}
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="w-[93%] mx-auto h-[1px] bg-[#C7C7D5] flex flex-row items-center"></div>
            </div>
            <div className="w-11/12 mx-auto h-[75px]">
                <div className="w-[93%] mx-auto pt-[26px] pb-[25px]">
                    <p className="text-[#C7C7D5] h-[24px] font-pop">
                        Copyright © 2017 WEBOIN
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;