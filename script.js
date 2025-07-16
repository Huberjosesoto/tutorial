// Esperar a que cargue todo
window.addEventListener("load", () => {
  // Oculta el loader y muestra el contenido
  document.getElementById("loader").style.display = "none";
  document.getElementById("contenido").style.display = "block";

  // Mostrar/ocultar contenido de cada tema
  const botones = document.querySelectorAll(".toggle-btn");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const contenido = btn.nextElementSibling;
      if (contenido.style.display === "block") {
        contenido.style.display = "none";
      } else {
        contenido.style.display = "block";
      }
    });
  });
});
