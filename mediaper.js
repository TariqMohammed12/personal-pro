let maxwid = 1050;
window.addEventListener("load", funcre);
window.addEventListener("resize", funcre);
function funcre() {
  if (window.innerWidth < maxwid) {
    document.getElementById("uul").append(document.getElementById("ul"));
  } else {
    document
      .getElementById("hd")
      .append(
        document.getElementById("ul"),
        document.getElementById("butt0"),
        document.getElementById("hg2")
      );
  }

  poss.style.setProperty("--ww", window.innerWidth - 400 + "px");
}
document.getElementById("menuclick").addEventListener("click", () => {
  document.getElementById("uul").style.display = "flex";
});
document.getElementById("menuclick1").addEventListener("click", () => {
  document.getElementById("uul").style.display = "none";
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.getElementById("hd").style.background = "#1e1e1e";
  } else {
    document.getElementById("hd").style.background = "#121212";
  }
});
