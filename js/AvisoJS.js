document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el navegador admite JavaScript
    if (!navigator || !navigator.userAgent || !navigator.userAgent.includes("JavaScript")) {
        // Mostrar alerta si no se admite JavaScript
        alert("Tu navegador no admite JavaScript. Por favor, actívalo para una mejor experiencia.");
    } else {
        // Tu código existente aquí
        console.log("JavaScript está habilitado. Puedes continuar con tu código.");
    }
});
