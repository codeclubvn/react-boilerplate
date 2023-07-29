export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startDecorator?: React.ReactNode
  endDecorator?: React.ReactNode
  loading?: boolean
}

export const Button = (props: ButtonProps) => {
  const { startDecorator, endDecorator, children } = props

  return (
    <button className="inline-flex flex-row content-center items-center gap-2 rounded-lg bg-primary-700 px-3 py-2 align-top text-sm text-white">
      {startDecorator && <span className="btn-icon">{startDecorator}</span>}
      {children}
      {endDecorator && <span className="btn-icon">{endDecorator}</span>}
    </button>
  )
}
