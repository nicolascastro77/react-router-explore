import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const adminList = ['admin', 'admin1', 'admin2', 'admin3'];

const roles = {
    admin: {
        status:'admin',
        write: true,
        read: true,
        delete: true,
    },
    editor: {
        status:'editor',
        write: true,
        read: true,
        delete: false,
    },
    visitor: {
        status:'visitor',
        write: false,
        read: true,
        delete: false,
    },
};

const users = [
    {
        name: "admin",
        role: roles.admin,
    },
    {
        name: "editor",
        role: roles.editor,
    },
];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    let location = useLocation();
    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    console.log(user);


    const login = ({ username }) => {
        let from = location.state?.from?.pathname || -1;
        //revisar si el usuario existe o lo crea como visitante
        const rol = users.find((usu) => usu.name === username);
        rol !== undefined
            ? setUser(rol)
            : setUser({ name: username, role: roles.visitor });
            navigate(from, { replace: true });
    };

    const logout = () => {
        setUser(null)
        navigate('/')
    }


    const auth = { user, login, logout }
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth
}


function AuthRouter(props) {
    let location = useLocation();
    const auth = useAuth();    
    if (!auth.user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return props.children
}


export {
    AuthProvider,
    useAuth,
    AuthRouter
}