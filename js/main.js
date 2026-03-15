let menu = document.querySelector(".menu-toggle");
let nav = document.querySelector(".nav-links");

menu.onclick = function () {
  nav.classList.toggle("active");
};

var links = document.querySelectorAll(".nav-links a");

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    nav.classList.remove("active");
  };
}

const skills = [
  {
    name: "HTML",
    icon: "fa-html5",
    desc: "HTML is the foundation of every webpage.",
  },
  {
    name: "CSS",
    icon: "fa-css3-alt",
    desc: "CSS is used to style websites.",
  },
  {
    name: "JavaScript",
    icon: "fa-js",
    desc: "JavaScript adds interactivity.",
  },
  {
    name: "Bootstrap",
    icon: "fa-bootstrap",
    desc: "Bootstrap is a framework for designing websites quickly.",
  },
  {
    name: "Git",
    icon: "fa-git-alt",
    desc: "Git is a version control system.",
  },
  {
    name: "GitHub",
    icon: "fa-github",
    desc: "GitHub hosts and manages Git repositories.",
  },
];

let skillsContainer = document.getElementById("skillsContainer");

for (var i = 0; i < skills.length; i++) {
  var skill = skills[i];

  skillsContainer.innerHTML +=
    '<div class="skill-card" onclick="openModalByIndex(' +
    i +
    ')">' +
    '<i class="fa-brands ' +
    skill.icon +
    '"></i>' +
    "<p>" +
    skill.name +
    "</p>" +
    "</div>";
}

function openModalByIndex(i) {
  var skill = skills[i];
  modal.style.display = "flex";
  modalIcon.className = "fa-brands " + skill.icon;
  modalTitle.textContent = skill.name;
  modalDesc.textContent = skill.desc;
}

let modal = document.getElementById("modal");
let modalIcon = document.getElementById("modalIcon");
let modalTitle = document.getElementById("modalTitle");
let modalDesc = document.getElementById("modalDesc");

function openModal(skill) {
  modalIcon.className = "fa-brands " + skill.icon;
  modalTitle.textContent = skill.name;
  modalDesc.textContent = skill.desc;
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {

    closeModal();
  }
});

const projects = [
  {
    title: "Portfolio Website",
    img: "images/Screenshot 2026-03-13 175602.png",
    desc: "A fully responsive personal portfolio website built with HTML, CSS, and JavaScript.",
    link: "https://yahyamostafa1.github.io/1-gdgoc/?",
  },
  {
    title: "E-commerce",
    img: "images/Screenshot 2026-03-09 215059.png",
    desc: "A simple E-commerce website to browse products interactively.",
    link: "https://yahyamostafa1.github.io/e-commerce/",
  },
  {
    title: "Todo List App",
    img: "images/Screenshot 2026-03-13 180212.png",
    desc: "A task management application where users can add and delete tasks.",
    link: "https://yahyamostafa1.github.io/Curds/",
  },
];

let projectsContainer = document.getElementById("projectsContainer");

for (let i = 0; i < projects.length; i++) {
  let card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${projects[i].img}" alt="${projects[i].title}">
    <h3>${projects[i].title}</h3>
    <p>${projects[i].desc}</p>
    <a href="${projects[i].link}" target="_blank" class="project-btn">View Project</a>
  `;

  projectsContainer.appendChild(card);
}

 
let form = document.getElementById("contactForm");
let message = document.getElementById("message");
let error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  if (message.value.trim().length < 10) {
    e.preventDefault();
    error.textContent = "Please enter at least 10 characters.";
    error.style.color = "red";
  } else {
    error.textContent = "";
  }
});
