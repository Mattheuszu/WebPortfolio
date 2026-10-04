function Terminal({ title, children }) {
    return (
        <div className="terminal">
            <div className="terminal-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">{title}</span>
            </div>
            <div className="terminal-body">{children}</div>
        </div>
    )
}

export default Terminal