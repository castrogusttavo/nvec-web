interface ButtonTabProps {
  isActive: boolean
  children: string
  onClick: () => void
}

export function ButtonTab({ isActive, children, onClick }: ButtonTabProps) {
  return (
    <button
      className={`flex py-3.5 px-5 items-start rounded-lg transition-colors ${
        isActive ? 'bg-[#8234E9]' : 'bg-[#121214] hover:bg-[#202024]'
      }`}
      onClick={onClick}
    >
      <span className="uppercase text-[#FFF] font-sans text-sm font-bold">
        {children}
      </span>
    </button>
  )
}
