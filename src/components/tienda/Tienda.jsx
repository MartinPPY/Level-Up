import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./home/Home"
import { Registro } from "./registro/Registro"
import { Login } from "./login/Login"

export const Tienda = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Navigate to="home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    )
}
