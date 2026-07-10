import styles from "./notFound.module.css";

export const metadata={
  title:"The Requested URL was not found on this server."
}

export default function NotFound() {
  return (
    <div className="container">
      <div className={styles.notFound}>
        <p>Sorry...</p>
        <h2 className={styles.notFoundText}>このページは見つかりませんでした。</h2>
      </div>
    </div>
  );
}
