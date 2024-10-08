
document.addEventListener("DOMContentLoaded", function() {
  var headers = document.querySelectorAll(".accordion-header");
  console.log(headers)
  headers.forEach(function(header) {
    header.addEventListener("click", function() {
      // Get the content related to this header
      var content = this.nextElementSibling;
      var icon = this.querySelector('.icon');
      
      // Toggle the clicked accordion content
      if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
        this.classList.remove('active');
      } else {
        // Close all other accordions
        document.querySelectorAll(".accordion-content").forEach(function(accContent) {
          if (accContent !== content) {
            accContent.style.display = "none";
            accContent.previousElementSibling.querySelector('.icon').textContent = "+";
            accContent.previousElementSibling.classList.remove('active');
          }
        });

        // Open the clicked accordion
        content.style.display = "block";
        icon.textContent = "-";
        this.classList.add('active');
      }
    });
  });
});
function myFunction() {
  const list = document.getElementById('open');
  list.classList.toggle('display');
}
// Show the download link after the document is viewed for a certain time
document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.querySelector('iframe');
  iframe.onload = function() {
      setTimeout(() => {
          document.getElementById('download-link').style.display = 'inline-block';
      }, 5000); // 5 seconds delay before showing the download link
  };
});