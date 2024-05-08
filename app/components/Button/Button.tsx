interface AboutButton {
  children: string;
  className?: string;
}

export const Button = ({ children, className }: AboutButton) => {
  return <button className={className}>{children}</button>;
};
