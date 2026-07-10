"use client";
import styles from "./page.module.css";
import Link from "next/link";
import type { counter } from "@prisma/client";
import TagList from "@/components/counter/TagList/TagList";
import CounterMap from "@/components/CounterMap/CounterMap";
import PageTitle from "@/components/PageTitle/PageTitle";
import DetailItem from "@/components/counter/DetailItem/DetailItem";
import { getParsePhone, getLanguage } from "@/utils/counter/counterFuns";
import RunTime from "@/components/counter/RunTime/RunTime";
import { parseTime } from "@/utils/counter/counterFuns";
import LinkButton from "@/components/LinkButton/LinkButton";

export default function CounterClient({
  id,
  counter,
}: {
  id: string;
  counter: counter;
}) {
  function Price({
    fixed,
    max,
    min,
  }: {
    fixed: string | null;
    max: string | null;
    min: string | null;
  }) {
    if (fixed) {
      return <span className={styles.price}>{fixed}</span>;
    } else {
      return (
        <>
          <span className={styles.price}>{min ?? "---"}</span>～
          <span className={styles.price}>{max ?? "---"}</span>
        </>
      );
    }
  }
  const c = counter;

  return (
    <>
      <PageTitle
        titleEn="Search"
        titleJa={
          <span>
            <span style={{ color: "var(--font)" }}>Search </span>
            Hands-Free Counters
            <span style={{ color: "var(--font)" }}> - Detail</span>
          </span>
        }
        pageName={c.counter_name_en}
      ></PageTitle>
      <div className="container">
        <section>
          <div className={`inner ${styles.counterWrapper}`}>
            <div className={styles.counter}>
              <div className={styles.counterHead}>
                <h2 className={styles.counterName}>{c.counter_name_en}</h2>
                <TagList counter={c} />
              </div>

              <div className={styles.counterData}>
                <div className={styles.counterDetail}>
                  <div className={styles.counterDetailLeft}>
                    <DetailItem
                      imageSrc="/images/icon_map_gray.svg"
                      explain={<p>{c.x_full_address_en}</p>}
                    />
                    <DetailItem
                      imageSrc="/images/icon_phone_gray.svg"
                      explain={<p>{getParsePhone(c.phone)}</p>}
                    />
                    <DetailItem
                      imageSrc="/images/icon_time_gray.svg"
                      explain={<RunTime c={counter} />}
                    />
                  </div>
                  <div className={styles.counterDetailRight}>
                    <DetailItem
                      imageSrc="/images/icon_lang_gray.svg"
                      explain={<p>Language：{getLanguage(counter)}</p>}
                    />
                    {c.station_name_en && (
                      <DetailItem
                        imageSrc="/images/icon_station_gray.svg"
                        explain={
                          <p>Location & Nearest Public Transportation：{c.station_name_en}</p>
                        }
                      />
                    )}
                    {c.website_url && (
                      <DetailItem
                        imageSrc="/images/icon_url_gray.svg"
                        explain={
                          <p style={{ wordBreak: "break-all" }}>
                            Official Website：
                            {/* <Link
                              href={c.website_url}
                              className="break-all"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {c.website_url}
                            </Link> */}
                            <span>{c.website_url}</span>
                          </p>
                        }
                      />
                    )}
                  </div>
                </div>
                <div className={styles.counterMap}>
                  <CounterMap
                    counters={[c]}
                    link={false}
                    centerLat={c.latitude}
                    centerLon={c.longitude}
                  />
                </div>
              </div>

              <div className={styles.serviceArea}>
                <h3 className={styles.serviceAreaTitle}>Available Services</h3>
                <div className={styles.serviceGrid}>
                  {/* 一時預かり */}
                  {c.has_storage === 1 && (
                    <div className={styles.serviceBlock}>
                      <div className={styles.serviceBlockHead}>
                        <h4 className={styles.serviceName}>Storage</h4>
                        <p className={styles.servicePrice}>
                          ￥
                          <Price
                            fixed={c.storage_fee_fixed}
                            max={c.storage_fee_max}
                            min={c.storage_fee_min}
                          />
                        </p>
                      </div>

                      <table className={styles.serviceTable}>
                        <tbody>
                          <tr>
                            <th>Accepted Items</th>
                            <td>
                              <div className={styles.serviceItem}>
                                {c.storage_item_suitcase === "1" && (
                                  <span>SuitCases</span>
                                )}
                                {c.storage_item_chilled === "1" && (
                                  <span>Refrigerated</span>
                                )}
                                {c.storage_item_souvenir === "1" && (
                                  <span>Souvenirs</span>
                                )}
                              </div>
                              {(c.storage_max_dimensions ||
                                c.storage_max_weight ||
                                c.storage_max_value) && (
                                <div className={styles.serviceDetail}>
                                  {c.storage_max_dimensions && (
                                    <p>
                                      Max Total Dimensions：
                                      {c.storage_max_dimensions}cm
                                    </p>
                                  )}
                                  {c.storage_max_weight && (
                                    <p>Max Weight：{c.storage_max_weight}kg</p>
                                  )}
                                  {c.storage_max_value && (
                                    <p>
                                      Max Declared Value：￥{c.storage_max_value}
                                    </p>
                                  )}
                                </div>
                              )}
                              {c.storage_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.storage_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Compensation</th>
                            <td>
                              {c.storage_insurance_limit && (
                                <div className={styles.serviceDetail}>
                                  {c.storage_insurance_limit && (
                                    <p>
                                      Amount of Compensation：Up to ￥{c.storage_insurance_limit}
                                    </p>
                                  )}
                                </div>
                              )}
                              {c.storage_insurance_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.storage_insurance_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* 当日配送 */}
                  {c.has_delivery_sameday === 1 && (
                    <div className={styles.serviceBlock}>
                      <div className={styles.serviceBlockHead}>
                        <h4 className={styles.serviceName}>Same-day Delivery</h4>
                        <p className={styles.servicePrice}>
                          ￥
                          <Price
                            fixed={c.delivery_sameday_fee_fixed}
                            max={c.delivery_sameday_fee_max}
                            min={c.delivery_sameday_fee_min}
                          />
                        </p>
                      </div>

                      <table className={styles.serviceTable}>
                        <tbody>
                          <tr>
                            <th>Accepted Items</th>
                            <td>
                              <div className={styles.serviceItem}>
                                {c.delivery_sameday_item_suitcase === "1" && (
                                  <span>SuitCases</span>
                                )}
                                {c.delivery_sameday_item_chilled === "1" && (
                                  <span>Refrigerated</span>
                                )}
                                {c.delivery_sameday_item_souvenir === "1" && (
                                  <span>Souvenirs</span>
                                )}
                              </div>
                              {(c.delivery_sameday_max_dimensions ||
                                c.delivery_sameday_max_weight ||
                                c.delivery_sameday_max_value) && (
                                <div className={styles.serviceDetail}>
                                  {c.delivery_sameday_max_dimensions && (
                                    <p>
                                      Max Total Dimensions：
                                      {c.delivery_sameday_max_dimensions}cm
                                    </p>
                                  )}
                                  {c.delivery_sameday_max_weight && (
                                    <p>
                                      Max Weight：{c.delivery_sameday_max_weight}
                                      kg
                                    </p>
                                  )}
                                  {c.delivery_sameday_max_value && (
                                    <p>
                                      Max Declared Value：
                                      ￥{c.delivery_sameday_max_value}
                                    </p>
                                  )}
                                </div>
                              )}
                              {c.delivery_sameday_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.delivery_sameday_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Compensation</th>
                            <td>
                              {c.delivery_sameday_insurance_limit && (
                                <div className={styles.serviceDetail}>
                                  {c.delivery_sameday_insurance_limit && (
                                    <p>
                                      Amount of Compensation：
                                      Up to ￥{c.delivery_sameday_insurance_limit}
                                    </p>
                                  )}
                                </div>
                              )}
                              {c.delivery_sameday_insurance_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.delivery_sameday_insurance_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>
                          {(c.delivery_sameday_cutoff_time ||
                            c.delivery_sameday_last_time) && (
                            <tr>
                              <th>Cut-off Time</th>
                              <td>
                                <div className={styles.serviceDetail}>
                                  {c.delivery_sameday_cutoff_time && (
                                    <p>
                                      Last Acceptance Time：
                                      {parseTime(
                                        c.delivery_sameday_cutoff_time,
                                      )}
                                    </p>
                                  )}
                                  {c.delivery_sameday_last_time && (
                                    <p>
                                      Latest Delivery Time：
                                      {parseTime(c.delivery_sameday_last_time)}
                                    </p>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}

                          {c.delivery_sameday_dest_en && (
                            <tr>
                              <th>Delivery Destinations</th>
                              <td>
                                <div className={styles.serviceDetail}>
                                  <p>{c.delivery_sameday_dest_en}</p>
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* 一般配送 */}
                  {c.has_delivery_standard === 1 && (
                    <div className={styles.serviceBlock}>
                      <div className={styles.serviceBlockHead}>
                        <h4 className={styles.serviceName}>Standard Delivery</h4>
                        <p className={styles.servicePrice}>
                          ￥
                          <Price
                            fixed={c.delivery_standard_fee_fixed}
                            max={c.delivery_standard_fee_max}
                            min={c.delivery_standard_fee_min}
                          />
                        </p>
                      </div>

                      <table className={styles.serviceTable}>
                        <tbody>
                          <tr>
                            <th>Accepted Items</th>
                            <td>
                              <div className={styles.serviceItem}>
                                {c.delivery_standard_item_suitcase === "1" && (
                                  <span>SuitCases</span>
                                )}
                                {c.delivery_standard_item_chilled === "1" && (
                                  <span>Refrigerated</span>
                                )}
                                {c.delivery_standard_item_souvenir === "1" && (
                                  <span>Souvenirs</span>
                                )}
                              </div>
                              {(c.delivery_standard_max_dimensions ||
                                c.delivery_standard_max_weight ||
                                c.delivery_standard_max_value) && (
                                <div className={styles.serviceDetail}>
                                  {c.delivery_standard_max_dimensions && (
                                    <p>
                                      Max Total Dimensions：
                                      {c.delivery_standard_max_dimensions}cm
                                    </p>
                                  )}
                                  {c.delivery_standard_max_weight && (
                                    <p>
                                      Max Weight：{c.delivery_standard_max_weight}
                                      kg
                                    </p>
                                  )}
                                  {c.delivery_standard_max_value && (
                                    <p>
                                      Max Declared Value：
                                      ￥{c.delivery_standard_max_value}
                                    </p>
                                  )}
                                </div>
                              )}
                              {c.delivery_standard_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.delivery_standard_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Compensation</th>
                            <td>
                              {c.delivery_standard_insurance_limit && (
                                <div className={styles.serviceDetail}>
                                  {c.delivery_sameday_insurance_limit && (
                                    <p>
                                      Amount of Compensation：
                                      Up to ￥{c.delivery_standard_insurance_limit}
                                    </p>
                                  )}
                                </div>
                              )}
                              {c.delivery_standard_insurance_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.delivery_standard_insurance_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>

                          {c.delivery_standard_is_nationwide && (
                            <tr>
                              <th>Delivery Destinations</th>
                              <td>
                                {c.delivery_standard_is_nationwide === "1" && (
                                  <>
                                    <div className={styles.serviceDetail}>
                                      <p>Delivery Available Nationwide</p>
                                    </div>
                                    {c.delivery_standard_dest_en && (
                                      <p className={styles.serviceNote}>
                                        {c.delivery_standard_dest_en}
                                      </p>
                                    )}
                                  </>
                                )}
                                {c.delivery_standard_is_nationwide === "2" && (
                                  <div className={styles.serviceDetail}>
                                    <p>{c.delivery_standard_dest_en}</p>
                                  </div>
                                )}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* 海外配送 */}
                  {c.has_delivery_overseas === 1 && (
                    <div className={styles.serviceBlock}>
                      <div className={styles.serviceBlockHead}>
                        <h4 className={styles.serviceName}>Overseas Delivery</h4>
                        <p className={styles.servicePrice}>
                          ￥
                          <Price
                            fixed={c.delivery_overseas_fee_fixed}
                            max={c.delivery_overseas_fee_max}
                            min={c.delivery_overseas_fee_min}
                          />
                        </p>
                      </div>

                      <table className={styles.serviceTable}>
                        <tbody>
                          <tr>
                            <th>Accepted Items</th>
                            <td>
                              <div className={styles.serviceItem}>
                                {c.delivery_overseas_item_suitcase === "1" && (
                                  <span>SuitCases</span>
                                )}
                                {c.delivery_overseas_item_chilled === "1" && (
                                  <span>Refrigerated</span>
                                )}
                                {c.delivery_overseas_item_souvenir === "1" && (
                                  <span>Souvenirs</span>
                                )}
                              </div>
                              <div className={styles.serviceDetail}>
                                {c.delivery_overseas_max_dimensions && (
                                  <p>
                                    Max Total Dimensions：
                                    {c.delivery_overseas_max_dimensions}cm
                                  </p>
                                )}
                                {c.delivery_overseas_max_weight && (
                                  <p>
                                    Max Weight：{c.delivery_overseas_max_weight}kg
                                  </p>
                                )}
                                {c.delivery_overseas_max_value && (
                                  <p>
                                    Max Declared Value：
                                    ￥{c.delivery_overseas_max_value}
                                  </p>
                                )}
                              </div>
                              {c.delivery_overseas_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.delivery_overseas_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>
                          <tr>
                            <th>Compensation</th>
                            <td>
                              <div className={styles.serviceDetail}>
                                {c.delivery_sameday_insurance_limit && (
                                  <p>
                                    Amount of Compensation：
                                    Up to ￥{c.delivery_overseas_insurance_limit}
                                  </p>
                                )}
                              </div>
                              {c.delivery_overseas_insurance_notes_en && (
                                <p className={styles.serviceNote}>
                                  {c.delivery_overseas_insurance_notes_en}
                                </p>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.linkButtonArea}>
                <LinkButton path="/counters" msg="Back to Counter List" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
