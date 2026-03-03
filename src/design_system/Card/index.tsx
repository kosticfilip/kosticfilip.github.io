import { ReactNode } from "react";
import cn from "classnames";
import styles from "./Card.module.css";

type CardVariant = "default" | "solid";
type CardRadius = "none" | "sm" | "md" | "lg";

interface CardProps {
  children: ReactNode;
  className?: string;
  cardRadius?: CardRadius;
  variant?: CardVariant;
}

export function Card({
  children,
  className,
  variant = "default",
  cardRadius = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        styles.card,
        styles[variant],
        styles[`radius-${cardRadius}`],
        className,
      )}
    >
      {children}
    </div>
  );
}
