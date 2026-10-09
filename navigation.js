
// Find the form and its status message.
const requestForm = document.querySelector("#request-form");
const formStatus = document.querySelector("#form-status");

if (requestForm && formStatus) {
    requestForm.action = "";
    
    // Enable the button when JavaScript is available.
    document.querySelector("#review-button").disabled = false;
   
    // Clear the old confirmation when the form changes.
    requestForm.addEventListener("input", function () {
    formStatus.textContent = "";
    });
    // Clear the old confirmation when the form changes.
    requestForm.addEventListener("change", function () {
    formStatus.textContent = "";
    });
 
    // Handle form submission without reloading the page.
    requestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Stop if the form has invalid information.
    if (!requestForm.reportValidity()) {
      return;
    }

    // Get the topic selected by the user.
    const topic = document.querySelector("#topic");
    const selectedTopic = topic.options[topic.selectedIndex].text;

    // Show a confirmation without sending information.
    formStatus.textContent =
      `Your ${selectedTopic.toLowerCase()} request was reviewed. ` +
      "This is a demonstration form. No information was sent or stored.";
  });
}
