import React from "react";
import { useState } from "react";
import NewNavBars from "../common/NewNavBars";
import NavBars from "../common/NavBars";
import Heading from "./commonDesignPages/Heading";
import { DigitalCourseHead } from "../../data/digitalMarketingCourse/digitalCourseHead";
import BluePrint from "./commonDesignPages/BluePrint";
import { DigitalCourseBluePrint } from "../../data/digitalMarketingCourse/digitalCourseBlueprint";
import Rating1 from "./commonDesignPages/Rating1";
import { DigitalCourseRatingData1 } from "../../data/digitalMarketingCourse/digitalCourseRating1";
import Rating2 from "./commonDesignPages/Rating2";
import { DigitalCourseRatingData2 } from "../../data/digitalMarketingCourse/digitalCourseRating2";
import FinishedWork from "./commonDesignPages/FinishedWork";
import { DigitalCourseWorkData } from "../../data/digitalMarketingCourse/digitalCourseFinishedWork";
import Quote from "./commonDesignPages/Quote";
import ExpertTalk from "../common/ExpertTalk";
import Footer from "../common/Footer";
import { DigitalCourseQuoteData } from "../../data/digitalMarketingCourse/digitalCourseQuote";

const DigitalMarketingCourse = () => {

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

                <Heading {...DigitalCourseHead}/>

                <BluePrint {...DigitalCourseBluePrint}/>

                <Rating1 {...DigitalCourseRatingData1}/>

                <div className="absolute text-[#C75C6F] font-dm text-[20px] top-[12165px] left-[130px]">Why Choose Our Digital Marketing Course?</div>

                <Rating2 {...DigitalCourseRatingData2}/>

                <div className="absolute text-[#C75C6F] font-dm text-[20px] top-[13200px] left-[130px]">Discover the Power of Digital Marketing with Our Comprehensive Course!</div>

                <FinishedWork {...DigitalCourseWorkData}/>

                <Quote {...DigitalCourseQuoteData}/>

                <ExpertTalk/>

                <Footer/>

            </div>
        </div>
    )
}

export default DigitalMarketingCourse;