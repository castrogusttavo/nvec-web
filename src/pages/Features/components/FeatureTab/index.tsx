import { useState } from 'react'
import { FeatureData } from '../FeatureData'
import { Tablist } from '../Tablist'

import featureDashboard from '../../../../assets/img/featureDashboard.png'

const tabContents = [
  {
    title:
      'Obtenha uma visão geral de acompanhamento das licenças e do engajamento dos usuários',
    description:
      'O engajamento é medido através de quatro tipos de ações: assistir aulas, enviar desafios práticos, responder quizes e interagir no fórum (criando tópicos, respondendo e votando).',
    imgUrl: featureDashboard,
  },
  {
    title: 'Consulte o uso e as ações de engajamento individualmente',
    description:
      'Tenha relatórios completos de engajamento e consulte o progresso de estudo individual.',
    imgUrl: featureDashboard,
  },
  {
    title: 'Faça a gestão de licenças de seu time',
    description:
      'Gerencie as pessoas que têm acesso à plataforma de estudos e veja os detalhes das licenças contratadas.',
    imgUrl: featureDashboard,
  },
  {
    title: 'Gerencie os usuários que podem acessar a plataforma para empresas',
    description:
      'Crie novos usuários, atribuindo diferentes permissões: Owner, Gestor e Analista.',
    imgUrl: featureDashboard,
  },
]

export function FeatureTab() {
  const [activeIndex, setActiveIndex] = useState(0)

  const { title, description, imgUrl } = tabContents[activeIndex]

  return (
    <div className="min-w-full xl:max-w-[1216px] xs:max-w-[320px] xl:w-full">
      <Tablist activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <FeatureData
        title={title}
        description={description}
        imgFeature={imgUrl}
      />
    </div>
  )
}
