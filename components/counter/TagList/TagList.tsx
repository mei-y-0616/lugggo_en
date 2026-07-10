import styles from "./TagList.module.css";
import { areaObj } from "@/data/pref_code";
import type { counter } from "@prisma/client";

export default function TagList({counter}:{counter:counter}) {
  function getAreaTag(pref_code: number) {
    const area = Object.values(areaObj).find((area) =>
      area.prefs.includes(pref_code),
    );
    return area?.name;
  }

  function getServiceTag({
    has_storage,
    has_delivery_sameday,
    has_delivery_standard,
    has_delivery_overseas,
  }: any) {
    const services = [];
    if (has_storage) {
      services.push("Storage");
    }
    if (has_delivery_sameday) {
      services.push("Same-day Delivery");
    }
    if (has_delivery_standard) {
      services.push("Standard Delivery");
    }
    if (has_delivery_overseas) {
      services.push("Overseas Delivery");
    }

    return services;
  }
  return (
    <div className={styles.counterTag}>
      {
        <span className={styles.counterTagArea}>
          {getAreaTag(counter.pref_code)}
        </span>
      }
      {getServiceTag({
        has_storage: counter.has_storage,
        has_delivery_sameday: counter.has_delivery_sameday,
        has_delivery_standard: counter.has_delivery_standard,
        has_delivery_overseas: counter.has_delivery_overseas,
      }).map((service, index) => (
        <span key={index} className={styles.counterTagService}>
          {service}
        </span>
      ))}
    </div>
  );
}
