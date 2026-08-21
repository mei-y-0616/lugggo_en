import PageNav from "@/components/PageNav/PageNav";
import styles from "./page.module.css";
import PageTitle from "@/components/PageTitle/PageTitle";
import Image from "next/image";
import SectTitle from "@/components/SectTitle/SectTitle";
import LinkButton from "@/components/LinkButton/LinkButton";
import type {links} from "@/types/pageLink"
import BeforeFooter from "@/components/BeforeFooter/BeforeFooter";

export const metadata = {
  title: "About",
};
const links:links = [
  { href: "About", name: "What is Hands-Free Travel?" },
  { href: "Counter", name: "Hands-Free Travel Counters" },
  { href: "Merit", name: "Benefits" },
  { href: "Manner", name: "Luggage Etiquette" },
];

export default function About() {
  return (
    <>
      <PageTitle
        titleEn="About"
        titleJa={
          <span>
            <span style={{ color: "var(--font)" }}>About</span> Hands-Free Travel
          </span>
        }
      />
      <div className="container">
        <div className={styles.AboutFlex}>
          <PageNav linkAry={links} />
          <div className={styles.AboutInner}>
            <section id="About">
              <div className={styles.AboutInnerFlex}>
                <div className={styles.SectionText}>
                  <SectTitle
                    titleEn="About"
                    titleJa={
                      <span>
                        What Is 
                        <span style={{ color: "var(--main)" }}> Hands-Free Travel</span>
                        ?
                      </span>
                    }
                  />
                  <p className={styles.SectionP}>
                    "Hands-Free Travel" is a way of enjoying your trip unburdened — by leaving your heavy luggage at airports, stations, or commercial facilities, or having it delivered to your hotel or to your home overseas.
                    Since fiscal year 2013, Japan's Ministry of Land, Infrastructure, Transport and Tourism (MLIT) has been working to create an environment that makes hands-free travel possible.
                    By traveling hands-free, travelers are freed from heavy luggage, can move around more freely, and can shop more easily.
                    What's more, as travelers adopt hands-free travel and carry fewer belongings, it is also expected to help ease congestion at tourist spots and on public transportation.
                  </p>
                </div>
                <div className={styles.AboutInnerImg}>
                  <Image src="/images/img_about.png" fill alt="" />
                </div>
              </div>
            </section>

            <section id="Counter">
              <div className={styles.CounterInnerFlex}>
                <div className={styles.SectionText}>
                  <SectTitle
                    titleEn="Counter"
                    titleJa={
                      <span>
                        About 
                        <span style={{ color: "var(--main)" }}> Hands-Free Travel Counters
                        </span>
                      </span>
                    }
                  />
                  <p className={styles.CounterInnerP}>
                    A "Hands-Free Travel Counter" is a counter where you can leave or ship your suitcases and souvenirs.
                    These counters are certified by MLIT after meeting several criteria, such as being able to provide guidance in English and clearly displaying their compensation coverage.
                    This logo is the common mark that identifies a location certified as a Hands-Free Travel Counter.
                    You can find detailed instructions for using a Hands-Free Travel Counter below.
                  </p>
                  <LinkButton path="/guide" msg="How to Use" />
                </div>
                <div className={styles.CounterInnerImgWrapper}>
                  <div className={styles.CounterInnerImg}>
                    <Image src="/images/img_about_mark_en.png" fill alt="" />
                  </div>
                  <p className={styles.CounterInnerImgNote}>
                    Source: Ministry of Land, Infrastructure, Transport and Tourism website(https://www.mlit.go.jp/seisakutokatsu/freight/seisakutokatsu_freight_tk1_000069.html)
                  </p>
                </div>
              </div>
            </section>

            <section id="Merit">
              <div className={styles.SectionText}>
                <SectTitle
                  titleEn="Merit"
                  titleJa={
                    <span>
                      Benefits of Using a{" "}
                      <span style={{ color: "var(--main)" }}> Hands-Free Travel Counter
                      </span>
                    </span>
                  }
                />
              </div>

              <div className={styles.AboutMeritInner}>
                <div className={styles.AboutCard}>
                  <div className={styles.AboutCardImg}>
                    <Image
                      src="/images/icon_about_merit1.svg"
                      fill
                      decoding="async"
                      alt=""
                    />
                  </div>
                  <h3 className={styles.AboutCardTitle}>Avoid the "No Space Left!" Problem</h3>
                  <p className={styles.AboutCardP}>
                    Unlike lockers, your luggage is kept on racks or in a storeroom, so you are far less likely to run into a situation where there is no space available to store your bags.
                  </p>
                </div>

                <div className={styles.AboutCard}>
                  <div className={styles.AboutCardImg}>
                    <Image
                      src="/images/icon_about_merit2.svg"
                      fill
                      decoding="async"
                      alt=""
                    />
                  </div>
                  <h3 className={styles.AboutCardTitle}>
                    Luggage of Any Shape Is Welcome
                  </h3>
                  <p className={styles.AboutCardP}>
                    There are often no restrictions on shape, so you can store all kinds of items — from suitcases to skis. (*Some restrictions may apply.)
                  </p>
                </div>

                <div className={styles.AboutCard}>
                  <div className={styles.AboutCardImg}>
                    <Image
                      src="/images/icon_about_merit3.svg"
                      fill
                      decoding="async"
                      alt=""
                    />
                  </div>
                  <h3 className={styles.AboutCardTitle}>
                    Delivery Makes Your Trip More Enjoyable
                  </h3>
                  <p className={styles.AboutCardP}>
                    With a luggage delivery service, you can drop your bags off at the airport and receive them at your hotel. There is no need to go back and collect them, so you can enjoy sightseeing far more comfortably.
                  </p>
                </div>
              </div>
            </section>

            <section id="Manner">
              <div className={styles.SectionText}>
                <SectTitle
                  titleEn="Manner"
                  titleJa={
                    <span>
                      Luggage Etiquette on{" "}
                      <span style={{ color: "var(--main)" }}>Japan's Public Transportation
                      </span>
                    </span>
                  }
                />
              </div>

              <div className={styles.AboutMannerInner}>
                <div className={styles.AboutContents}>
                  <div className={styles.AboutSubTitle}>
                    <div className={styles.AboutSubTitleFlex}>
                      <Image
                        src="/images/icon_crossmark_blue.svg"
                        width={18}
                        height={18}
                        alt=""
                      />
                      <p>Things to Avoid</p>
                    </div>
                  </div>
                  <div className={styles.AboutFlexSub}>
                    <p className={styles.AboutP}>
                      Avoid bringing large luggage on board during rush hour.
                    </p>
                  </div>
                  <div className={styles.AboutFlexSub}>
                    <p className={styles.AboutP}>
                      Do not place suitcases or other luggage on empty seats.
                    </p>
                  </div>
                  <div className={styles.AboutFlexSub}>
                    <p className={styles.AboutP}>
                      Do not block aisles or the areas near the doors with your luggage.
                    </p>
                  </div>
                </div>

                <div className={styles.AboutContents}>
                  <div className={styles.AboutSubTitle}>
                    <div className={styles.AboutSubTitleFlex}>
                      <Image
                        src="/images/icon_check_green.svg"
                        width={18}
                        height={18}
                        alt=""
                      />
                      <p>Tips for a More Comfortable Trip</p>
                    </div>
                  </div>

                  <div className={styles.AboutFlexSub}>
                    <p className={styles.AboutP}>
                      Reduce the amount you carry by using Hands-Free Travel Counters or lockers whenever possible.
                    </p>
                  </div>
                  <div className={styles.AboutFlexSub}>
                    <p className={styles.AboutP}>
                      If you do bring luggage on board, use the luggage storage areas in the car or seats with an oversized-baggage space.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <BeforeFooter/>
    </>
  );
}
