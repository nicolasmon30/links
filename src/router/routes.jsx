import { Routes, Route } from "react-router-dom"
import Layout from "../pages/Layout" 
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Links } from "../pages/Links"
import { Profile } from "../pages/Profile"

export const routes = () => {
    return (
        <Layout>
            <Routes>
                <Route  path="/" element={<Login/>} />
                <Route  path="/register" element={<Register/>} />
                <Route  path="/mylinks" element={<Links/>} />
                <Route  path="/profile" element={<Profile/>} />
            </Routes>
        </Layout>
    )
}