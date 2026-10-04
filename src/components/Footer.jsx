function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <p className="footer-status">
                <span className="status-dot"></span> Öppen för praktik och jobb
            </p>
            <p>© {year} Denys Shulzhenko · Byggd med React + Vite</p>
        </footer>
    )
}

export default Footer