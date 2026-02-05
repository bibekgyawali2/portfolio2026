const portfolioData = {
    "education": [
        {
            "period": "2018–2023",
            "degree": "B.E. Electronics & Communication",
            "institution": "Himalaya College of Engineering",
            "details": ""
        },
        {
            "period": "2015–2018",
            "degree": "+2 Science",
            "institution": "National Higher Secondary School",
            "details": ""
        }
    ],
    "experience": [
        {
            "period": "Dec 2024–Present",
            "role": "Mobile App Developer",
            "institution": "Kingsoft Pvt Ltd",
            "description": [
                "Manage full mobile dev pipeline: docs, testing, deployment.",
                "Integrate REST APIs & robust state management.",
                "Collaborate with cross-functional teams."
            ]
        },
        {
            "period": "Nov 2023–Mar 2024",
            "role": "Mobile App Developer",
            "institution": "CellApp",
            "description": [
                "Implemented clean, scalable architecture.",
                "Published highly-rated apps on Play Store & App Store.",
                "Integrated payments (Khalti, eSewa, Connect IPS) & APIs.",
                "Developed SaaS apps using Flutter."
            ]
        },
        {
            "period": "Nov 2022–Mar 2024",
            "role": "Mobile App Developer",
            "institution": "SmartPalika",
            "description": [
                "Built & deployed apps for local gov operations.",
                "ensured timely delivery with cross-functional teams.",
                "Reduced crash rates via troubleshooting.",
                "Demoed apps to government stakeholders."
            ]
        }
    ],
    "projects": [
        {
            "title": "Kathmandu Metropolitan City ",
            "description": "Official digital governance app for Kathmandu Metro."
        },
        {
            "title": "Kirana Pasal",
            "description": "SaaS for shopkeepers: inventory, sales, CRM & analytics."
        },
        {
            "title": "Narmin Calender",
            "description": "Resource scheduling & event management for rural gov."
        },
        {
            "title": "Narmin PWA",
            "description": "Scalable PWA for National Rural Municipalities Association."
        },
        {
            "title": "SmartPalika Apps",
            "description": "Digital governance apps: eSifaris, grievances & updates."
        },
        {
            "title": "Ghumna",
            "description": "Trekking app with offline maps, GPS & route planning."
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
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

    container.innerHTML = projects.map(project => `
        <article class="compact-item">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
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
