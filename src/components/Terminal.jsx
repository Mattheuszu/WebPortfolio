import Terminal from './Terminal'

const info = [
    { key: 'name', value: 'Denys Shulzhenko (@Mattheuszu)' },
    { key: 'age', value: '20' },
    { key: 'location', value: 'Sundsvall, Sverige' },
    { key: 'origin', value: 'Kharkiv, Ukraina' },
    { key: 'role', value: 'Aspiring SOC Analyst · Blue Team' },
    { key: 'education', value: 'KPI — Cybersäkerhet (spec. 125), examen 2027' },
    { key: 'spoken', value: 'Ryska, Ukrainska · Engelska (B2–C1) · Svenska' },
    { key: 'tools', value: 'Kali Linux, Nmap, Wireshark, Python' },
]

const timeline = [
    {
        hash: 'a1f9c3e',
        date: '2025–nu',
        text: 'Permobil — montering på produktionslinje',
    },
    {
        hash: '7d2b8e1',
        date: '2025',
        text: '★ Hackathon Sundsvall (Fostira x AI) — 3:e plats',
        highlight: true,
    },
    {
        hash: 'e4c71a0',
        date: '2024',
        text: 'Hedbergska Gymnasiet, Sundsvall — tre nationella prov',
    },
    {
        hash: 'b93f2d4',
        date: '2022–nu',
        text: 'Kharkiv Polytechnic Institute — datavetenskap → cybersäkerhet',
    },
    {
        hash: '5c0a8f7',
        date: '2021–2022',
        text: 'Kharkiv Computer & Technology College — C++, Python, Linux',
    },
]

const learning = [
    'Hack The Box — Junior Cybersecurity Analyst',
    'TryHackMe — SOC Level 1',
]

function About() {
    return (
        <section id="om">
            <h2>Om mig</h2>

            <Terminal title="denys@portfolio: ~">
                <p className="cmd">
                    <span className="prompt-sign">$</span> cat about.txt
                </p>
                <p className="bio">
                    👋 Hej! Jag heter Denys, är 20 år och kommer från Kharkiv i Ukraina.
                    Sedan tre år bor jag i Sundsvall. Jag studerar cybersäkerhet vid
                    Kharkiv Polytechnic Institute och siktar på en roll som SOC-analytiker
                    inom Blue Team.
                </p>
                <p className="bio">
                    Jag började inte med teknik för att någon sa åt mig — jag började för
                    att jag inte kunde sluta. Det som startade med C++ har blivit ett
                    intresse för hur system attackeras och hur man skyddar dem. Vid sidan
                    av studier och jobb delar jag mina säkerhetsprojekt på GitHub och
                    LinkedIn.
                </p>

                <p className="cmd">
                    <span className="prompt-sign">$</span> neofetch
                </p>
                <ul className="info-list">
                    {info.map((item) => (
                        <li key={item.key}>
                            <span className="info-key">{item.key}</span>
                            <span className="info-value">{item.value}</span>
                        </li>
                    ))}
                </ul>

                <p className="cmd">
                    <span className="prompt-sign">$</span> git log --oneline
                </p>
                <ul className="timeline">
                    {timeline.map((item) => (
                        <li key={item.hash} className={item.highlight ? 'highlight' : ''}>
                            <span className="t-graph">*</span>
                            <span className="t-hash">{item.hash}</span>
                            <span className="t-date">({item.date})</span>
                            <span className="t-text">{item.text}</span>
                        </li>
                    ))}
                </ul>

                <p className="cmd">
                    <span className="prompt-sign">$</span> cat learning.log
                </p>
                <ul className="learning">
                    {learning.map((course) => (
                        <li key={course}>
                            <span className="status">[pågående]</span> {course}
                        </li>
                    ))}
                </ul>

                <p className="cmd">
                    <span className="prompt-sign">$</span>{' '}
                    <span className="cursor">█</span>
                </p>
            </Terminal>
        </section>
    )
}

export default About