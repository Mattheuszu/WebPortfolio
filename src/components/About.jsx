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
                        👋 Hej! Jag är en självlärd utvecklare och blivande cybersäkerhetsanalytiker.
                        Jag började inte med teknik för att någon sa åt mig att göra det – jag
                        började för att jag inte kunde sluta.
                        Just nu läser jag en utbildning i cybersäkerhet, har en examen i datavetenskap och
                        brinner för programmering.
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
