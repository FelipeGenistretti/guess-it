import type React from "react";

type Props = React.ComponentProps<"input">

export function Input({...rest}:Props){
    return (
        <input type="text" className="border border-black p-2 rounded mt-2 w-[48px] h-[48px] bg-[#ebebfc] uppercase text-center font-bold outline-none" {...rest} />
    )
}