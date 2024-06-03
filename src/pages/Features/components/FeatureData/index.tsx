import { Button } from '../../../../components/Button'

interface FeatureDataProps {
  title: string
  description: string
  imgFeature: string
}

export function FeatureData({
  title,
  description,
  imgFeature,
}: FeatureDataProps) {
  return (
    <div className="flex flex-col mt-10 gap-10 lg:flex-row xl:max-w-[1216px] lg:justify-between lg:items-center">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 items-start self-stretch lg:max-w-[324px] xl:max-w-[517px]">
          <h2 className="self-stretch text-[#FFF] font-medium text-xl md:pr-[400px] lg:text-3xl lg:pr-0">
            {title}
          </h2>
          <p className="self-stretch text-[#C4C4C4] font-normal text-sm lg:text-base lg:pr-0">
            {description}
          </p>
        </div>
        <Button />
      </div>
      <img src={imgFeature} alt="" className="w-[592px] xl:w-[]" />
    </div>
  )
}
