// Menu mobile

// Imagem 1
const imagem1 = document.getElementById("lampada-01");
imagem1.addEventListener("click", function () {
  console.log(imagem1.src);
  if (imagem1.src.endsWith("lampada.jpg")) {
    imagem1.src = "img/lampada-on.jpg";
  } else {
    imagem1.src = "img/lampada.jpg";
  }
});

// Imagem 2
