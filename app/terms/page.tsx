import PageTitle from "@/components/PageTitle/PageTitle";
import styles from "./page.module.css";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <PageTitle titleEn="Terms of Service" titleJa="Terms of Service" />
      <section>
        <div className={`${styles.terms}`}>
          <div>
            <p>
              These Terms of Service (hereinafter, "these Terms") set out the conditions for use of "LuggGo!" (hereinafter, "the Service"), provided by the LuggGo! development team (hereinafter, "the Operator").
            </p>
            <p>
              Users who use the Service are deemed to have agreed to these Terms.
            </p>
          </div>

          <div>
            <h3>Article 1 (Application)</h3>
            <p>These Terms apply to all matters relating to the use of the Service.</p>
          </div>

          <div>
            <h3>
              Article 2 (Service Content)
            </h3>
            <p>
              The Service provides information on Hands-Free Travel Counters within Japan, along with an AI-based feature that suggests usage plans.
            </p>
            <p>
              Some of the information provided uses open data published by the government.
            </p>
          </div>

          <div>
            <h3>Article 3 (Prohibited Conduct)</h3>
            <p>
              In using the Service, users must not engage in any of the following acts.
            </p>
            <ul>
              <li>Acts that violate laws, regulations, or public order and morals</li>
              <li>Acts that interfere with the operation of the Service</li>
              <li>Unauthorized access, or attempts to gain it</li>
              <li>Acts that cause disadvantage or damage to other users or third parties</li>
              <li>Entering false information</li>
              <li>Misusing the AI features</li>
              <li>Any other acts that the Operator deems inappropriate</li>
            </ul>
          </div>

          <div>
            <h3>Article 4 (Disclaimer)</h3>
            <ul>
              <li>
                We strive to provide information on the Service that is as accurate as possible, but we do not guarantee its accuracy, completeness, or timeliness.
              </li>
              <li>
                Suggestions made by the AI are for reference only, and we do not guarantee their accuracy or usefulness.
              </li>
              <li>
                The Operator assumes no responsibility for any damages arising from use of the Service.
              </li>
              <li>
                The Service may change or suspend its content without prior notice.
              </li>
            </ul>
          </div>

            <div>
                <h3>Article 5 (Intellectual Property Rights)</h3>
                <p>Rights to the text, images, designs, programs, and other materials within the Service belong to the Operator or their rightful owners.</p>
            </div>

            <div>
                <h3>Article 6 (External Services)</h3>
                <p>The Service may use the following external services.</p>
                <ul>
                    <li>Gemini API</li>
                    <li>Google Maps Platform(Maps JavaScript API)</li>
                    <li>Resend</li>
                    <li>Railway</li>
                </ul>
                <p>The terms and policies of each respective provider apply to the use of these external services.</p>
            </div>

            <div>
                <h3>Article 7 (Changes to These Terms)</h3>
                <p>The Operator may change these Terms when it deems necessary.</p>
                <p>The revised Terms take effect once posted on the Service.</p>
            </div>

            <div>
                <h3>Article 8 (Contact)</h3>
                <p>For inquiries regarding the Service, please contact us via the link below.</p>
                <div>
                    <span>Contact form: </span>
                    <Link href="https://lugggo.up.railway.app/contact">https://lugggo.up.railway.app/contact</Link>
                </div>
            </div>

        </div>
      </section>
    </>
  );
}
