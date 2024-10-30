function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function toggleDerivatives(formulaId) {
    const derivative = document.getElementById(formulaId);
    derivative.style.display = derivative.style.display === 'block' ? 'none' : 'block';
}
