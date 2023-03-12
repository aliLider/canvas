var accordion = document.getElementsByClassName("accordion");
var a;
for (a = 0; a < accordion.length; a++) {
  accordion[a].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}