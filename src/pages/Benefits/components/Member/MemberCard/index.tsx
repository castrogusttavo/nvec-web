/* import Diego from '../../../../assets/img/diego.png' */

interface MemberProps {
  name: string
  role: string
  imageMember: string
  level: string
  course: string
}

export function Member({
  name,
  role,
  imageMember,
  level,
  course,
}: MemberProps) {
  return (
    <div className="bg-[#09090A] bg-no-repeat bg-cover max-w-[400px] rounded-2xl border border-solid border-[#323238]">
      <div className="flex pt-3 pb-4 px-4 flex-col gap-3 mb-2 self-stretch w-[278px]">
        <div className="flex item-center gap-2 self-stretch">
          <span className="text-[#C4C4C4] font-sans font-medium text-xs uppercase">
            {level}
          </span>
        </div>
        <div className="self-stretch">
          <span className="text-[#FFF] text-lg font-medium">{course}</span>
        </div>
        <div className="flex items-center gap-4 self-stretch">
          <img src={imageMember} alt="" />
          <div className="flex flex-col items-start gap-[2px]">
            <span className="text-[#FFF] text-sm font-bold">{name}</span>
            <span className="text-[#8D8D99] text-xs font-normal">{role}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
