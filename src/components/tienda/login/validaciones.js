export const validateForm = (email, password) => {
    const errors = {};

    if(!email || email.trim() === "") {
        errors.email = "El email es requerido";
    }

    const emailRegex = /^[a-z0-9._%+-]+@(gmail\.com|duocuc\.cl|duoc\.cl)$/i;

    if(!emailRegex.test(email)) {
        errors.email = "El email no es válido";
    }

    if(!password || password.trim() === "") {
        errors.password = "La contraseña es requerida";
    }
    
    return errors
}
