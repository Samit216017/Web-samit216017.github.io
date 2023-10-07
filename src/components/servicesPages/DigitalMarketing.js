import React from "react";
import { useState } from "react";
import NavBars from "../common/NavBars";
import NewNavBars from "../common/NewNavBars";
import Heading from "./commonDesignPages/Heading";
import { DigitalHead } from "../../data/digitalMarketing/digitalHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { DigitalBluePrint } from "../../data/digitalMarketing/digitalBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { DigitalRatingData1 } from "../../data/digitalMarketing/digitalRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { DigitalRatingData2 } from "../../data/digitalMarketing/digitalRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { DigitalWorkData } from "../../data/digitalMarketing/digitalFinishedWork";
import Purchase from "./commonDesignPages/Purchase";
import { DigitalPurchageData } from "../../data/digitalMarketing/digitalPurchage";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";
import Quote from "./commonDesignPages/Quote";
import { DigitalQuoteData } from "../../data/digitalMarketing/digitalQuote";

const DigitalMarketing = () => {

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

                <Heading {...DigitalHead}/>

                

                <BluePrint {...DigitalBluePrint} />

                <Rating1 {...DigitalRatingData1}/>

                <Rating2 {...DigitalRatingData2}/>

                <FinishedWork {...DigitalWorkData}/>

                <Purchase {...DigitalPurchageData}/>

                <Quote {...DigitalQuoteData}/>

                <ExpertTalk/>

                <Footer/>



            </div>
        </div>
    )
}

export default DigitalMarketing;