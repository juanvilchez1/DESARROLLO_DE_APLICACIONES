const imageUrlInput = document.getElementById("imageUrlInput");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen musical
addImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();

  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen musical";
    img.classList.add("fade-in");

    img.addEventListener("click", () => {
      if (selectedImage) {
        selectedImage.classList.remove("selected");
      }
      img.classList.add("selected");
      selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
  }
});

// Eliminar imagen seleccionada
deleteImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  } else {
    alert("🎵 Selecciona primero una imagen para eliminar.");
  }
});
