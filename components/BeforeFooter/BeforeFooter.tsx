import styles from "./BeforeFooter.module.css";
import Link from "next/link";
import Image from "next/image";

export default function BeforeFooter() {
  return (
    <>
      <div className={styles.beforeFooter}>
        <div className={styles.surfing}>
          <Image
            src="/images/img_surfing.png"
            sizes="300px 189px"
            fill
            alt=""
          />
        </div>
        <div className={styles.wave}></div>
        <div className={styles.main}>
          <div className="container">
            <div className={styles.titleArea}>
              <span className={styles.titleDeco}>Let's</span>
              <h2 className={styles.title}>
                Start&nbsp;
                <span>Hands-Free Travel</span>!
              </h2>
            </div>
            <div className={styles.linkArea}>
              <div className={styles.bigLink}>
                <h3> AI Hands-Free Travel Planner</h3>
                <div className={styles.bigLinkFlex}>
                  <p>
                    Use the AI Hands-Free Travel Planner to find the best
                    Hands-Free Travel counter for your trip.
                  </p>
                  <Link href="/ai-planner" className={styles.link}>
                    →
                  </Link>
                </div>
              </div>
              <div className={styles.smallLink}>
                <span className={styles.smallLinkDeco}>OR</span>
                <div className={styles.smallLinkFlex}>
                  <h3>Search Hands-Free Travel Counters</h3>
                  <Link href="/counters" className={styles.link}>
                    →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
