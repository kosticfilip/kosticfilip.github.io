import { Container } from "@/design_system/Container";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.footer}>
          <Image
            src="/frameclear-logo-white.svg"
            alt="Frameclear logo - white"
            className={styles.logo}
            width={140}
            height={30}
          />
          <div className={styles.info}>
            <div>©frameclear.dev</div>
            <div>All rights reserved</div>
            <div>{new Date().getFullYear()}</div>
            <div>Novi Sad, Serbia 🇷🇸</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
