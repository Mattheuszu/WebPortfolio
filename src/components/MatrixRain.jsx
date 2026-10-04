import { useEffect, useRef } from 'react'

function MatrixRain() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const chars = '01アイウエオカキクケコABCDEF<>/{}$#'
        const fontSize = 16
        let drops = []

        function resize() {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            drops = Array.from(
                { length: Math.floor(canvas.width / fontSize) },
                () => Math.random() * -50
            )
        }
        resize()
        window.addEventListener('resize', resize)

        const timer = setInterval(() => {
            ctx.fillStyle = 'rgba(13, 17, 23, 0.08)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = '#00ff9c'
            ctx.font = fontSize + 'px monospace'

            drops.forEach((y, i) => {
                const char = chars[Math.floor(Math.random() * chars.length)]
                ctx.fillText(char, i * fontSize, y * fontSize)
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            })
        }, 50)

        return () => {
            clearInterval(timer)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="matrix" />
}

export default MatrixRain