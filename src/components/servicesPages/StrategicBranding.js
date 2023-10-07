import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { StrategicHead } from "../../data/strategicBranding/strategicHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { StrategicBluePrint } from "../../data/strategicBranding/strategicBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { StrategicRatingData1 } from "../../data/strategicBranding/strategicRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { StrategicRatingData2 } from "../../data/strategicBranding/strategicRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { StrategicWorkData } from "../../data/strategicBranding/strategicFinishedWork";
import Quote from "./commonDesignPages/Quote";
import { StrategicQuoteData } from "../../data/strategicBranding/strategicQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const StrategicBranding = () => {

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

                <Heading {...StrategicHead}/>

                <BluePrint {...StrategicBluePrint}/>

                <Rating1 {...StrategicRatingData1}/>

                <Rating2 {...StrategicRatingData2}/>

                <FinishedWork {...StrategicWorkData}/>

                <Quote {...StrategicQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default StrategicBranding;