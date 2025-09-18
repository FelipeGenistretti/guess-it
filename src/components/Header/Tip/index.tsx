import tipIcon from "../../../assets/tip.svg";

type Props = {
  tip: string
}

export function Tip({tip}:Props){
    return (
        <div className="flex items-center max-w-[600px] mx-auto bg-[#ebebfc] p-2 text-[#4f4fb9] rounded gap-3">
            <img className="h-8 w-8" src={tipIcon} alt="icone de dica" />

            <div>
                <h3 className="text-md font-bold">Dica</h3>
                <p className="text-md">{tip}</p>
            </div>
        </div>
    )
}
