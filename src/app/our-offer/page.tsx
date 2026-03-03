import Image from "next/image";
import { Container } from "@/design_system/Container";
import { Typography } from "@/design_system/Typography";
import styles from "./page.module.css";
import { Card } from "@/design_system/Card";

export default function OurOfferPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.sectionHero}>
        <Container>
          <div className={styles.heroGrid}>
            <div>
              <Typography as="h1" variant="h1">
                Team Augmentation for Modern Web Frontend
              </Typography>

              <Typography as="p" style={{ fontSize: "1.3em" }}>
                We operate as a focused frontend unit embedded directly into
                your product team. Clear communication, high standards, and
                production-ready delivery from day one.
              </Typography>

              <div className={styles.priceHighlight}>
                <Typography as="h2" variant="h3">
                  €90,000 / year (B2B contract)
                </Typography>
                <Typography as="p">
                  Fixed yearly gross cost. Full-time allocation. No hidden fees.
                  Direct communication with senior frontend lead.
                </Typography>
              </div>
            </div>

            <div className={styles.heroMedia}>
              <Image
                src="/images/our-offer.svg"
                alt="Frontend team illustration"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Value Sections in Cards */}
      <section className={styles.section}>
        <Container>
          <Typography as="h2" variant="h2">
            What You Get
          </Typography>

          <div className={styles.cardGrid}>
            <Card>
              <Typography as="h3" variant="h4" className={styles.cardTitle}>
                Core Setup
              </Typography>
              <ul className={styles.cardList}>
                <li>Full-time dedicated frontend capacity</li>
                <li>3-person AI-augmented unit</li>
                <li>Senior frontend leadership (15+ years)</li>
              </ul>
            </Card>

            <Card>
              <Typography as="h3" variant="h4" className={styles.cardTitle}>
                Technical Focus
              </Typography>
              <ul className={styles.cardList}>
                <li>Next.js (App Router, SSR, static export)</li>
                <li>React 19+</li>
                <li>TypeScript-first architecture</li>
              </ul>
            </Card>

            <Card>
              <Typography as="h3" variant="h4" className={styles.cardTitle}>
                Delivery Standards
              </Typography>
              <ul className={styles.cardList}>
                <li>Specification-first development</li>
                <li>Component-driven architecture</li>
                <li>Automated testing strategy</li>
              </ul>
            </Card>

            <Card>
              <Typography as="h3" variant="h4" className={styles.cardTitle}>
                Deliverables
              </Typography>
              <ul className={styles.cardList}>
                <li>Custom Design System</li>
                <li>Storybook & documentation</li>
                <li>Reusable component library</li>
                <li>Production-ready CI integration</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
