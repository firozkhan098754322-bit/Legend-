
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const mockMessages = [
    { id: 1, name: "Alice Johnson", email: "alice@tech.com", message: "Hi, I need a React Native app for my startup.", date: "2 mins ago" },
    { id: 2, name: "Bob Smith", email: "bob@builder.com", message: "Can you optimize our existing Flutter codebase?", date: "1 hour ago" },
    { id: 3, name: "Charlie Davis", email: "charlie@design.io", message: "Looking for a developer to implement 3D UI.", date: "1 day ago" },
];

interface AdminDashboardProps {
    onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'messages'>('overview');

    return (
        <div className="fixed inset-0 z-[60] bg-[#0B0F19] flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 glass-card border-r border-white/10 flex flex-col hidden md:flex">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white heading-font">Admin<span className="text-blue-500">.</span></h2>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <button 
                        onClick={() => setActiveTab('overview')} 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-secondary hover:bg-white/5'}`}
                    >
                        Overview
                    </button>
                    <button 
                        onClick={() => setActiveTab('projects')} 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'projects' ? 'bg-blue-600 text-white' : 'text-secondary hover:bg-white/5'}`}
                    >
                        Projects
                    </button>
                    <button 
                        onClick={() => setActiveTab('messages')} 
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === 'messages' ? 'bg-blue-600 text-white' : 'text-secondary hover:bg-white/5'}`}
                    >
                        Messages <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
                    </button>
                </nav>
                <div className="p-4">
                    <button onClick={onLogout} className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="flex justify-between items-center mb-8 md:hidden">
                    <h2 className="text-xl font-bold text-white">Admin Panel</h2>
                    <button onClick={onLogout} className="text-red-400">Logout</button>
                </div>
                
                {/* Mobile Tabs */}
                <div className="flex gap-2 mb-6 md:hidden overflow-x-auto pb-2">
                    {['overview', 'projects', 'messages'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white/5 text-secondary'}`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {activeTab === 'overview' && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="glass-card p-6 rounded-2xl border-l-4 border-blue-500">
                                <p className="text-secondary text-sm">Total Revenue</p>
                                <p className="text-3xl font-bold text-white mt-2">₹1,24,000</p>
                            </div>
                            <div className="glass-card p-6 rounded-2xl border-l-4 border-green-500">
                                <p className="text-secondary text-sm">Active Projects</p>
                                <p className="text-3xl font-bold text-white mt-2">5</p>
                            </div>
                            <div className="glass-card p-6 rounded-2xl border-l-4 border-purple-500">
                                <p className="text-secondary text-sm">New Leads</p>
                                <p className="text-3xl font-bold text-white mt-2">12</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 rounded-2xl">
                             <h3 className="text-lg font-bold text-white mb-4">Traffic Analytics</h3>
                             <div className="h-48 flex items-end justify-between gap-2">
                                 {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                                     <div key={i} className="w-full bg-blue-500/20 rounded-t-lg relative group">
                                         <div className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-500" style={{ height: `${h}%` }}></div>
                                     </div>
                                 ))}
                             </div>
                             <div className="flex justify-between text-xs text-secondary mt-2">
                                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                             </div>
                        </div>
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div className="space-y-4 animate-fade-in">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-white">Recent Projects</h3>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">+ Add New</button>
                        </div>
                        {PROJECTS.map(project => (
                            <div key={project.id} className="glass-card p-4 rounded-xl flex items-center gap-4">
                                <img src={project.imageUrl} alt={project.title} className="w-16 h-16 rounded-lg object-cover" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-white">{project.title}</h4>
                                    <p className="text-xs text-secondary">{project.category}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded">Edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="space-y-4 animate-fade-in">
                         <h3 className="text-xl font-bold text-white mb-4">Inbox</h3>
                         {mockMessages.map(msg => (
                             <div key={msg.id} className="glass-card p-5 rounded-xl transition-colors hover:bg-white/5 cursor-pointer">
                                 <div className="flex justify-between items-start mb-2">
                                     <div className="flex items-center gap-2">
                                         <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">
                                             {msg.name.charAt(0)}
                                         </div>
                                         <h4 className="font-bold text-white">{msg.name}</h4>
                                     </div>
                                     <span className="text-xs text-secondary">{msg.date}</span>
                                 </div>
                                 <p className="text-sm text-gray-300 mb-1">{msg.message}</p>
                                 <p className="text-xs text-blue-400">{msg.email}</p>
                             </div>
                         ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
