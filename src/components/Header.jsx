import Typewriter from './TypeWriter'

function Header() {
    return (
        <header>
            <p className="prompt">denys@portfolio:~$ whoami</p>
            <h1>Denys Shulzhenko</h1>
            <p>
                <Typewriter text="Junior Cyber-Security Analyst" />
            </p>
        </header>
    )
}

export default Header