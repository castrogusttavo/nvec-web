interface BenefitsCardProps {
  title: string
  description: string
  icon: JSX.Element
}

export function BenefitsCard({ title, description, icon }: BenefitsCardProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <div className="inline-flex p-[0.5px] flex-col items-center justify-center rounded-md bg-gradient-to-b from-[#323238] to-[rgba(50, 50, 56, 0.30)]">
        <div className="flex w-12 h-12 justify-center items-center bg-gradient-to-b from-[#202024] to-[rgba(32, 32, 36, 0.20)] rounded-lg">
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-[#FFF] text-2xl font-medium">{title}</h2>
        <p className="text-[#C4C4CC] text-sm font-normal pr-4">{description}</p>
      </div>
    </div>
  )
}
