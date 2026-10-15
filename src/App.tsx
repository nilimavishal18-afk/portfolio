import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import photo from './assets/nilima.jpg'
import { awards, caseStudies, experience, principles, profile, toolkit, type CaseStudy } from './data'
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

/** Hash routing (#/work/<slug>) keeps deep links working on GitHub Pages. */
function useHash() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

const accentStyle = (accent: string) => ({ '--accent': accent }) as CSSProperties

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const hash = useHash()

  const slug = hash.startsWith('#/work/') ? hash.slice('#/work/'.length) : null
  const study = caseStudies.find((c) => c.slug === slug) ?? null
  useReveal(study?.slug ?? 'home')

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

  // Case study → top of page; section anchor → scroll to it after the home view renders.
  useEffect(() => {
    if (study) {
      window.scrollTo({ top: 0 })
      document.title = `${study.title} — Nilima Vishal`
      return
    }
    document.title = 'Nilima Vishal — Senior UX Designer'
    const id = hash.replace('#', '')
    if (id && !id.startsWith('/')) document.getElementById(id)?.scrollIntoView()
  }, [hash, study])

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

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
            <a href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              Résumé ↗
            </a>
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

      <main id="top">{study ? <CaseStudyPage study={study} /> : <Home />}</main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} Nilima Vishal</span>
        <div className="footer__links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
        </div>
      </footer>
    </>
  )
}

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero__copy reveal">
          <span className="pill">
            <span className="pill__dot" /> {profile.role} · {profile.location}
          </span>
          <h1>
            I make <em>complex</em> enterprise products feel <em>simple.</em>
          </h1>
          <p className="lead">{profile.intro}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#work">
              View case studies <span aria-hidden>↓</span>
            </a>
            <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
              Résumé ↗
            </a>
          </div>
          <p className="hero__companies">
            Previously at <strong>Blue Yonder</strong> · <strong>GE Healthcare</strong> · <strong>TATA Elxsi</strong>
          </p>
        </div>
        <div className="hero__visual reveal">
          <div className="hero__blob" />
          <img src={photo} alt="Portrait of Nilima Vishal" className="hero__photo" />
          <div className="badge badge--bottom">
            🏆 <span>3 design awards</span>
          </div>
        </div>
      </section>

      <section id="work" className="section container">
        <div className="section__head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Case studies</h2>
        </div>
        <div className="cases">
          {caseStudies.map((c, i) => (
            <a key={c.slug} href={`#/work/${c.slug}`} className="case reveal" style={accentStyle(c.accent)}>
              <div className="case__art" aria-hidden>
                <span className="case__index">{String(i + 1).padStart(2, '0')}</span>
                <div className="case__shape" />
                <div className="case__shape case__shape--2" />
              </div>
              <div className="case__body">
                <div className="case__meta">
                  <span>{c.company}</span>
                  <span>{c.year}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <dl className="case__facts">
                  <div>
                    <dt>Role</dt>
                    <dd>{c.role.split(' — ')[0]}</dd>
                  </div>
                  <div>
                    <dt>Domain</dt>
                    <dd>{c.domain}</dd>
                  </div>
                </dl>
                {c.highlight && <span className="case__highlight">★ {c.highlight}</span>}
                <span className="case__cta">
                  Read case study <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="section container">
        <div className="section__head reveal">
          <span className="eyebrow">How I work</span>
          <h2>Principles I design by</h2>
        </div>
        <div className="principles">
          {principles.map((p, i) => (
            <div key={p.title} className="principle reveal">
              <span className="principle__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="about-grid">
          <div className="tile reveal">
            <h3 className="tile__label">Experience</h3>
            <ul className="xp">
              {experience.map((x) => (
                <li key={x.company}>
                  <div>
                    <strong>{x.company}</strong>
                    <span>{x.role}</span>
                  </div>
                  <span className="xp__period">{x.period}</span>
                </li>
              ))}
            </ul>
            <a className="text-link" href={profile.resume} target="_blank" rel="noreferrer">
              Full résumé ↗
            </a>
          </div>
          <div className="tile reveal">
            <h3 className="tile__label">Recognition</h3>
            <ul className="awards">
              {awards.map((a) => (
                <li key={a.title}>
                  <span className="awards__year">{a.year}</span>
                  <div>
                    <strong>{a.title}</strong>
                    <span>{a.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="tile__label tile__label--spaced">Toolkit</h3>
            <ul className="chips">
              {toolkit.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}

function CaseStudyPage({ study }: { study: CaseStudy }) {
  const index = caseStudies.findIndex((c) => c.slug === study.slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <article className="study" style={accentStyle(study.accent)}>
      <header className="study__hero">
        <div className="container">
          <a href="#work" className="back-link reveal">
            ← All work
          </a>
          <span className="eyebrow reveal">
            {study.company} · {study.year}
          </span>
          <h1 className="reveal">{study.title}</h1>
          <p className="lead reveal">{study.summary}</p>
          {study.highlight && <span className="case__highlight reveal">★ {study.highlight}</span>}
          <dl className="study__facts reveal">
            <div>
              <dt>Role</dt>
              <dd>{study.role}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{study.team}</dd>
            </div>
            <div>
              <dt>Domain</dt>
              <dd>{study.domain}</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>{study.year}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="container study__content">
        {study.nda && (
          <p className="nda reveal">
            Some details are abstracted to respect confidentiality. Happy to walk through the full work in
            conversation.
          </p>
        )}

        <StudySection title="Context">
          <p>{study.context}</p>
        </StudySection>

        <StudySection title="The problem">
          <p className="study__problem">{study.problem}</p>
        </StudySection>

        <StudySection title="My role">
          <ul className="checklist">
            {study.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </StudySection>

        <StudySection title="Approach">
          <ol className="steps">
            {study.approach.map((s, i) => (
              <li key={s.title}>
                <span className="steps__num">{i + 1}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </StudySection>

        {study.decisions && (
          <StudySection title="Key decisions">
            <div className="decisions">
              {study.decisions.map((d) => (
                <div key={d.title} className="decision">
                  <h4>{d.title}</h4>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </StudySection>
        )}

        <StudySection title="Outcome">
          <ul className="outcomes">
            {study.outcomes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </StudySection>

        {study.reflection && (
          <StudySection title="Reflection">
            <p>{study.reflection}</p>
          </StudySection>
        )}

        <a href={`#/work/${next.slug}`} className="next reveal" style={accentStyle(next.accent)}>
          <span className="eyebrow">Next case study</span>
          <span className="next__title">
            {next.title} <span aria-hidden>→</span>
          </span>
        </a>
      </div>
    </article>
  )
}

function StudySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="study__section reveal">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="contact reveal">
        <span className="eyebrow eyebrow--light">Contact</span>
        <h2>Let’s talk about your next complex product.</h2>
        <p>Open to senior and lead product design roles.</p>
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
  )
}
