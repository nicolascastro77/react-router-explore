import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../auth/auth';

export const Menu = () => {
    const auth = useAuth();

    if (!auth.user) {

    }

    return (
        <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
            <ul className="flex justify-center space-x-4">
                {routes.map((route, index) => {
                    if (route.publicOnly && auth.user) return null
                    if (route.private && !auth.user) return null
                    return (
                        <li key={index} className="text-white font-bold">
                            <NavLink
                                to={route.to}
                                end
                                className="transition-colors duration-300 hover:text-yellow-300 focus:outline-none focus:text-yellow-300"
                                activeClassName="text-yellow-300"
                            >
                                {route.text}
                            </NavLink>
                        </li>)
                })}
            </ul>
        </nav>

        // <nav>
        //     <ul>
        //         <li>
        //             <Link to={"/"}>Home</Link>
        //         </li>
        //         <li>
        //             <Link to={"/blog"}>Blog</Link>
        //         </li>
        //         <li>
        //             <Link to={"/profile"}>Profile</Link>
        //         </li>
        //     </ul>
        // </nav>
    )
}

const routes = [];

routes.push({
    to: '/',
    text: 'Home',
    private: false,
});
routes.push({
    to: '/blog',
    text: 'Blog',
    private: false,
});
routes.push({
    to: '/profile',
    text: 'Profile',
    private: true,
});
routes.push({
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly:true
});
routes.push({
    to: '/logout',
    text: 'Logout',
    private: true,
});
