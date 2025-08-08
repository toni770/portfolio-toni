const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={`border border-black p-2 px-15 rounded-4xl flex items-center justify-center ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
