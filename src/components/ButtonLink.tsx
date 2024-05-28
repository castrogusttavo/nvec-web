import { ArrowRight01Icon } from "hugeicons-react";

export function ButtonLink () {
  return (
    <button className="flex py-4 px-6 items-center justify-center gap-2 rounded-lg bg-[#8234E9]">
      <span className="text-[#FFF] text-sans font-bold leading-4 uppercase">
        faça download do app
      </span>
      <ArrowRight01Icon size={24} color="#FFF" strokeWidth={3} />
    </button>
  )
}