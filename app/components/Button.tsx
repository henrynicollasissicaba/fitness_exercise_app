import { twMerge } from "tailwind-merge";

const Button = ({
  className,
  onClick,
  children,
  disabled,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={twMerge(
        "bg-primary-700 hover:bg-primary-600 transition-colors text-white cursor-pointer font-bold px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
