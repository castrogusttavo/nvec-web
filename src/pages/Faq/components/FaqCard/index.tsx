import { ArrowDown01Icon } from 'hugeicons-react'

interface FaqCardProps {
  number: number
  question: string
  answer: string
  isOpen: boolean
  link?: string
  onClick: () => void
}

export function FaqCard({
  number,
  question,
  answer,
  isOpen,
  onClick,
  link,
}: FaqCardProps) {
  return (
    <div className="flex pt-[1px] flex-col items-start self-stretch border-t border-solid border-[#323238] group">
      <div
        className="flex py-4 justify-between items-start self-stretch cursor-pointer"
        onClick={onClick}
      >
        <h3 className="flex items-center gap-10">
          <div className="flex flex-col items-center">
            <span
              className={`text-center text-xl font-medium transition-colors ${
                isOpen || 'group-hover:text-[#C4C4CC]'
              } ${isOpen ? 'text-[#C4C4CC]' : 'text-[#737380]'}`}
            >
              {String(number).padStart(2, '0')}.
            </span>
          </div>
          <div className="flex pr-3 flex-col items-start">
            <p className="text-[#E1E1E6] text-lg font-medium">{question}</p>
          </div>
        </h3>
        <div>
          <ArrowDown01Icon
            size={16}
            color="#FFF"
            className={`transform transition-transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-4 pb-8 pt-4 text-[#A8A8B3] [&>a]:underline">
          {answer}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          )}
        </p>
      </div>
    </div>
  )
}
