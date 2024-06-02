import { ArrowRight01Icon } from 'hugeicons-react'

interface ButtonLinkProps {
  width?: string
}

export function ButtonLink({ width }: ButtonLinkProps) {
  return (
    <button
      className={`flex py-4 px-6 items-center justify-center gap-2 rounded-lg bg-[#8234E9] hover:bg-[#361362] transition-colors ${width}`}
    >
      <span className="text-[#FFF] text-sm font-sans font-bold leading-4 uppercase">
        faça download do app
      </span>
      <ArrowRight01Icon size={24} color="#FFF" strokeWidth={3} />
    </button>
  )
}
