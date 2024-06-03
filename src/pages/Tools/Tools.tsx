import { ToolContainer } from './components/Tool/index'

export function Tools() {
  return (
    <div className="bg-[#FFF] flex py-20 flex-col items-center xl:px-[91px]">
      <div className="flex px-5 flex-col items-start gap-10 xl:w-full">
        <div className="flex flex-col gap-4">
          <span className="self-stretch text-[#00A277] text-sm font-bold tracking-[1.4px] uppercase">
            porque embarcar na rocketseat
          </span>
          <h2 className="font-sans self-stretch text-2xl font-medium">
            Um ecossistema completo para levar sua empresa e seu time para o
            próximo nível
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-start">
          <div className="flex pb-10 flex-col item-start gap-6 self-stretch">
            <h2 className="text-[#002F27] font-sans text-xl font-medium">
              Para sua empresa
            </h2>
            <ToolContainer
              title="Crescimento profissional"
              description="Aprender novas tecnologias e ferramentas
            torna um profissional reconhecido e
            valorizado."
            />
            <ToolContainer
              title="Upgrade no portfólio e currículo"
              description="Aprendizado prático aumenta as habilidades
            técnicas, o nível de experiência e a resolução
            de desafios e soluções no dia a dia."
            />
            <ToolContainer
              title="Atualização constante"
              description="Permite se manter relevante, inovando,
            antecipando as tendências futuras e
            preparando-se para elas."
            />
          </div>
          <div className="flex pb-10 flex-col item-start gap-6 self-stretch border-t-2 border-solid border-[#E1E1E6] pt-10 lg:border-l-2 lg:border-t-0 lg:pt-0 lg:pl-10">
            <h2 className="text-[#002F27] font-sans text-xl font-medium">
              Para sua empresa
            </h2>
            <ToolContainer
              title="Crescimento profissional"
              description="Aprender novas tecnologias e ferramentas
            torna um profissional reconhecido e
            valorizado."
            />
            <ToolContainer
              title="Upgrade no portfólio e currículo"
              description="Aprendizado prático aumenta as habilidades
            técnicas, o nível de experiência e a resolução
            de desafios e soluções no dia a dia."
            />
            <ToolContainer
              title="Atualização constante"
              description="Permite se manter relevante, inovando,
            antecipando as tendências futuras e
            preparando-se para elas."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
