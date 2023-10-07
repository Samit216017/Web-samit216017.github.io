import React from "react";
import NavBars from "../components/common/NavBars";
import NewNavBars from "../components/common/NewNavBars";
import { useState } from "react";
import Footer from "../components/common/Footer";
import ErrorPage from "../components/errors/ErrorPage";

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