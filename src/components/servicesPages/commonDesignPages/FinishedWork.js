import React from "react";
import { useState } from "react";

const FinishedWork = (props) => {

    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

    return (
        <div>
            <div className="bg-white">
                <div className="pt-[111px] pb-[85px] pl-[130px] pr-[110px]">
                    <div>
                        <h1 className="text-[#292930] font-dm text-[56px] font-[500] tracking-wide">
                            {props.heading}
                        </h1>

                        <p className="text-[#525260] font-pop text-[18px] pt-[22px]">
                            {props.description}
                        </p>
                    </div>

                    <div className="flex flex-row pt-[59px] pl-[15px] justify-between pr-[20px]">
                        {/* card 1 */}
                        <div className="h-[407.73px]">
                            <div className={`${box1 ? "bg-gradient-to-r from-[#ECF2F6] to-[#ECF2F6]" : "bg-gradient-to-r from-[#ECF2F6] to-transparent"} rounded-[30px] flex flex-col items-center gap-[1px] pl-[61px] pb-[6px] pr-[61.5px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(true) &
                                    setBox2(false) &
                                    setBox3(false) &
                                    setBox4(false)
                                )}
                            >
                                <div className="pt-[60px]">
                                    <img className="w-[32px] h-[32px]" src="https://dev.weboin.com/wp-content/uploads/2021/09/icon-10.png" alt=""/>
                                </div>

                                <div className="flex flex-row pt-[6px] items-center pl-[7px]">
                                    <p className="text-[55px] font-inter text-[#5956E9] pt-[8px]">{props.card1}</p>

                                    <p className="text-[55px] font-dm text-[#5956E9] font-[500] pl-[4px]">+</p>
                                </div>

                                <p className="pb-[50px] text-[20px] font-dm font-[500] text-[#525260] tracking-tight">Years of operation</p>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="h-[407.73px] pt-[90px]">
                            <div className={`${box2 ? "bg-gradient-to-r from-[#ECF2F6] to-[#ECF2F6]" : "bg-gradient-to-r from-[#ECF2F6] to-transparent"} rounded-[30px] flex flex-col items-center gap-[1px] pl-[75px] pr-[80px] pb-[4px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(true) &
                                    setBox3(false) &
                                    setBox4(false)
                                )}
                            >
                                <div className="pt-[60px]">
                                    <img className="w-[32px] h-[32px]" src="https://dev.weboin.com/wp-content/uploads/2021/09/icon-11.png" alt=""/>
                                </div>

                                <div className="flex flex-row pt-[6px] items-center pl-[7px]">
                                    <p className="text-[55px] font-inter text-[#5956E9] pt-[8px]">{props.card2}</p>

                                    <p className="text-[55px] font-dm text-[#5956E9] font-[500] pl-[4px]">+</p>
                                </div>

                                <p className="pb-[50px] text-[20px] font-dm font-[500] text-[#525260] tracking-tight">{props.card2Desc}</p>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="h-[407.73px]">
                            <div className={`${box3 ? "bg-gradient-to-r from-[#ECF2F6] to-[#ECF2F6]" : "bg-gradient-to-r from-[#ECF2F6] to-transparent"} rounded-[30px] flex flex-col items-center gap-[1px] pl-[94px] pr-[92px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(false) &
                                    setBox3(true) &
                                    setBox4(false)
                                )}
                            >
                                <div className="pt-[60px]">
                                    <img className="w-[32px] h-[32px]" src="https://dev.weboin.com/wp-content/uploads/2021/09/icon-12.png" alt=""/>
                                </div>

                                <div className="flex flex-row pt-[6px] items-center pl-[7px]">
                                    <p className="text-[55px] font-inter text-[#5956E9] pt-[8px]">{props.card3}</p>

                                    <p className="text-[55px] font-dm text-[#5956E9] font-[500] pl-[4px]">+</p>
                                </div>

                                <p className="pb-[50px] text-[20px] font-dm font-[500] text-[#525260] tracking-tight">Specialist</p>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className="h-[407.73px] pt-[90px]">
                            <div className={`${box4 ? "bg-gradient-to-r from-[#ECF2F6] to-[#ECF2F6]" : "bg-gradient-to-r from-[#ECF2F6] to-transparent"} rounded-[30px] flex flex-col items-center gap-[1px] pl-[64px] pr-[61.5px] transition-all duration-700`}
                                onMouseEnter={() => (
                                    setBox1(false) &
                                    setBox2(false) &
                                    setBox3(false) &
                                    setBox4(true)
                                )}
                            >
                                <div className="pt-[60px]">
                                    <img className="w-[32px] h-[30.72px]" src="https://dev.weboin.com/wp-content/uploads/2021/09/message.png" alt=""/>
                                </div>

                                <div className="flex flex-row pt-[6px] items-center pl-[7px]">
                                    <p className="text-[55px] font-inter text-[#5956E9] pt-[8px]">{props.card4}</p>

                                    <p className="text-[55px] font-dm text-[#5956E9] font-[500] pl-[4px]">{props.card4Unit}</p>
                                </div>

                                <p className="pb-[50px] text-[20px] font-dm font-[500] text-[#525260] tracking-tight">{props.card4Desc}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishedWork;