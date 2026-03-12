export function createProjectCard(project) {
    const techBadges = project.tech.map(t => `<span class="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-white/5 border border-white/10 rounded-md text-slate-400">${t}</span>`).join('');
    
    return `
        <div class="glass-card rounded-2xl p-8 flex flex-col h-full group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="mb-6 flex justify-between items-start">
                <div class="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <i data-lucide="folder" class="w-6 h-6 text-blue-500"></i>
                </div>
                <a href="${project.link}" target="_blank" class="text-slate-500 hover:text-white transition-colors">
                    <i data-lucide="external-link" class="w-5 h-5"></i>
                </a>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-3">${project.name}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                ${project.description}
            </p>
            
            <div class="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                ${techBadges}
            </div>
        </div>
    `;
}

export function createSkillCategory(skill) {
    const items = skill.items.map(i => `<div class="skill-badge">${i}</div>`).join('');
    
    return `
        <div class="glass-panel rounded-2xl p-8 border border-white/5">
            <div class="flex items-center gap-3 mb-8">
                <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <i data-lucide="${skill.icon}" class="w-5 h-5 text-blue-400"></i>
                </div>
                <h3 class="text-lg font-bold text-white uppercase tracking-wider">${skill.category}</h3>
            </div>
            <div class="flex flex-wrap gap-3">
                ${items}
            </div>
        </div>
    `;
}
