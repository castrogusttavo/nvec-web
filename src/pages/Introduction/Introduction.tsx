import Tela from '../../assets/img/tela.png'

export function Introduction() {
  return (
    <div className="flex flex-col pt-20 gap-6 xl:w-full xl:px-[91px]">
      <div className="flex py-0 px-5 flex-col justify-center items-center gap-4 md:px-[95px] lg:flex-row lg:px-0 lg:justify-between xl:w-full">
        <h2 className="text-[#FFF] text-center text-2xl px-5 font-medium lg:text-start lg:text-4xl">
          Engajar, capacitar e acompanhar:{' '}
          <span className="text-[#29E0A9]">tudo em um só lugar!</span>
        </h2>
        <p className="text-[#C4C4C4] px-4 text-center text-base font-normal lg:text-start lg:text-lg xl:pl-10 xl:max-w-[600px]">
          Uma plataforma completa de aprendizado contínuo em programação para o
          seu time e a solução perfeita pra você acompanhar seu progresso!
        </p>
      </div>
      <div className="pl-5 pt-6 lg:pt-20">
        <img src={Tela} alt="Tela Home do aplicativo" className="w-full " />
      </div>
    </div>
  )
}
