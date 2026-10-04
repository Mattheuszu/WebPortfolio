const links = [
    { href: '#om', label: 'Om mig' },
    { href: '#skills', label: 'Kompetenser' },
    { href: '#projects', label: 'Projekt' },
    { href: '#contact', label: 'Kontakt' },
]

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#" className="logo">~/denys</a>
            <ul className="nav-links">
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar