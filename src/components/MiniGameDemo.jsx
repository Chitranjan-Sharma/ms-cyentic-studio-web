import React, { useState, useEffect } from 'react';
import { RefreshCw, Sparkles, Award, Play, CheckCircle2 } from 'lucide-react';

const CARD_DATA = [
  { id: 1, icon: '🐶', name: 'Puppy' },
  { id: 2, icon: '🚀', name: 'Rocket' },
  { id: 3, icon: '🍕', name: 'Pizza' },
  { id: 4, icon: '🐶', name: 'Puppy' },
  { id: 5, icon: '🚀', name: 'Rocket' },
  { id: 6, icon: '🍕', name: 'Pizza' },
];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MiniGameDemo() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [flipsCount, setFlipsCount] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initGame = () => {
    const preparedCards = shuffleArray(
      CARD_DATA.map((card, idx) => ({ ...card, instanceId: idx }))
    );
    setCards(preparedCards);
    setFlipped([]);
    setMatched([]);
    setFlipsCount(0);
    setIsWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setFlipsCount((prev) => prev + 1);
      const [firstIdx, secondIdx] = newFlipped;
      if (cards[firstIdx].icon === cards[secondIdx].icon) {
        setMatched((prev) => {
          const updated = [...prev, firstIdx, secondIdx];
          if (updated.length === cards.length) {
            setIsWon(true);
          }
          return updated;
        });
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 900);
      }
    }
  };

  return (
    <div className="mini-game-container">
      <div className="mini-game-header">
        <div className="mini-game-badge">
          <Sparkles size={16} /> Live Web Demo
        </div>
        <h3>Try IQ Hit 2 Card Match Live</h3>
        <p>Tap 2 cards to find matching pairs! Experience the smooth flip animation & visual feedback.</p>
      </div>

      <div className="mini-game-stats">
        <div className="stat-pill">
          <span className="stat-label">Flips:</span>
          <span className="stat-value">{flipsCount}</span>
        </div>
        <div className="stat-pill">
          <span className="stat-label">Pairs Matched:</span>
          <span className="stat-value">{matched.length / 2} / 3</span>
        </div>
        <button className="mini-game-reset-btn" onClick={initGame} title="Restart Mini Game">
          <RefreshCw size={16} /> Restart
        </button>
      </div>

      <div className="mini-game-board">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          const isMatched = matched.includes(index);

          return (
            <button
              key={index}
              className={`demo-card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
              onClick={() => handleCardClick(index)}
              disabled={isFlipped}
              aria-label={`Card ${index + 1}`}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-pattern"></div>
                  <span className="card-logo-mini">IQ</span>
                </div>
                <div className="card-back">
                  <span className="card-icon-emoji">{card.icon}</span>
                  <span className="card-name">{card.name}</span>
                  {isMatched && <CheckCircle2 className="matched-badge-icon" size={16} />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {isWon && (
        <div className="mini-game-victory">
          <Award size={32} className="victory-icon" />
          <div className="victory-text">
            <h4>Awesome Job! Puzzle Cleared!</h4>
            <p>You completed the grid in <strong>{flipsCount} flips</strong>.</p>
          </div>
          <button className="btn btn-primary mini-replay-btn" onClick={initGame}>
            <Play size={16} /> Play Again
          </button>
        </div>
      )}
    </div>
  );
}
