export default function validarCrearCuenta(valores) {

    let errores = {}; 
    
    //Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = 'El Nombre es obligatorio';
    }

    //Validar la empresa
    if(!valores.empresa) {
        errores.empresa = 'El Nombre de Empresa o Compañía es obligatorio';
    }


    //Validar la url
    if(!valores.url) {
        errores.url = 'La URL del Producto es obligatoria';
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = 'URL no válida';
    }

    // Validar descripcion
    if(!valores.descripcion) {
        errores.descripcion = "Agrega una Descripción de tu Producto";
    }

    return errores;
}