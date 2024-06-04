import { ButtonLink } from '../../components/ButtonLink'
import HeroImageSmall from '../../assets/img/heroTablet.png'

export function Hero() {
  return (
    <div className="flex md:items-start md:justify-between md:flex-row flex-col pt-10 pb-20 px-5 gap-6 justify-center items-center bg-gradient-to-t from-[#E0FAF3] to-[#FFF] xl:items-center xl:justify-center xl:w-full xl:px-[91px]">
      <div className="lg:flex xl:items-center lg:justify-between lg:w-full max-w-[1256px]">
        <div className="flex flex-col justify-center sm:items-start items-center gap-6 self-stretch md:items-center lg:items-start lg:max-w-[492px] xl:max-w-[569px]">
          <header className="text-[#09090A] text-2xl font-black font-logo">
            Na Volta Eu Compro
          </header>
          <div className="flex flex-col lg:items-start items-center gap-4 ">
            <h2 className="text-[#002F27] sm:text-start text-center font-medium text-3xl md:text-center lg:text-start lg:text-5xl lg:w-[473px]">
              Gerenciando Finanças Pessoais de Forma Inteligente
            </h2>
            <p className="text-[#323238] sm:text-start md:text-center text-center text-base font-normal lg:text-start lg:text-lg">
              Gerencie suas finanças pessoais de forma inteligente e eficiente.
              Com o nosso aplicativo, você terá o controle total dos seus
              gastos, facilitando a criação de listas de compras, comparações de
              preços e organização financeira. Descubra um novo jeito de
              economizar e planejar suas finanças.
            </p>
            <ButtonLink />
          </div>
        </div>
        <div className="mt-6">
          <img
            src={HeroImageSmall}
            alt="Mulher utilizando o aplicativo 'Na Volta Eu Compro'"
            className="w-full h-auto max-w-[596px] md:max-w-[728px] lg:max-w-[480px] xl:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  )
}
