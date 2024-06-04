import { BenefitsCard } from '../BenefitCard'
import {
  ChartHistogramIcon,
  Time01Icon,
  AnalyticsUpIcon,
  UserGroupIcon,
} from 'hugeicons-react'

export function BenefitsContainer() {
  return (
    <div className="flex pt-10 flex-col items-start self-stretch border-t border-solid border-[#29292E]">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 self-stretch">
        <BenefitsCard
          title="Organização Financeira"
          description="Gerencie suas finanças facilmente com nosso app intuitivo. Mantenha seus gastos sob controle e planeje seu orçamento."
          icon={<ChartHistogramIcon size={24} color="#C4C4CC" />}
        />
        <BenefitsCard
          title="Economia de Tempo"
          description="Compare preços e encontre as melhores ofertas com facilidade. Economize tempo e dinheiro em cada compra."
          icon={<Time01Icon size={24} color="#C4C4CC" />}
        />
        <BenefitsCard
          title="Consciência de Consumo"
          description="Acompanhe seus hábitos de compra com relatórios detalhados. Tenha uma visão clara dos seus gastos e economias."
          icon={<AnalyticsUpIcon size={24} color="#C4C4CC" />}
        />
        <BenefitsCard
          title="Comunidade Ativa"
          description="Participe de comunidades de compartilhamento de listas. Troque dicas e descubra novas maneiras de economizar."
          icon={<UserGroupIcon size={24} color="#C4C4CC" />}
        />
      </div>
    </div>
  )
}
