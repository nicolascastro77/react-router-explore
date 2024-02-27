import React, { useState } from 'react'
import { useAuth } from './auth'
import { Navigate } from 'react-router-dom';
export default function LoginPage() {

    const auth = useAuth();

    const [username, setUsername] = useState('')
    const login = (e) => {
        e.preventDefault()
        auth.login({username})
    }
    
    if (auth.user) {
        return <Navigate to="/profile" />
    }

    return (
        <div className="p-11 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Iniciar Sesión</h1>
                <form onSubmit={login}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-semibold text-gray-600">
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            placeholder="Ingrese su nombre de usuario"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    {/* <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                            placeholder="Ingrese su contraseña"
                        />
                    </div> */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-3 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
