import React from "react";
import NavBars from "../common/NavBars";
import NewNavBars from "../common/NewNavBars";
import { useState } from "react";
import Footer from "../common/Footer";
import ErrorPage from "../errors/ErrorPage";

const Portfolio = () => {

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
            <div className="flex flex-col">
                {
                    newNavBar ? (<NewNavBars/>) : (<NavBars/>)
                }

                <ErrorPage/>

                <Footer/>
            </div>


            
            


        </div>
    )
}

export default Portfolio;