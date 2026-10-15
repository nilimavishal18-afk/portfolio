import { useEffect, useState, type CSSProperties } from 'react'
import photo from './assets/nilima.jpg'
import { awards, education, experience, profile, projects, skills, stats } from './data'
import { useReveal } from './useReveal'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useReveal()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#top" className="logo" aria-label="Home">
            <span className="logo__mark">N</span>
            <span className="logo__text">Nilima Vishal</span>
          </a>
          <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav__actions">
            <button
              className="icon-btn"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            <button
              className="icon-btn nav__burger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero container">
          <div className="hero__copy reveal">
            <span className="pill">
              <span className="pill__dot" /> Open to new opportunities
            </span>
            <h1>
              Hello, I’m Nilima —<br />
              I make <em>complex</em> feel <em>simple.</em>
            </h1>
            <p className="lead">{profile.summary}</p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#work">
                View my work <span aria-hidden>→</span>
              </a>
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero__visual reveal">
            <div className="hero__blob" />
            <img src={photo} alt="Portrait of Nilima Vishal" className="hero__photo" />
            <div className="badge badge--top">
              <strong>{profile.role}</strong>
              <span>{profile.location}</span>
            </div>
            <div className="badge badge--bottom">
              🏆 <span>Best Innovation 2023</span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
          <div className="stat stat--logos">
            <span className="stat__label">Previously at</span>
            <span className="logos">Blue Yonder · GE Healthcare · TATA Elxsi · Red Baton</span>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section container">
          <div className="section__head reveal">
            <span className="eyebrow">Selected work</span>
            <h2>Projects I’m proud of</h2>
          </div>
          <div className="grid">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`card reveal ${i === 0 ? 'card--wide' : ''}`}
                style={{ '--accent': p.accent } as CSSProperties}
              >
                <div className="card__art" aria-hidden>
                  <span className="card__index">{String(i + 1).padStart(2, '0')}</span>
                  <div className="card__shape" />
                </div>
                <div className="card__body">
                  <div className="card__meta">
                    <span>{p.company}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                  <ul className="tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section container">
          <div className="section__head reveal">
            <span className="eyebrow">Experience</span>
            <h2>Where I’ve worked</h2>
          </div>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="timeline__item reveal">
                <span className="timeline__period">{job.period}</span>
                <div>
                  <h3>
                    {job.company} <span className="muted">— {job.role}</span>
                  </h3>
                  <ul>
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* About: skills, awards, education */}
        <section id="about" className="section container">
          <div className="section__head reveal">
            <span className="eyebrow">About</span>
            <h2>Craft, tools & recognition</h2>
          </div>
          <div className="bento">
            <div className="tile tile--skills reveal">
              <h3>What I do</h3>
              <ul className="chips">
                {skills.craft.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <h3>Tools</h3>
              <ul className="chips chips--soft">
                {skills.tools.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="tile tile--awards reveal">
              <h3>Recognition</h3>
              <ul className="awards">
                {awards.map((a) => (
                  <li key={a.title}>
                    <span className="awards__icon">★</span>
                    <div>
                      <strong>{a.title}</strong>
                      <span>{a.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tile tile--edu reveal">
              <h3>Education</h3>
              <strong>{education.degree}</strong>
              <span>{education.school}</span>
              <span className="muted">{education.years}</span>
            </div>
            <div className="tile tile--ai reveal">
              <h3>AI-assisted workflow</h3>
              <p>
                I use Figma Make, v0 and Claude to prototype faster, explore more directions and
                get real interactions in front of users sooner.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section container">
          <div className="contact reveal">
            <span className="eyebrow eyebrow--light">Contact</span>
            <h2>Let’s build something people love to use.</h2>
            <p>Based in {profile.location} and open to full-time roles and collaborations.</p>
            <div className="hero__cta">
              <a className="btn btn--light" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn btn--outline-light" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Nilima Vishal</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}
