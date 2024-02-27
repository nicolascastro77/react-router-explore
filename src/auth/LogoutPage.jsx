import React from 'react'
import { useAuth } from './auth';
export default function LogoutPage() {
    const auth = useAuth();
    // const [username, setUsername] = useState('')
    const logout = (e) => {
        e.preventDefault()
        auth.logout();
    }

    return (
        <div className="p-11 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Cerrar Sesion</h1>
                <form onSubmit={logout}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-600">
                            Seguto que desea cerrar sesion?
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-3 rounded-md focus:outline-none focus:ring focus:border-indigo-300"
                    >
                        Salir
                    </button>
                </form>
            </div>
        </div>
    );
}
