import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react';

export default function ScreenshotSlider({ screenshots, onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardStep, setCardStep] = useState(270);
  const sliderRef = useRef(null);

  // Measure card width + gap dynamically for responsive offset calculation
  useEffect(() => {
    const updateCardStep = () => {
      if (window.innerWidth <= 480) {
        setCardStep(215);
      } else if (window.innerWidth <= 768) {
        setCardStep(235);
      } else {
        setCardStep(270);
      }
    };

    updateCardStep();
    window.addEventListener('resize', updateCardStep);
    return () => window.removeEventListener('resize', updateCardStep);
  }, []);

  // Auto-scroll loop effect
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPlaying, screenshots.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  return (
    <div 
      className="screenshot-slider-wrapper"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="slider-header-controls">
        <div className="slider-title-info">
          <h4>Screenshots Preview</h4>
          <span className="slider-status-pill">
            {isPlaying ? (
              <>
                <span className="status-dot pulsing"></span> Auto-looping
              </>
            ) : (
              <>
                <Pause size={12} /> Paused
              </>
            )}
          </span>
        </div>

        <div className="slider-actions">
          <button 
            className="slider-nav-btn" 
            onClick={handlePrev}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            className="slider-toggle-play"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause Slider" : "Play Auto Loop"}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <button 
            className="slider-nav-btn" 
            onClick={handleNext}
            aria-label="Next screenshot"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Track Viewport */}
      <div className="slider-viewport" ref={sliderRef}>
        <div 
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * cardStep}px)`
          }}
        >
          {screenshots.map((ss, idx) => (
            <div 
              key={idx}
              className={`slider-card ${idx === currentIndex ? 'active-slide' : ''}`}
              onClick={() => onOpenLightbox(idx)}
            >
              <div className="slider-device-frame">
                <div className="slider-device-notch"></div>
                <img src={ss.src} alt={ss.title} className="slider-img" />
                <div className="slider-hover-overlay">
                  <Maximize2 size={22} />
                  <span>Click to Expand</span>
                </div>
              </div>
              <div className="slider-card-info">
                <span className="slider-card-num">0{idx + 1} / 0{screenshots.length}</span>
                <h5 className="slider-card-title">{ss.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Pagination Dots */}
      <div className="slider-dots">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Jump to screenshot ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
