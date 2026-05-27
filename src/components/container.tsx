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
      className={`max-w-2xl container mx-auto px-4 sm:px-6
       ${className}`}
    >
      {children}
    </div>
  );
}
