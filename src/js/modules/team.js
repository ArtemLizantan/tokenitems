
function team() {
  const card = document.getElementsByClassName("team__card");
  const btn = document.getElementById("button");

  btn.addEventListener("click", () => {
    for (let i = 8; i < card.length; i++) {
        const element = card[i];
        element.classList.toggle("_hidein");
      }
  });
}

team();
