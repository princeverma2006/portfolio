const header = document.querySelector(".works-header");
const grid = document.querySelector(".projects-grid");
const menuButtons = document.querySelectorAll(".menu-btn");
const worksPanel = document.querySelector(".works-panel");

/* ================= HOME RENDER ================= */

function renderHome() {

    header.textContent = "HOME";

    grid.innerHTML = `
        <div class="skills-wrapper">
            <div class="skills-center">
                <img src="skill.webp" alt="Skills">
            </div>

            <div class="skill-icon">
                <img src="programming_lang/java.webp" alt="Java">
                <img src="programming_lang/react.webp" alt="React">
                <img src="programming_lang/python.webp" alt="Python">
                <img src="programming_lang/c.webp" alt="C">
                <img src="programming_lang/c++.webp" alt="C++">
                <img src="programming_lang/html.webp" alt="HTML">
                <img src="programming_lang/css.webp" alt="CSS">
            </div>
        </div>
    `;

    const wrapper = document.querySelector(".skills-wrapper");

    setTimeout(() => {
        wrapper.classList.remove("active");
        void wrapper.offsetWidth;
        wrapper.classList.add("active");
    }, 100);
}

/* ================= CONTENT DATA ================= */

const contentData = {
    about: [
        { title: "Introduction Me", desc: "I am a Bachelor of Computer Applications (BCA) student with a strong interest in web development and software programming. I am passionate about building modern, responsive, and user-friendly web applications that solve real-world problems. I continuously work on improving my technical skills and expanding my knowledge in development technologies." },
        { title: "Skills & Technologies", desc: "I have hands-on experience with front-end technologies including HTML, CSS, and JavaScript, which I use to create structured, responsive, and interactive user interfaces. In addition, I have programming knowledge in Python and C/C++, enabling me to understand core programming concepts, problem-solving techniques, and backend logic development. I am also familiar with building authentication systems and integrating third-party tools like Telegram bots." },
        { title: "Projects", desc: "I have developed several academic and personal projects that demonstrate my practical understanding of development concepts. These include a login authentication system, a Telegram bot integration project for task automation, and a worker payment calculator web application designed to compute and distribute payments efficiently. Through these projects, I have strengthened my skills in logic building, UI development, and system structuring." },
        { title: "Future Goals", desc: "My goal is to become a skilled full-stack developer capable of designing and developing complete web applications from front-end to back-end. I aim to continuously learn emerging technologies and contribute to impactful digital solutions in the technology industry." }
    ],

    projects: [
        { 
            title: "Dev Notebook", 
            desc: "Notebook for programmers.",
            link: "https://devnotebooks.netlify.app/",
            thumbnail: "projects/devnotebook.png"
        },
        { 
            title: "Bite Buzz", 
            desc: "News application for institute.",
            link: "https://bitebuzzapp.netlify.app/",
            thumbnail: "projects/bitebuzz.jpg"
        },
        { 
            title: "Food Grocery Website", 
            desc: "Fully working food grocery website.",
            link: "https://bcaspeedfood.blogspot.com/",
            thumbnail: "projects/bcaspeedfood.jpg"
        },
        { 
            title: "Rage keyboard (prank) Website", 
            desc: "Prank your friends",
            link: "https://rage-keyboard-pv2006.netlify.app/",
            thumbnail: "projects/rage-keyboard.png"
        },
        { 
            title: "Password strength checker", 
            desc: "checker your password strength.",
            link: "https://password-strength-checker-pv2006.netlify.app/",
            thumbnail: "projects/password-strength-checker.png"
        },
        { 
            title: "canvas Website", 
            desc: "Draw your imagination",
            link: "https://canvas-pv2006.netlify.app/",
            thumbnail: "projects/canvas.png"
        },
         { 
            title: "Calculator Website", 
            desc: "working with numbers",
            link: "https://calculator-pv2006.netlify.app/",
            thumbnail: "projects/calculator.png"
        },
        { 
            title: "StockFlow Website", 
            desc: "inventory managment system",
            link: "https://stockflow-pv2006.netlify.app/",
            thumbnail: "projects/stockflow.png"
        },
    ],

     certificates: [
       { 
        title: "Introduction to c", 
        desc: "Getting deep into c progamming",
        thumbnail: "certificates/intro_to_c.jpg"
    },
    { 
        title: "introduction to html", 
        desc: "Beginning jurney of web development",
        thumbnail: "certificates/intro_to_html.jpg"
    },
    { 
        title: "Web developer from scratch", 
        desc: "Learning web development from scratch",
        thumbnail: "certificates/webdevfromscratch.jpg"
    },
    { 
        title: "Ethical Hacking", 
        desc: "Going deep in ethical hacking",
        thumbnail: "certificates/itronix_hacker.jpg"
    },
    { 
        title: "white hat hacking and penetration testing", 
        desc: "Becomming ethical hacker and tester",
        thumbnail: "certificates/whitehat_pentester.jpg"
    },
    { 
        title: "Introduction to Programming", 
        desc: "Beginning jurney of progamming",
        thumbnail: "certificates/kaggle_programming.jpg"
    },{ 
        title: "Microsoft excel", 
        desc: "Working with microsoft excel",
        thumbnail: "certificates/microsoft_excel.jpg"
    },{ 
        title: "Microsoft word", 
        desc: "Working with microsoft word",
        thumbnail: "certificates/microsoftword.jpg"
    },{ 
        title: "PHP & MySQL", 
        desc: "Learning PHP & MYSQL",
        thumbnail: "certificates/php&sql.jpg"
    },{ 
        title: "Introcution to python", 
        desc: "Going deep into python",
        thumbnail: "certificates/intro-to-python.jpg"
    },{ 
        title: "Code master", 
        desc: "Participating in competition",
        thumbnail: "certificates/code-master.jpg"
    },{ 
        title: "Treasure hunt", 
        desc: "Participating in a competition",
        thumbnail: "certificates/treasure-hunt.jpg"
    },
        
    ],

    resume: [
        { title: "Resume Available", desc: "Download using top navigation button." }
    ],

    contact: [
        { title: "Email", desc: "princeverma102938@email.com" },
        { title: "Phone", desc: "+91-XXXXXXXXXX" },
        { title: "Location", desc: "Pindra,varanasi,uttar pradesh India" , link: "https://maps.app.goo.gl/c3ZBKseVeeEz2xw98"},
        { title: "instagram", desc: "India" , link: "https://www.instagram.com/gamernotnot/"},
        { title: "Linkdin", desc: "Linkdin" , link: "https://www.linkedin.com/in/prince-verma-b8566835a",}
    ]
};

