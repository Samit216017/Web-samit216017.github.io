import React from "react";
import Button from "./Button";

const ExpertTalk = () => {
    return (
        <div className="w-full mx-auto px-14 bg-white pb-[80px] overflow-hidden">
            <div className="w-11/12 mx-auto h-[409px] bg-[#0F172A] rounded-[50px] flex flex-col items-center relative gap-4 pt-[70px]">
                <p className="font-dm text-white text-[20px]">
                    Need a successful project?
                </p>

                <div className="flex flex-row w-[419px] h-[120px]">
                    <h1 className="font-dm text-white text-5xl font-bold text-center leading-[60px] tracking-wide">
                        Want to talk to a marketing expert?
                    </h1>
                </div>

                <div className="pt-3">
                    <Button>
                        <div className="font-pop">
                            Contact With Us
                        </div>
                    </Button>
                </div>

                <div className="absolute -left-[66px] -top-4">
                    <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/images/footer/shapes-2.png" alt=""/>
                </div>

                <div className="absolute right-[180px] bottom-[70px]">
                    <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/images/footer/shapes-3.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default ExpertTalk;