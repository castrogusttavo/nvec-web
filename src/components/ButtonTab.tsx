interface ButtonTabProps {
  isActive: boolean;
}

export function ButtonTab ({ isActive }: ButtonTabProps) {
  return (
    <button className="flex py-3.5 px-5 items-start bg-[]">
      <span className="uppercase">
        dashboard
      </span>
    </button>
  )
}