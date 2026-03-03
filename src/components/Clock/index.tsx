"use client";

import { useEffect, useState } from "react";
import { Card } from "@/design_system/Card"; // adjust path
import styles from "./Clock.module.css";

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export default function Clock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <TimeUnit value={hours} />
      </Card>

      <span className={styles.separator}>:</span>

      <Card className={styles.card}>
        <TimeUnit value={minutes} />
      </Card>

      <span className={styles.separator}>:</span>

      <Card className={styles.card}>
        <TimeUnit value={seconds} />
      </Card>
    </div>
  );
}

function TimeUnit({ value }: { value: string }) {
  return <div className={styles.time}>{value}</div>;
}
