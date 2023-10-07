import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { MobileAppHead } from "../../data/mobileAppDevelopment/mobileAppHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { MobileAppBluePrint } from "../../data/mobileAppDevelopment/mobileAppBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { MobileAppRatingData1 } from "../../data/mobileAppDevelopment/mobileAppRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { MobileAppRatingData2 } from "../../data/mobileAppDevelopment/mobileAppRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { MobileAppWorkData } from "../../data/mobileAppDevelopment/mobileAppFinishedWork";
import Quote from "./commonDesignPages/Quote";
import { MobileAppQuoteData } from "../../data/mobileAppDevelopment/mobileAppQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const MobileAppDevelopement = () => {

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
        <div>
            <div className="flex flex-col">
                {
                    newNavBar ? (<NewNavBars/>) : (<NavBars/>)
                }

                <Heading {...MobileAppHead}/>

                <BluePrint {...MobileAppBluePrint}/>

                <Rating1 {...MobileAppRatingData1}/>

                <div className="absolute text-[#C75C6F] font-dm text-[20px] top-[4560px] left-[130px]">Featured Case Study</div>

                <Rating2 {...MobileAppRatingData2}/>

                <FinishedWork {...MobileAppWorkData}/>

                <Quote {...MobileAppQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default MobileAppDevelopement;