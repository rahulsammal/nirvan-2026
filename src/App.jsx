import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, CalendarDays, ChevronRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import data from './data/nirvan26-data.json'

const filters = ['ALL', 'BUILD', 'SECURITY', 'PLAY', 'ADVENTURE', 'LEARN']
const galleryGroups = [
  { id: 'hackathon', number: '01', title: 'Hackathon', note: 'Build room', images: ['20260418_095451.jpg', '20260418_101029.jpg', '20260418_110744.jpg'] },
  { id: 'ctf', number: '02', title: 'CTF', note: 'Cyber arena', images: ['DSC_9762.JPG', 'DSC_9766.JPG', 'DSC_9778.JPG'] },
  { id: 'esport', number: '03', title: 'E-sports', note: 'Game on', images: ['DSC08158.JPG', 'DSC08175.JPG', 'DSC_9816.JPG'] },
  { id: 'treasure-hunt', number: '04', title: 'Treasure Hunt', note: 'The hunt', images: ['DSC_0090.JPG', 'DSC_0100.JPG', 'DSC_0111.JPG'] },
]

function App() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const festivalStart = new Date('2026-10-12T09:00:00+05:30')
    const updateCountdown = () => {
      const remaining = Math.max(0, festivalStart.getTime() - Date.now())
      const seconds = Math.floor(remaining / 1000)
      setTimeLeft({
        days: Math.floor(seconds / 86400),
        hours: Math.floor((seconds % 86400) / 3600),
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: seconds % 60,
      })
    }
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const visibleEvents = activeFilter === 'ALL'
    ? data.events
    : data.events.filter((event) => event.type === activeFilter)

  const openRegistration = () => {
    setRegistrationOpen(true)
    setMenuOpen(false)
    setSelectedEvent(null)
  }

  const submitRegistration = (event) => {
    event.preventDefault()
    setRegistrationOpen(false)
    setRegistered(true)
  }

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Nirvan 26 home">
          <span className="brand-mark">N</span><span>NIRVAN</span><b>'26</b>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['about', 'events', 'schedule', 'speakers', 'gallery', 'contact'].map((link) => (
            <a href={`#${link}`} key={link} onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
          <button className="nav-register" onClick={openRegistration}>Register <ArrowUpRight size={15} /></button>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> GEHU / TECHNICAL FEST / 2026</p>
            <h1>Make noise.<br /><em>Make</em> <strong>future.</strong></h1>
            <p className="hero-lede">Nirvan is a two-day collision of sharp minds, bold builds and joyful competition. Bring a question. Leave with a signal.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#events">Find your arena <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#about">Why Nirvan <ChevronRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div><span>WHEN</span><b>12—13 OCT<br />2026</b></div>
              <div><span>WHERE</span><b>GEHU<br />DEHRADUN</b></div>
              <div><span>FORMAT</span><b>ON CAMPUS<br />IN PERSON</b></div>
            </div>
            <div className="countdown" aria-label="Countdown to Nirvan 26">
              {Object.entries(timeLeft).map(([unit, value]) => <div key={unit}><strong>{String(value).padStart(2, '0')}</strong><span>{unit}</span></div>)}
            </div>
          </div>
          <div className="hero-poster">
            <div className="poster-rings" aria-hidden="true"><i /><i /><i /></div>
            <div className="poster-note">NRVN / 26<br /><span>VOL. 01</span></div>
            <div className="poster-core"><span>N</span><small>26</small></div>
            <div className="poster-stamp">IDEAS<br />IN MOTION</div>
            <div className="poster-index">01<br /><span>04</span></div>
          </div>
        </section>

        <div className="ticker"><span>BUILD</span><i /> <span>BREAK</span><i /> <span>PLAY</span><i /> <span>LEARN</span><i /> <span>REPEAT</span></div>

        <section className="intro section-grid" id="about">
          <p className="section-kicker">01 / THE WHY</p>
          <div><h2>A festival for the <em>curious.</em></h2><p className="body-copy">Nirvan '26 is where prototypes get real, teams find their rhythm and technology feels human again. One campus, five ways to make your mark.</p></div>
          <div className="stat-row"><div><strong>05</strong><span>ARENAS</span></div><div><strong>02</strong><span>DAYS</span></div><div><strong>₹55K</strong><span>IN PRIZES</span></div></div>
        </section>

        <section className="events-section section-grid" id="events">
          <div className="section-heading"><div><p className="section-kicker">02 / EVENT ARENA</p><h2>Pick a <em>frequency.</em></h2></div><p className="section-aside">Different energy. Same invitation:<br />show up and make something.</p></div>
          <div className="filter-row">{filters.map((filter) => <button className={activeFilter === filter ? 'filter active' : 'filter'} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
          <div className="event-grid">{visibleEvents.map((event) => <article className="event-card" key={event.id}>
            <div className="event-image"><img src={event.image} alt={`${event.name} poster`} /><span>{event.number} / {event.type}</span></div>
            <div className="event-card-body"><div className="event-title"><h3>{event.name}</h3><span>{event.short}</span></div><p>{event.description}</p><div className="event-facts"><span><b>DATE</b>{event.date}</span><span><b>TEAM</b>{event.team}</span><span><b>FEE</b>{event.fee}</span><span><b>PRIZE</b>{event.prize}</span></div><button className="details-link" onClick={() => setSelectedEvent(event)}>View full details <ArrowUpRight size={16} /></button></div>
          </article>)}</div>
        </section>

        <section className="schedule section-grid" id="schedule">
          <div><p className="section-kicker">03 / THE RHYTHM</p><h2>Two days.<br /><em>Full signal.</em></h2></div>
          <div className="schedule-list">{data.schedule.map((item) => <div className="schedule-item" key={`${item.day}-${item.time}-${item.label}`}><span className="schedule-day">{item.day}</span><strong>{item.time}</strong><span>{item.label}</span><CalendarDays size={16} /></div>)}</div>
        </section>

        <section className="speakers-section section-grid" id="speakers">
          <div className="section-heading"><div><p className="section-kicker">04 / SPEAKERS</p><h2>People with <em>signal.</em></h2></div><p className="section-aside">Three perspectives on building<br />what comes next.</p></div>
          <div className="speaker-grid">{data.speakers.map((speaker) => <article className="speaker-card" key={speaker.name}><img src={speaker.image} alt={`${speaker.name}, ${speaker.role}`} /><div><p className="section-kicker">{speaker.role} / {speaker.organization}</p><h3>{speaker.name}</h3><p>{speaker.bio}</p></div></article>)}</div>
        </section>

        <section className="gallery-section section-grid" id="gallery">
          <div className="section-heading"><div><p className="section-kicker">04 / FIELD NOTES</p><h2>Seen at <em>Nirvan.</em></h2></div><p className="section-aside">A few frames from the energy<br />we are bringing back.</p></div>
          <div className="gallery-groups">{galleryGroups.map((group) => <section className="gallery-group" key={group.id} aria-labelledby={`${group.id}-gallery-title`}><div className="gallery-group-heading"><p className="section-kicker">{group.number} / {group.note}</p><h3 id={`${group.id}-gallery-title`}>{group.title}</h3></div><div className="gallery-grid">{group.images.map((image, index) => <figure key={image} onClick={() => setLightboxImage({ src: `/assets/gallery/${group.id}/${image}`, alt: `${group.title} moment ${index + 1}` })}><img src={`/assets/gallery/${group.id}/${image}`} alt={`${group.title} moment ${index + 1}`} loading="lazy" /><figcaption><span>0{index + 1}</span> {group.note}<ArrowUpRight size={16} /></figcaption></figure>)}</div></section>)}</div>
        </section>

        <section className="sponsors-section section-grid" id="sponsors">
          <div className="section-heading"><div><p className="section-kicker">06 / SPONSORS</p><h2>Backed by <em>builders.</em></h2></div></div>
          <div className="sponsor-wall"><div><span>TITLE SPONSORS</span><strong>{data.sponsors.title.join('  •  ')}</strong></div><div><span>GOLD SPONSORS</span><strong>{data.sponsors.gold.join('  •  ')}</strong></div><div><span>COMMUNITY PARTNERS</span><strong>{data.sponsors.community.join('  •  ')}</strong></div></div>
        </section>

        <section className="contact-section section-grid" id="contact"><div><p className="section-kicker">07 / CONTACT + VENUE</p><h2>Find your way<br /><em>here.</em></h2></div><div className="contact-list"><a href="mailto:nirvan@gehu.in"><Mail size={18} />nirvan@gehu.in</a><a href="tel:+911256489632"><Phone size={18} />+91 1256489632</a><span><MapPin size={18} />GEHU Campus, Dehradun</span></div></section>
        <section className="register-band" id="register"><div><p className="section-kicker">08 / YOUR MOVE</p><h2>Bring the unfinished<br /><em>thing.</em></h2></div><button className="button button-light" onClick={openRegistration}>Register for Nirvan <ArrowUpRight size={17} /></button></section>
      </main>

      <footer><a className="brand" href="#home"><span className="brand-mark">N</span><span>NIRVAN</span><b>'26</b></a><span>Where ideas become inevitable.</span><span>© 2026 GEHU</span></footer>

      {selectedEvent && <div className="modal-backdrop" role="presentation" onClick={(event) => event.target === event.currentTarget && setSelectedEvent(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="event-title"><button className="modal-close" onClick={() => setSelectedEvent(null)} aria-label="Close event details"><X /></button><p className="section-kicker">{selectedEvent.number} / {selectedEvent.type}</p><h2 id="event-title">{selectedEvent.name}</h2><p>{selectedEvent.description}</p><div className="modal-facts"><span><b>DATE</b>{selectedEvent.date} 2026</span><span><b>TIME</b>{selectedEvent.time}</span><span><b>VENUE</b>{selectedEvent.venue}</span><span><b>TEAM</b>{selectedEvent.team} people</span><span><b>FEE</b>{selectedEvent.fee}</span><span><b>ELIGIBILITY</b>{selectedEvent.eligibility}</span></div><div className="rules"><b>RULES</b><ul>{selectedEvent.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul></div><button className="button button-dark" onClick={openRegistration}>Reserve a spot <ArrowUpRight size={17} /></button></div></div>}
      {registrationOpen && <div className="modal-backdrop" role="presentation" onClick={(event) => event.target === event.currentTarget && setRegistrationOpen(false)}><form className="modal registration-modal" onSubmit={submitRegistration}><button type="button" className="modal-close" onClick={() => setRegistrationOpen(false)} aria-label="Close registration form"><X /></button><p className="section-kicker">NIRVAN '26 / REGISTRATION</p><h2>Save your <em>spot.</em></h2><p>Tell us who is joining the signal. This is a static registration preview for the fest.</p><label>Name<input required name="name" placeholder="Your full name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Choose an arena<select name="event" defaultValue="Hackathon">{data.events.map((event) => <option key={event.id}>{event.name}</option>)}</select></label><button className="button button-dark" type="submit">Submit registration <ArrowUpRight size={17} /></button></form></div>}
      {lightboxImage && <div className="lightbox" role="presentation" onClick={() => setLightboxImage(null)}><button className="modal-close" onClick={() => setLightboxImage(null)} aria-label="Close gallery image"><X /></button><img src={lightboxImage.src} alt={lightboxImage.alt} /></div>}
      {registered && <div className="toast" role="status">Registration interest noted. We will see you at Nirvan.</div>}
    </div>
  )
}

export default App
