import { ComponentPropsWithoutRef } from "react";
import cn from "classnames";
import styles from "./Container.module.css";

type ContainerVariant = "centered" | "full-width";

interface ContainerProps extends ComponentPropsWithoutRef<"section"> {
  variant?: ContainerVariant;
}

export function Container({
  children,
  variant = "centered",
  className,
  ...rest
}: ContainerProps) {
  return (
    <section
      className={cn(
        styles.base,
        {
          [styles.centered]: variant === "centered",
          [styles.fullWidth]: variant === "full-width",
        },
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
