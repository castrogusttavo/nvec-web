import { FaqContainer } from './components/FaqContainer'

export function Faq() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex px-5 py-20 items-center xl:px-0 xl:w-[1256px] max-w-[1256px]">
        <div className="flex flex-col md:flex-row items-start gap-10 self-stretch xl:w-full xl:justify-between">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <span className="self-stretch text-[#29E0A9] text-sm font-bold tracking-[1.4px] uppercase">
              Faq
            </span>
            <h2 className="self-stretch text-[#FFF] text-xl font-medium">
              Perguntas e respostas mais frequentes
            </h2>
          </div>
          <div>
            <FaqContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
