import React from "react";

const Rating2 = (props) => {
    return (
        <div>
            <div className="bg-white px-[114px]">
                <div className="bg-[#E5E5E5] flex flex-row pt-[117px] pb-[120px]">
                    <div className="w-[50%]">
                        <div className="pl-[17px] pr-[120px]">
                            <h1 className="text-[#292930] font-dm text-[56px] font-[500] leading-tight">
                                {props.name}
                            </h1>

                            <p className="text-[#525260] font-pop pt-[30px] text-[16px]">
                                {props.description}
                            </p>

                            <div className="flex flex-row pt-[56px] pb-10">
                                <div className="flex flex-col pr-[60px] border-r-[1px] border-[#C7C7D5]">
                                    <div className="flex flex-row h-[76px]">
                                        <p className="text-[#C75C6F] text-[55px] font-inter pr-[4px] tracking-tight">{props.percent}</p>
                                        <p className="text-[#C75C6F] text-[56px] font-dm font-[500]">%</p>
                                    </div>

                                    <p className="text-[#525260] font-pop">ROI increase</p>
                                </div>

                                <div className="pl-[62px]">
                                    <div className="flex flex-row h-[76px]">
                                        <p className="text-[#C75C6F] text-[55px] font-inter pr-[4px] tracking-tighter">{props.visited}</p>
                                        <p className="text-[#C75C6F] text-[55px] font-dm font-[500] pl-[6px]">{props.visitedUnit}</p>
                                    </div>

                                    <p className="text-[#525260] font-pop">{props.visitedDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <div className="pl-[92px]">
                            <div>
                                <img className="w-[450px] h-[450px] flex flex-row justify-center items-center" src={props.image} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating2;