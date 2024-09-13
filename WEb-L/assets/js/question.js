function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  const feedback = document.getElementById("feedback");
  const nextPageLink = document.getElementById("nextPageLink");

  if (answer === "jesus" || answer === "yesus") {
    feedback.classList.remove("hidden");
    nextPageLink.classList.remove("hidden");
  } else {
    feedback.textContent = "Coba Lagi Sayang";

    feedback.classList.remove("hidden");
    nextPageLink.classList.add("hidden");
  }
}
