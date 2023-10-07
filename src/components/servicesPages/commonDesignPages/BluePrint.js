import React from "react";

const BluePrint = (props) => {
    return (
        <div>
            <div className="bg-[#ECF2F6]">
                <div className="pl-[99px] pr-[100.5px] h-full relative">
                    <div className="relative z-10 pb-[138px]">
                        <div className="pl-[15.5px] pt-[138px] pr-[14px] pb-[89px]">
                            <p className="text-[#C75C6F] font-dm font-[500] text-xl pb-[7.5px]">
                                {props.DigitalBlueHead.head1}
                            </p>
                            <h1 className="text-[#292930] font-dm text-[57px] font-[500] pb-[22px] tracking-[0.019em]">
                                {props.DigitalBlueHead.head2}
                            </h1>
                            <p className="text-[#525260] font-pop text-[18px]">
                                {props.DigitalBlueHead.head3}
                            </p>
                        </div>

                        <div className="w-full pl-[15.5px] flex flex-col gap-[76px]">
                        {/* start map */}
                            {
                                props.DigitalBlueprintBody.map( (card, id) => (
                                    <div key={id}>
                                        {
                                            card.id % 2 === 0 ? (
                                                <div className="flex flex-row-reverse gap-[18px]">
                                                    <div className="w-[32.5%]">
                                                        <img className="w-[410px] h-[410px] bg-white rounded-[30px]" src={card.image} alt=""/>
                                                    </div>

                                                    <div className="w-[43%] flex flex-col justify-center gap-4">
                                                        <p className="text-[#C75C6F] font-dm text-[20px] font-bold">
                                                            {card.title}
                                                        </p>

                                                        <h1 className="text-[#292930] font-dm text-[40px] font-[500] pb-2 tracking-wide pr-[37px]">
                                                            {card.heading}
                                                        </h1>

                                                        <p className="text-[#737387] font-pop text-[16px] pr-[40px]">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="flex flex-row gap-[2px]">
                                                    <div className="w-[36%]">
                                                        <img className="w-[410px] h-[410px] bg-white rounded-[30px]" src={card.image} alt=""/>
                                                    </div>

                                                    <div className="w-[50%] flex flex-col justify-center gap-4">
                                                        <p className="text-[#C75C6F] font-dm text-[20px] font-bold">
                                                            {card.title}
                                                        </p>

                                                        <h1 className="text-[#292930] font-dm text-[40px] font-[500] pb-2 tracking-wide">
                                                            {card.heading}
                                                        </h1>

                                                        <p className="text-[#737387] font-pop text-[16px] pr-[156px]">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="absolute top-0 left-0">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/bubble-24.png" alt=""/>
                    </div>

                    <div className="absolute top-[346px] right-0">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/bubble-23.png" alt=""/>
                    </div>

                    <div className="absolute left-0 top-[426px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-4.png" alt=""/>
                    </div>

                    <div className="absolute right-0 top-[851px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-5.png" alt=""/>
                    </div>

                    <div className="absolute left-0 bottom-[742px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-4.png" alt=""/>
                    </div>

                    <div className="absolute right-0 bottom-[268px]">
                        <img src="https://dev.weboin.com/wp-content/plugins/axil-elements/assets/media/shape17/line-5.png" alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BluePrint;