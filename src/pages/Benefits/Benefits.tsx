import { BenefitsContainer } from './components/Benefit/BenefitContainer'
import { MemberContainer } from './components/Member/MemberContainer'

export function Benefits() {
  return (
    <div className="max-w-[1256px] bg-[#121214] flex py-20 flex-col items-start">
      <div className="pl-[20px] flex flex-col gap-10 self-stretch items-start">
        <div className="flex pt-[2px] flex-col items-start gap-[18px] self-stretch">
          <span className="font-sans text-sm font-bold tracking-[1.4px] text-[#29E0A9] uppercase">
            conteúdo para todos os desafios
          </span>
          <h2 className="text-2xl font-medium text-[#FFF]">
            Formações que seu time vai ter acesso
          </h2>
        </div>
        <div>
          <MemberContainer />
        </div>
      </div>
      <div className="flex pt-10 px-5 flex-col items-start">
        <BenefitsContainer />
      </div>
    </div>
  )
}
