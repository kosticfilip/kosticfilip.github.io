import styles from "./HowWeWork.module.css";
import { Container } from "@/design_system/Container";
import { Typography } from "@/design_system/Typography";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export function HowWeWork() {
  return (
    <Container variant="centered" className={styles.section}>
      <div className={styles.grid}>
        {/* Column 1 */}
        <div className={styles.column}>
          <div className={styles.content}>
            <Typography as="h2" variant="h2" className={styles.heading}>
              How we work
            </Typography>

            <Typography as="p">
              We optimize for low friction and high trust.
            </Typography>

            <ul className={styles.list}>
              <li>
                <CheckCircledIcon /> We communicate clearly and proactively
              </li>
              <li>
                <CheckCircledIcon />
                We surface risks early instead of hiding them
              </li>
              <li>
                <CheckCircledIcon />
                We document decisions when it matters
              </li>
              <li>
                <CheckCircledIcon />
                We care about readability, maintainability, and standards
              </li>
            </ul>
          </div>

          <div className={styles.numberDecoration}>01</div>
        </div>

        {/* Column 2 */}
        <div className={styles.column}>
          <div className={styles.content}>
            <Typography as="h2" variant="h2" className={styles.heading}>
              Engineering principles
            </Typography>

            <Typography as="p">
              Calm, standards-driven engineering.
              <br />
              <strong> Frameclear prioritizes:</strong>
            </Typography>

            <ul className={styles.list}>
              <li>
                <CheckCircledIcon />
                Web standards over unnecessary abstractions
              </li>
              <li>
                <CheckCircledIcon />
                Clear communication. Predictable delivery.
              </li>
              <li>
                <CheckCircledIcon />
                Code that the next engineer can understand
              </li>
              <li>
                <CheckCircledIcon />
                Stability in production environments
              </li>
            </ul>
          </div>
          <div className={styles.numberDecoration}>02</div>
        </div>

        {/* Column 3 */}
        <div className={styles.column}>
          <div className={styles.content}>
            <Typography as="h2" variant="h2" className={styles.heading}>
              Who this is for?
            </Typography>

            <Typography as="p">Teams that appreciate excellence</Typography>

            <ul className={styles.list}>
              <li>
                <CheckCircledIcon />
                Need senior frontend or full-stack capacity without hiring
                full-time
              </li>
              <li>
                <CheckCircledIcon />
                Want someone who can onboard quickly and work independently
              </li>
              <li>
                <CheckCircledIcon />
                Value communication and ownership
              </li>
              <li>
                <CheckCircledIcon />
                Prefer long-term, stable collaboration over short gigs
              </li>
            </ul>
          </div>

          <div className={styles.numberDecoration}>03</div>
        </div>
      </div>
    </Container>
  );
}
