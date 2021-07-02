import React from "react";

interface Props {
  className?: string;
  inView?: boolean;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
}
export const PageItemWrapper: React.FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
