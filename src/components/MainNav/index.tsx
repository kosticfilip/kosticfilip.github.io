"use client";

import { FC } from "react";
import Image from "next/image";
import styles from "./MainNav.module.css";
import { Container } from "@/design_system/Container";
import Link from "next/link";
import { Typography } from "@/design_system/Typography";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Button } from "@/design_system/Button";

const MainNav: FC = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Container>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/frameclear-logo.svg"
            alt="Next.js logo"
            width={200}
            height={40}
            priority
          />
        </Link>

        <Typography as="div" variant="body2" className={styles.navLinks}>
          <Link
            href="/our-offer"
            className={classNames({
              [styles.isActive]: pathname === "/our-offer",
            })}
          >
            Our Offer
          </Link>
          <Link href="/#contact">Contact Us</Link>
          <Button
            as="a"
            variant="secondary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/filip-frameclear/30min"
          >
            Book a Call
          </Button>
        </Typography>
      </nav>
    </Container>
  );
};

export default MainNav;
