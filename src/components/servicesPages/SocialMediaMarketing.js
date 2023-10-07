import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { SocialHead } from "../../data/socialMediaMarketing/socialHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { SocialBluePrint } from "../../data/socialMediaMarketing/socialBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { SocialRatingData1 } from "../../data/socialMediaMarketing/socialRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { SocialRatingData2 } from "../../data/socialMediaMarketing/socialRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { SocialWorkData } from "../../data/socialMediaMarketing/socialFinishedWork";
import Purchase from "./commonDesignPages/Purchase";
import { SocialPurchageData } from "../../data/socialMediaMarketing/socialPurchage";
import Quote from "./commonDesignPages/Quote";
import { SocialQuoteData } from "../../data/socialMediaMarketing/socialQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const SocialMediaMarketing = () => {

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
            <div className="relative flex flex-col">
                {
                    newNavBar ? (<NewNavBars/>) : (<NavBars/>)
                }

                <Heading {...SocialHead}/>

                <BluePrint {...SocialBluePrint}/>

                <Rating1 {...SocialRatingData1}/>

                <div className="absolute text-[#C75C6F] font-dm text-[20px] top-[4400px] left-[130px]">Social Media Marketing for buisness</div>

                <Rating2 {...SocialRatingData2}/>

                <FinishedWork {...SocialWorkData}/>

                <Purchase {...SocialPurchageData}/>

                <Quote {...SocialQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default SocialMediaMarketing;