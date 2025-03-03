document.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-theme")) {
    const themeFile = event.target.getAttribute("data-theme");
    const themeButtons = document.querySelectorAll("[data-theme]");
    themeButtons.forEach((btn) => btn.classList.remove("active-theme"));
    event.target.classList.add("active-theme");
    document.getElementById("themeStylesheet").setAttribute("href", themeFile);
  }
});

document.getElementById("toggle-projects").addEventListener("click", function() {
  let moreProjects = document.getElementById("more-projects");
  let buttonContainer = document.getElementById("toggle-projects-container");

  if (moreProjects.style.maxHeight) {
      // Collapse More Projects
      moreProjects.style.maxHeight = null;
      this.innerHTML = 'More Projects <i class="fa fa-toggle-down"></i>';
      buttonContainer.appendChild(this); // Move the button back to its original position
  } else {
      // Expand More Projects
      moreProjects.style.maxHeight = (moreProjects.scrollHeight +50)+ "px";
      this.innerHTML = 'Less Projects <i class="fa fa-toggle-up"></i>';
      
      // Scroll down smoothly & move button below the section
      setTimeout(() => {
          moreProjects.after(buttonContainer); // Moves button below More Projects section
          moreProjects.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
  }
});



