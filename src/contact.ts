import "./style.css";

const form = document.querySelector(".contact-form") as HTMLFormElement;
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    form.reset();
  });
}
