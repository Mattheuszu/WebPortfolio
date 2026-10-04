import Typewriter from './TypeWriter'

function Header() {
    return (
        <header>
            <div className="avatar">
                <img src="/avatar-hacker.jpg" alt="" className="avatar-img" />
                <img
                    src="/avatar.jpg"
                    alt="Denys Shulzhenko"
                    className="avatar-img real"
                />
            </div>

            <p className="prompt">denys@portfolio:~$ whoami</p>
            <h1>Denys Shulzhenko</h1>
            <p>
                <Typewriter text="Junior Cyber-Security Analyst" />
            </p>
        </header>
    )
}

export default Header