export const validateForm = (name,email,message) => {
    const errors = {}

    if (name.trim() === "") {
        errors.name = "El nombre es requerido"
    }

    if (email.trim() === "") {
        errors.email = "El email es requerido"
    }

    if (message.trim() === "") {
        errors.message = "El mensaje es requerido"
    }

    return errors
}