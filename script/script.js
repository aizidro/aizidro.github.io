// Obtém elementos do DOM
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// Event listener para abrir o modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Event listener para fechar o modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
