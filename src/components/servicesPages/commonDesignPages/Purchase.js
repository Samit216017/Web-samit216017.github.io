import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Purchase = (props) => {

    const [offer1, setOffer1] = useState(false);
    const [offer2, setOffer2] = useState(false);
    const [offer3, setOffer3] = useState(false);

    return (
        <div>
            <div className="bg-white px-[114px]">
                <div className="bg-[#ECF2F6] pt-[140px] pb-[140px]">
                    <div className="flex flex-col justify-center items-center px-[350px]">
                        <p className="text-[#C75C6F] font-dm text-[20px] font-[500]">
                            {props.head.name}
                        </p>

                        <h1 className="text-[#292930] font-dm text-[55.5px] font-[500] pt-[8px] tracking-wide">
                            {props.head.title}
                        </h1>

                        <p className="text-[#525260] font-pop text-[18px] pt-[22px] text-center pb-[41px]">
                            {props.head.note}
                        </p>

                        <div className="w-[186.39px] h-[67px] bg-white rounded-full flex flex-row justify-center items-center shadow-sm">
                            <div className="w-[174.39px] h-[55px] bg-[#5956E9] rounded-full flex flex-row justify-center items-center cursor-pointer">
                                <p className="text-white font-dm text-[18px] tracking-tight font-[500]">Billed monthly</p>
                            </div>
                        </div>

                    </div>

                    <div className="px-[15px] flex flex-row justify-between pt-[60px]">
                        {/* Offer 1 */}
                        <div className={`${offer1 ? "bg-[#5956E9] " : "bg-white"} transition-all duration-700 px-[40px] pt-[35px] pb-[70px] w-[32%] h-fit rounded-[30px]`}
                            onMouseEnter={() => (
                                setOffer1(true) &
                                setOffer2(false) &
                                setOffer3(false)
                            )}
                        >
                            <div>
                                <div className="text-center px-[10px] pb-[21px]">
                                    <p className={`${offer1 ? "text-white" : "text-[#5956E9]"} font-dm text-[40px]`}>
                                        {props.card1.title}
                                    </p>

                                    <p className={`${offer1 ? "text-white" : "text-[#292930]"} font-pop text-[14px]`}>
                                        {props.card1.note}
                                    </p>
                                </div>

                                <div className="flex flex-row items-center border-t-[1px] border-t-[#E3E6E9]">
                                    <p className={`${offer1 ? "text-white" : "text-[#292930]"} font-dm text-[64px] tracking-tight font-[500] pt-[34px] pl-[8px]`}>
                                        {props.card1.price}
                                    </p>

                                    <div className="flex flex-row pt-[68px] pl-[10px]">
                                        <p className={`${offer1 ? "text-white" : "text-[#999FAE]"} font-dm text-[14px]`}>/</p>

                                        <p className={`${offer1 ? "text-white" : "text-[#999FAE]"} font-dm text-[14px] pl-[4px]`}>monthly</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-[24px] flex flex-col gap-[24px]">
                                {
                                    props.card1.offers.map( (offer, id) => (
                                        <div key={id} className="flex flex-row items-center">
                                            <div className={`${offer1 ? "text-white" : "text-[#999FAE]"} font-pop font-[500] text-lg pr-[17px]`}>
                                                <FaCheck/>
                                            </div>

                                            <div>
                                                <p className={`${offer1 ? "text-white" : "text-[#999FAE]"} font-pop`}>{offer.offer}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            
                        </div>

                        {/* Offer 2 */}
                        <div className={`${offer2 ? "bg-[#5956E9] " : "bg-white"} transition-all duration-700 px-[40px] pt-[35px] pb-[70px] w-[32%] h-fit rounded-[30px]`}
                            onMouseEnter={() => (
                                setOffer1(false) &
                                setOffer2(true) &
                                setOffer3(false)
                            )}
                        >
                            <div>
                                <div className="text-center px-[10px] pb-[21px]">
                                    <p className={`${offer2 ? "text-white" : "text-[#5956E9]"} font-dm text-[40px]`}>
                                        {props.card2.title}
                                    </p>

                                    <p className={`${offer2 ? "text-white" : "text-[#292930]"} font-pop text-[14px]`}>
                                        {props.card2.note}
                                    </p>
                                </div>

                                <div className="flex flex-row items-center border-t-[1px] border-t-[#E3E6E9]">
                                    <p className={`${offer2 ? "text-white" : "text-[#292930]"} font-dm text-[64px] tracking-tight font-[500] pt-[34px] pl-[8px]`}>
                                        {props.card2.price}
                                    </p>

                                    <div className="flex flex-row pt-[68px] pl-[10px]">
                                        <p className={`${offer2 ? "text-white" : "text-[#999FAE]"} font-dm text-[14px]`}>/</p>

                                        <p className={`${offer2 ? "text-white" : "text-[#999FAE]"} font-dm text-[14px] pl-[4px]`}>monthly</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-[24px] flex flex-col gap-[24px]">
                                {
                                    props.card2.offers.map( (offer, id) => (
                                        <div key={id} className="flex flex-row items-center">
                                            <div className={`${offer2 ? "text-white" : "text-[#999FAE]"} font-pop font-[500] text-lg pr-[17px]`}>
                                                <FaCheck/>
                                            </div>

                                            <div>
                                                <p className={`${offer2 ? "text-white" : "text-[#999FAE]"} font-pop`}>{offer.offer}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            
                        </div>

                        {/* Offer 3 */}
                        <div className={`${offer3 ? "bg-[#5956E9] " : "bg-white"} transition-all duration-700 px-[40px] pt-[35px] pb-[70px] w-[32%] h-fit rounded-[30px]`}
                            onMouseEnter={() => (
                                setOffer1(false) &
                                setOffer2(false) &
                                setOffer3(true)
                            )}
                        >
                            <div>
                                <div className="text-center px-[10px] pb-[21px]">
                                    <p className={`${offer3 ? "text-white" : "text-[#5956E9]"} font-dm text-[40px]`}>
                                        {props.card3.title}
                                    </p>

                                    <p className={`${offer3 ? "text-white" : "text-[#292930]"} font-pop text-[14px]`}>
                                        {props.card3.note}
                                    </p>
                                </div>

                                <div className="flex flex-row items-center border-t-[1px] border-t-[#E3E6E9] justify-center">
                                    <p className={`${offer3 ? "text-white" : "text-[#292930]"} font-dm text-[64px] tracking-tight font-[500] pt-[34px] pl-[8px]`}>
                                        {props.card3.price}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-[24px] flex flex-col gap-[24px]">
                                {
                                    props.card3.offers.map( (offer, id) => (
                                        <div key={id} className="flex flex-row items-center">
                                            <div className={`${offer3 ? "text-white" : "text-[#999FAE]"} font-pop font-[500] text-lg pr-[17px]`}>
                                                <FaCheck/>
                                            </div>

                                            <div>
                                                <p className={`${offer3 ? "text-white" : "text-[#999FAE]"} font-pop`}>{offer.offer}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase;