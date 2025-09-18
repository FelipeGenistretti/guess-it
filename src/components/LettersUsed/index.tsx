import { Letter } from "../Letter"


export function LettersUsed(){
    return(
        <div className="mt-[30px] w-full border-t border-#c3c3c3">
            <h5 className="text-[#32325f] text-md font-semibold mt-[5]">Letras Utilizadas</h5>

            <div className={`
                flex flex-wrap gap-2 max-w-[600px]`}>
                <Letter value="X" size="small" color="correct" />
                <Letter value="Y" size="small" color="wrong"/>
          
            </div>
        </div>
    )
}