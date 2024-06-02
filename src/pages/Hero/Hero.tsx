import { ButtonLink } from '../../components/ButtonLink'
import HeroImage from '../../assets/img/heroTablet.png'

export function Hero() {
  return (
    <div className="flex max-w-[1256px] md:items-start md:justify-between md:flex-row flex-col pt-10 pb-20 px-5 gap-6 justify-center items-center bg-gradient-to-t from-[#E0FAF3] to-[#FFF]">
      <div className="flex flex-col justify-center md:items-start items-center gap-6 self-stretch">
        <header className="text-[#09090A] font-sans text-2xl font-bold">
          Na Volta Eu Compro
        </header>
        <div className="flex flex-col md:items-start items-center gap-4 ">
          <h1 className="text-[#002F27] md:text-start text-center font-medium text-3xl">
            Gerenciando Finanças Pessoais de Forma Inteligente
          </h1>
          <p className="text-[#323238] md:text-start text-center text-base font-normal">
            Gerencie suas finanças de forma eficiente com nosso aplicativo.
            Controle gastos, crie listas de compras, compare preços e organize
            seu orçamento.
          </p>
          <ButtonLink width="md:w-ine w-full" />
        </div>
      </div>
      <div>
        <img
          src={HeroImage}
          alt="Mulher utilizando o aplicativo 'Na Volta Eu Compro'"
          className="w-full h-auto max-w-[596px] md:max-w-[728px] lg:max-w-[480px] xl:max-w-[600px]"
        />
      </div>
    </div>
  )
}
