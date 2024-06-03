import Check from '../../../../assets/svg/check.svg'

interface ToolContainerProps {
  title: string
  description: string
}

export function ToolContainer({ title, description }: ToolContainerProps) {
  return (
    <div className="flex items-start gap-4 self-stretch">
      <div>
        <img src={Check} alt="" width={24} height={24} className="max-w-none" />
      </div>
      <div className="flex min-w-[310px] flex-col items-start gap-[4.5px] self-stretch">
        <h2 className="text-[#002F27] font-sans text-base font-medium leading-7">
          {title}
        </h2>
        <p className="text-[#323238] font-sans text-sm font-normal pr-[34px]">
          {description}
        </p>
      </div>
    </div>
  )
}
