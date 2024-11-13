const Button = ({ className, onClick, children }: {
    className?: string
    children: React.ReactNode
    onClick?: () => void
}) => {
  return (
    <button className={`bg-blue-700 hover:bg-blue-500 transition-colors text-white
    font-bold p-2 rounded ${className}`}
    onClick={onClick}>
        {children}
    </button>
  )
}

export default Button