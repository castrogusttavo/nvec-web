import { useState } from 'react'
import { FaqCard } from '../FaqCard'

export function FaqContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqData = [
    {
      number: 1,
      question: `Como criar uma lista de compras?`,
      answer: `Para criar uma lista de compras, abra o aplicativo, vá até a seção "Listas" e clique em "Criar Nova Lista". Adicione os itens que deseja comprar e salve a lista.`,
    },
    {
      number: 2,
      question: `Posso compartilhar minhas listas com amigos e familiares?`,
      answer: `Sim, você pode compartilhar suas listas criando comunidades dentro do aplicativo e convidando amigos e familiares para participar!`,
    },
    {
      number: 3,
      question: `Como funciona a comparação de preços?`,
      answer: `O aplicativo permite que você compare o preço da sua lista com os preços de outros usuários na comunidade, ajudando você a encontrar a opção mais baratas.`,
    },
    {
      number: 4,
      question: `O aplicativo envia notificações e lembretes?`,
      answer: `Sim, o aplicativo envia notificações para lembrar de listas pendentes e outras notificações importantes, como promoções e atualizações.
      `,
    },
    {
      number: 5,
      question: `Posso estabelecer um limite de gastos nas minhas listas?`,
      answer: `Sim, você pode definir limites de compra nas suas listas para ajudar a controlar seus gastos e evitar despesas excessivas.`,
    },
    {
      number: 6,
      question: `O aplicativo é gratuito?`,
      answer: `Sim, o aplicativo oferece uma versão gratuita com todas as funcionalidades essenciais para gerenciar suas finanças pessoais. Além disso, temos planos de assinatura que oferecem recursos adicionais e benefícios exclusivos.`,
    },
  ]

  const handleFaqCardClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="flex flex-col items-start gap-10 self-stretch max-w-[698px]">
      <div className="flex flex-col items-start self-stretch max-w-[698px]">
        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            number={faq.number}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleFaqCardClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
