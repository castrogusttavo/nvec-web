import { BenefitsCard } from '../BenefitCard'
import { StarIcon } from 'hugeicons-react'

export function BenefitsContainer() {
  return (
    <div className="flex pt-10 flex-col items-start self-stretch border-t border-solid border-[#29292E]">
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 self-stretch">
        <BenefitsCard
          title="Nota 4.9 de 5"
          description="Quem faz aprova! Essa é a média de avaliação das
          nossas aulas na plataforma."
          icon={<StarIcon size={24} color="#C4C4CC" />}
        />
        <BenefitsCard
          title="Nota 4.9 de 5"
          description="Quem faz aprova! Essa é a média de avaliação das
          nossas aulas na plataforma."
          icon={<StarIcon size={24} color="#C4C4CC" />}
        />
        <BenefitsCard
          title="Nota 4.9 de 5"
          description="Quem faz aprova! Essa é a média de avaliação das
          nossas aulas na plataforma."
          icon={<StarIcon size={24} color="#C4C4CC" />}
        />
        <BenefitsCard
          title="Nota 4.9 de 5"
          description="Quem faz aprova! Essa é a média de avaliação das
          nossas aulas na plataforma."
          icon={<StarIcon size={24} color="#C4C4CC" />}
        />
      </div>
    </div>
  )
}
