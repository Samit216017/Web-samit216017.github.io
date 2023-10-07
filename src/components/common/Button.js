import React from "react";
import { Link } from "react-router-dom";
//import "./Button.css";

const Button = ({children, linkto, fontName}) => {
    return (
        <Link to={linkto} target="_blank">
            <div className="i px-[58px] py-6 flex bg-[#5956E9] rounded-[20px] text-white justify-center items-center transition-all duration-700 font-medium tracking-tight">
                {children}
            </div>
        </Link>
    )
}

export default Button;