import React from "react";
import cn from "classnames";
import styles from "./Divider.module.css";

type Orientation = "horizontal" | "vertical";
type Variant = "fullWidth" | "inset" | "middle";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
  variant?: Variant;
  height?: number | string;
  children?: React.ReactNode; // optional label
}

export function Divider({
  orientation = "horizontal",
  variant = "fullWidth",
  className,
  height = "auto",
  children,
  style,
  ...props
}: DividerProps) {
  const hasChildren = Boolean(children);

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        styles.base,
        styles[orientation],
        styles[variant],
        {
          [styles.withChildren]: hasChildren,
        },
        className,
      )}
      style={{ height, ...style }}
      {...props}
    >
      {hasChildren && <span className={styles.label}>{children}</span>}
    </div>
  );
}
