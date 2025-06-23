'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function RandomFact() {
    const vibes = ['small', 'weird', 'funny', 'silly', 'tiny', 'big', 'fat', 'lazy', 'sleepy'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [selectedVibe, setSelectedVibe] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [downloaded, setDownloaded] = useState(false);
    const handleDownload = async () => {
        if (!selectedVibe) return;
        const adjective = 'cute'; 
        const url = `https://cataas.com/cat/${selectedVibe},${adjective}`;
        try {
            const res = await fetch(url);
            const blob = await res.blob();
            const blobUrl = URL.createObjectURL(blob); 
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = selectedVibe + '-cat.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); 
            setDownloaded(true);
            setTimeout(() => setDownloaded(false), 2000);
        } catch (err) {
            console.error('Download failed:', err);
        }
    };
    return (
        <>
            <div className={`${styles.bodyWrapper} pt-4`}>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5 pe-5">
                            <h5>Pick a Mood</h5>
                            <div className="row">
                                {vibes.map((vibe, index) => (
                                    <div key={index} className="col-4">
                                        <div
                                            className={`${styles.tile} text-center p-3 mb-2 ${selectedVibe === vibe ? styles.selected : ''
                                                }`}
                                            onClick={() => setSelectedVibe(vibe)}
                                        >
                                            {vibe}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h5>Pick a Number</h5>
                            <div className="row">
                                {numbers.map((num, index) => (
                                    <div key={index} className="col-4">
                                        <div
                                            className={`${styles.tile} text-center p-3 mb-2 ${selectedNumber === num ? styles.selected : ''
                                                }`}
                                            onClick={() => setSelectedNumber(num)}
                                        >
                                            {num}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4 text-center">
                            <button
                                className={`btn btn-lg ${styles.downloadBtn}`}
                                onClick={handleDownload}
                                disabled={!selectedVibe || !selectedNumber}
                            >
                                <i className="fas fa-gift me-2"></i>
                                Download Your Cat
                            </button>
                            {downloaded && (
                                <p className="mt-2 text-success">Cat delivered successfully!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}