const portfolioData = {
    "education": [
        {
            "period": "2018 – 2023",
            "degree": "Bachelor in Electronics and Communication Engineering",
            "institution": "Tribhuvan University, Himalaya College of Engineering",
            "details": ""
        },
        {
            "period": "2015 – 2018",
            "degree": "+2 Science",
            "institution": "National Education Board, National Higher Secondary School",
            "details": ""
        }
    ],
    "experience": [
        {
            "period": "Dec 2024 – Present",
            "role": "Mobile Application Developer",
            "institution": "Kingsoft Pvt Ltd",
            "description": [
                "Managing complete mobile development pipeline including documentation, testing, and deployment.",
                "Integrating RESTful APIs and implementing robust state management solutions.",
                "Collaborating with cross-functional teams to deliver high-quality software solutions."
            ]
        },
        {
            "period": "Nov 2023 – Mar 2024",
            "role": "Mobile Application Developer",
            "institution": "CellApp",
            "description": [
                "Implemented clean architecture principles, enhancing code maintainability and scalability for long-term project sustainability.",
                "Published mobile applications in the Play Store and App Store, each achieving high user ratings and positive feedback.",
                "Integrated RESTful APIs, enhancing app functionality and user experience.",
                "Integrated payment gateways including Khalti, eSewa, Connect IPS, and IME Pay, enabling secure transactions.",
                "Applied UI/UX principles to enhance the user experience and visual appeal of mobile applications.",
                "Developed a Software as a Service (SaaS) application using the Flutter framework, providing scalable, multi-platform solutions to users across various devices."
            ]
        },
        {
            "period": "Nov 2022 – Mar 2024",
            "role": "Mobile Application Developer",
            "institution": "SmartPalika",
            "description": [
                "Developed and deployed mobile applications using the Flutter framework, supporting local government operations across Nepal.",
                "Collaborated with cross-functional teams, ensuring timely delivery of project milestones within deadlines.",
                "Troubleshoot and resolve technical issues, reducing app crash rates and improving overall user satisfaction.",
                "Published apps on the Play Store and App Store.",
                "Presented and demoed applications to local government offices, driving stakeholder engagement and adoption."
            ]
        }
    ],
    "projects": [
        {
            "id": "proj1",
            "title": "Kathmandu Metropolitan City",
            "description": "The official mobile app designed to provide digital governance services for citizens.",
            "tags": ["Flutter", "Governance", "Service"]
        },
        {
            "id": "proj2",
            "title": "Kirana Pasal",
            "description": "SaaS application for shopkeepers streamlining inventory, sales, and CRM with analytics.",
            "tags": ["SaaS", "Inventory", "Analytics"]
        },
        {
            "id": "proj3",
            "title": "Narmin Calender",
            "description": "Calendar application for Rural Local Government to schedule resources and manage events.",
            "tags": ["Productivity", "GovTech"]
        },
        {
            "id": "proj4",
            "title": "Narmin PWA",
            "description": "Progressive Web App for National Association of Rural Municipalities in Nepal.",
            "tags": ["PWA", "Web", "Governance"]
        },
        {
            "id": "proj5",
            "title": "SmartPalika Apps",
            "description": "Mobile applications for local governments facilitating eSifaris, grievances, and updates.",
            "tags": ["Flutter", "Smart City"]
        },
        {
            "id": "proj6",
            "title": "Ghumna",
            "description": "Trekking and hiking app with offline maps, GPS navigation, and route planning.",
            "tags": ["Travel", "Maps", "GPS"]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark') {
        document.body.classList.add('dark-mode');
    } else if (currentTheme == 'light') {
        document.body.classList.remove('dark-mode');
    } else if (prefersDarkScheme.matches) {
        // If no preference found, check system preference
        document.body.classList.add('dark-mode');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });

    // Render in order: Experience -> Education -> Projects
    renderExperience(portfolioData.experience);
    renderEducation(portfolioData.education);
    renderProjects(portfolioData.projects);
});

function renderExperience(experience) {
    const container = document.getElementById('experience-list');
    if (!container) return;
    
    container.innerHTML = experience.map(exp => `
        <article class="compact-item">
            <div class="meta">${exp.period}</div>
            <h3>${exp.role}</h3>
            <div class="institution">${exp.institution}</div>
            <ul>
                ${exp.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </article>
    `).join('');
}

function renderProjects(projects) {
    const container = document.getElementById('projects-list');
    if (!container) return;

    // Apply grid class to container
    container.classList.add('projects-grid');

    container.innerHTML = projects.map(project => `
        <div class="project-card group">
            <div class="card-content">
                <div class="card-header">
                     <div class="project-tags">
                        ${project.tags.slice(0, 2).map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                     </div>
                     <iconify-icon icon="lucide:arrow-up-right" class="project-arrow" width="20"></iconify-icon>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="hover-bar"></div>
        </div>
    `).join('');
}

function renderEducation(education) {
    const container = document.getElementById('education-list');
    if (!container) return;

    container.innerHTML = education.map(edu => `
        <article class="compact-item">
            <div class="meta">${edu.period}</div>
            <h3>${edu.degree}</h3>
            <div class="institution">${edu.institution}</div>
            ${edu.details ? `<p>${edu.details}</p>` : ''}
        </article>
    `).join('');
}
