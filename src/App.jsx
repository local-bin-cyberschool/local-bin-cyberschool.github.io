import { startTransition, useState } from 'react';

const tracks = {
  red: {
    label: 'Offensive Operations',
    badge: 'BREAK',
    summary:
      'Active exploitation, adversary tradecraft, and AI-assisted offensive workflows focused on real-world access and persistence.',
    modules: [
      'Registered Adversarial Operator — You have 4 hours to gain a foothold on a non-linear network while automated defenses actively terminate access. Failure to pivot within 30 minutes results in failure.',
      'Advanced Exploitation Professional — No automated tools. You are given a patched target and must develop a working exploit or bypass that avoids signature-based detection.',
      'Master of AI-Augmented Offense — You orchestrate LLM-assisted workflows to conduct reconnaissance and execute a social engineering campaign capable of bypassing modern filtering systems.',
    ],
  },

  blue: {
    label: 'Defensive Operations',
    badge: 'DEFEND',
    summary:
      'Detection, incident response, and system hardening performed under active adversarial conditions.',
    modules: [
      'Integrated Defense Practitioner — You are placed into a misconfigured, actively compromised environment and must stabilize and secure it while an adversary maintains persistence.',
      'Threat Hunting Specialist — You must identify a hidden adversary using logs, telemetry, and forensic analysis without predefined indicators.',
      'Rapid Response Architect — You lead response during an active breach, coordinating containment and translating technical impact into business risk.',
    ],
  },

  physical: {
    label: 'Physical & Hardware Security',
    badge: 'LAYER 0',
    summary:
      'Security at the physical and hardware layer where software controls are insufficient.',
    modules: [
      'Hardware Security Engineer — You are given a physical PCB and must extract firmware or identify hardware-level compromise through direct interface access.',
      'Physical Access Architect — You must bypass physical access controls and establish internal network presence during a controlled breach simulation.',
    ],
  },

  supply: {
    label: 'Supply Chain & DevSecOps',
    badge: 'PIPELINE',
    summary:
      'Securing dependencies, build systems, and deployment pipelines before code reaches production.',
    modules: [
      'Supply Chain Integrity Specialist — You must identify a compromised dependency deep within a production dependency tree and propose a remediation strategy that preserves system stability.',
      'Certified Deployment Engineer — You secure CI/CD pipelines against hijacking and prevent secret exposure under simulated insider threat conditions.',
    ],
  },

  ot: {
    label: 'Industrial & Critical Infrastructure',
    badge: 'OT',
    summary:
      'Operational technology security where system compromise results in physical impact.',
    modules: [
      'Industrial Control Systems Strategist — You defend infrastructure where uptime is critical; any disruption caused by your actions is considered failure.',
      'Operational Technology Operator — You must detect manipulation of sensor data where telemetry appears normal but physical systems are operating outside safe parameters.',
    ],
  },
};

const principles = [
  {
    title: 'Start with the goal',
    body:
      'Students begin by defining why they are here: first role, skill reset, portfolio depth, or transition into a more serious security path.',
  },
  {
    title: 'Match the experience',
    body:
      'The curriculum does not flatten everyone into one track. Material is framed around what the learner already knows and what they need next.',
  },
  {
    title: 'Meet the instructor',
    body:
      'Each certification begins with a direct introduction to the instructor so students understand the perspective, background, and standards behind the material.',
  },
];

const signals = [
  'Free certifications with practical standards',
  'Blue team and offensive tracks built side by side',
  'Latest techniques explained in a teachable way',
  'Open, volunteer-led, and mission-first',
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState('blue');

  const track = tracks[activeTrack];

  function handleTrackChange(nextTrack) {
    startTransition(() => {
      setActiveTrack(nextTrack);
    });
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="page-shell">
      <div className="page-noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            [root]
          </span>
          <span className="brand-name">~\.local\bin\cyberschool</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav
          id="site-nav"
          className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`}
          aria-label="Primary"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>
          <a href="#model" onClick={closeMenu}>
            Learning Model
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">free cybersecurity certifications</p>
            <h1>
              Learn blue team defense and penetration testing with the context
              serious work actually requires.
            </h1>
            <p className="hero-text">
              ~\.local\bin\cyberschool exists to make strong cybersecurity
              education public, rigorous, and understandable. The goal is not
              content volume. The goal is depth, direction, and instructors who
              can explain why each technique matters.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#about">
                Read our approach
              </a>
              <a className="secondary-link" href="#certifications">
                Explore certifications
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="signal-card">
              <p className="signal-label">mission signals</p>
              <ul>
                {signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
            <div className="diagram-card">
              <div className="diagram-ring diagram-ring-large" />
              <div className="diagram-ring diagram-ring-small" />
              <div className="diagram-node node-one">goal</div>
              <div className="diagram-node node-two">experience</div>
              <div className="diagram-node node-three">instructor intro</div>
              <div className="diagram-center">understanding</div>
            </div>
          </div>
        </section>

        <section className="content-section" id="about">
          <div className="section-heading">
            <p className="section-kicker">About us</p>
            <h2>Teaching the whole picture, not isolated tricks.</h2>
          </div>
          <div className="about-grid">
            <article className="story-card story-card-wide">
              <p>
                Cybersecurity education often swings between two weak extremes:
                shallow marketing language or fragmented technical material with
                no narrative. This organization is structured to avoid both.
              </p>
              <p>
                Students should leave with a complete understanding of the goal
                behind the work, the experience level expected of them, and the
                human perspective of the instructor leading the certification.
              </p>
            </article>
            <article className="story-card">
              <span className="story-index">01</span>
              <h3>Mission</h3>
              <p>
                Offer free access to blue team and penetration testing
                certifications without treating quality as a paid upgrade.
              </p>
            </article>
            <article className="story-card">
              <span className="story-index">02</span>
              <h3>Method</h3>
              <p>
                Use current techniques, but teach them through decision-making,
                tradeoffs, and operational context instead of trend-chasing.
              </p>
            </article>
            <article className="story-card">
              <span className="story-index">03</span>
              <h3>Outcome</h3>
              <p>
                Build learners who can reason about systems, write clearly
                about risk, and understand the work behind the title.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section certifications" id="certifications">
          <div className="section-heading">
            <p className="section-kicker">Certifications</p>
            <h2>Two tracks, one standard of depth.</h2>
          </div>
          <div className="cert-grid">
            <div className="track-switcher" role="tablist" aria-label="Tracks">
              {Object.entries(tracks).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  id={`tab-${key}`}
                  aria-controls={`panel-${key}`}
                  aria-selected={activeTrack === key}
                  className={
                    activeTrack === key
                      ? 'track-tab track-tab-active'
                      : 'track-tab'
                  }
                  onClick={() => handleTrackChange(key)}
                >
                  <span>{item.label}</span>
                  <small>{item.badge}</small>
                </button>
              ))}
            </div>

            <article
              className="track-panel"
              id={`panel-${activeTrack}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTrack}`}
            >
              <p className="track-label">{track.badge}</p>
              <h3>{track.label}</h3>
              <p className="track-summary">{track.summary}</p>
              <ul className="track-list">
                {track.modules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section" id="model">
          <div className="section-heading">
            <p className="section-kicker">Learning model</p>
            <h2>A certification structure built around orientation first.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Build with us, learn with us, or follow the work.</h2>
            </div>
            <a className="primary-link" href="mailto:cyberschool.exe@gmail.com">
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
