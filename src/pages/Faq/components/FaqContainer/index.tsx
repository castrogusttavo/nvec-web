import { useState } from 'react'
import { FaqCard } from '../FaqCard'

export function FaqContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData = [
    {
      number: 1,
      question: `Gostaria de oferecer
      descontos da Rocketseat para
      os meus colaboradores. Com
      quem devo falar?`,
      answer: `Conheça nossos planos e condições para times e outras soluções para empresas através do email: `,
      link: `parceiros@rocketseat.com.br`,
    },
    {
      number: 2,
      question: `Consigo fazer a gestão das
      licenças e rotatividade entre
      os meus colaboradores?`,
      answer: `Sim! Com nosso dashboard você tem autonomia e liberdade para fazer a gestão e rotação de licenças a hora que quiser!`,
    },
    {
      number: 3,
      question: `Posso personalizar quais
      formações meu time terá
      acesso?`,
      answer: `Em nossa plataforma de aprendizado contínuo seu colaborador terá acesso a um catálogo completo com todas as formações, cursos e conteúdos liberados. Você poderá escolher capacitação que desejar, personalizar sua jornada de estudos e ainda acompanhar o progresso na formação que escolher. Ou seja, um dev pode estudar Python, enquanto outro aprende Java.`,
    },
    {
      number: 4,
      question: `A contratação para empresas,
      permite a emissão de
      certificado?`,
      answer: `Sim! Ao finalizar cada formação, seu colaborador poderá emitir o certificado da respectiva tecnologia. E pode colecionar diversos certificados, estudando em mais de uma formação, sem nenhum custo a mais.`,
    },
    {
      number: 5,
      question: `Como funciona a plataforma e
      dashboard para empresas?`,
      answer: `Você terá um login e senha que dá acesso a um dashboard de gestão onde pode gerenciar todas as licenças e acessos com facilidade, analisar o engajamento do seu time, horas de conteúdo consumidas, desempenho nos quizes e desafios e ainda pode gerar relatórios, exportando esses gráficos para usar em avaliações de performance ou como preferir.`,
    },
    {
      number: 6,
      question: `Tenho somente um dev em
      minha empresa, posso
      contratar a Rocketseat para
      empresas?`,
      answer: `Nesse caso, você pode optar pela contratação de nossa assinatura anual. Converse com nosso time para conferir as condições e opções disponíveis: parceiros@rocketseat.com.br O dashboard de gestão do Rocketseat para empresas está disponível para times a partir de 2 licenças.`,
    },
  ]

  const handleFaqCardClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="flex flex-col items-start gap-10 self-stretch">
      <div className="flex flex-col items-start self-stretch">
        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            number={faq.number}
            question={faq.question}
            answer={faq.answer}
            link={faq.link}
            isOpen={openIndex === index}
            onClick={() => handleFaqCardClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
