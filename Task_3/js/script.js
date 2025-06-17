const btn = document.getElementById("animateBtn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  btn.classList.add("clicked");
  msg.textContent = "Button clicked! Animation triggered.";

  setTimeout(() => {
    btn.classList.remove("clicked");
    msg.textContent = "";
  }, 2000);
});
