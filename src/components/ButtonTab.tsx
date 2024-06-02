interface ButtonTabProps {
  isActive: boolean
  children: string
}

export function ButtonTab({ isActive, children }: ButtonTabProps) {
  return (
    <button
      className={`flex py-3.5 px-5 items-start rounded-lg transition-colors ${
        isActive ? 'bg-[#8234E9]' : 'bg-[#121214] hover:bg-[#202024]'
      }`}
    >
      <span className="uppercase text-[#FFF] font-sans text-sm">
        {children}
      </span>
    </button>
  )
}
