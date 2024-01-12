function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "A Network Engineer Student",
    "Still An Aspiring Developer",
    "A Gym Rat",
    "A Songwriter"
  ];

  let currentRoleIndex = 0;
  const roleAlt = document.getElementById("roleAlt");

  function alternateRole() {
    roleAlt.textContent = roles[currentRoleIndex];
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  }

  setInterval(alternateRole, 3000);
});


//Pop up image & Video
document.getElementById('pulse-in').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('bigImage').src = './assets/TYLONs.jpg';

    setTimeout(function() {
      document.getElementById('bigImage').style.display = 'none';
      document.getElementById('bigVideo').style.display = 'block';
    }, 5000); 
});

document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('bigImage').style.display = 'block';
    document.getElementById('bigVideo').style.display = 'none';
});
