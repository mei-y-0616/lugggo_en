import PageTitle from "@/components/PageTitle/PageTitle";
import styles from "./page.module.css";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <PageTitle titleEn="Privacy" titleJa="Privacy Policy" />
      <section>
        <div className={styles.privacy}>
          <div>
            <p>
              The LuggGo! development team (hereinafter, "the Operator") establishes this Privacy Policy regarding the handling of users' personal information in "LuggGo!" (hereinafter, "the Service") as follows.
            </p>
          </div>

          <div>
            <h3>1. Information We Collect</h3>
            <h4>When using AI features</h4>
            <ul>
              <li>Information entered by the user, such as travel itineraries and conditions</li>
            </ul>
            <h4>When contacting us</h4>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Content of your inquiry</li>
            </ul>
          </div>

          <div>
            <h3>2. Purpose of Use</h3>
            <p>We use the information we collect for the following purposes.</p>
            <ul>
              <li>Providing the Service</li>
              <li>Generating suggestions via AI features</li>
              <li>Responding to inquiries</li>
              <li>Improving the Service</li>
              <li>Preventing unauthorized use</li>
            </ul>
          </div>

          <div>
            <h3>3. Use of External Services</h3>
            <p>The Service uses the following external services.</p>
            <ul>
              <li>Gemini API</li>
              <li>Google Maps Platform(Maps JavaScript API)</li>
              <li>Resend</li>
              <li>Railway</li>
            </ul>
            <p>
              Some user information may be transmitted to each of these service providers.
            </p>
          </div>

          <div>
            <h3>4. Provision of Personal Information to Third Parties</h3>
            <p>
              Except as required by law, the Operator will not provide personal information to third parties without the user's consent.
            </p>
          </div>

          <div>
            <h3>5. Security Management</h3>
            <p>
              The Operator implements appropriate measures to prevent the leakage, loss, or alteration of personal information.
            </p>
          </div>

          <div>
            <h3>6. Use by Minors</h3>
            <p>
              Under the terms of the Gemini API, individuals under 18 years of age may not use the "AI Hands-Free Travel Planner" feature.
            </p>
          </div>

          <div>
            <h3>7. Changes to This Privacy Policy</h3>
            <p>This Policy may be changed as necessary.</p>
            <p>Any changes take effect once posted on the Service.</p>
          </div>

          <div>
            <h3>8. Contact</h3>
            <p>For inquiries regarding this Policy, please contact us via the link below.</p>
            <div>
              <span>Contact form: <Link href="https://lugggo.up.railway.app/contact">https://lugggo.up.railway.app/contact</Link></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
