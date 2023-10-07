import React from "react";

const CircularBar = (props) => {
    const st = props.color;
    const bc = props.barColor;
    return (
        <div className="flex pr-3">
            <div className="h-[60px] w-[60px] flex flex-col justify-center items-center rounded-full gap-1 group cursor-pointer"
            style={{
                backgroundColor: st
            }}>
                <div className="flex flex-col gap-1 items-end">
                    <div className="w-[20px] h-[2px] transition-all duration-700 group-hover:w-[10px]" style={{backgroundColor: bc}}></div>
                    <div className="w-[20px] h-[2px]" style={{backgroundColor: bc}}></div>
                    <div className="w-[10px] h-[2px] flex right-10 transition-all duration-700 group-hover:w-[20px]" style={{backgroundColor: bc}}></div>
                </div>
            </div>
        </div>
    )
}

export default CircularBar;