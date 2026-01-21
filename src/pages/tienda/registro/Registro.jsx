import { TiendaUserForm } from "../../../components/forms/user-form/TiendaUserForm"


export const Registro = () => {
    return (
        <main className="container-fluid p-4 bg-dark text-white">
            <h2 className="text-center">Registro de usuario</h2>
            <p className="text-center">Por favor, complete todos los campos correctamente</p>
            <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-lg-6">
                    <TiendaUserForm/>
                </div>
            </div>
            
        </main>
    )
}
