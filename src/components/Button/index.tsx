import type React from "react"

type Props = React.ComponentProps<"button"> & {
    title:string
}

export function Button({title, ...rest}:Props){
    return (
        <button type="button" className="h-[48px] rounded bg-[#6363db] border-black text-[#ebebfc] px-4 font-bold" {...rest}>{title}</button>
    )
}