document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");

    // Añadir evento a cada botón
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value) {
                // Agregar valor al display
                display.value += value;
            }
        });
    });

    // Limpiar el display
    document.getElementById("clear").addEventListener("click", () => {
        display.value = '';
    });

    // Calcular resultado
    document.getElementById("equals").addEventListener("click", () => {
        try {
            display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
        } catch (error) {
            display.value = 'Error';
        }
    });
});
