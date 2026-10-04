const contacts = [
    {name: 'Email', url: 'mailto:den4iksama@gmail.com'},
    {name: 'GitHub', url: 'https://github.com/Mattheuszu'},
    {name: 'LinkedIn', url: 'https://www.linkedin.com/in/denys-shulzhenko-b46991358/'},
]

function Contacts() {
    return (
        <section>
            <h2>Contacts</h2>
            <p>Vill du höra av dig? Skicka gärna ett meddelande till mig!</p>
            <div className="contact-links">
                {contacts.map((contact) => (
                    <a
                        key={contact.name}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contact.name}
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Contacts