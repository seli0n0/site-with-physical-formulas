function toggleDerivatives(id) {
    const derivatives = document.getElementById(id);
    if (derivatives.style.display === "none" || derivatives.style.display === "") {
        derivatives.style.display = "block";
    } else {
        derivatives.style.display = "none";
    }
}

// Инициализация скрытых формул
document.querySelectorAll('.derivatives').forEach((el) => {
    el.style.display = "none"; // Скрываем все производные при загрузке
});
function toggleDerivatives(id) {
    const element = document.getElementById(id);
    element.style.display = (element.style.display === "none") ? "block" : "none";
}
