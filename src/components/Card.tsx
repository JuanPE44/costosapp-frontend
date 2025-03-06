interface Props {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: Props) {
  return (
    <div
      className={`rounded-2xl bg-neutral-800 px-3 py-1 text-white h-full ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
