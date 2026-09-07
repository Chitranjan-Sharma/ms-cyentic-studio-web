import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

export default function ScreenshotLightbox({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  setCurrentIndex
}) {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || !screenshots || screenshots.length === 0) return null;

  const currentSs = screenshots[currentIndex];

  const handlePrev = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="lightbox-header">
          <div className="lightbox-title-info">
            <span className="lightbox-badge">Screenshot {currentIndex + 1} of {screenshots.length}</span>
            <h3 className="lightbox-title">{currentSs.title}</h3>
          </div>
          <div className="lightbox-actions">
            <button
              className="lightbox-btn"
              onClick={() => setIsZoomed(!isZoomed)}
              title={isZoomed ? "Zoom Out" : "Zoom In"}
            >
              {isZoomed ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
            <button className="lightbox-btn close-btn" onClick={onClose} title="Close Lightbox">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Main Image Display Area */}
        <div className="lightbox-body">
          <button className="lightbox-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Screenshot">
            <ChevronLeft size={28} />
          </button>

          <div className={`lightbox-image-container ${isZoomed ? 'zoomed' : ''}`}>
            <div className="phone-device-frame">
              <div className="device-screen">
                <img
                  src={currentSs.src}
                  alt={currentSs.title}
                  className="lightbox-img"
                />
              </div>
            </div>
          </div>

          <button className="lightbox-nav-btn next-btn" onClick={handleNext} aria-label="Next Screenshot">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Caption */}
        <div className="lightbox-footer">
          <p className="lightbox-caption">{currentSs.description}</p>

          {/* Thumbnail Strip */}
          <div className="lightbox-thumbnails">
            {screenshots.map((ss, idx) => (
              <button
                key={idx}
                className={`lightbox-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setIsZoomed(false);
                  setCurrentIndex(idx);
                }}
              >
                <img src={ss.src} alt={ss.title} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
