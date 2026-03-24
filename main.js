export const projects = [
    {
        name: "Ngaturin",
        image: "./ngaturin.png",
        description: "A personal finance tracking app that helps users monitor spending, track income, and build better financial habits. Sophisticated dashboard with real-time data.",
        tech: ["Next.js", "Prisma", "Chart.js", "Tailwind"],
        link: "https://ngaturin.com",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        name: "Kewirausahaan",
        description: "Educational platform for entrepreneurship major materials and academic resource sharing ecosystem designed for SMEs.",
        tech: ["Laravel", "PHP", "Tailwind", "PostgreSQL"],
        link: "https://kewirausahaan.com",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        name: "Forwistree",
        description: "Modern website for a book publishing company with focus on digital presence and modern CMS integration.",
        tech: ["Nuxt.js", "Express.js", "Node.js"],
        link: "https://forwistree.vercel.app",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        name: "Sakura Tour",
        description: "Premium travel agency website with optimized reservation flow and high-performance booking engine.",
        tech: ["Laravel", "Astro", "Framer Motion"],
        link: "https://sakuratour.id",
        color: "from-rose-500/20 to-orange-500/20"
    }
];

export const skills = [
    {
        category: "Programming",
        items: ["Laravel", "PHP", "JavaScript", "Node.js", "Express.js", "PostgreSQL"],
        icon: "code"
    },
    {
        category: "Frontend",
        items: ["Next.js", "Nuxt.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        icon: "layout"
    },
    {
        category: "Languages",
        items: ["English (C2 Level)", "Chinese (HSK 3–4)", "Indonesian (Native)"],
        icon: "languages"
    }
];

export function createProjectCard(project) {
    const techBadges = project.tech.map(t => `<span class="px-2 py-1 text-[10px] uppercase tracking-wider font-mono bg-white/5 border border-white/10 rounded-md text-slate-400">${t}</span>`).join('');
    
    return `
        <div class="glass-card rounded-2xl overflow-hidden flex flex-col h-full group relative">
            <div class="relative overflow-hidden h-48">
                <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div class="p-8 flex flex-col flex-grow relative">
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 class="text-2xl font-bold text-white mb-3">${project.name}</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">${project.description}</p>
                
                <div class="flex items-center justify-between pt-6 border-t border-white/5">
                    <div class="flex flex-wrap gap-2">
                        ${techBadges}
                    </div>
                    <a href="${project.link}" target="_blank" class="text-slate-500 hover:text-white transition-colors ml-4 shrink-0">
                        <i data-lucide="external-link" class="w-5 h-5"></i>
                    </a>
                </div>
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


document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();
    

    gsap.registerPlugin(ScrollTrigger);


    const projectGrid = document.getElementById('project-grid');
    projects.forEach(p => {
        projectGrid.innerHTML += createProjectCard(p);
    });

    const skillsContainer = document.getElementById('skills-container');
    skills.forEach(s => {
        skillsContainer.innerHTML += createSkillCategory(s);
    });


    lucide.createIcons();




    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-progress").style.width = scrolled + "%";
    });


    const heroTl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });
    heroTl.to('.hero-reveal', {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        delay: 0.2
    }).to('.hero-illustration', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "expo.out"
    }, "-=1");


    const sections = ['#about', '#projects', '#skills', '#experience', '#contact'];
    
    sections.forEach(section => {
        gsap.to(`${section} .section-title`, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 1
        });
    });


    gsap.to('#project-grid > div', {
        scrollTrigger: {
            trigger: '#projects',
            start: "top 70%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8
    });

    gsap.to('.experience-item, .education-item', {
        scrollTrigger: {
            trigger: '#experience',
            start: "top 70%",
        },
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.8
    });


    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.textContent = "Sending message...";
            formStatus.classList.remove('hidden', 'text-green-400', 'text-red-400');
            formStatus.classList.add('text-blue-400');


            setTimeout(() => {
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.classList.replace('text-blue-400', 'text-green-400');
                contactForm.reset();
                
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }


    const menuBtn = document.getElementById('menu-toggle');
    menuBtn.addEventListener('click', () => {

        alert("Mobile navigation would expand here in a full React/Vue app.");
    });
});
