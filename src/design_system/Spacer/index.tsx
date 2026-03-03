import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Spacer.module.css";

type Size = "small" | "medium" | "large";

type SpacerProps = {
  children?: ReactNode;
  size?: Size;
  className?: string;
};

export default function Spacer({
  size = "medium",
  className,
  children,
}: SpacerProps) {
  return (
    <div className={cn(styles.base, styles[size], className)}>{children}</div>
  );
}
