'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import PawPrints from "../components/pawPrints";
import styles from "./page.module.css";

export default function RandomFact() {
  const [fact, setFact] = useState('');
  const router = useRouter();
  useEffect(() => {
    const savedFact = sessionStorage.getItem('catFact');
    if (savedFact) {
      setFact(savedFact);
      return; 
    }
    const getFact = async () => {
      try {
        const res = await fetch('https://catfact.ninja/fact');
        const data = await res.json();
        setFact(data.fact);
        sessionStorage.setItem('catFact', data.fact);
      } catch (err) {
        console.error('Error fetching fact:', err);
        
      }
    };
    getFact();
  }, []);
  return (
    <div className={`row ${styles.bodyWrapper}`}>
      <div className={`row ${styles.factSection}`}>
        <p className={`row ${styles.didYouKnow}`}>
          Did you know?
        </p>
        <p className={`${styles.factText}`}>
          {fact ? fact : <span style={{ color: '#rgb(204, 204, 204)' }}>Loading a fact...</span>}
        </p>
      </div>
      <div className={`row ${styles.buttonSection}`}>
        <div className="text-center mt-5">
          <button className={`${styles.catButton}`} onClick={() => router.push('/generate')}>
            <FontAwesomeIcon icon={faPaw} beat />
            <span className="mx-2">Pick Your Cat</span>
            <FontAwesomeIcon icon={faPaw} beat />
          </button>
        </div>
      </div>
      <PawPrints />
    </div>
  );
}
