import ProjectCard from './ProjectCard'
import { useState } from 'react'

const projects = [
    {
        title: 'AI Email Phishing Analyzer',
        description:
            'Upptäcker phishing-mejl genom att kombinera regelbaserade säkerhetsheuristiker med semantisk AI-analys. Analyserar .eml-filer eller skannar en Gmail-inkorg via OAuth2.',
        tech: ['Python', 'Claude API', 'OAuth2', 'Gmail API'],
        category: 'Security',
        link: 'https://github.com/Mattheuszu/AI-Email-Phishing-Analyzer',
        featured: true,
    },
    {
        title: 'HR Automation AI',
        description:
            'AI-driven rekryteringsprocess: samlar in CV:n, markerar de som genererats av AI, lagrar kandidaterna i Google Sheets och bokar intervjuer automatiskt.',
        tech: ['n8n', 'OpenAI', 'Gemini', 'Google Sheets'],
        category: 'Automation',
        link: 'https://github.com/Mattheuszu/HR-Automation-AI-n8n-Workflow',
    },
    {
        title: 'WhatsApp Bot for IKEA',
        description:
            'Chatbot för IKEA-anställda i Sverige: arbetsscheman, butiksinformation, lediga tjänster och personalförmåner – allt med ett enda kommando.',
        tech: ['WhatsApp', 'Python', 'GreenAPI'],
        category: 'Bots',
        link: 'https://github.com/Mattheuszu/WhatsApp-bot',
    },
    {
        title: 'Telegram Alert Bot UA',
        description:
            'En Telegram-bot som bevakar aktiva missilhotvarningar i Ukraina och meddelar användarna i realtid.',
        tech: ['Telegram API', 'Python'],
        category: 'Bots',
        link: 'https://github.com/Mattheuszu/Telegram-BotUA',
    },
    {
        title: 'Survival Quest: Apocalypse',
        description:
            'Ett textbaserat äventyrsspel i en postapokalyptisk värld. Utforska en förstörd stad och ett mystiskt tempel för att hitta ett botemedel mot ett zombievirus.',
        tech: ['Javascript'],
        category: 'Games',
        link: 'https://github.com/Mattheuszu/Quest-Game-Dead-by-Daylight',
    },
    {
        title: 'Portfolio',
        description:
            'Denna portföljwebbplats – byggd med React och Vite',
        tech: ['React', 'Vite', 'CSS'],
        category: 'Web',
        link: 'https://github.com/Mattheuszu/WebPortfolio',
    },
]

const categories = ['All', 'Security' , 'Automation', 'Bots', 'Web', 'Games']

function Projects() {
    const [filter, setFilter] = useState('All')

    const visibleProjects =
        filter === 'All'
            ? projects
            : projects.filter((project) => project.category === filter)

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={filter === category ? 'filter active' : 'filter'}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects