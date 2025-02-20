document.addEventListener("DOMContentLoaded", () => {
    const colorInput = document.getElementById("colorInput");
    const colorBox = document.getElementById("colorBox");
    
    colorInput.addEventListener("input", () => {
        colorBox.style.backgroundColor = colorInput.value;
    });
});
