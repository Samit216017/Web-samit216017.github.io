import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";
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

const NewNavbar = () => {

    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({path: route}, location.pathname);
    }

    return (
        <nav className="flex items-center justify-center bg-white pb-4 sticky top-0 z-50 transition-all duration-700"
            style={{
                boxShadow: "1px 1px 10px 1px rgba(180, 180, 180, 10)"
            }}
        >
        
            <div className="flex w-[96%] items-center justify-between pt-4">
                {/* logo */}
                <Link to="/">
                    <img className="pr-2" src={logo} alt=""/>
                </Link>

                {/* Nav Links */}
                <nav className="pl-6">
                    <ul className="flex items-center gap-x-[52px]">
                        {
                            NavbarLinks.map( (link, index) => (
                                <li key={index}>
                                    {
                                        link.title === "Services" ? (
                                            <div className="relative flex items-center gap-2 group">
                                                <Link to={link.path} className="flex items-center gap-1 group">
                                                    <p className={`${matchRoute(link.path) ? "text-[#5956E9] underline underline-offset-8" : "text-richblack-600"}
                                                     group-hover:text-[#5956E9] group-hover:underline group-hover:underline-offset-8`}>
                                                        {link.title}
                                                    </p>
                                                    <FiChevronDown/>
                                                </Link>

                                                <div className="invisible bg-white absolute left-[30%] translate-y-[10%]
                                                z-10 top-[10%] flex flex-col rounded-md p-6 lg:w-[265px] opacity-0
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
                                                <p className={`${matchRoute(link?.path) ? "text-[#5956E9] underline" : "text-richblack-600"} hover:underline hover:text-[#5956E9] underline-offset-8`}>
                                                    {link.title}
                                                </p>
                                            </Link>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                
                <CircularBar color={"#525260"} barColor={"white"}/>


            </div>
        </nav>
    )
}

export default NewNavbar;