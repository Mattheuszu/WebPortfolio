function ProjectCard({ title, description, tech, category, link, featured }) {
    return (
        <article className={featured ? 'project-card featured' : 'project-card'}>
            <div className="card-header">
                <span className="card-category">[{category}]</span>
                {featured && <span className="card-featured">★ featured</span>}
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <ul className="tech-list">
                {tech.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
            >
                $ git clone →
            </a>
        </article>
    )
}

export default ProjectCard