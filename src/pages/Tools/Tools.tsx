import { ToolContainer } from './components/Tool/index'

export function Tools() {
  return (
    <div className="bg-[#FFF] flex py-20 flex-col items-center xl:px-[91px]">
      <div className="flex px-5 flex-col items-start gap-10 xl:w-full lg:items-center max-w-[1256px]">
        <div className="flex flex-col gap-4">
          <span className="self-stretch text-[#00A277] text-sm font-bold tracking-[1.4px] uppercase lg:text-center">
            porque embarcar no na volta eu compro
          </span>
          <h2 className="font-sans self-stretch text-2xl lg:text-4xl font-medium lg:text-center lg:w-[700px] xl:w-[900px]">
            Um conjunto completo de ferramentas para ajudar você a gerenciar
            suas finanças de forma eficiente
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-start">
          <div className="flex pb-10 flex-col item-start gap-6 self-stretch">
            <h2 className="text-[#002F27] font-sans text-xl font-medium">
              Para sua organização financeira
            </h2>
            <ToolContainer
              title="Controle de Despesas"
              description="Monitore suas despesas em tempo real e veja exatamente onde seu dinheiro está sendo gasto, ajudando a identificar oportunidades de economia."
            />
            <ToolContainer
              title="Planejamento e Orçamento"
              description="Estabeleça limites de gastos para diferentes listas e mantenha seu orçamento sob controle, evitando surpresas no final do mês."
            />
            <ToolContainer
              title="Relatórios Detalhados"
              description="Acompanhe seus gastos com relatórios gráficos mensais e semestrais que oferecem uma visão clara e detalhada das suas finanças."
            />
          </div>
          <div className="flex pb-10 flex-col item-start gap-6 self-stretch border-t-2 border-solid border-[#E1E1E6] pt-10 lg:border-l-2 lg:border-t-0 lg:pt-0 lg:pl-10">
            <h2 className="text-[#002F27] font-sans text-xl font-medium">
              Para sua praticidade
            </h2>
            <ToolContainer
              title="Facilidade na Criação de Listas"
              description="Monte suas listas de compras de forma simples e prática, adicionando itens rapidamente e organizando tudo por categorias."
            />
            <ToolContainer
              title="Comparação de Preços"
              description="Compare preços das listas dentro da comunidade e encontre os melhores preços, garantindo economia nas suas compras."
            />
            <ToolContainer
              title="Histórico e Notificações"
              description="Acesse o histórico das suas compras passadas e receba notificações de listas pendentes e outras informações importantes, mantendo tudo organizado e atualizado."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
