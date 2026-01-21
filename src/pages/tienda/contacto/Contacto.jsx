import { useState } from "react"
import { validateForm } from "./validaciones"
import Swal from "sweetalert2"

export const Contacto = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [errores, setErrores] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = validateForm(name, email, message)
        if (Object.keys(errors).length > 0) {
            setErrores(errors)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, corrige los errores en el formulario',
            })
            return
        }
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'El mensaje se envio correctamente',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            setEmail("")
            setName("")
            setMessage("")
            setErrores({})
        })


    }


    return (
        <main className="container-fluid p-4 bg-dark text-white">

            <div className="text-center mb-5">
                <h1 className="fw-bold">Contacto</h1>
                <p className="text-secondary">¿Tienes dudas? Escríbenos</p>
            </div>

            <div className="row g-5">
                <div className="col-md-6">
                    <h4>Información de contacto</h4>
                    <p><i className="bi bi-envelope"></i> contacto@levelup.cl</p>
                    <p><i className="bi bi-telephone"></i> +56 9 1234 5678</p>
                    <p><i className="bi bi-geo-alt"></i> Chile</p>
                </div>

                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Apellido:</label>
                            <input type="text" className="form-control border bg-dark text-white border-info tienda-registro-placeholder" id="name" maxLength="100" placeholder="¿Como te llamas?" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Correo:</label>
                            <input type="email" className="form-control border bg-dark text-white border-info tienda-registro-placeholder" id="email" maxLength="100" placeholder="Validos: @duoc / duocuc y gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Mensaje:</label>
                            <textarea className="form-control border bg-dark text-white border-info tienda-registro-placeholder" rows="4" id="message" placeholder="Cuentanos en que te ayudamos....." maxLength="500" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>

                        {
                            errores && Object.keys(errores).length > 0 && (
                                <div className="alert alert-danger">
                                    <ul>
                                        {Object.values(errores).map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }

                        <button type="submit" className="btn btn-info">Enviar mensaje</button>
                    </form>
                </div>
            </div>

        </main>
    )
}
