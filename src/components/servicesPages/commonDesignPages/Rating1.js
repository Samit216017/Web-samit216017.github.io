import React from "react";

const Rating1 = (props) => {
    return (
        <div>
            <div className="w-full mx-auto bg-gradient-to-r from-white ]">
                <div className="flex flex-row pt-[111px] pl-[220px] pr-[60px] pb-[129px]">
                    {/* left */}
                    <div className="w-[50%]">
                        <div>
                            <img className="w-[450px] h-[450px] flex flex-row justify-center items-center" src={props.image} alt=""/>
                        </div>
                    </div>

                    {/* right */}
                    <div className="w-[50%] pl-[40px] flex flex-col gap-[8px] pt-[0px] pr-[59px]">
                        <p className="text-[#C75C6F] text-[20px] font-dm font-[500]">{props.name}</p>

                        <h1 className="text-[#292930] text-[54px] font-dm font-[500] pr-[23px]">{props.heading}</h1>

                        <p className="text-[#525260] text-[16px] font-pop pt-[6px]">{props.description}</p>

                        <div className="flex flex-row pt-12 pb-10">
                            <div className="flex flex-col pr-[60px] border-r-[1px] border-[#C7C7D5]">
                                <div className="flex flex-row h-[76px]">
                                    <p className="text-[#C75C6F] text-[55px] font-inter pr-[4px]">{props.percent}</p>
                                    <p className="text-[#C75C6F] text-[56px] font-dm font-[500]">%</p>
                                </div>

                                <p className="text-[#525260] font-pop">ROI increase</p>
                            </div>

                            <div className="pl-[62px]">
                                <div className="flex flex-row h-[76px]">
                                    <p className="text-[#C75C6F] text-[55px] font-inter pr-[4px]">{props.visited}</p>
                                    <p className="text-[#C75C6F] text-[55px] font-dm font-[500]">K</p>
                                </div>

                                <p className="text-[#525260] font-pop">Monthly website visits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating1;