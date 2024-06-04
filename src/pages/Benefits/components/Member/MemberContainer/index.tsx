import { useRef, useState, useEffect } from 'react'
import { Member } from '../MemberCard'
import { ProgressBar } from '../../ProgressBar'

export function MemberContainer() {
  const members = [
    {
      name: 'Álvaro Oliveira',
      role: 'Co-fundador',
      image: '/src/assets/img/diego.png',
      course: 'Analista de Qualidade',
    },
    {
      name: 'Gabrielly Machado',
      role: 'Co-fundador',
      image: '/src/assets/img/diego.png',
      course: 'Desenvolvedora Front-end',
      linkGitHub: 'https://github.com/Gabrielly-Souza123',
      linkLinkedIn:
        'https://www.linkedin.com/in/gabrielly-s-machado-b47b80211/',
    },
    {
      name: 'Gusttavo Castro',
      role: 'Co-fundador',
      image: '/src/assets/img/diego.png',
      course: 'Back-end & Designer',
      linkGitHub: 'https://github.com/castrogusttavo',
      linkLinkedIn: 'https://linkedin.com/in/castrogusttavo',
    },
    {
      name: 'Jennifer Gama',
      role: 'Co-fundador',
      image: '/src/assets/img/diego.png',
      course: 'Desenvolvedora Full-stack',
      linkGitHub: 'https://github.com/JenGama',
      linkLinkedIn: 'https://www.linkedin.com/in/jennifer-gama-21893b270/',
    },
    {
      name: 'Sofia Rocha',
      role: 'Co-fundador',
      image: '/src/assets/img/diego.png',
      course: 'Desenvolvedora Front-end',
      linkGitHub: 'https://github.com/TufiaDev',
      linkLinkedIn:
        'https://www.linkedin.com/in/sofia-rodrigues-rocha-430159265/',
    },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current && containerRef.current.firstChild) {
      const firstCard = containerRef.current.firstChild as HTMLElement
      setCardWidth(firstCard.offsetWidth - 115) // Ajuste conforme necessário
    }
  }, [])

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft
      const maxScroll =
        containerRef.current.scrollWidth - containerRef.current.clientWidth
      const newProgress = (scrollPosition / maxScroll) * 100
      setProgress(newProgress)
    }
  }

  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      })
    }
  }

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="flex flex-col items-start gap-10 self-stretch">
      <div
        className="max-w-[390px] sm:max-w-none overflow-x-auto whitespace-nowrap scrollbar-hide"
        ref={containerRef}
        onScroll={handleScroll}
      >
        <div className="flex justify-start items-start gap-4 self-stretch sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1078px] 2xl:max-w-[1310px]">
          {members.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              role={member.role}
              imageMember={member.image}
              course={member.course}
              linkGitHub={member.linkGitHub}
              linkLinkedIn={member.linkLinkedIn}
            />
          ))}
        </div>
      </div>
      <ProgressBar
        progress={progress}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </div>
  )
}
