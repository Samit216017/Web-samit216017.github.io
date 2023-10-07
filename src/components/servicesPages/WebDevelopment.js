import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { WebDevHead } from "../../data/webDevelopment/webDevHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { WebDevBluePrint } from "../../data/webDevelopment/webDevBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { WebDevRatingData1 } from "../../data/webDevelopment/webDevRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { WebDevRatingData2 } from "../../data/webDevelopment/webDevRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { WebDevWorkData } from "../../data/webDevelopment/webDevFinishedWork";
import Purchase from "./commonDesignPages/Purchase";
import { WebDevPurchageData } from "../../data/webDevelopment/webDevPurchage";
import Quote from "./commonDesignPages/Quote";
import { WebDevQuoteData } from "../../data/webDevelopment/webDevQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const WebDevelopment = () => {

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
            <div className="flex flex-col relative">
                {
                    newNavBar ? (<NewNavBars/>) : (<NavBars/>)
                }

                <Heading {...WebDevHead}/>

                <BluePrint {...WebDevBluePrint}/>

                <Rating1 {...WebDevRatingData1}/>

                <div className="absolute text-[#C75C6F] font-dm text-[20px] top-[4600px] left-[130px]">web design for business</div>

                <Rating2 {...WebDevRatingData2}/>

                <FinishedWork {...WebDevWorkData}/>

                <Purchase {...WebDevPurchageData}/>

                <Quote {...WebDevQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default WebDevelopment;