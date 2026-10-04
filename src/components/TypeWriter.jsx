import { useState, useEffect} from 'react'

function Typewriter({ text, speed = 80 }) {
    const [shown, setShown] = useState('')

    useEffect(() => {
        let i = 0
        const timer = setInterval(() => {
            i++
            setShown(text.slice(0, i))
            if (i >= text.length) clearInterval(timer)
        }, speed)

        return () => clearInterval(timer)
    }, [text, speed])

    return (
        <span>
      {shown}
            <span className="cursor">█</span>
    </span>
    )
}

export default Typewriter