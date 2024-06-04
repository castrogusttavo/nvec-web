import { useState } from 'react'
import { FeatureData } from '../FeatureData'
import { Tablist } from '../Tablist'

import featureDashboard from '../../../../assets/img/featureDashboard.png'

const tabContents = [
  {
    title: 'Organize Suas Compras com Facilidade',
    description:
      'Monte suas listas de compras de forma simples e prática. Adicione itens com facilidade, organize-os por categorias e tenha tudo pronto para suas compras. Nunca mais se esqueça de comprar o que precisa.',
    imgUrl: featureDashboard,
  },
  {
    title: 'Compartilhe e Colabore com Comunidades',
    description:
      'Compartilhe suas listas com amigos e familiares, facilitando a colaboração e garantindo que todos estejam na mesma página. Ideal para compras coletivas e planejamento familiar, permitindo que todos participem e contribuam.',
    imgUrl: featureDashboard,
  },
  {
    title: 'Visualize Seus Gastos com Relatórios Detalhados',
    description:
      'Acompanhe seus gastos com relatórios mensais e semestrais detalhados. Visualize suas despesas de forma clara e gráfica, ajudando você a entender onde está gastando e onde pode economizar. Tenha um panorama completo das suas finanças.',
    imgUrl: featureDashboard,
  },
  {
    title: 'Encontre as Melhores Ofertas com Comparação de Preços',
    description:
      'Compare os preços das suas listas dentro da comunidade e encontre as opções mais baratas. Veja de forma transparente qual loja oferece o melhor preço para os itens que você precisa, garantindo economia nas suas compras.',
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
