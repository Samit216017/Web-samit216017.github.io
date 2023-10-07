import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { LeadGenerationHead } from "../../data/leadGeneration/leadGenHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { LeadGenBluePrint } from "../../data/leadGeneration/leadGenBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { LeadGenRatingData1 } from "../../data/leadGeneration/leadGenRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { LeadGenRatingData2 } from "../../data/leadGeneration/leadGenRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { LeadGenWorkData } from "../../data/leadGeneration/leadGenFinishedWork";
import Quote from "./commonDesignPages/Quote";
import { LeadGenQuoteData } from "../../data/leadGeneration/leadGenQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const LeadGenerationService = () => {

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

                <Heading {...LeadGenerationHead}/>

                <BluePrint {...LeadGenBluePrint}/>

                <Rating1 {...LeadGenRatingData1}/>

                <div className="absolute text-[#C75C6F] font-dm text-[20px] top-[4440px] left-[130px]">Lead Generation in buisness</div>

                <Rating2 {...LeadGenRatingData2}/>

                <FinishedWork {...LeadGenWorkData}/>

                <Quote {...LeadGenQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default LeadGenerationService;