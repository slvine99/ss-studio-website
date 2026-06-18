import "./style.css";

const filters = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".portfolio-card");

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filters.forEach((f) => f.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.textContent?.trim();

    cards.forEach((card) => {
      const cardCategory = card.querySelector(".tag")?.textContent?.trim();
      if (category === "All" || category === cardCategory) {
        (card as HTMLElement).style.display = "block";
      } else {
        (card as HTMLElement).style.display = "none";
      }
    });
  });
});
