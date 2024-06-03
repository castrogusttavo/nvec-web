import { ButtonTab } from '../../../../components/ButtonTab'

interface TablistProps {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export function Tablist({ activeIndex, setActiveIndex }: TablistProps) {
  const tabs = ['dashboard', 'relatórios', 'licenças', 'acessos']
  return (
    <div className="max-w-[390px] sm:max-w-none overflow-x-auto md:overflow-x-visible whitespace-nowrap scrollbar-hide">
      <div className="flex gap-7 min-w-max md:min-w-full items-center justify-center">
        {tabs.map((tab, index) => (
          <ButtonTab
            key={index}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {tab}
          </ButtonTab>
        ))}
      </div>
    </div>
  )
}
