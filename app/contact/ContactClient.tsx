"use client";
import PageTitle from "@/components/PageTitle/PageTitle";
import styles from "./page.module.css";
import SectTitle from "@/components/SectTitle/SectTitle";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import IsSubmit from "./IsSubmit";
import type FormValues from "@/types/formValues";

// export const metadata = {
//   title: "お問い合わせ",
// };

function FormItem({
  nameJa,
  nameEn,
  placeholder,
  type,
  register,
  errors,
}: {
  nameJa: string;
  nameEn: "name" | "kana" | "mail" | "content";
  placeholder: string;
  type: string;
  register: any;
  errors: any;
}) {
  return (
    <div className={styles.formItem}>
      <div className={styles.formItemHead}>
        <label htmlFor={nameEn}>{nameJa}</label>
        <span className={styles.formItemTag}>Required</span>
      </div>

      <div className={styles.formItemBody}>
        <input
          type={type}
          // name={nameEn}
          placeholder={placeholder}
          id={nameEn}
          {...register(nameEn, { required: nameJa + " is required." })}
        />
        {errors[nameEn] && (
          <p className={styles.formErrorMsg} style={{ color: "red" }}>
            {errors[nameEn].message}
          </p>
        )}
      </div>
    </div>
  );
}

function Form({ setIsSubmit }: { setIsSubmit: (isSubmit: boolean) => void }) {
  const [submitErrorMsg, setSubmitErrorMsg] = useState<string | null>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register, // input とフォームロジックを紐づける
    handleSubmit, // 送信時に呼ぶ
    formState: { errors }, // バリデーション結果など
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // バリデーション OK のときだけ呼ばれる
    setIsSubmitting(true);
    async function submitForm() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/form`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const resData = await res.json();
        // console.log(resData.message);
        if (resData.success) {
          setIsSubmitting(false);
          setSubmitErrorMsg(null);
          window.scrollTo(0, 0);
          setIsSubmit(true);
        } else {
          throw Error;
        }
      } catch {
        setIsSubmitting(false);
        setSubmitErrorMsg(
          "An error occurred and your inquiry could not be sent. Please try again later.",
        );
      }
    }
    submitForm();
  };

  return (
    <form
      className={
        isSubmitting ? `${styles.isSubmitting} ${styles.form}` : styles.form
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormItem
        nameJa="Name"
        nameEn="name"
        placeholder="John Smith"
        type="text"
        register={register}
        errors={errors}
      />
      {/* <FormItem
        nameJa="フリガナ"
        nameEn="kana"
        placeholder="ヤマダ　タロウ"
        type="text"
        register={register}
        errors={errors}
      /> */}
      <FormItem
        nameJa="Email Address"
        nameEn="mail"
        placeholder="john@example.com"
        type="email"
        register={register}
        errors={errors}
      />
      <div className={`${styles.formItem} ${styles.formItemTextarea}`}>
        <div className={styles.formItemHead}>
          <label htmlFor="content">Inquiry Details</label>
          <span className={styles.formItemTag}>Required</span>
        </div>

        <div className={styles.formTextareaBlock}>
          <div className={styles.formItemBody}>
            <textarea
              placeholder="Please enter your inquiry here."
              id="content"
              {...register("content", {
                required: "Inquiry details are required.",
              })}
            ></textarea>
            {errors.content && (
              <p className={styles.formErrorMsg}>{errors.content.message}</p>
            )}
          </div>

          <div className={styles.formNote}>
            <p>
              Please also check the
              <strong> Frequently Asked Questions </strong>
              before contacting us.
            </p>
            <br />

            <p>[Important Notes Before Submitting an Inquiry]</p>
            <ul>
              <li>
                Clicking the “Submit” button will send your inquiry directly to
                the LuggGo! administration team.
              </li>
              <li>We will reply to the email address you provided.</li>
              <li>
                Depending on the volume and nature of inquiries, it may take
                some time for us to respond. Thank you for your understanding.
              </li>
              <li>
                If we receive a large number of inquiries, technical issues may
                temporarily prevent inquiries from being submitted successfully.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button className={styles.formBtn}>
        <p>{isSubmitting ? "Submitting..." : "Submit"}</p>
        <div className={styles.formBtnIcon}>
          <Image src="/images/icon_form_white.svg" alt="" fill />
        </div>
      </button>

      {submitErrorMsg && (
        <p className={styles.submitErrorMsg}>{submitErrorMsg}</p>
      )}
    </form>
  );
}

function FAQ({ q, a }: { q: string; a: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={isOpen ? `${styles.faq} ${styles.isOpen}` : styles.faq}>
      <div
        className={styles.faqHead}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <dt>{q}</dt>
        <div className={styles.faqHeadIcon}>
          <Image src="images/icon_accArrow_green.svg" fill alt="" />
        </div>
      </div>
      <dd>
        <div>{a}</div>
      </dd>
    </div>
  );
}

export default function ContactClient() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  if (isSubmit) {
    return <IsSubmit />;
  }
  return (
    <>
      <PageTitle titleEn="Contact" titleJa="Contact" />
      <div className="container">
        <section id="faq">
          <SectTitle titleEn="Q & A" titleJa={<span>Frequently Asked Questions</span>} />
          <dl className={styles.faqList}>
            <FAQ
              q="Are there any items that cannot be stored?"
              a={
                <>
                  <p>
                    Yes. Please note that the following items cannot be stored or shipped.
                  </p>
                  <ul>
                    <li>Valuables</li>
                    <li>Fragile items</li>
                    <li>Perishable foods and liquids</li>
                    <li>Hazardous or harmful materials</li>
                  </ul>
                  <p>
                    In addition, whether items such as suitcases or refrigerated goods can be handled varies from counter to counter.
                  </p>
                </>
              }
            />
            <FAQ
              q="What payment methods are available?"
              a={
                <>
                  <p>
                    This varies from counter to counter. Some locations accept cash only, while others accept credit cards, electronic money, and QR code payments. For details, please check each counter's official page or contact the counter directly.
                  </p>
                </>
              }
            />
            <FAQ
              q="Do I need to make a reservation in advance?"
              a={
                <>
                  <p>
                    Most counters can be used on the day without a reservation. However, some counters, or group use, may require a reservation in advance. We recommend checking each counter's website beforehand.
                  </p>
                </>
              }
            />
            <FAQ
              q="Are there other reliable, official sources of information?"
              a={
                <>
                  <p>
                    You can find information about hands-free travel and Hands-Free Travel Counters on the official sites of the following government bodies.
                  </p>
                  <ul>
                    <li>
                      <Link
                        href="https://www.mlit.go.jp/seisakutokatsu/freight/seisakutokatsu_freight_tk1_000141.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ministry of Land, Infrastructure, Transport and Tourism (MLIT)
                      </Link>
                      : A nationwide list of Hands-Free Travel Counters is available in list form (CSV/PDF).
                    </li>

                    <li>
                      <Link
                        href="https://www.japan.travel/en/plan/getting-around/luggage-storage/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Japan National Tourism Organization (JNTO)
                      </Link>
                      ：Provides information in multiple languages on how to use Hands-Free Travel Counters, aimed at visitors to Japan.
                    </li>
                  </ul>
                </>
              }
            />
          </dl>
        </section>

        <section id="contact">
          <SectTitle
            titleEn="Contact"
            titleJa={<span>Contact Form</span>}
          />
          <p className={styles.sectExplain}>
            We welcome your opinions, feedback, and questions about this page or our service via the form below. 
            <br />
            Please feel free to get in touch.
          </p>
          <Form setIsSubmit={setIsSubmit} />
        </section>
      </div>
    </>
  );
}
