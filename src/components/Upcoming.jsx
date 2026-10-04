import { useState, useEffect } from 'react'
import Terminal from './Terminal'

const events = [
    {
        name: 'EUDIS Defence Hackathon 2026',
        city: 'Linköping',
        dates: '15–17 oktober 2026',
        start: '2026-10-15',
        end:  '2026-10-17',
        host:  'Linköpings universitet',
        theme: 'Autonomy on the Battlefield',
        tracks: [
            'Navigation utan GNSS',
            'Koordinering av autonoma svärmar',
            'Saab Local Challenge',
        ],
        link: 'https://liu.se/en/event/eudis-defence-hackathon-2026-sweden',
    },
]

function Countdown({ start, end }) {
    const [now, setNow] = useState(Date.now())

    useEffect(() => {
        const timer = setInterval(() => setNow(Date.now()), 1000)
        return () => clearInterval(timer)
    }, [])

    const startTime = new Date(start + 'T09:00:00').getTime()
    const endTime = new Date(end + 'T23:59:59').getTime()

    if (now > endTime) {
        return <span className="ev-done">✓ Genomfört</span>
    }
    if (now >= startTime) {
        return <span className="ev-live">● LIVE — pågår just nu</span>
    }

    const diff = startTime - now
    const days = Math.floor(diff / 86400000)
    const hours = Math.floor(diff / 3600000) % 24
    const minutes = Math.floor(diff / 60000) % 60
    const seconds = Math.floor(diff / 1000) % 60
    const pad = (n) => String(n).padStart(2, '0')

    return (
        <span>
      T-minus{' '}
            <span className="ev-time">
        {days}d {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </span>
    </span>
    )
}

function Upcoming() {
    return (
        <section id="plans">
            <h2>Kommande</h2>

            <Terminal title="denys@portfolio: ~/plans">
                <p className="cmd">
                    <span className="prompt-sign">$</span> crontab -l
                </p>

                {events.map((event) => (
                    <div key={event.name} className="event">
                        <p className="event-cron">
                            # {event.dates} · {event.city}
                        </p>
                        <h3 className="event-name">{event.name}</h3>
                        <p className="event-meta">
                            Arrangör: {event.host} · Tema: {event.theme}
                        </p>

                        <ul className="tech-list">
                            {event.tracks.map((track) => (
                                <li key={track}>{track}</li>
                            ))}
                        </ul>

                        <p className="event-countdown">
                            <Countdown start={event.start} end={event.end} />
                        </p>

                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                            $ open event-info →
                        </a>
                    </div>
                ))}
            </Terminal>
        </section>
    )
}

export default Upcoming