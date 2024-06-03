import { ButtonLink } from '../../components/ButtonLink'
import HeroImage from '../../assets/img/heroTablet.png'

export function Hero() {
  return (
    <div className="flex md:items-start md:justify-between md:flex-row flex-col pt-10 pb-20 px-5 gap-6 justify-center items-center bg-gradient-to-t from-[#E0FAF3] to-[#FFF] xl:items-center xl:justify-between xl:w-full xl:px-[91px]">
      <div className="lg:flex xl:items-center lg:justify-between lg:w-full">
        <div className="flex flex-col justify-center sm:items-start items-center gap-6 self-stretch md:items-center lg:items-start lg:max-w-[492px] xl:max-w-[608px]">
          <header className="text-[#09090A] font-sans text-2xl font-bold">
            Na Volta Eu Compro
          </header>
          <div className="flex flex-col lg:items-start items-center gap-4 ">
            <h2 className="text-[#002F27] sm:text-start text-center font-medium text-3xl md:text-center lg:text-start lg:text-5xl">
              Capacite seu time de tecnologia e leve sua empresa para o próximo
              nível
            </h2>
            <p className="text-[#323238] sm:text-start md:text-center text-center text-base font-normal lg:text-start lg:text-lg">
              Agora você RH ou Tech Lead gerencia o aprendizado e acessos de
              forma simples e fácil, enquanto seu time se desenvolve com
              conteúdos práticos e atualizados em nossa plataforma.
            </p>
            <ButtonLink />
          </div>
        </div>
        <div className="mt-6 lg:w-[480px] lg:max-w-[480px] xl:max-w-[600px]">
          <img
            src={HeroImage}
            alt="Mulher utilizando o aplicativo 'Na Volta Eu Compro'"
            className="w-full h-auto max-w-[596px] md:max-w-[728px] lg:max-w-[480px] xl:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  )
}
