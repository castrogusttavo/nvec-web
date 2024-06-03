import { ArrowUp01Icon } from 'hugeicons-react'
import { useState, useEffect } from 'react'

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="flex pt-[1px] flex-col items-center self-stretch">
      <div className="flex max-w-[1256px] py-8 px-[53.5px] flex-col text-center justify-center items-center gap-10">
        <header className="text-[#F7F7FA] font-sans text-2xl font-bold">
          Na Volta Eu Compro
        </header>
        <div className="flex flex-col items-center gap-1">
          <li className="flex flex-col items-start">
            <a className="text-[#E1E1E6] text-base font-normal">
              Direitos Autorais
            </a>
          </li>
          <li className="flex flex-col items-start">
            <a className="text-[#E1E1E6] text-base font-normal">
              Termos de uso
            </a>
          </li>
          <li className="flex flex-col items-start">
            <a className="text-[#E1E1E6] text-base font-normal">
              Políticas de privacidade
            </a>
          </li>
        </div>
        <button
          className="flex w-12 h-12 py-5 px-[18px] justify-center items-center rounded-md bg-[#121214]"
          onClick={scrollToTop}
        >
          <ArrowUp01Icon size={12} color="#E1E1E6" strokeWidth={4} />
        </button>
      </div>
      <div className="h-1 self-stretch bg-gradient-to-r from-[#29E0A9B2] to-[#5F75F2B2] to-[#9956F6B2] to-[#E254FFB2]"></div>
    </footer>
  )
}
