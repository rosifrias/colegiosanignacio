// Esperar a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (evento) => {
        // Previene que la página se recargue por defecto al enviar
        evento.preventDefault();

        // Capturar los valores ingresados por el usuario
        const nombre = document.getElementById('nombre').value;
        
        // Simulación de envío exitoso (¡Aquí luego conectarás una API real o servicio de email!)
        alert(`¡Gracias, ${nombre}! Su solicitud de admisiones ha sido enviada con éxito. Nos pondremos en contacto pronto.`);

        // Limpiar el formulario
        form.reset();
    });
});