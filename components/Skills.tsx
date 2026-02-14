import React from 'react';

const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'React Native', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Next.js', level: 'Intermediate' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Flutter', level: 'Expert' },
    { name: 'Swift', level: 'Intermediate' },
    { name: 'AWS', level: 'Advanced' },
    { name: 'Firebase', level: 'Expert' },
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Figma', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Advanced' },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20">
            <div className="text-center mb-12 scroll-animation">
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">My Tech Stack</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">Technologies I use to build powerful and scalable applications.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-4 scroll-animation">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="glass-card px-6 py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20 cursor-default border border-white/5"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <span className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;