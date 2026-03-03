import { useEffect, useRef, useState } from "react";

import styles from "./TechStack.module.css";

type TechItem = {
  name: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const NextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" aria-hidden {...props}>
    <circle cx="64" cy="64" r="64" fill="currentColor" />
    <path d="M35 96V32h12l38 49V32h8v64h-10L43 45v51z" fill="#fff" />
  </svg>
);

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 841.9 595.3" aria-hidden {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="40">
      <ellipse cx="420.9" cy="296.5" rx="352" ry="144" />
      <ellipse
        cx="420.9"
        cy="296.5"
        rx="352"
        ry="144"
        transform="rotate(60 420.9 296.5)"
      />
      <ellipse
        cx="420.9"
        cy="296.5"
        rx="352"
        ry="144"
        transform="rotate(120 420.9 296.5)"
      />
    </g>
    <circle cx="420.9" cy="296.5" r="55" fill="currentColor" />
  </svg>
);

const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" aria-hidden {...props}>
    <rect width="128" height="128" rx="16" fill="currentColor" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="64"
      fontWeight="700"
      fill="#fff"
      fontFamily="system-ui, sans-serif"
    >
      TS
    </text>
  </svg>
);

const CssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" aria-hidden {...props}>
    <polygon fill="currentColor" points="19,3 109,3 101,112 64,125 27,112" />
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fontSize="48"
      fontWeight="700"
      fill="#fff"
      fontFamily="system-ui, sans-serif"
    >
      CSS
    </text>
  </svg>
);

const TanstackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" aria-hidden {...props}>
    <circle cx="40" cy="64" r="28" fill="currentColor" opacity="0.9" />
    <circle cx="88" cy="64" r="28" fill="currentColor" opacity="0.6" />
  </svg>
);

const items: TechItem[] = [
  { name: "next", label: "Next.js", Icon: NextIcon },
  { name: "react", label: "React", Icon: ReactIcon },
  { name: "typescript", label: "TypeScript", Icon: TypeScriptIcon },
  { name: "css", label: "CSS", Icon: CssIcon },
  { name: "tanstack", label: "TanStack", Icon: TanstackIcon },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !trackRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const contentWidth = trackRef.current.scrollWidth;

      setIsOverflowing(contentWidth > containerWidth);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", checkOverflow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const content = isOverflowing ? [...items, ...items] : items;

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${
        isOverflowing ? styles.overflowing : ""
      }`}
    >
      <div ref={trackRef} className={styles.track}>
        {content.map(({ name, label, Icon }, index) => (
          <div key={`${name}-${index}`} className={styles.card}>
            <div className={styles.icon}>
              <Icon />
            </div>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
