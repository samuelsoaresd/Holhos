document.getElementById("toggleButton").addEventListener("click", function () {
  var collapsedBoxes = document.querySelectorAll(".collapse1")
  collapsedBoxes.forEach(function (box) {
    if (box.style.display === "none" || box.style.display === "") {
      box.style.display = "block"
    } else {
      box.style.display = "none"
    }
  })

  if (this.textContent === "Ver mais") {
    this.textContent = "Ver menos"
  } else {
    this.textContent = "Ver mais"
  }
})