/* ================= RENDER SECTION ================= */

function renderSection(sectionName, buttonText) {

    header.textContent = buttonText;
    grid.innerHTML = "";

    if (sectionName === "home") {
        renderHome();
        return;
    }

    contentData[sectionName].forEach(item => {

        const card = document.createElement("div");
        card.classList.add("project-card");

        let thumbnailHTML = item.thumbnail ? `
            <div class="project-thumbnail">
                <img src="${item.thumbnail}" alt="${item.title}">
            </div>
        ` : "";

        let linkHTML = item.link ? `
            <div class="project-link">
                <a href="${item.link}" target="_blank">${item.link}</a>
            </div>
        ` : "";

        // Only show VIEW button for projects & certificates
        let viewButton = (sectionName === "projects" || sectionName === "certificates") 
            ? `<button class="view-btn">VIEW</button>` 
            : "";

        card.innerHTML = `
            ${thumbnailHTML}
            <div class="project-title">${item.title}</div>
            <div class="project-desc">${item.desc}</div>
            ${linkHTML}
            ${viewButton}
        `;

        // VIEW button functionality
        const viewBtn = card.querySelector(".view-btn");
        if (viewBtn) {
            viewBtn.addEventListener("click", () => {
                openModal(item);
            });
        }

        grid.appendChild(card);
    });
}

/* ================= MODAL SYSTEM ================= */

// Create modal dynamically
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <div class="modal-body"></div>
    </div>
`;
document.body.appendChild(modal);

const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".close-btn");

function openModal(item) {
    modalBody.innerHTML = `
        <h2>${item.title}</h2>
        ${item.thumbnail ? `<img src="${item.thumbnail}" class="modal-image">` : ""}
        <p>${item.desc}</p>
        ${item.link ? `<a href="${item.link}" target="_blank" class="modal-link">Visit Project</a>` : ""}
    `;
    modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

/* ================= MENU CLICK WITH ANIMATION ================= */

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.classList.contains("active")) return;

        menuButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const section = button.dataset.section;

        worksPanel.classList.add("shrink");

        setTimeout(() => {

            renderSection(section, button.textContent);

            worksPanel.classList.remove("shrink");
            worksPanel.classList.add("expand");

            setTimeout(() => {
                worksPanel.classList.remove("expand");
            }, 500);

        }, 500);
    });
});

/* ================= DEFAULT HOME ================= */

function setDefaultHome() {
    const homeButton = Array.from(menuButtons)
        .find(btn => btn.dataset.section === 'home');

    if (homeButton) {
        menuButtons.forEach(btn => btn.classList.remove('active'));
        homeButton.classList.add('active');
        renderSection('home', homeButton.textContent);
    }
}

document.addEventListener("DOMContentLoaded", setDefaultHome);
