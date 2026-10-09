
const requestForm = document.querySelector("#request-form");
const formStatus = document.querySelector("#form-status");

if (requestForm && formStatus) {
    requestForm.action = "";
    document.querySelector("#review-button").disabled = false;
    
    requestForm.addEventListener("input", function () {
    formStatus.textContent = "";
    });

    requestForm.addEventListener("change", function () {
    formStatus.textContent = "";
    });
 
    requestForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!requestForm.reportValidity()) {
      return;
    }

    const topic = document.querySelector("#topic");
    const selectedTopic = topic.options[topic.selectedIndex].text;

    formStatus.textContent =
      `Your ${selectedTopic.toLowerCase()} request was reviewed. ` +
      "This is a demonstration form. No information was sent or stored.";
  });
}
