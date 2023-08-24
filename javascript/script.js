// script.js
document.addEventListener("DOMContentLoaded", function() {
  const zoomImages = document.querySelectorAll(".zoom-image");

  zoomImages.forEach(function(image) {
    image.addEventListener("click", function() {
      if (image.classList.contains("enlarged")) {
        image.classList.remove("enlarged");
      } else {
        // Remueve la clase "enlarged" de todas las imágenes antes de agrandar la imagen actual
        zoomImages.forEach(function(img) {
          img.classList.remove("enlarged");
        });
        image.classList.add("enlarged");
      }
    });
  });
});
