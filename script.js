document
  .getElementById("suggestion-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Aquí podrías agregar código para enviar la sugerencia a un servidor

    // Animación de desaparición del formulario
    this.style.opacity = "0";
    setTimeout(() => {
      this.classList.add("hidden");
      document.getElementById("thank-you-message").classList.remove("hidden");
      document.getElementById("thank-you-message").style.opacity = "1";
    }, 600);
  });
