// Menu openen en sluiten
const knop = document.querySelector("button");
const menu = document.querySelector("aside");

knop.addEventListener("click", function () {
  if (menu.hidden) {
    menu.hidden = false;
    knop.textContent = "✕";
  } else {
    menu.hidden = true;
    knop.textContent = "☰";
  }
});

// Logo animeren met Lottie (alleen op de homepagina)
const logoLink = document.querySelector("header h1 a");

if (logoLink) {
  const animatie = lottie.loadAnimation({
    container: logoLink,        // hier komt de animatie in
    path: "images/logo.json",   // het animatiebestand
    renderer: "svg",
    loop: true,
    autoplay: true
  });

  // Als de animatie geladen is, haal het gewone plaatje weg
  animatie.addEventListener("DOMLoaded", function () {
    logoLink.querySelector("img").remove();
  });
}
