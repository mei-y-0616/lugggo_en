"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import ReactMarkdown from "react-markdown";
import "dotenv/config";
import type { counter } from "@prisma/client";
import CounterMap from "@/components/CounterMap/CounterMap";
import PageTitle from "@/components/PageTitle/PageTitle";
import Image from "next/image";
import TagList from "@/components/counter/TagList/TagList";
import DetailItem from "@/components/counter/DetailItem/DetailItem";
import LinkButton from "@/components/LinkButton/LinkButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function ClientAiPlanner() {
  //トップレベルに書く
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>();
  const [countersId, setCountersId] = useState<number[]>([]);
  const [countersData, setCountersData] = useState<Array<counter>>([]);
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    if (response) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#response", offsetY: 100 },
      });
    }
  }, [response]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (prompt === "") {
      setErrorMsg("旅程を入力してください。");
      return;
    } else {
      setErrorMsg(null);
      setResponse(null);
      setCountersData([]);
      setIsThinking(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ai`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      const data = await res.json();
      setResponse(data.res);
      setIsThinking(false);
      if (data.counters) {
        setCountersId(data.counters);
      }
    }
  }

  //counterIdが更新されたら
  useEffect(() => {
    if (countersId.length === 0) return;
    async function fetchCounter(countersId: number[]) {
      const countersRes = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/prisma/search-counter-data`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ where: { id: { in: countersId } } }),
        },
      );
      const counters = await countersRes.json();
      if (counters.res) {
        setCountersData(counters.res);
      }
    }
    fetchCounter(countersId);
  }, [countersId]);

  return (
    <>
      <PageTitle titleEn="AI Planner" titleJa="AI Hands-Free Travel Planner" />
      <div className="container">
        <section className={isThinking ? styles.isThinking : ""}>
          <div className={styles.intro}>
            <h3>What is AI Hands-Free Travel Planner?</h3>
            <p>
              Enter your travel schedule, including when and where you will be
              going, and the AI will suggest the most suitable plan for using
              hands-free travel counters.
            </p>
          </div>
          <span className={styles.formDeco}>Let's!</span>
          <form onSubmit={handleSubmit} className={styles.formArea} id="form">
            <label className={styles.promptLabel} htmlFor="prompt">
              Enter your travel schedule here
            </label>
            <textarea
              id="prompt"
              name="prompt"
              onChange={(e) => setPrompt(e.target.value)}
              className={styles.promptInput}
              placeholder={`Please describe your schedule freely, such as:\n“Arrive at △△ Airport at 9:00 on ○/○. After sightseeing, check in to ×× Hotel at 3:00 PM.”`}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              <p className={styles.submitText}>Send to AI Planner</p>
              <p className={styles.loadingText}>Generating your plan...</p>
              <div className={styles.submitIcon}>
                <Image src="/images/icon_submit_white.svg" fill alt="" />
              </div>
              <div className={styles.loadingIcon}>
                <Image
                  src="/images/anime_truck.gif"
                  width={77}
                  height={43}
                  alt=""
                  unoptimized
                />
              </div>
            </button>
            {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
            {isThinking && (
              <p className={styles.loadingNote}>
                This may take a few moments. Please wait.
              </p>
            )}
          </form>

          {response && (
            <div className={`${styles.response} inner`} id="response">
              <h3 className={styles.responseTitle}>AI Planner Response</h3>
              <div className={styles.responseTextAndCounters}>
                <div className={styles.responseText}>
                  <ReactMarkdown>{response}</ReactMarkdown>
                </div>
                {countersData.length > 0 && (
                  <div className={styles.counterListArea}>
                    <h4 className={styles.counterListAreaTitle}>
                      Recommended Counter
                    </h4>
                    <ul className={styles.counterList}>
                      {countersData.map((c, i) => {
                        return (
                          <li key={i}>
                            <div className={styles.counterHead}>
                              <h4 className={styles.counterName}>
                                {c.counter_name_en}
                              </h4>
                              <div className={styles.counterTagList}>
                                <TagList counter={c} />
                              </div>
                            </div>
                            <div className={styles.counterBottom}>
                              <DetailItem
                                imageSrc="/images/icon_map_gray.svg"
                                explain={<p>{c.x_full_address_en}</p>}
                              />
                              <LinkButton
                                path={`/counters/${c.id}`}
                                msg="View Counter Details"
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              {countersData.length > 0 && (
                <div className={styles.counterMap}>
                  <CounterMap counters={countersData} link={true} />
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
