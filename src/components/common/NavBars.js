import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { FiChevronDown } from "react-icons/fi";
import CircularBar from "./CircularBar";


const subLinks = [
    {
        title: "Digital Marketing",
        link: "/digital-marketing",
    },
    {
        title: "Social Media Marketing",
        link: "/social-media-marketing-company",
    },
    {
        title: "E-Commerce Website",
        link: "/ecommerce-website-development-company",
    },
    {
        title: "Web Development",
        link: "/web-development-company",
    },
    {
        title: "SEO",
        link: "/seo-company",
    },
    {
        title: "Lead Generation Service",
        link: "/lead-generation-services",
    },
    {
        title: "Pay Per Click",
        link: "/pay-per-click",
    },
    {
        title: "Strategic Branding",
        link: "/strategic-branding",
    },
    {
        title: "Mobile App Development",
        link: "/mobile-app-development-company",
    },
    {
        title: "Course Details",
        link: "/digital-marketing-course",
    },
]

const NavBars = () => {

    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({path: route}, location.pathname);
    }

    return (
        <nav className="flex items-center justify-center pb-6 bg-gradient-to-r from-[#ECF2F6] to-transparent z-20">
            <div className="flex w-11/12 items-center justify-between pt-[35px]">
                {/* logo */}
                <Link to="/">
                    <img className=" pl-[50px]" src="https://dev.weboin.com/wp-content/themes/abstrak/assets/images/logo/logo.svg" alt=""/>
                </Link>

                {/* Nav Links */}
                <div className="flex flex-row items-center gap-5">
                    <div className=" pl-6">
                        <ul className="flex items-center gap-x-[52px]">
                            {
                                NavbarLinks.map( (link, index) => (
                                    <li key={index}>
                                        {
                                            link.title === "Services" ? (
                                                <div className="relative flex items-center gap-2 group">
                                                    <Link to={link.path} className="flex items-center gap-1 group">
                                                        <p className={`${matchRoute(link.path) ? "text-[#5956E9] underline underline-offset-8" : "text-richblack-600"}
                                                        group-hover:text-[#5956E9] group-hover:underline group-hover:underline-offset-8 tracking-wide font-dm`}>
                                                            {link.title}
                                                        </p>
                                                        <FiChevronDown/>
                                                    </Link>

                                                    <div className="invisible bg-white absolute left-[30%] translate-y-[10%]
                                                    z-50 top-[10%] flex flex-col rounded-md p-6 lg:w-[265px] opacity-0
                                                    group-hover:visible group-hover:opacity-100 box-shadow-10px 0px gap-3
                                                    transition-all duration-700 group-hover:-translate-x-6"
                                                    style={{
                                                        boxShadow: "1px 1px 30px 1px rgba(180,180,180,10)"
                                                    }}
                                                    >

                                                        {
                                                            subLinks.length ? (
                                                                subLinks.map( (subLink, index) => (
                                                                    <Link to={`${subLink.link}`} key={index}>
                                                                        <p className={`${matchRoute(subLink?.link) ? "text-[#5956E9]" : "text-richblack-600 relative"} pl-6 hover:text-[#5956E9] transition-all duration-700 hover:relative group-hover:transition-all group-hover:duration-700 group-hover:-translate-x-7 font-dm`}>
                                                                            {subLink.title}
                                                                            <div className={`${matchRoute(subLink?.link) ? "w-[265px] h-[1px] bg-[#5956E9] absolute flex top-9 left-0" : "text-richblack-600"}`}></div>
                                                                        </p>
                                                                    </Link>
                                                                ))
                                                            ) : (<div></div>)
                                                        }
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link to={link?.path}>
                                                    <p className={`${matchRoute(link?.path) ? "text-[#5956E9] underline" : "text-richblack-600"} hover:underline hover:text-[#5956E9] underline-offset-8 tracking-[0.015rem] font-dm`}>
                                                        {link.title}
                                                    </p>
                                                </Link>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    
                    <div className="pr-14">
                        <CircularBar color={"#ECF2F6"} barColor={"#27272E"}/>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default NavBars;