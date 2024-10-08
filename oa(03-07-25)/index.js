         // Scroll up to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Optional: Add smooth scrolling effect
            });
        
       

function myFunction() {
    var element = document.getElementById("open");
    element.classList.toggle("display");
 }
// Close the menu when a navigation link is clicked
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function() {
        var element = document.getElementById("open");
        if (element.classList.contains("display")) {
            element.classList.remove("display");
        }
    });
});
 document.addEventListener('DOMContentLoaded', function () {
    // Function to hide all content sections
    function hideAllContent() {
        var allContent = document.querySelectorAll('.content,.content1,.content-profile');
        for (var i = 0; i < allContent.length; i++) {
            allContent[i].style.display = 'none';
        }
    }

    // Function to show the selected content section
    function showContent(contentId) {

        // Hide all content sections
        hideAllContent();

        var element = document.getElementById(contentId);
        if (element) {
            element.style.display = 'block';
        }
        sessionStorage.setItem('currentSection', contentId);
    }

    function handlePopState(event) {
        if (event.state && event.state.section) {
            showContent(event.state.section);
        }
    }

    function handleNavigationClick(event) {
        var href = this.getAttribute('href');
        if (href.startsWith('#')) {
            event.preventDefault();
            var section = href.substring(1);
            showContent(section);
            history.pushState({ section: section }, null, `#${section}`);
        } else if (href.endsWith('.html')) {
            sessionStorage.removeItem('currentSection');
        }
    }

    window.addEventListener('popstate', handlePopState);

    const hash = window.location.hash.substring(1);
    const lastVisitedSection = sessionStorage.getItem('currentSection');
    showContent(hash || lastVisitedSection || 'about');

    var navigationLinks = document.querySelectorAll('nav a');
    navigationLinks.forEach(function (link) {
        link.addEventListener('click', handleNavigationClick);
    });
});
$(document).ready(function() {
    changeNavBackground("about")  
})

function changeNavBackground(section) {
    const header = document.getElementById('header');
    header.style.backgroundSize = "cover";
    // header.style.backgroundPosition = "center";
    switch(section) {
        case 'about':
            header.style.backgroundImage = "url('StockCake-Interactive VR Experience_1722506730.jpg')";
            header.style.height="400px"
            break;
        case 'offerings':
            header.style.backgroundImage = "url('StockCake-Robot Analyzing Data_1722504876.jpg')";
            break;
        case 'innovations':
                header.style.backgroundImage = "url('StockCake-Robot Analyzing Data_1722504876.jpg')";
                break;
        case 'events':
            header.style.backgroundImage = "url('eventsbackg3.jpg')";
            break;
        case 'partner':
            header.style.backgroundImage = "url('StockCake-Tech Collaboration Hub_1722505578.jpg')";
            break;
        case 'executive':
            header.style.backgroundImage = "url('StockCake-Team Collaboration Session_1722504480.jpg')";
            break;
        case 'contact':
            header.style.backgroundImage = "url('StockCake-Global Connectivity Concept_1722581217.jpg')";
            break;
        default:
            header.style.backgroundImage = "url('StockCake-Interactive VR Experience_1722506730.jpg')";
    }
}

function myFunction() {
    const list = document.getElementById('open');
    list.classList.toggle('display');
}
function navigateToPage(pageUrl) {
    window.location.href = pageUrl; // Navigate to the specified page
}


function showEvents(month) {
  // Hide all months and remove the 'active' class
  document.querySelectorAll('.month-content').forEach(div => {
    div.classList.remove('show');
  });
  document.querySelectorAll('h3').forEach(heading => {
    heading.classList.remove('active');
  });

  // Show the clicked month and add 'active' class to heading
  const selectedMonth = document.getElementById(month);
  selectedMonth.classList.add('show');
  const heading = document.querySelector(`h3[onclick="showEvents('${month}')"]`);
  heading.classList.add('active');
}

// Optionally show the first month by default
showEvents('september');

function filterEvents() {
    // Get the selected month and year from the dropdowns
    const selectedMonth = document.getElementById('month').value;
    const selectedYear = document.getElementById('year').value;

    // Get all the event elements
    const events = document.querySelectorAll('.event');

    // Loop through each event and decide whether to show or hide it
    events.forEach(event => {
        const eventMonth = event.getAttribute('data-month');
        const eventYear = event.getAttribute('data-year');

        // Show event if it matches the selected month and year, or if 'all' is selected
        if ((selectedMonth === 'all' || selectedMonth === eventMonth) &&
            (selectedYear === 'all' || selectedYear === eventYear)) {
            event.style.display = 'flex'; // Show event
        } else {
            event.style.display = 'none'; // Hide event
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const fiveGIcon = document.getElementById('5g-icon');

    fiveGIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        // Show an alert prompting the user to fill out the enquiry form
        alert('Please fill out the enquiry form before accessing the 5G content.');

        // Redirect to the enquiry form page (replace with the actual form page URL)
        window.location.href = 'enquiry-form.html'; // Adjust the URL as needed
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const enquiryForm = document.getElementById('enquiryForm'); // Assuming your form has an ID

    enquiryForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform form submission here (AJAX, fetch, or standard form post)
        // Assuming form submission is successful:

        // Redirect to the 5G page after successful form submission
        window.location.href = '5G.html';
    });
});
