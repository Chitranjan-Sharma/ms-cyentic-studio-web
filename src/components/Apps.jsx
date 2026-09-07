import React, { useState } from 'react';
import { 
  Sparkles, 
  Gamepad2, 
  Brain, 
  Grid, 
  Clock, 
  Trophy, 
  Calendar, 
  Volume2, 
  Maximize2, 
  HelpCircle, 
  CheckCircle2, 
  Layers, 
  Eye, 
  Shuffle, 
  Repeat, 
  Smartphone, 
  Flame, 
  Star, 
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink
} from 'lucide-react';
import ScreenshotLightbox from './ScreenshotLightbox';
import ScreenshotSlider from './ScreenshotSlider';
import MiniGameDemo from './MiniGameDemo';

const APP_STORE_URL = "https://apps.apple.com/in/app/iq-hit-2/id6799720680";

const SCREENSHOTS = [
  {
    src: '/iq-hit-2-ss/ss1.png',
    title: 'Game Suite Main Menu',
    description: 'Vibrant cartoon 3D pill dashboard to launch Card Match, Sliding Puzzle, Pattern Repeat, and Odd One Out.'
  },
  {
    src: '/iq-hit-2-ss/ss2.png',
    title: 'Card Match Setup & Themes',
    description: 'Customize grid dimensions (3x4, 4x4, 4x5), themes (Animals, Space, Food, Numbers, Icons, Sports) and modes (Relaxed, Timed, Moves).'
  },
  {
    src: '/iq-hit-2-ss/ss3.png',
    title: 'Card Match Gameplay',
    description: 'Vibrant card match engine with smooth 3D flip physics, move counter, countdown timer, and victory fanfare.'
  },
  {
    src: '/iq-hit-2-ss/ss4.png',
    title: 'Sliding Tile (15-Puzzle) Engine',
    description: 'Classic tile slider challenge. Slide scrambled tiles into numerical 1-N sequence with tap controls.'
  },
  {
    src: '/iq-hit-2-ss/ss5.png',
    title: 'Pattern Repeat (Simon Says)',
    description: 'Memory recall engine! Watch glowing icon & tone sequences and repeat them (+1 new step each round).'
  },
  {
    src: '/iq-hit-2-ss/ss6.png',
    title: 'Odd One Out (Spot the Difference)',
    description: 'Grid of themed items with 1 subtle variation (eye color, flipped detail). Spot and tap before time expires!'
  },
  {
    src: '/iq-hit-2-ss/ss7.png',
    title: 'Daily Challenge & Calendar Streak',
    description: 'Targeted daily puzzle goals with calendar tracking, win streaks, win rates, and monthly attempt breakdown.'
  },
  {
    src: '/iq-hit-2-ss/ss8.png',
    title: 'How To Play & Rules Guide',
    description: 'Comprehensive in-game rules modal with tabbed guides for all game modes, difficulty levels, and streak rewards.'
  },
  {
    src: '/iq-hit-2-ss/ss9.png',
    title: 'Level Map & Progression Stats',
    description: '50 level progression per game mode with star ratings, total score tracking, and audio soundtrack controls.'
  }
];

