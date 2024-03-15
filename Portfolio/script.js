function toggleMenu() {
  const menu = document.querySelector(".menu-links")
  const icon = document.querySelector(".hamburger-icon")
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "A Network Engineer Student",
    "Still An Aspiring Developer",
    "A Gym Rat",
    "A Songwriter"
  ]

  let currentRoleIndex = 0
  const roleAlt = document.getElementById("roleAlt")

  function alternateRole() {
    roleAlt.textContent = roles[currentRoleIndex]
    currentRoleIndex = (currentRoleIndex + 1) % roles.length
  }

  setInterval(alternateRole, 3000)
})


//Pop up image & Video
document.getElementById('pulse-in').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block'
    document.getElementById('bigImage').src = './assets/TYLONs.jpg'

    setTimeout(function() {
      document.getElementById('bigImage').style.display = 'none'
      document.getElementById('bigVideo').style.display = 'block'
    }, 5000) 
})

document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none'
    document.getElementById('bigImage').style.display = 'block'
    document.getElementById('bigVideo').style.display = 'none'
})







// Projects Card

const projects = [
  {
    title: "JavaScript Calculator",
    image: "./assets/project-1.png",
    github: "https://github.com/TYLONs17/WEB_LEARN/tree/main/freecodecamp/Javascript-Calculator",
    demo: "http://htmlpreview.github.io/TYLONs17/WEB_LEARN/blob/main/freecodecamp/Javascript-Calculator/index.html"
  },

  {
    title: "17 + 5 Clock",
    image: "./assets/project-2.png",
    github: "https://github.com/TYLONs17/WEB_LEARN/tree/main/freecodecamp/17+5-Clock",
    demo: "http://htmlpreview.github.io/TYLONs17/WEB_LEARN/tree/main/freecodecamp/17+5-Clock/index.html"
  },

  {
    title: "SSE UnitConverter",
    image: "./assets/project-3.png",
    github: "https://github.com/SSE-UnitConvertPro",
    demo: "http://htmlpreview.github.io/SSE-UnitConvertPro/UnitConvert_python/blob/main/SIMPLER_💀😅/v_1/index.htm"
  },

  {
    title: "Brick Breakout",
    image: "./assets/project-4.png",
    github: "https://github.com/WEB_LEARN/WGames/Brick%20Breakout/%231_-re",
    demo: "http://htmlpreview.github.io/WEB_LEARN/WGames/Brick%20Breakout/%231_-re/index.html"
  },

  {
    title: "Random Quote",
    image: "./assets/project-5.png",
    github: "https://github.com/TYLONs17/WEB_LEARN/tree/main/freecodecamp/17+5-Clock",
    demo: "http://htmlpreview.github.io/TYLONs17/WEB_LEARN/tree/main/freecodecamp/17+5-Clock/index.html"
  },







  // ... and so on
]

const projectContainer = document.querySelector(".projects-card")

function createProjectCard(project) {
  const card = document.createElement("div")
  card.classList.add("details-container", "color-container")
  card.innerHTML = `
    <div class="article-container">
      <img src="${project.image}" alt="${project.title}" class="project-img">
    </div>
    <h2 class="experience-sub-title project-title">${project.title}</h2>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn" onclick="location.href='${project.github}'">Github</button>
      <button class="btn btn-color-2 project-btn" onclick="location.href='${project.demo}'">Live Demo</button>
    </div>`
  return card
}

projects.forEach(project => {
  const card = createProjectCard(project)
  projectContainer.appendChild(card)
})


