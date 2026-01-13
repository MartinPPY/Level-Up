//VALIDACIONES PARA FORMULARIOS

<<<<<<< HEAD
   
































































































/*Parte de Ignacio*/
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const errores = []

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""

    let entrar = false

    let regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|duocuc\.cl)$/

    if (!regexEmail.test(email.value)) {
        warnings = "Solo se permiten correos @gmail.com, @duoc.cl o @duocuc.cl"
        errores.push("Solo se permiten correos @gmail.com, @duoc.cl o @duocuc.cl")
        console.log(warnings)
        warnings += `El email no es valido <br>`
        entrar = true
    }

    console.log("Correo válido")
    if (errores.length > 0){
        const erroresDiv = document.getElementById("errores")
=======
//FUNCION PARA VALIDAR EL RUT
function validarRut(rut) {
    rut = rut.toString().trim().toUpperCase();

    // Debe tener al menos 8 caracteres
    if (!/^\d{7,8}[0-9K]$/.test(rut)) return false;

    const cuerpo = rut.slice(0, -1);
    const dv = rut.slice(-1);

    let suma = 0;
    let multiplicador = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += parseInt(cuerpo[i]) * multiplicador;
        multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }

    const resto = 11 - (suma % 11);

    let dvCalculado;
    if (resto === 11) dvCalculado = '0';
    else if (resto === 10) dvCalculado = 'K';
    else dvCalculado = resto.toString();

    return dv === dvCalculado;
}


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const errores = []
    const name = document.querySelector("#name").value
    const lastname = document.querySelector("#lastname").value
    const birthday = document.querySelector("#birthday").value
    const phone = parseInt(document.querySelector("#phone").value)
    const rut = document.querySelector("#run").value

    if (rut.trim() === "") {
        errores.push("El rut es obligatorio")
    }

    if (!validarRut(rut)) {
        errores.push("El rut es invalido")
    }


    if (name.trim() === "") {
        errores.push("El nombre es obligatorio")
    }

    if (lastname.trim() === "") {
        errores.push("El apellido es obligatorio")
    }


    const age = (new Date().getFullYear()  - new Date(birthday).getFullYear())

    if (age < 18) {
        errores.push("Debes tener al menos 18 años")
    }




    if (errores.length > 0) {
        const erroresDiv = document.querySelector(".errores")
>>>>>>> 63269f38f07a35ccfa548c2e86ac2fe4b6ce2e2e
        erroresDiv.innerHTML = ""
        erroresDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <ul>
<<<<<<< HEAD
            ${errores.map(error => `<li class="text-black text-start">${error}</li>`).join("")}
=======
            ${errores.map(error => `<li class="text-black text-start" >${error}</li>`).join("")}
>>>>>>> 63269f38f07a35ccfa548c2e86ac2fe4b6ce2e2e
            </ul>
        </div>
        `
        return
<<<<<<< HEAD
        
    }

    if(pass.value.length < 4 && pass.value.length > 10){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})
=======
    }
})
>>>>>>> 63269f38f07a35ccfa548c2e86ac2fe4b6ce2e2e
