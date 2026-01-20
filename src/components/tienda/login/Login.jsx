import Logo from "../../../assets/images/logo.jpeg"
import { useState } from "react";
import { validateForm } from "./validaciones";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm(email, password);

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos correctamente",
                icon: "error"
            })
            return;
        }

        Swal.fire({
            title: "Éxito",
            text: "Inicio de sesión exitoso",
            icon: "success",
            timer: 3000,
            showConfirmButton: false
        }).then(() => {
            setEmail("")
            setPassword("")
            setErrors({})
            navigate("/tienda")
        })

    }


    return (
        <main className="container-fluid p-4 bg-dark text-white">
            <div className="row d-flex align-items-center flex-column gap-2 justify-content-center">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={Logo} alt="Logo" className="img-fluid" width="50%" />
                </div>
                <div className="col-lg-6">
                    <h2 className="text-center">Inicio de sesión</h2>
                    <p className="text-center">Ingresa tus datos para iniciar sesión</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="email" placeholder="Johndoe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        {
                            errors && Object.keys(errors).length > 0 && (
                                <div className="alert alert-danger">
                                    <ul>
                                        {Object.values(errors).map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }

                        <button type="submit" className="btn btn-info w-100">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
