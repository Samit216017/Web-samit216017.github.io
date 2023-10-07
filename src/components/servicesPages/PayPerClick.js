import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { PayPerHead } from "../../data/payPerClick/payPerHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { PayPerBluePrint } from "../../data/payPerClick/payPerBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { PayPerRatingData1 } from "../../data/payPerClick/payPerRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { PayPerRatingData2 } from "../../data/payPerClick/payPerRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { PayPerWorkData } from "../../data/payPerClick/payPerFinishedWork";
import Quote from "./commonDesignPages/Quote";
import { PayPerQuoteData } from "../../data/payPerClick/payPerQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const PayPerClick = () => {

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

                <Heading {...PayPerHead}/>

                <BluePrint {...PayPerBluePrint}/>

                <Rating1 {...PayPerRatingData1}/>

                <Rating2 {...PayPerRatingData2}/>

                <FinishedWork {...PayPerWorkData}/>

                <Quote {...PayPerQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default PayPerClick;