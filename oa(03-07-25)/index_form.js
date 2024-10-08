document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Capture the form data
    console.log("Form data:", [...formData.entries()]); // Log form data

    fetch("submit_enquiry.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log("Response from server:", data);
      alert("Thanks for Applying"); // Display a message to the user
    })
    .catch(error => {
      console.error("Error:", error); // Log any errors
    });

    // fetch("submit_enquiry.php", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: "anan",
    //     email: "raj@gmail.com",
    //     phone: 7656756789
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // });
  });