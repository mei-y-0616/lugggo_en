import styles from "./page.module.css";
import PageNav from "@/components/PageNav/PageNav";
import PageTitle from "@/components/PageTitle/PageTitle";
import SectTitle from "@/components/SectTitle/SectTitle";
import LinkButton from "@/components/LinkButton/LinkButton";
import Image from "next/image";
import type { links } from "@/types/pageLink";
import BeforeFooter from "@/components/BeforeFooter/BeforeFooter";

export const metadata = {
  title: "How to Use",
};

const linkAry: links = [
  {
    href: "HowToUse",
    name: "How to Use",
  },
  {
    href: "Price",
    name: "Service Types & Estimated Fees",
  },
];

export default function Guide() {
  return (
    <>
      <PageTitle
        titleEn="How to Use"
        titleJa={
          <span>
            <span style={{ color: "var(--font)" }}>How to Use </span> 
            Hands-Free Travel Counter
          </span>
        }
      />
      <div className="container">
        <div className={styles.HowFlex}>
          <PageNav linkAry={linkAry} />

          <div className={styles.HowInner}>
            <section id="HowToUse">
              <SectTitle titleEn="How to Use" titleJa={<span>How It Works</span>} />

              <div className={styles.HowCard}>
                <div className={styles.bag}>
                  <Image src="/images/img_bag.svg" alt="" fill />
                </div>
                <div className={styles.HowLeft}>
                  <div className={styles.HowNumberTitle}>
                    <p className={styles.HowNumberTitleSub}>STEP</p>
                    <p className={styles.HowNumber}>01</p>
                  </div>
                  <Image
                    className={styles.HowIcon}
                    src="/images/icon_how1.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>

                <div className={styles.HowCardDivider}></div>

                <div className={styles.HowRight}>
                  <h3 className={styles.HowCardTitle}>
                    Find a Hands-Free Travel Counter
                  </h3>
                  <p className={styles.HowCardP}>
                    Business hours and available services vary from counter to counter, so we recommend checking in advance.
                  </p>

                  <div className={styles.linkButtonWrapper}>
                    <LinkButton
                      path="/counters"
                      msg="Find a Hands-Free Travel Counter"
                    />
                  </div>

                  <p className={styles.HowCardP}>
                    On the page below, AI can also suggest the Hands-Free Travel Counter that best fits your itinerary.
                  </p>

                  <div className={styles.linkButtonWrapper}>
                    <LinkButton
                      path="/ai-planner"
                      msg="AI Hands-Free Travel Planner"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.HowCard}>
                <div className={styles.HowLeft}>
                  <div className={styles.HowNumberTitle}>
                    <p className={styles.HowNumberTitleSub}>STEP</p>
                    <p className={styles.HowNumber}>02</p>
                  </div>
                  <Image
                    className={styles.HowIcon}
                    src="/images/icon_how2.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>

                <div className={styles.HowCardDivider}></div>

                <div className={styles.HowRight}>
                  <h3 className={styles.HowCardTitle}>
                    Bring Your Luggage to the Counter and Apply
                  </h3>
                  <p className={styles.HowCardP}>
                    Fill in the required information at the counter, pay the fee, and hand over your luggage. 
                    All certified Hands-Free Travel Counters can provide service in English, so visitors from overseas can use them with peace of mind.
                  </p>
                  <p className={styles.HowCardNote}>
                    *Some counters require you to apply in advance.
                  </p>
                </div>
              </div>

              <div className={styles.HowCard}>
                <div className={styles.HowLeft}>
                  <div className={styles.HowNumberTitle}>
                    <p className={styles.HowNumberTitleSub}>STEP</p>
                    <p className={styles.HowNumber}>03</p>
                  </div>
                  <Image
                    className={styles.HowIcon}
                    src="/images/icon_how3.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>

                <div className={styles.HowCardDivider}></div>

                <div className={styles.HowRight}>
                  <h3 className={styles.HowCardTitle}>Enjoy Sightseeing Hands-Free</h3>
                  <p className={styles.HowCardP}>
                    With less luggage to carry, you can move around far more comfortably — whether on station stairs, in hilly sightseeing areas, or through the crowds at popular spots. You can also enjoy shopping more while you are out. 
                    <br />
                    What's more, sightseeing without large luggage helps ease congestion at tourist destinations, so you contribute to the destinations as well.
                  </p>
                </div>
              </div>

              <div className={styles.HowCard_last}>
                <div className={styles.HowLeft}>
                  <div className={styles.HowNumberTitle}>
                    <p className={styles.HowNumberTitleSub}>STEP</p>
                    <p className={styles.HowNumber}>04</p>
                  </div>
                  <Image
                    className={styles.HowIcon}
                    src="/images/icon_how4.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>

                <div className={styles.HowCardDivider}></div>

                <div className={styles.HowRight}>
                  <h3 className={styles.HowCardTitle}>
                    Pick Up Your Luggage
                  </h3>
                  <p className={styles.HowCardP}>
                    After enjoying your sightseeing hands-free, pick up your luggage at the storage location or the delivery destination.
                  </p>
                </div>
              </div>

              <p className={styles.PriceAnnotation}>
                *The steps above are just one example. Details may vary by counter, so please check the official website or similar sources before use.{" "}
              </p>
            </section>

            <section id="Price">
              <SectTitle
                titleEn="Service & Price"
                titleJa={<span>Service Types & Estimated Fees</span>}
              />

              <div className={styles.PriceGrid}>
                <div className={styles.PriceCard}>
                  <h3 className={styles.PriceCardTitle}>Storage</h3>
                  <p className={styles.PriceCardP}>
                    Leave your luggage at the counter and pick it up at the same location.
                  </p>
                  <p className={styles.PriceCardPrice}>
                    <span className={styles.PriceCardNote}>Approx.</span>{" "}¥500-1,000{" "}
                  </p>
                </div>

                <div className={styles.PriceCard}>
                  <h3 className={styles.PriceCardTitle}>Same-day Delivery</h3>
                  <p className={styles.PriceCardP}>
                    Receive your stored luggage the same day at a hotel, airport, or similar location.
                  </p>
                  <p className={styles.PriceCardPrice}>
                    <span className={styles.PriceCardNote}>Approx.</span>{" "}
                    ¥2,000-3,000{" "}
                  </p>
                </div>

                <div className={styles.PriceCard}>
                  <h3 className={styles.PriceCardTitle}>Standard Delivery</h3>
                  <p className={styles.PriceCardP}>
                    Receive your stored luggage the next day or later at your home, next accommodation, or similar location.
                  </p>
                  <p className={styles.PriceCardPrice}>
                    <span className={styles.PriceCardNote}>Approx.</span>{" "}
                    ¥2,000-5,000{" "}
                  </p>
                </div>

                <div className={styles.PriceCard}>
                  <h3 className={styles.PriceCardTitle}>Overseas Delivery</h3>
                  <p className={styles.PriceCardP}>
                    Send your stored luggage directly to your home overseas.
                  </p>
                  <p className={styles.PriceCardPrice}>
                    <span className={styles.PriceCardNote}>Approx.</span>{" "}
                    ¥1,400-40,000{" "}
                  </p>
                </div>
              </div>

              <p className={styles.PriceAnnotation}>
                *The fees above are estimates. They vary depending on the counter, luggage size, delivery distance, and other factors.
              </p>
            </section>
          </div>
        </div>
      </div>
      <BeforeFooter />
    </>
  );
}
