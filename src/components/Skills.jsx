import Terminal from './Terminal'

const skillGroups = [
    {
        folder: 'languages',
        items: [
            { name: 'C++', level: 'upper-intermediate' },
            { name: 'Python', level: 'upper-intermediate' },
            { name: 'C#', level: 'basic' },
            { name: 'JavaScript', level: 'intermediate' },
        ],
    },
    {
        folder: 'security',
        items: [
            { name: 'Linux', level: 'intermediate' },
            { name: 'Kali linux', level: 'intermediate' },
            { name: 'Arch linux', level: 'basic' },
        ],
    },
    {
        folder: 'web',
        items: [
            { name: 'HTML / CSS', level: 'intermediate' },
            { name: 'React', level: 'basic' },
            { name: 'Node.js', level: 'basic' },
            { name: 'Angular', level: 'basic' },
        ],
    },
    {
        folder: 'tools',
        items: [
            { name: 'n8n', level: 'intermediate' },
            { name: 'Git / GitHub', level: 'basic' },
            { name: 'Replit', level: 'intermediate' },
            { name: 'Lovable', level: 'basic' },
        ],
    },
]

function Skills() {
    return (
        <section id="skills">
            <h2>Kompetenser</h2>

            <Terminal title="denys@portfolio: ~/skills">
                <p className="cmd">
                    <span className="prompt-sign">$</span> tree skills/
                </p>

                <div className="tree">
                    <p className="tree-root">skills/</p>

                    {skillGroups.map((group, groupIndex) => {
                        const isLastGroup = groupIndex === skillGroups.length - 1

                        return (
                            <div key={group.folder}>
                                <p className="tree-folder">
                  <span className="tree-line">
                    {isLastGroup ? '└── ' : '├── '}
                  </span>
                                    {group.folder}/
                                </p>

                                {group.items.map((skill, skillIndex) => {
                                    const isLastItem = skillIndex === group.items.length - 1

                                    return (
                                        <p key={skill.name} className="tree-item">
                      <span className="tree-line">
                        {isLastGroup ? '    ' : '│   '}
                          {isLastItem ? '└── ' : '├── '}
                      </span>
                                            {skill.name}
                                            <span className={'level ' + skill.level}>
                        [{skill.level}]
                      </span>
                                        </p>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </Terminal>
        </section>
    )
}

export default Skills