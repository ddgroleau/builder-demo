(function formControlInit() {
  const form = document.getElementById("contact-form");

  if (form) {
    form.setAttribute("method", "POST");
    form.setAttribute("action", "https://api.web3forms.com/submit");

    const hiddenInput1 = document.createElement("input");
    hiddenInput1.setAttribute("type", "hidden");
    hiddenInput1.setAttribute("name", "access_key");
    hiddenInput1.setAttribute("value", "0f1241b1-5da2-4b38-8ab8-5880bed8e415");

    form.appendChild(hiddenInput1);

    const hiddenInput2 = document.createElement("input");
    hiddenInput2.setAttribute("type", "hidden");
    hiddenInput2.setAttribute("name", "redirect");

    let origin = window.origin;
    if (origin.includes("github")) {
      origin = "https://ddgroleau.github.io/landscaper-demo";
    }
    hiddenInput2.setAttribute("value", origin + "/thank-you");

    form.appendChild(hiddenInput2);
  }
})();
