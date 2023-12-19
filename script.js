const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card1");

  if (!target) return;

  cardsContainer.querySelectorAll(".card1").forEach((card1) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});
