'use client';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './PawPrints.css';

export default function PawPrints() {
    const [print, setPrint] = useState(null);
    let intervalId;
    useEffect(() => {
        let timeoutId;
        const spawnPaw = () => {
            const newPrint = {
                id: Date.now(),
                left: Math.random() * 100,
                top: Math.random() * 100,
            };
            setPrint(newPrint);
            setTimeout(() => setPrint(null), 2000);
            intervalId = setInterval(spawnPaw, 2000);
        };
        spawnPaw();
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="paw-container">
            {print &&
                <FontAwesomeIcon
                    icon={faPaw}
                    key={print.id}
                    className="paw-print"
                    style={{
                        left: `${print.left}%`,
                        top: `${print.top}%`,
                        animationDelay: `${print.delay}s`,
                    }}
                />
            }
        </div>
    );
}