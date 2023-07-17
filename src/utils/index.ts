
export function imagePath(data:string | undefined){
    const image = `${import.meta.env.VITE_IMAGE_API}${data}`
    return image;
}

//Esta función es para pasar minutos a horas y minutos, es la para poner 
//la duración de las peliculas
export function minAHrs(min:number) {
    const horas = Math.floor(min / 60); 
    const minutosRestantes = min % 60; 

    return `${horas}h ${minutosRestantes}m`; 
}