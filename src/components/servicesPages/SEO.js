import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { SeoHead } from "../../data/seo/seoHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { SeoBluePrint } from "../../data/seo/seoBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { SeoRatingData1 } from "../../data/seo/seoRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { SeoRatingData2 } from "../../data/seo/seoRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { SeoWorkData } from "../../data/seo/seoFinishedWork";
import Purchase from "./commonDesignPages/Purchase";
import { SeoPurchageData } from "../../data/seo/seoPurchage";
import Quote from "./commonDesignPages/Quote";
import { SeoQuoteData } from "../../data/seo/seoQuote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";

const SEO = () => {

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

                <Heading {...SeoHead}/>

                <BluePrint {...SeoBluePrint}/>

                <Rating1 {...SeoRatingData1}/>

                <Rating2 {...SeoRatingData2}/>

                <FinishedWork {...SeoWorkData}/>

                <Purchase {...SeoPurchageData}/>

                <Quote {...SeoQuoteData}/>

            <ExpertTalk/>

            <Footer/>

            </div>
        </div>
    )
}

export default SEO;