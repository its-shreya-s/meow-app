'use client';
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <div className={`${styles.homeWrapper}`}>
      <div className={styles.circle} onClick={() => router.push('/random-fact')}>
        <FontAwesomeIcon icon={faCat} className={styles.catIcon} />
      </div>
    </div>
  );
}
