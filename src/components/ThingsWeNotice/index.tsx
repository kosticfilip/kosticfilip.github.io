import { Card } from "@/design_system/Card";
import styles from "./ThingsWeNotice.module.css";
import { Container } from "@/design_system/Container";
import { Typography } from "@/design_system/Typography";

import {
  Component1Icon,
  LightningBoltIcon,
  AccessibilityIcon,
  CheckCircledIcon,
  RocketIcon,
  PieChartIcon,
} from "@radix-ui/react-icons";

const items = [
  {
    title: "Design System",
    description:
      "Visual consistency across your design team, codebase and users.",
    Icon: Component1Icon,
  },
  {
    title: "Performance",
    description: "Lighthouse score and real-world metrics. Fast by default.",
    Icon: LightningBoltIcon,
  },
  {
    title: "A11Y",
    description: "Accessibility isn’t a feature. It’s required.",
    Icon: AccessibilityIcon,
  },
  {
    title: "Test Driven Development",
    description: "Confidence through tests. Refactor without fear.",
    Icon: CheckCircledIcon,
  },
  {
    title: "CI & CD",
    description: "Build and deploy through code. No manual pipelines.",
    Icon: RocketIcon,
  },
  {
    title: "Analytics",
    description: "Infrastructure that scales. Clean, observable, resilient.",
    Icon: PieChartIcon,
  },
];

export function ThingsWeNotice() {
  return (
    <Container variant="centered" className={styles.section}>
      <div className={styles.header}>
        <Typography as="h2" variant="h1" style={{ marginBottom: "0.1em" }}>
          Things we notice
        </Typography>

        <Typography as="p" scale={1.3} className={styles.subtitle}>
          Play by the book. Exceed the limits.
        </Typography>
      </div>

      <div className={styles.grid}>
        {items.map(({ title, description, Icon }) => (
          <Card key={title} cardRadius="none" className={styles.card}>
            <div className={styles.iconBox}>
              <Icon className={styles.icon} />
            </div>
            <Typography as="h3" variant="h3">
              {title}
            </Typography>
            <Typography as="p">{description}</Typography>
          </Card>
        ))}
      </div>
    </Container>
  );
}
