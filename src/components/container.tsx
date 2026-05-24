import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl container mx-auto
       ${className}`}
    >
      {children}
    </div>
  );
}
