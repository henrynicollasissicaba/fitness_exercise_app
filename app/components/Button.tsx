const Button = ({ className, onClick, children }: {
    className?: string
    children: React.ReactNode
    onClick?: () => void
}) => {
  return (
    <button className={`bg-primary-700 hover:bg-primary-600 transition-colors text-white cursor-pointer
    font-bold p-2 rounded ${className}`}
    onClick={onClick}>
        {children}
    </button>
  )
}

export default Button