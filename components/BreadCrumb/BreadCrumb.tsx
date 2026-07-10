"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BreadCrumb.module.css";

const pathAltName: Record<string, string> = {
  about: "About",
  guide: "How to Use",
  counters: "Search Counters",
  contact: "Contact",
  "ai-planner": "AI Planner",
  "terms":"Term of Service",
  "privacy":"Privacy Policy",
};

export default function BreadCrumb({ pageName }: { pageName?: string }) {
  const pathname = usePathname();
  // pathを「/」で分解
  const paths = pathname.substring(1).split("/");

  // リンク先アドレスの取得
  const roots = [""];
  for (let i = 0; i < paths.length; i++) roots.push(roots[i] + "/" + paths[i]);

  return (
    <div className={styles.breadCrumb}>
      <ul className={styles.breadCrumbList}>
        <li>
          <Link href="/">TOP</Link>
        </li>

        {paths.map((child, index) => (
          <li key={index}>
            <Link
              href={roots[index + 1]}
              className={
                index === paths.length - 1 ? `${styles.currentPage}` : ""
              }
            >
              { pathAltName[child]??pageName ?? child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
