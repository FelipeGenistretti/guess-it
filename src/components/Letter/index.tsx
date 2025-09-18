type Props = {
  value?: string
  size?: "default" | "small"
  color?: "default" | "correct" | "wrong"
}

export function Letter({ value = "", size = "default", color = "default" }: Props) {
  const sizeClasses = size === "small" 
    ? "w-11 h-11 rounded-[7px] border border-[#6363db]"
    : "w-16 h-16 rounded border border-[#6363db]";

  let colorClasses = "";
  if (color === "correct") colorClasses = "bg-[#e1f5ec] border-[#03ab4f] text-[#03ab4f]";
  else if (color === "wrong") colorClasses = "bg-[#ffcf62] border-[#691b0a] text-[#691b0a]";

  return (
    <div
      className={`flex items-center justify-center ${sizeClasses} ${colorClasses} bg-[#ebebfc] text-[#6363db]`}
    >
      <span className={size === "small" ? "text-[1.25rem] font-medium" : "text-xl font-bold"}>
        {value.toLocaleUpperCase()}
      </span>
    </div>
  )
}
