/*Parte de Ignacio*/
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")


form.addEventListener("submit", e => {
    e.preventDefault()

    const errores = []

    
    let regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|duoc\.cl|duocuc\.cl)$/

    if (!regexEmail.test(email.value)) {
        errores.push("Solo se permiten correos @gmail.com, @duoc.cl o @duocuc.cl")

    }

    if (pass.value.length < 8) {
        errores.push("La contraseña debe tener al menos 8 caracteres")
    }


    if (errores.length > 0) {
        const errorDiv = document.querySelector("#errores");
        errorDiv.innerHTML = ""
        errorDiv.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <ul>
                ${errores.map(error => `<li class="text-black text-start">${error}</li>`).join("")}
            </ul>
        </div>
        `
        return
    }

})
