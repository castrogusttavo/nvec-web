import { FeatureTab } from './components/FeatureTab'

export function Features() {
  return (
    <div className="flex items-center justify-center">
      <div className="py-20 flex flex-col items-start gap-10 self-stretch md:items-center md:justify-center max-w-[1256px] xl:px-0">
        <div className="px-[35px] flex flex-col gap-6 text-center">
          <span className="font-sans text-sm font-bold tracking-[1.4px] text-[#29E0A9] uppercase">
            por dentro das funcionalidades
          </span>
          <h2 className="px-5 text-2xl font-medium text-[#FFF] lg:text-4xl lg:w-[800px]">
            Um conjunto completo de ferramentas para facilitar a gestão das suas
            finanças pessoais
          </h2>
        </div>
        <div className="flex flex-col items-start gap-10 self-stretch px-5 max-w-full xl:items-center xl:justify-between xl:w-full">
          <FeatureTab />
        </div>
      </div>
    </div>
  )
}
