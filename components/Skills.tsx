
import React from 'react';

const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20">
            <div className="text-center mb-12 scroll-animation">
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">My Tech Stack</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">Technologies I use to build powerful and scalable applications.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 scroll-animation">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <img src={skill.icon} alt={`${skill.name} logo`} className="h-12 w-12 md:h-16 md:w-16" />
                        <p className="mt-4 text-sm md:text-base font-medium text-primary">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
