interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
  className = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`max-w-fit px-4 py-2 rounded-lg bg-primary text-primary-contrast focus-visible:ring-primary ${className} ${disabled ? '' : 'hover:opacity-90'} disabled:cursor-default disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
