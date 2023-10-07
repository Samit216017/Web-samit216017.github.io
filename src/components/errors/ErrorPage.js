import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const ErrorPage = () => {
    return (
        <div>
            <div className="w-full bg-gradient-to-r from-[#ECF2F6] to-white relative pl-[118px] pb-[213.5px]">
                <div className="flex flex-col pt-[140px]">
                    <h1 className="text-[#292930] font-dm text-[70px] font-[500] tracking-wide">
                        Page not Found
                    </h1>

                    <p className="text-[#525260] font-pop pt-[30px] text-[17px] tracking-tight">
                        Sorry, but the page you were looking for could not be found.
                    </p>

                    <div className="font-pop w-[305px] pt-10 z-10">
                        <Link to="/">
                            <Button>
                                Back to Homepage
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="w-[780px] pl-14 absolute right-[25px] z-10 top-[40px]">
                    <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/banner/404.png" alt=""/>
                </div>

                <div className="absolute -top-[140px] right-[12px] w-[753px] h-[970px]">
                    <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/images/banner/bubble-27.png" alt=""/>
                </div>

                <div className="absolute bottom-0 -left-1">
                    <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/images/banner/bubble-9.png" alt=""/>
                </div>

                <div className="absolute left-0 -bottom-[82px]">
                    <img src="https://dev.weboin.com/wp-content/themes/abstrak/assets/images/banner/line-4.png" alt=""/>
                </div>

            </div>

            <div className="w-full h-[125px] bg-white relative z-10"></div>
        </div>
    )
}

export default ErrorPage;