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
            "title": "Kathmandu Metropolitan City (Official App)",
            "description": "The official mobile app of Kathmandu Metropolitan City (कामपा) is designed to provide digital governance services for citizens."
        },
        {
            "title": "Kirana Pasal",
            "description": "A Software as a Service (SaaS) application tailored for shopkeepers, streamlining inventory management, sales tracking, and customer relationship management processes. It offers features such as order management, billing, and analytics to optimize business operations."
        },
        {
            "title": "Narmin Calender",
            "description": "A calendar application for Rural Local Government to efficiently schedule resources, manage events. It offers intuitive calendar functionalities and collaboration tools for seamless coordination."
        },
        {
            "title": "Narmin PWA",
            "description": "Created a Progressive Web App (PWA) for the National Association of Rural Municipalities in Nepal, enabling rural municipalities to manage services and improve governance through a scalable, accessible platform."
        },
        {
            "title": "SmartPalika Apps",
            "description": "Developed mobile applications for local governments in Nepal, facilitating digital governance and enhancing service delivery through eSifaris, grievance submission, and real-time updates."
        },
        {
            "title": "Ghumna",
            "description": "Developed a trekking and hiking app that provides detailed insights into Nepal's trails, with offline maps, GPS navigation, and customizable route planning features for seamless, connectivity-free exploration."
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
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
