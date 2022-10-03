const generarId = () => Math.random().toString(36).substr(2) + Date.now().toString(36);

const formatearCantidad = cantidad => cantidad.toLocaleString('en-US',{ style: 'currency', currency : 'USD'});

const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    };

    return fechaNueva.toLocaleDateString('es-ES', opciones);
};

export {
    generarId,
    formatearCantidad,
    formatearFecha
}