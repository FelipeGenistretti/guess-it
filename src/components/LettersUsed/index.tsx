import { Letter } from "../Letter"

export type LettersUsedProps = {
    value: string 
    correct: boolean
}

type Props = {
    data: LettersUsedProps[]
}

export function LettersUsed({ data }:Props){
    return(
        <div className="mt-[30px] w-full border-t border-#c3c3c3">
            <h5 className="text-[#32325f] text-md font-semibold mt-[5]">Letras Utilizadas</h5>

            <div className={`
                flex flex-wrap gap-2 max-w-[600px]`}>
                    {
                        data.map(({value, correct})=>(
                            <Letter key={value} value={value} size="small" color={correct ? "correct" : "wrong"} />

                        ))
                    }
            </div>
        </div>
    )
}