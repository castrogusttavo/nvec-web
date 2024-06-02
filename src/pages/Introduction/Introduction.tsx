import Tela from '../../assets/img/tela.png'

export function Introduction() {
  return (
    <div className="flex flex-col pt-20 gap-6">
      <div className="flex max-w-[1256px] py-0 px-5 flex-col justify-center items-center gap-4">
        <h1 className="text-[#FFF] text-center text-2xl px-5 font-medium">
          Engajar, capacitar e acompanhar:{' '}
          <span className="text-[#29E0A9]">tudo em um só lugar!</span>
        </h1>
        <p className="text-[#C4C4C4] px-4 text-center text-base font-normal">
          Uma plataforma completa de aprendizado contínuo em programação para o
          seu time e a solução perfeita pra você acompanhar seu progresso!
        </p>
      </div>
      <div className="pl-5">
        <img src={Tela} alt="Tela Home do aplicativo" className="w-full " />
      </div>
    </div>
  )
}
