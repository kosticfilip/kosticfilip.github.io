import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

type Variant = "default" | "secondary";
type Size = "sm" | "md" | "lg";

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type PolymorphicProps<T extends React.ElementType> = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonOwnProps> & {
    as?: T;
  };

export function Button<T extends React.ElementType = "button">({
  as,
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(styles.base, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
