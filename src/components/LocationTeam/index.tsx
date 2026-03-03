"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";
import classNames from "classnames";
import { Container } from "@/design_system/Container";
import { Typography } from "@/design_system/Typography";
import { Card } from "@/design_system/Card";
import TechStack from "@/components/TechStack";
import styles from "./LocationTeam.module.css";

const Clock = dynamic(() => import("../Clock"), { ssr: false });

export function getTimezoneDifferenceFromCET(): string | ReactNode {
  const now = new Date();

  // Client offset (minutes behind UTC, inverted sign)
  const clientOffset = -now.getTimezoneOffset();

  // Get CET/CEST offset using Intl
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Paris",
    timeZoneName: "shortOffset",
  });

  const parts = formatter.formatToParts(now);
  const offsetPart = parts.find((p) => p.type === "timeZoneName");

  if (!offsetPart) {
    throw new Error("Unable to determine CET offset");
  }

  // Example values: "GMT+1", "GMT+2"
  const match = offsetPart.value.match(/GMT([+-]\d+)/);

  if (!match) {
    throw new Error("Unexpected timezone format");
  }

  const cetOffset = Number(match[1]) * 60;

  const diffMinutes = clientOffset - cetOffset;
  const diffHours = diffMinutes / 60;

  if (diffHours === 0) {
    return <>You are in the same timezone 😀</>;
  }

  const direction = diffHours > 0 ? "ahead of" : "behind";

  return `Your timezone is ${Math.abs(diffHours)} hour(s) ${direction} CET.`;
}

export default function LocationTeam() {
  return (
    <Container className={styles.wrapper}>
      <Card
        cardRadius="lg"
        className={classNames([styles.box, styles.location])}
      >
        <div className={styles.content}>
          <Typography as="h2" variant="h1" className={styles.heading}>
            Location
          </Typography>
          <Typography>
            We are fully remote, based in <b>Europe (CET)</b>.
            <br />
            {getTimezoneDifferenceFromCET()}
          </Typography>
        </div>
        <Clock />
      </Card>
      <Card cardRadius="lg" className={classNames([styles.box, styles.tools])}>
        {/* <CodeIcon className={styles.icon} /> */}
        <div className={styles.content}>
          <Typography as="h2" variant="h1" className={styles.heading}>
            Tools we like
          </Typography>
          <Typography>
            Building exceptional web UIs, <b>frontend</b> is our expertise.
            <br /> We can adopt to similar tech stacks, but we tend to function
            best in <b>next.js/react</b> type of stacks.
          </Typography>
        </div>
        <TechStack />
      </Card>
    </Container>
  );
}
