import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { ThingsWeNotice } from "@/components/ThingsWeNotice";
import { HowWeWork } from "@/components/HowWeWork";
import LocationTeam from "@/components/LocationTeam";

import { Container } from "@/design_system/Container";
import { Typography } from "@/design_system/Typography";
import { Card } from "@/design_system/Card";
import Spacer from "@/design_system/Spacer";
import { Button } from "@/design_system/Button";

export default function Home() {
  return (
    <main className={styles.page}>
      <Container className={styles.intro}>
        <div>
          <Typography as="h1" variant="h1" className={styles.mainHeading}>
            Senior web engineering.
            <br /> Embedded into your team.
          </Typography>
          <Typography as="p" color="secondary" scale={1.3}>
            We help product teams build and maintain high-quality web
            applications by integrating directly into existing engineering teams
            — with clear communication, strong web standards, and a proactive
            mindset.
          </Typography>
          <Typography as="p" scale={1.3}>
            No hand-offs. No agency friction. Just solid engineering.
          </Typography>
          <Link href="/our-offer" style={{ display: "inline-flex" }}>
            <Button as="span">See Offer & Pricing</Button>
          </Link>
        </div>

        <Image
          src="/images/work-illustration.svg"
          className={styles.workIllustration}
          width={250}
          height={250}
          alt="Web Services"
        />
      </Container>

      <Spacer />

      {/* <Container>
        <Card className={styles.section}>
          <div>
            <Typography as="h2" variant="h1">
              What we do
            </Typography>
            <Typography as="p">
              Frameclear works as an extension of your engineering team.
              <br /> We join ongoing projects, adapt to your workflows, and
              contribute as a senior individual contributor — focusing on
              delivery, maintainability, and long-term stability.
            </Typography>
            <Button>See Pricing</Button>
          </div>
          <Image
            src="/images/work-illustration.png"
            className={styles.workIllustration}
            width={250}
            height={250}
            alt="Web Services"
          />
        </Card>
      </Container> */}

      <Spacer />

      <HowWeWork />

      <Spacer />

      <ThingsWeNotice />

      <Spacer />

      <LocationTeam />

      <Spacer />

      <Container style={{ textAlign: "center" }}>
        <div style={{ margin: "4rem auto", maxWidth: "80%" }}>
          <Typography as="h2" variant="h1">
            What sets us apart?
          </Typography>
          <Typography scale={1.3} color="secondary">
            We’ve refined how we work through years of shipping real products.
            Our processes are lean, our standards are high, and we use AI
            deliberately to remove friction and move faster — without
            compromising quality.
          </Typography>
          <Typography scale={1.5}>
            Small team. Sharp decisions. Optimized execution.
          </Typography>
        </div>
      </Container>

      <Spacer />

      <Container id="contact">
        <Card cardRadius="lg" className={styles.section}>
          <div>
            <Typography as="h2" variant="h1">
              Contact Us
            </Typography>
            <Typography scale={1.4}>
              Need a dev partner? Let’s talk — schedule a call with Filip, our
              lead
            </Typography>

            <Typography as="a" scale={1.4} href="mailto:hi@frameclear.dev">
              hi@frameclear.dev
            </Typography>

            <Typography as="p">
              Available for hire! — <i>18.02.2026</i>
            </Typography>
          </div>
          <Image
            src="/images/contact-illustration.svg"
            className={styles.workIllustration}
            width={250}
            height={250}
            alt="Contact"
          />
        </Card>
      </Container>
    </main>
  );
}
