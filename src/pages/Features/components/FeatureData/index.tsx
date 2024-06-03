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
    <div className="flex flex-col mt-10 gap-10">
      <div className="flex flex-col gap-4 items-start self-stretch">
        <h2 className="self-stretch text-[#FFF] font-medium text-xl">
          {title}
        </h2>
        <p className="self-stretch text-[#C4C4C4] font-normal text-sm">
          {description}
        </p>
      </div>
      <Button width="md:w-ine w-full" />
      <img src={imgFeature} alt="" />
    </div>
  )
}
