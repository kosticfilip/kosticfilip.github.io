import React from "react";
import styles from "./Typography.module.css";
import cn from "classnames";

/* ----------------------------- */
/* Variants */
/* ----------------------------- */

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "overline";

/* ----------------------------- */
/* Default mapping */
/* ----------------------------- */

const defaultVariantMapping: Record<Variant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  subtitle1: "p",
  subtitle2: "p",
  caption: "span",
  overline: "span",
};

/* ----------------------------- */
/* Polymorphic Types */
/* ----------------------------- */

type TypographyOwnProps = {
  variant?: Variant;
  gutterBottom?: boolean;
  noWrap?: boolean;
  className?: string;
  scale?: number;
  color?: "primary" | "secondary";
  children?: React.ReactNode;
};

type PolymorphicProps<C extends React.ElementType> = TypographyOwnProps &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TypographyOwnProps> & {
    as?: C;
  };

type TypographyComponent = <C extends React.ElementType = "p">(
  props: PolymorphicProps<C>,
) => React.ReactElement | null;

/* ----------------------------- */
/* Component */
/* ----------------------------- */

export const Typography: TypographyComponent = ({
  variant = "body1",
  as,
  gutterBottom,
  noWrap,
  className,
  scale,
  children,
  style,
  color = "primary",
  ...rest
}) => {
  const Component = as || defaultVariantMapping[variant];

  const classes = cn([
    styles.root,
    styles[variant],
    styles[color],
    gutterBottom && styles.gutterBottom,
    noWrap && styles.noWrap,
    className,
  ]);

  return (
    <Component
      className={classes}
      style={{ ...style, fontSize: `${scale}em` }}
      {...rest}
    >
      {children}
    </Component>
  );
};
