const Button = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={`cursor-pointer border border-black p-2 px-15 rounded-4xl flex items-center justify-center ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
