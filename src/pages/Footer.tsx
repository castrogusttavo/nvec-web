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
    <footer className="flex pt-[1px] flex-col items-center self-stretch lg:justify-between border-t border-solid border-[#323238]">
      <div className="flex py-8 px-[53.5px] flex-col text-center justify-center items-center gap-10 lg:flex-row lg:justify-between lg:px-6 lg:w-full xl:px-0 max-w-[1256px]">
        <header className="text-[#F7F7FA] font-logo text-2xl font-black">
          Na Volta Eu Compro
        </header>
        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-6">
          <li className="flex flex-col items-start">
            <a className="text-[#E1E1E6] text-base font-normal hover:opacity-70 cursor-pointer">
              Direitos Autorais
            </a>
          </li>
          <li className="flex flex-col items-start">
            <a className="text-[#E1E1E6] text-base font-normal hover:opacity-70 cursor-pointer">
              Termos de uso
            </a>
          </li>
          <li className="flex flex-col items-start">
            <a className="text-[#E1E1E6] text-base font-normal hover:opacity-70 cursor-pointer">
              Políticas de privacidade
            </a>
          </li>
        </div>
        {isVisible && (
          <button
            className="flex w-12 h-12 py-5 px-[18px] justify-center items-center rounded-md bg-[#121214]"
            onClick={scrollToTop}
          >
            <ArrowUp01Icon size={12} color="#E1E1E6" strokeWidth={4} />
          </button>
        )}
      </div>
      <div className="h-1 self-stretch bg-gradient-to-r from-[#29E0A9B2] to-[#5F75F2B2] to-[#9956F6B2] to-[#E254FFB2]"></div>
    </footer>
  )
}
