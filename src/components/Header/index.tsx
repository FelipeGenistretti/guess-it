import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";

type Props = {
  current : number
  max:number
  onRestart : () => void
}


export function Header({current, max, onRestart}:Props) {
  return (
    <div className="container mx-auto p-4">
        <img className="h-[90px] w-full max-w-[600px]" src={logo} alt="Logo" />

        <div className="flex justify-between items-center mt-4 w-full max-w-[600px]">
            <span className="text-lg font-medium text-[#9b9b9b]">
            <strong className="text-xl text-[#e8891c]">{current}</strong> de {max} tentativas
            </span>

            <button onClick={onRestart} className="p-2 rounded hover:bg-gray-200 transition">
                <img src={restart} alt="reset" className="h-6 w-6 transform transition-transform duration-[500ms] hover:scale-110" />
            </button>
        </div>
    </div>

  );
}
