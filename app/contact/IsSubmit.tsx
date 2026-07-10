import PageTitle from "@/components/PageTitle/PageTitle";
import styles from "./IsSubmit.module.css";
import Image from "next/image";
import LinkButton from "@/components/LinkButton/LinkButton";

export default function IsSubmit() {
  return (
    <>
      <PageTitle titleEn="Contact" titleJa="Contact" />;
      <div className="container">
        <section className={styles.submit}>
          <div className={styles.head}>
            <div className={styles.headIcon}>
              <Image src="/images/icon_check_green.svg" fill alt="" />
            </div>
            <h3>Inquiry Submitted</h3>
          </div>
          <div className={styles.body}>
            <div className={styles.explain}>
              <p>
                <strong>
                  Thank you for contacting us.
                  <br />
                  A member of our team will get back to you shortly.
                </strong>
              </p>
              <br />
              <p>
                Please note that, depending on the volume and nature of inquiries,
                it may take some time for us to respond.
                <br />
                Thank you for your understanding.
              </p>
            </div>
            <div className={styles.btnWrapper}>
              <LinkButton path="/" msg="Back to Home" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
