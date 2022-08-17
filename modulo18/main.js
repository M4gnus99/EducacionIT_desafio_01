// Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
// contraseña segura pero con las siguientes característica, que esta debe contener: 
// 1) Que tenga una longitud de 12 caracteres mínimo.
// 2) Debe contener al menos 1 letra en mayúscula.
// 3) Debe contener al menos 1 letra en minúscula.
// 4) No puede contener espacios vacíos.


let form = document.querySelector("form")
let input = document.querySelector("input");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let valor = input.value;
    let valor_sinEspacios = valor.trim();
    let longitud = valor_sinEspacios.length;
    
    let noEspacios = /\s/; //EXPRECION REGULAR DE ESPACIOS
    let mayusculas = /[A-Z]/; //EXPRECION REGULAR DE MAYUSCULAS
    let minusculas = /[a-z]/; //EXPRECION REGULAR DE MINUSCULAS

    // ALMENOS 12 CARACTERES
    if(longitud >= 12){
        if(noEspacios.test(valor_sinEspacios)){ // COMPROBANDO SI HAY ESPACIOS DE POR MEDIO
            input.setCustomValidity("La contraseña no puede tener espacios");
        }else if(!mayusculas.test(valor_sinEspacios)){  // COMPROBANDO SI HAY ALMENOS UNA MINUSCULA O MAYUSUCULA
            input.setCustomValidity("La contraseña debe de tener almenos una letra mayúscula");
        }else if(!minusculas.test(valor_sinEspacios)){
            input.setCustomValidity("La contraseña debe de tener almenos una letra minúscula");
        }
        else{
            alert("Contraseña valida!");
        }
        
    }else{
        input.setCustomValidity("Ingrese un contraseña con almenos 12 caracteres");
    }

})
