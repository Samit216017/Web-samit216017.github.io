import React from "react";

const Heading = (props) => {
    return (
        <div className="overflow-hidden">
            <div className="w-full bg-gradient-to-r from-[#ECF2F6] to-white relative pl-[116px] pb-[260px] pt-[152px] flex flex-row justify-between">
                <div className="w-[50%] flex flex-col pr-[13px]">
                    <h1 className="text-[#000248] font-dm text-[56px] font-[500] tracking-[0.019em]">
                        {props.name}
                    </h1>

                    <p className="text-[#525260] font-pop pt-[33px] text-[18px] pr-[157px] z-10">
                        {props.description}
                    </p>
                </div>

                <div className="w-[780px] h-[780px] pl-14 absolute -right-[90px] z-10 top-[180px]">
                    <img src={props.image} alt=""/>
                </div>

                <div className="absolute -top-[140px] -right-[125px] w-[656px] h-[970px]">
                    <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/banner/bubble-22.png" alt=""/>
                </div>

                <div className="absolute bottom-0 left-0">
                    <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/media/others/bubble-9.png" alt=""/>
                </div>

                <div className="absolute left-0 -bottom-[200px]">
                    <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/media/others/line-4.png" alt=""/>
                </div>
                

            </div>

            <div className="h-[164px] bg-white"></div>


        </div>
    )
}

export default Heading;