
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
        
        // More extreme tilt for 3D effect
        cardRef.current.style.transform = `perspective(1200px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1200px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };

    return (
        <div 
            className="group perspective-container h-full"
            style={{ perspective: '1200px' }}
        >
            <div 
                ref={cardRef}
                className="relative h-full transition-transform duration-200 ease-out transform-style-3d glass-card rounded-3xl p-1 border border-white/10 shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="bg-[#0f172a]/80 backdrop-blur-xl rounded-[1.3rem] p-6 h-full flex flex-col transform-style-3d">
                    {/* Floating Image Container with Extreme Depth */}
                    <div 
                        className="relative rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/5"
                        style={{ transform: 'translateZ(60px)', transition: 'transform 0.3s ease-out' }}
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-64 object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                             {project.liveUrl && (
                                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black p-4 rounded-full transition-transform hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.5)] font-bold" title="Live Demo">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                 </a>
                             )}
                        </div>
                    </div>

                    <div style={{ transform: 'translateZ(30px)' }} className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-3xl font-bold text-white mb-2 heading-font tracking-tight">{project.title}</h3>
                        </div>
                        
                        <div className="mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1 block">The Challenge</span>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                        </div>

                        <div className="mb-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">The Solution</span>
                            <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                        
                        <div className="mt-auto">
                           <div className="flex items-center gap-3 mb-6 bg-white/5 p-3 rounded-xl border border-white/5">
                                <div className="text-yellow-400 font-bold text-xl">🏆</div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">Result</p>
                                    <p className="text-sm font-bold text-white">{project.clientResult}</p>
                                </div>
                           </div>

                          <div className="flex flex-wrap gap-2 mb-6">
                              {project.techStack.map(tech => (
                                  <span key={tech} className="bg-blue-600/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                                      {tech}
                                  </span>
                              ))}
                          </div>
                          
                          <WhatsAppButton message={WHATSAPP_MESSAGES.fromPortfolio(project.title)} className="w-full shadow-lg shadow-blue-500/10 border border-white/10">
                              Build Something Like This
                          </WhatsAppButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
