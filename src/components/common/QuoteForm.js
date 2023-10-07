import React from "react";

const QuoteForm = (props) => {

    // const handleOnSubmit = (e) => {
    //     e.preventDefault()
    // }

    return (
        <div className="w-full">
            <div className="pl-[50px] pr-[130px]">
                <form className="shadow-lg pl-[50px] rounded-[30px] shadow-pure-greys-50 pr-[49px] pb-[92px]"
                    // onSubmit={handleOnSubmit}
                >
                    <div className="bg-white pt-[44px]">
                        <p className="text-[#292930] font-dm text-[36px] font-[500] tracking-[0.015em]">
                            {props.formName}
                        </p>

                        <label className="w-full">
                            <p className="text-[#27272E] font-pop text-[14px] pt-[27px] font-[500] pb-[10px]">Name</p>

                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your Name"
                                className=" placeholder:text-[#999FAE] placeholder:font-pop placeholder:text-[15px] border-[1px] border-[#ECF2F6] w-full rounded-[15px] p-[17px] placeholder:pl-[3px]"
                            />
                        </label>

                        <label className="w-full">
                            <p className="text-[#27272E] font-pop text-[14px] pt-[43px] font-[500] pb-[10px]">Email</p>

                            <input
                                type="text"
                                name="email"
                                required
                                placeholder="Your Email"
                                className=" placeholder:text-[#999FAE] placeholder:font-pop placeholder:text-[15px] border-[1px] border-[#ECF2F6] w-full rounded-[15px] p-[17px] placeholder:pl-[3px]"
                            />
                        </label>

                        <label className="w-full">
                            <p className="text-[#27272E] font-pop text-[14px] pt-[43px] font-[500] pb-[10px]">Phone</p>

                            <input
                                type="text"
                                name="number"
                                required
                                placeholder="Your Phone"
                                className=" placeholder:text-[#999FAE] placeholder:font-pop placeholder:text-[15px] border-[1px] border-[#ECF2F6] w-full rounded-[15px] p-[17px] placeholder:pl-[3px]"
                            />
                        </label>

                        <button
                            type="submit"
                            className="text-[#27272E] text-[16px] mt-[40px] font-pop font-[500] -tracking-[0.040em] border-[1px] border-[#99A1AA] p-[18px] hover:bg-[#5956E9] hover:text-white transition-all duration-700 rounded-[20px] w-full"
                        >
                            Get Pricing Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default QuoteForm;