export default function Apps() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSsIndex, setCurrentSsIndex] = useState(0);
  const [expandedRule, setExpandedRule] = useState('card-match');

  const openLightbox = (index) => {
    setCurrentSsIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="apps" className="apps-section">
      <div className="section-header text-center">
        <span className="studio-badge-pill">
          <Sparkles size={14} /> Official Game Showcase
        </span>
        <h2 className="section-title glow-text">Our Apps</h2>
        <p className="section-subtitle">
          Discover our flagship mind-training puzzle game engineered for focus, memory, and cognitive wellness.
        </p>
      </div>

      {/* Flagship App Hero Card */}
      <div className="app-flagship-hero">
        <div className="app-flagship-glow"></div>
        <div className="app-flagship-content">
          <div className="app-header-row">
            <div className="app-icon-wrapper">
              <img 
                src="/iq-hit-2-icon.png" 
                alt="IQ Hit 2 - Mind Training Puzzle" 
                className="app-main-icon"
              />
            </div>
            
            <div className="app-title-block">
              <div className="app-meta-pills">
                <span className="pill pill-green"><CheckCircle2 size={12} /> Live on App Store</span>
                <span className="pill pill-blue">v1.0.1 (Build 9)</span>
                <span className="pill pill-purple">Puzzle / Education</span>
                <span className="pill pill-orange">★ 4.9 Rating</span>
              </div>
              <h3 className="app-title-name">IQ Hit 2 - Mind Training Puzzle</h3>
              <p className="app-tagline">
                4 Fun Brain & Pattern Puzzles in 1 Vibrant Package. Train visual recall, spatial logic, sequence memory, and focus!
              </p>

              {/* Prominent App Store Download Button in Header Block */}
              <div className="app-header-download-row">
                <a 
                  href={APP_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-appstore-hero"
                >
                  <svg className="app-store-logo-icon" viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.7 69.5-34.3z"/>
                  </svg>
                  <span>Download on App Store</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Highlights Banner Grid */}
          <div className="app-quick-stats">
            <div className="quick-stat-box">
              <Gamepad2 className="stat-icon icon-purple" />
              <div>
                <span className="stat-num">4 Engines</span>
                <span className="stat-desc">Card Match, 15-Puzzle, Simon Says, Odd One</span>
              </div>
            </div>
            <div className="quick-stat-box">
              <Trophy className="stat-icon icon-orange" />
              <div>
                <span className="stat-num">50 Levels</span>
                <span className="stat-desc">Per Game Engine (200+ total levels)</span>
              </div>
            </div>
            <div className="quick-stat-box">
              <Flame className="stat-icon icon-green" />
              <div>
                <span className="stat-num">Daily Streak</span>
                <span className="stat-desc">Calendar goals & win rate stats</span>
              </div>
            </div>
            <div className="quick-stat-box">
              <ShieldCheck className="stat-icon icon-blue" />
              <div>
                <span className="stat-num">100% Offline</span>
                <span className="stat-desc">Zero internet required, 0% bloat</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Screenshot Slider with Auto Scroll Loop */}
      <div className="slider-section-container">
        <ScreenshotSlider 
          screenshots={SCREENSHOTS} 
          onOpenLightbox={openLightbox} 
        />
      </div>

      {/* Game Engines Section */}
      <div className="app-section-block">
        <div className="pane-header">
          <h3>4 Playable Puzzle Engines + Suite Roadmap</h3>
          <p>Master visual memory, sliding spatial orientation, pattern sequencing, and visual discrimination.</p>
        </div>

        <div className="engines-grid">
          {/* Engine 1: Card Match */}
          <div className="engine-card featured-engine">
            <div className="engine-badge badge-orange">Engine 01</div>
            <div className="engine-header">
              <div className="engine-icon-wrap icon-bg-orange">
                <Grid size={28} />
              </div>
              <div>
                <h4>Card Match</h4>
                <span className="engine-sub">Visual Memory & Recall</span>
              </div>
            </div>
            <p className="engine-desc">
              Uncover face-down cards to match pairs of cartoon animals, space items, food, sports, numbers, and icons.
            </p>
            <div className="engine-tags">
              <span>3x4 Easy</span>
              <span>4x4 Medium</span>
              <span>4x5 Hard</span>
              <span>6 Themes</span>
            </div>
            <ul className="engine-bullets">
              <li><strong>Relaxed Mode:</strong> Play at your own pace with no timers or limits.</li>
              <li><strong>Timed Mode:</strong> Beat the countdown clock to clear the board!</li>
              <li><strong>Moves Mode:</strong> Sharpen focus by clearing the grid within limited card flips.</li>
            </ul>
          </div>

          {/* Engine 2: Sliding Tile */}
          <div className="engine-card">
            <div className="engine-badge badge-purple">Engine 02</div>
            <div className="engine-header">
              <div className="engine-icon-wrap icon-bg-purple">
                <Shuffle size={28} />
              </div>
              <div>
                <h4>Sliding Tile (15-Puzzle)</h4>
                <span className="engine-sub">Spatial & Numeric Logic</span>
              </div>
            </div>
            <p className="engine-desc">
              Tiles are scrambled on a grid with 1 open slot. Tap tiles adjacent to the space to slide them into sequential numeric order ($1 \to N$).
            </p>
            <div className="engine-tags">
              <span>Classic 15-Puzzle</span>
              <span>Single Tap Slide</span>
              <span>Move Counter</span>
            </div>
            <ul className="engine-bullets">
              <li>Slide tiles sequentially without lifting your eyes off the target grid.</li>
              <li>Tracks lowest move count and completion speed per level.</li>
            </ul>
          </div>

          {/* Engine 3: Pattern Repeat */}
          <div className="engine-card">
            <div className="engine-badge badge-blue">Engine 03</div>
            <div className="engine-header">
              <div className="engine-icon-wrap icon-bg-blue">
                <Repeat size={28} />
              </div>
              <div>
                <h4>Pattern Repeat (Simon Says)</h4>
                <span className="engine-sub">Sequence & Tone Memory</span>
              </div>
            </div>
            <p className="engine-desc">
              Watch glowing cartoon icons light up with distinct audio tones. Repeat the sequence in exact order. Each round adds +1 new step!
            </p>
            <div className="engine-tags">
              <span>Audio Tones</span>
              <span>Incremental Sequences</span>
              <span>High Focus</span>
            </div>
            <ul className="engine-bullets">
              <li>Tests short-term sequential memory and concentration.</li>
              <li>Dynamic glowing visual & sound feedback on every tap.</li>
            </ul>
          </div>

          {/* Engine 4: Odd One Out */}
          <div className="engine-card">
            <div className="engine-badge badge-green">Engine 04</div>
            <div className="engine-header">
              <div className="engine-icon-wrap icon-bg-green">
                <Eye size={28} />
              </div>
              <div>
                <h4>Odd One Out (Spot Difference)</h4>
                <span className="engine-sub">Visual Discrimination</span>
              </div>
            </div>
            <p className="engine-desc">
              A grid of themed icons appears. All icons look identical except one subtle variation (flipped accessory, eye color, or detail). Spot it fast!
            </p>
            <div className="engine-tags">
              <span>Fast Pace</span>
              <span>Subtle Variations</span>
              <span>Timer Challenge</span>
            </div>
            <ul className="engine-bullets">
              <li>Train split-second visual perception and detail scanning.</li>
              <li>Spot the odd tile before the countdown timer hits zero.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How To Play & Official Rules Section */}
      <div className="app-section-block">
        <div className="pane-header">
          <h3>How To Play & Official Rules</h3>
          <p>Comprehensive gameplay rules, grid metrics, and mode specifications for IQ Hit 2.</p>
        </div>

        <div className="rules-accordion">
          {/* Rule Card 1: Card Match */}
          <div className={`rule-accordion-card ${expandedRule === 'card-match' ? 'expanded' : ''}`}>
            <div 
              className="rule-card-header"
              onClick={() => setExpandedRule(expandedRule === 'card-match' ? '' : 'card-match')}
            >
              <div className="rule-header-left">
                <Grid className="text-orange" size={22} />
                <h4>Card Match Rules & Mechanics</h4>
              </div>
              {expandedRule === 'card-match' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {expandedRule === 'card-match' && (
              <div className="rule-card-body">
                <p><strong>Objective:</strong> Uncover all hidden matching pairs on the grid with the fewest flips or before the timer runs out.</p>
                
                <h5 className="rule-sub-title">Step-by-Step Instructions:</h5>
                <ol className="rule-list">
                  <li>Select your <strong>Difficulty Level</strong> (Easy, Medium, or Hard).</li>
                  <li>Select your preferred <strong>Card Theme</strong> (Animals, Space, Food, Numbers, Icons, Sports).</li>
                  <li>Choose your <strong>Game Mode</strong> (Relaxed, Timed, or Moves).</li>
                  <li>Tap two face-down cards to reveal their hidden icons.</li>
                  <li>If the icons match, they remain revealed! If they don't match, they flip back face-down after a brief delay.</li>
                  <li>Reveal all pairs on the board to trigger victory!</li>
                </ol>

                <h5 className="rule-sub-title">Grid Dimensions & Difficulty Breakdown:</h5>
                <div className="table-responsive">
                  <table className="rules-table">
                    <thead>
                      <tr>
                        <th>Difficulty Level</th>
                        <th>Grid Dimension</th>
                        <th>Total Cards</th>
                        <th>Number of Pairs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="pill pill-green">EASY</span></td>
                        <td>3 × 4 Grid</td>
                        <td>12 Cards</td>
                        <td>6 Pairs</td>
                      </tr>
                      <tr>
                        <td><span className="pill pill-blue">MEDIUM</span></td>
                        <td>4 × 4 Grid</td>
                        <td>16 Cards</td>
                        <td>8 Pairs</td>
                      </tr>
                      <tr>
                        <td><span className="pill pill-purple">HARD</span></td>
                        <td>4 × 5 Grid</td>
                        <td>20 Cards</td>
                        <td>10 Pairs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Rule Card 2: Daily Challenge */}
          <div className={`rule-accordion-card ${expandedRule === 'daily' ? 'expanded' : ''}`}>
            <div 
              className="rule-card-header"
              onClick={() => setExpandedRule(expandedRule === 'daily' ? '' : 'daily')}
            >
              <div className="rule-header-left">
                <Calendar className="text-purple" size={22} />
                <h4>Daily Challenge & Streak Rules</h4>
              </div>
              {expandedRule === 'daily' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {expandedRule === 'daily' && (
              <div className="rule-card-body">
                <p><strong>Objective:</strong> Complete unique daily puzzle challenges generated fresh every day of the calendar year!</p>
                <ul className="rule-list-bullet">
                  <li>Each day features a targeted goal (e.g., <em>"Find 6 Matches under 15 Moves!"</em> or <em>"Clear 4x4 grid in 40 Seconds!"</em>).</li>
                  <li>Track your <strong>Completed Wins</strong>, <strong>Win Rate %</strong>, <strong>Current Streak</strong>, and <strong>Max Win Streak</strong>.</li>
                  <li>Review your monthly progression directly in the interactive <strong>Daily Attempts Calendar Breakdown</strong>.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Live Playable Web Demo Section */}
      <div className="app-section-block">
        <MiniGameDemo />
      </div>

      {/* App Store Download CTA Card */}
      <div className="app-store-cta-box">
        <div className="cta-left">
          <h4>Get IQ Hit 2 - Mind Training Puzzle</h4>
          <p>Available on the iOS App Store. Download now to challenge your brain!</p>
        </div>
        <a 
          href={APP_STORE_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-appstore-hero"
        >
          <svg className="app-store-logo-icon" viewBox="0 0 384 512" width="18" height="18" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-13.7 69.5-34.3z"/>
          </svg>
          <span>Download on App Store</span>
          <ExternalLink size={15} />
        </a>
      </div>

      {/* Lightbox Modal */}
      <ScreenshotLightbox 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        screenshots={SCREENSHOTS}
        currentIndex={currentSsIndex}
        setCurrentIndex={setCurrentSsIndex}
      />
    </section>
  );
}
