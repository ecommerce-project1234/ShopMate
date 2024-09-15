import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Container, LogoutBtn } from '../index';
import man from './assets/undraw_Male_avatar_g98d.png'



const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const authStatus = useSelector((state) => state.auth.status)
    const cartData = useSelector((state) => state.cart.userData)
    const [itemCount, setItemCount] = useState(1)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'About',
            slug: '/about',
            active: true,
        },
        {
            name: 'LogIn',
            slug: '/LogIn',
            active: !authStatus,
        },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <Container>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">
                        <Link href="/">E-Shop</Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            item.active ? (
                                <li
                                    key={item.name}
                                >
                                    <NavLink
                                        to={item.slug}
                                        onClick={() => navigate(item.slug)}
                                        className={({ isActive }) => `${isActive ? 'text-red-600 text-lg hover:text-blue-800' : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                    >{item.name}</NavLink>
                                </li>) : null
                        ))}
                        {
                            authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )
                        }
                    </ul>

                    {/* Profile, Cart and Menu for Mobile */}
                    <div className="flex items-center space-x-4">
                        {/* <div className=" hidden lg:block">
                            <img
                                className="inline-block h-10 w-10 rounded-full"
                                src={man}
                                alt="man"
                            />
                        </div> */}
                        {authStatus &&
                            <NavLink
                                to={'/profile'}
                                onClick={() =>
                                    navigate('/profile')}>
                                <div className=" hidden lg:block">
                                    <img
                                        className="inline-block  w-12  rounded-full"
                                        src={man}
                                        alt="man"
                                    />
                                </div>
                            </NavLink>
                        }
                        <NavLink to={"/cart"} className="relative text-gray-800 hover:text-gray-600">
                            {/* Cart Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 128 128"
                                className="w-5 h-7"
                                fill="currentColor"
                            >
                                <g>
                                    <path
                                        d="M45.3 81.2h78V43.7L35.9 25.4l-3.1-12.9-12.6-4.2c0-.2.1-.3.1-.5 0-4.3-3.5-7.8-7.8-7.8S4.7 3.5 4.7 7.8s3.5 7.8 7.8 7.8c1.8 0 3.4-.6 4.7-1.6l9.4 4.7L39 78l-12.5 9.4V103l5.7 7.1c-1.6 1.9-2.5 4.3-2.5 7 0 6 4.9 10.9 10.9 10.9s10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9c-.9 0-1.8.1-2.6.3l-2.1-3.4h65.6l3.6 6c-2.2 2-3.6 4.9-3.6 8.1 0 6 4.9 10.9 10.9 10.9s10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9h-.3l-1.3-3.1h12.5V97H32.8v-6.2l12.5-9.6zm0-6.3-4.6-21.4.6 3L59.8 58l3.8 17H45.3zm21.8 0-3.7-16.7 18.1 1.4 1.4 15.3H67.1zm18.8 0-1.4-15 17 1.3v13.7H85.9zm31.2-15.6v15.6h-12.5V61.5l12.5 1v-3.2l-12.5-1V44.4l12.5 2.4v12.5zM35.9 31.2l65.6 12.6V58l-17.3-1.4-1.5-16.4-3.1-.6 1.6 16.8-18.5-1.5-4.3-19.3-3.7-.7 4.4 19.7-18.5-1.5-4.7-21.9zm76.5 81.2c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7zm-71.8 0c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"
                                        fill="currentColor"
                                    />
                                </g>
                            </svg>
                            {/* Cart Items Count */}
                            {
                                // authStatus &&
                                itemCount ?
                                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-1 py-0.5 text-[10px] font-bold leading-none text-white bg-red-600 rounded-full" >
                                        {itemCount}
                                    </span>
                                    : null}
                        </NavLink>

                        {/* Hamburger Menu (Mobile) */}
                        <button
                            className="md:hidden focus:outline-none text-gray-800"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden absolute w-full">
                        <ul className="flex flex-col p-4 space-y-2 bg-gray-100"
                            onClick={toggleMobileMenu}
                        >
                            {authStatus &&
                                <li key="man">
                                    <NavLink
                                        to={'/profile'}
                                        onClick={() =>
                                            navigate('/profile')}>
                                        <div>
                                            <img
                                                className="inline-block h-14 w-14 rounded-full"
                                                src={man}
                                                alt="man"
                                            />
                                        </div>
                                    </NavLink>
                                </li>}
                            {navItems.map((item) => (
                                item.active ? (
                                    <li
                                        key={item.name}
                                    >
                                        <NavLink
                                            to={item.slug}
                                            onClick={() =>
                                                navigate(item.slug)}
                                            className={({ isActive }) => `${isActive ? 'text-red-600  hover:text-blue-800 underline' : 'text-gray-600 hover:text-gray-800 w-full'
                                                }`}
                                        ><div>
                                                {item.name}
                                            </div>
                                        </NavLink>
                                    </li>) : null
                            ))}
                            {
                                authStatus && (
                                    <li>
                                        <LogoutBtn />
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                )}

            </Container>
        </header >
    );
};

export default Header;
