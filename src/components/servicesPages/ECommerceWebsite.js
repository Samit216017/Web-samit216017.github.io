import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { EComHead } from "../../data/eCommerce/eComHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { EComBluePrint } from "../../data/eCommerce/eComBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { EComRatingData1 } from "../../data/eCommerce/eComRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { EComRatingData2 } from "../../data/eCommerce/eComRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { EComWorkData } from "../../data/eCommerce/eComFinishedWork";
import Purchase from "./commonDesignPages/Purchase";
import { EcomPurchageData } from "../../data/eCommerce/eComPurchage";
import Quote from "./commonDesignPages/Quote";
import { EComQuoteData } from "../../data/eCommerce/eComQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const ECommerceWebsite = () => {

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

                <Heading {...EComHead}/>

                <BluePrint {...EComBluePrint}/>

                <Rating1 {...EComRatingData1}/>

                <Rating2 {...EComRatingData2}/>

                <FinishedWork {...EComWorkData}/>

                <Purchase {...EcomPurchageData}/>

                <Quote {...EComQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default ECommerceWebsite;