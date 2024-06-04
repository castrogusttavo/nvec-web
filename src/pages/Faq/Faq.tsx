import { FaqContainer } from './components/FaqContainer'

export function Faq() {
  return (
    <div className="flex px-5 py-20 items-center xl:px-[91px]">
      <div className="flex flex-col md:flex-row items-start gap-10 self-stretch xl:w-full xl:justify-between">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <span className="self-stretch text-[#29E0A9] text-sm font-bold tracking-[1.4px] uppercase">
            Faq
          </span>
          <h2 className="self-stretch text-[#FFF] text-xl font-medium">
            Perguntas e respostas mais frequentes
          </h2>
        </div>
        <div className="w-[698px]">
          <FaqContainer />
        </div>
      </div>
    </div>
  )
}
