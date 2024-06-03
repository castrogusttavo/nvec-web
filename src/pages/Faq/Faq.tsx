import { FaqContainer } from './components/FaqContainer'

export function Faq() {
  return (
    <div className="flex max-w-[1256px] px-5 py-20 item-center">
      <div className="flex flex-col items-start gap-10 self-stretch">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <span className="self-stretch text-[#29E0A9] text-sm font-bold tracking-[1.4px] uppercase">
            Faq
          </span>
          <h2 className="self-stretch text-[#FFF] text-xl font-medium">
            Perguntas e respostas mais frequentes
          </h2>
        </div>
        <FaqContainer />
      </div>
    </div>
  )
}
