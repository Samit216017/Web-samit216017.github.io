import React, { useState } from "react";
import QuoteForm from "../../common/QuoteForm";
import { FaCode, FaCompress, FaGlobeAfrica } from "react-icons/fa";

const Quote = (props) => {

    const [strategy, setStrategy] = useState(true);
    const [design, setDegin] = useState(false);
    const [development, setDevelopment] = useState(false);

    return (
        <div>
            <div className="bg-white pt-[120px] pb-[250px]">
                <div className="flex flex-row pl-[130px]">
                    <div className="w-[50%] pr-[80px]">
                        <p className="text-[#C75C6F] font-dm text-[20px] font-[500] pb-[15.5px]">
                            {props.head1}
                        </p>

                        <p className="text-[#525260] font-pop text-[18px]">
                            {props.description1}
                        </p>

                        <div className="border-b-[1px] border-b-[#999FAE]">
                            <div className="pt-[76px]">
                                <div className="flex flex-row items-center pb-[17px] cursor-pointer"
                                    onClick={() => (
                                        setStrategy(true) &
                                        setDegin(false) &
                                        setDevelopment(false)
                                    )}
                                >
                                    <FaCompress className={`${strategy ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 w-[21px] h-[24px]`}/>
                                    <p className={`${strategy ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-dm text-[24px] pl-[20px]`}>
                                        {props.head2}
                                    </p>
                                </div>

                                <div className={`${strategy ? "pb-[18px] transition-all duration-700" : "-translate-y-0 pb-0 transition-all duration-700"}`}>
                                    {
                                        strategy ? (
                                            <span className="visible transition-all duration-700">{props.description2}</span>
                                        ) : (
                                            <span className="hidden transition-all duration-700">{props.description2}</span>
                                        )
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="border-b-[1px] border-b-[#999FAE]">
                            <div className="pt-[16.5px]">
                                <div className="flex flex-row items-center pb-[17px] cursor-pointer"
                                    onClick={() => (
                                        setStrategy(false) &
                                        setDegin(true) &
                                        setDevelopment(false)
                                    )}
                                >
                                    <FaCode className={`${design ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 w-[30px] h-[24px]`}/>
                                    <p className={`${design ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-dm text-[24px] pl-[20px]`}>
                                        {props.head3}
                                    </p>
                                </div>

                                <div className={`${design ? "pb-[18px] transition-all duration-700" : "-translate-y-0 pb-0 transition-all duration-700"}`}>
                                    {
                                        design ? (
                                            <span className="visible transition-all duration-700">{props.description3}</span>
                                        ) : (
                                            <span className="hidden transition-all duration-700">{props.description3}</span>
                                        )
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="border-b-[1px] border-b-[#999FAE]">
                            <div className="pt-[16.5px]">
                                <div className="flex flex-row items-center pb-[17px] cursor-pointer"
                                    onClick={() => (
                                        setStrategy(false) &
                                        setDegin(false) &
                                        setDevelopment(true)
                                    )}
                                >
                                    <FaGlobeAfrica className={`${development ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 w-[24px] h-[24px]`}/>
                                    <p className={`${development ? "text-[#5956E9]" : "text-[#525260]"} transition-all duration-700 font-dm text-[24px] pl-[20px]`}>
                                        {props.head4}
                                    </p>
                                </div>

                                <div className={`${development ? "pb-[18px] transition-all duration-700" : "-translate-y-0 pb-0 transition-all duration-700"}`}>
                                    {
                                        development ? (
                                            <span className="visible transition-all duration-700">{props.description4}</span>
                                        ) : (
                                            <span className="hidden transition-all duration-700">{props.description4}</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <QuoteForm {...props}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote;