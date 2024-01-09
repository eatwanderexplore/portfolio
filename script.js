document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown element
    var projectsDropdown = document.getElementById('projects-dropdown');
  
    // Add event listener for mouseenter to show the dropdown
    projectsDropdown.addEventListener('mouseenter', function() {
      // Add the 'active' class to show the dropdown menu
      this.classList.add('active');
    });
  
    // Add event listener for mouseleave to hide the dropdown
    projectsDropdown.addEventListener('mouseleave', function() {
      // Remove the 'active' class to hide the dropdown menu
      this.classList.remove('active');
    });
  });
  