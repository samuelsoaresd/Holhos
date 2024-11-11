function toggleText(id) {
  var textElement = document.getElementById(id)
  if (textElement.style.display === "none") {
    textElement.style.display = "block"
  } else {
    textElement.style.display = "none"
  }
}
