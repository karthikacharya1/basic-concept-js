function blinking() {
  if (document.getElementById("text")) {
    var d = document.getElementById("text");
    d.style.color = d.style.color == "blue" ? "white" : "blue";
    setTimeout("blinking()", 900);
  }
}
