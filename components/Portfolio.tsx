
import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Mobile App'];

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeCategory === 'All') {
            return PROJECTS;
        }
        return PROJECTS.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="portfolio" className="py-20">
            <div className="text-center mb-12 scroll-animation">
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">Recent App Launches</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">Explore my latest high-performance mobile applications delivering real business results.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 scroll-animation">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
