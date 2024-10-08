  // JavaScript to toggle content on the right side based on the clicked accordion button
  const buttons = document.querySelectorAll('.accordion-toggle');
  const contents = document.querySelectorAll('.right-content');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Hide all right content first
          contents.forEach(content => content.classList.remove('active'));

          // Deactivate all buttons and reset icons
          buttons.forEach(btn => btn.classList.remove('active'));

          // Activate clicked button and toggle content
          this.classList.add('active');

          // Get the target content using data-target
          const targetContent = document.getElementById(this.dataset.target);

          // Show the clicked content on the right
          if (targetContent) {
              targetContent.classList.add('active');
          }
      });
  });
  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }
  // Close menu if clicked outside
document.addEventListener('click', function(event) {
    var menu = document.getElementById("menu");
    var menuIcon = document.querySelector('.menu');
  
    // Check if the click happened outside the menu and the menu icon
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove("active"); // Close the menu
    }
  });