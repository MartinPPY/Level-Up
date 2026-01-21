
import { Route, Navigate } from "react-router-dom"
import {RoutesWithNotFound} from './routes/RoutesWithNotFound'
import { Tienda } from "./pages/tienda/Tienda"
import { Admin } from "./pages/admin/Admin"

export const AppRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/tienda" />} />
            <Route path="/tienda/*" element={<Tienda />} />
            <Route path="/admin/*" element={<Admin />} />
        </RoutesWithNotFound>
    )
}
