
import React, { useRef, MouseEvent } from 'react';
import { Project } from '../types';
import { WHATSAPP_MESSAGES } from '../constants';
import WhatsAppButton from './WhatsAppButton';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        
        cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };

    return (
        <div 
            className="group perspective-container"
            style={{ perspective: '1000px' }}
        >
            <div 
                ref={cardRef}
                className="relative h-full transition-transform duration-300 ease-out transform-style-3d glass-card rounded-2xl p-6 border border-white/10"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Floating Image Container with Depth */}
                <div 
                    className="relative rounded-xl overflow-hidden mb-6 shadow-2xl"
                    style={{ transform: 'translateZ(40px)', transition: 'transform 0.3s ease-out' }}
                >
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                         {project.liveUrl && (
                             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-transform hover:scale-110 shadow-lg" title="Live Demo">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                             </a>
                         )}
                         {project.githubUrl && (
                             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-transform hover:scale-110 shadow-lg" title="View Code">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                             </a>
                         )}
                    </div>
                </div>

                <div style={{ transform: 'translateZ(20px)' }}>
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-primary mb-2 heading-font">{project.title}</h3>
                         <div className="text-center flex-shrink-0 ml-4 bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
                            <div className="text-sm font-bold text-blue-400">{project.clientResult}</div>
                         </div>
                    </div>
                    
                    <p className="text-secondary mb-4 text-sm leading-relaxed"><strong className="text-primary/90">Problem:</strong> {project.problem}</p>
                    <p className="text-secondary mb-6 text-sm leading-relaxed"><strong className="text-blue-400">Solution:</strong> {project.solution}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                          {project.techStack.map(tech => (
                              <span key={tech} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                                  {tech}
                              </span>
                          ))}
                      </div>
                      <WhatsAppButton message={WHATSAPP_MESSAGES.fromPortfolio(project.title)} className="w-full shadow-lg shadow-blue-500/20">
                          Build This App
                      </WhatsAppButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
