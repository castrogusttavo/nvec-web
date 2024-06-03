import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react'

interface ProgressBarProps {
  onPrevClick: () => void
  onNextClick: () => void
  progress: number
}

export function ProgressBar({
  progress,
  onPrevClick,
  onNextClick,
}: ProgressBarProps) {
  return (
    <div className="flex pr-5 justify-between items-center self-stretch">
      <div className="flex items-center gap-4">
        <button
          onClick={onPrevClick}
          className={`flex w-10 h-10 p-2 justify-center items-center rounded-full border border-solid border-[#29292E] ${
            progress === 0 ? 'opacity-50' : 'opacity-100'
          }`}
          disabled={progress === 0}
        >
          <ArrowLeft01Icon color="#FFF" strokeWidth={2} />
        </button>
        <button
          onClick={onNextClick}
          className={`flex w-10 h-10 p-2 justify-center items-center rounded-full border border-solid border-[#29292E] ${
            progress === 100 ? 'opacity-50' : 'opacity-100'
          }`}
          disabled={progress === 100}
        >
          <ArrowRight01Icon color="#FFF" strokeWidth={2} />
        </button>
      </div>

      <div className="w-[177px] h-2 max-w-[333px] border border-solid border-[#29292E] rounded-full overflow-hidden">
        <div
          className="bg-[#FFF] h-full transition-width duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
