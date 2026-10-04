const info = [
    { key: 'name', value: 'Denys (@Mattheuszu)' },
    { key: 'age', value: '20' },
    { key: 'location', value: 'Sverige' },
    { key: 'education', value: 'KHPI National Polytechnic Institute' },
    { key: 'focus', value: 'Cybersäkerhet, webbutveckling, programvaruutveckling' },
    { key: 'languages', value: 'C++, Python, C#, JavaScript' },
    { key: 'currently', value: 'Hack The Box/Hackviser/TryHackMe' },
]
function About() {
    return (
        <section id="om">
            <h2>About Me</h2>

            <div className="terminal">
                <div className="terminal-bar">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="terminal-title">denys@portfolio: ~</span>
                </div>

                <div className="terminal-body">
                    <p className="cmd">
                        <span className="prompt-sign">$</span> cat about.txt
                    </p>
                    <p className="bio">
                        👋 Hej! Jag heter Denys, är 20 år och kommer från Kharkiv i Ukraina.
                        Jag har bott i Sverige i tre år och bor i dag i Sundsvall, där jag
                        kombinerar studier med jobb på Permobil. Mitt mål är att arbeta inom{' '}
                        <span className="hl">Cybersäkerhet/Programutvecklare/Programvaruutveckling</span> —
                        arbeta med utmanande uppgifter, förverkliga och komma med idéer,
                        samarbeta i teamet och hitta lösningar.
                    </p>

                    <p className="bio">
                        Jag började inte med teknik för att någon sa åt mig — jag började för att
                        jag inte kunde sluta. Det som startade med C++ på college i Kharkiv har
                        vuxit till en bred grund i Python, C#, SQL och webbutveckling. I dag
                        studerar jag <span className="hl">cybersäkerhet och informationsskydd</span>{' '}
                        vid Kharkiv Polytechnic Institute, med ett år kvar till examen. Mina
                        tidigare studier i datavetenskap är validerade i Sverige.
                    </p>

                    <p className="bio">
                        Jag lär mig bäst genom att bygga. Jag har tagit{' '}
                        <span className="hl">3:e plats på ett AI-hackathon i Sundsvall</span>,
                        byggt en phishing-analysator med Gmail API och Claude, och tränar på
                        Hack The Box och TryHackMe (SOC Level 1) på fritiden. Det jag lär mig
                        delar jag öppet på GitHub och LinkedIn.
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
                        <span className="prompt-sign">$</span>{' '}
                        <span className="cursor">█</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
