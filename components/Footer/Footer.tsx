import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <h1 className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo_white.svg"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
                alt="ロゴ"
              ></Image>
            </Link>
          </h1>

          <div className={styles.footerLinks}>
            <ul>
              <li>
                <Link href="about">About Hands-Free Travel</Link>
              </li>
              <li>
                <Link href="/guide">How to Use Hands-Free Travel Counter</Link>
              </li>
              <li>
                <Link href="ai-planner">AI Hands-Free Travel Planner</Link>
              </li>
              <li>
                <Link href="counters">Search Hands-Free Travel Counters</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/contact#faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contact#contact">Contact</Link>
              </li>
              <li>
                <Link href="/terms">Term of Service</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copy}>© 2026 LuggGo!</p>
          <p className={styles.footerBottomNote}>
            This website was created using the "Hands-Free Travel Counter Open
            Data" provided by the Ministry of Land, Infrastructure, Transport
            and Tourism (MLIT).
            (https://www.mlit.go.jp/seisakutokatsu/freight/seisakutokatsu_freight_tk1_000141.html)
          </p>
        </div>
      </div>
    </footer>
  );
}
