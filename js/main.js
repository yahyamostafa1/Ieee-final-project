// ================== NAVBAR TOGGLE ==================
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => nav.classList.toggle("active"));
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => nav.classList.remove("active"))
);

// ================== SKILLS DYNAMIC ==================
const skills = [
  { name: "HTML", icon: "fa-html5", desc: "HTML is the foundation of every webpage." },
  { name: "CSS", icon: "fa-css3-alt", desc: "CSS is used to style websites." },
  { name: "JavaScript", icon: "fa-js", desc: "JavaScript adds interactivity." },
  { name: "Bootstrap", icon: "fa-bootstrap", desc: "Bootstrap is a framework for designing websites quickly." },
  { name: "Git", icon: "fa-git-alt", desc: "Git is a version control system." },
  { name: "GitHub", icon: "fa-github", desc: "GitHub hosts and manages Git repositories." }
];

const skillsContainer = document.getElementById("skillsContainer");
skills.forEach(skill => {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `<i class="fa-brands ${skill.icon}"></i><p>${skill.name}</p>`;
  card.addEventListener("click", () => openModal(skill));
  skillsContainer.appendChild(card);
});

// ================== MODAL ==================
const modal = document.getElementById("modal");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

function openModal(skill) {
  modal.style.display = "flex";
  modalIcon.className = "fa-brands " + skill.icon;
  modalTitle.textContent = skill.name;
  modalDesc.textContent = skill.desc;
}

function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// ================== PROJECTS DYNAMIC ==================
const projects = [
  {
    title: "Portfolio Website",
    img: "images/Screenshot 2026-03-13 175602.png",
    desc: "A fully responsive personal portfolio website built with HTML, CSS, and JavaScript.",
    link: "https://yahyamostafa1.github.io/1-gdgoc/?"
  },
  {
    title: "E-commerce",
    img: "images/Screenshot 2026-03-09 215059.png",
    desc: "A simple E-commerce website to browse products interactively.",
    link: "https://yahyamostafa1.github.io/e-commerce/"
  },
  {
    title: "Todo List App",
    img: "images/Screenshot 2026-03-13 180212.png",
    desc: "A task management application where users can add and delete tasks.",
    link: "https://yahyamostafa1.github.io/Curds/"
  }
];

const projectsContainer = document.getElementById("projectsContainer");
projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <a href="${project.link}" target="_blank" class="project-btn">View Project</a>
  `;
  projectsContainer.appendChild(card);
});

// ================== CONTACT FORM VALIDATION ==================
const form = document.getElementById("contactForm");
const message = document.getElementById("message");
const error = document.getElementById("error");

form.addEventListener("submit", e => {
  if (message.value.trim().length < 10) {
    e.preventDefault();
    error.textContent = "Please enter at least 10 characters.";
    error.style.color = "red";
  } else {
    error.textContent = "";
  }
});
