/* import Diego from '../../../../assets/img/diego.png' */
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons'

interface MemberProps {
  name: string
  role: string
  imageMember: string
  course: string
  linkGitHub?: string
  linkLinkedIn?: string
}

export function Member({
  name,
  role,
  imageMember,
  course,
  linkGitHub,
  linkLinkedIn,
}: MemberProps) {
  return (
    <div className="bg-[#09090A] bg-no-repeat bg-cover max-w-[400px] rounded-2xl border border-solid border-[#323238]">
      <div className="flex pt-3 pb-4 px-4 flex-col gap-3 mb-2 self-stretch w-[278px]">
        <div className="flex items-center gap-2 self-stretch">
          <span className="text-[#C4C4C4] font-sans uppercase flex gap-2">
            {linkGitHub && (
              <GitHubLogoIcon
                className="hover:text-[#FFF]"
                onClick={() => window.open(linkGitHub)}
              />
            )}
            {linkLinkedIn && (
              <LinkedInLogoIcon
                className="hover:text-[#FFF]"
                onClick={() => window.open(linkLinkedIn)}
              />
            )}
            {!linkGitHub && !linkLinkedIn && (
              <DotFilledIcon className="hover:text-[#FFF]" />
            )}
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
