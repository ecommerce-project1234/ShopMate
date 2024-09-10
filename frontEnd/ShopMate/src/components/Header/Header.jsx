import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { ContainerBox } from '../ContainerBox/ContainerBox';



const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const authStatus = useSelector((state) => state.auth.status)
    const cartData = useSelector((state) => state.cart.userData)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            href: '/',
            active: true
        },
        {
            name: 'Login',
            href: '/login',
            active: !authStatus,
        },
        {
            name: 'Cart',
            href: '/shop',
            active: cartData?.length > 0,
        },
        {
            name: 'About',
            href: '/about',
            active: true,
        },
        {
            name: 'Contact',
            href: '/contact',
            active: true
        },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">

            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/">E-Shop</a>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-600 hover:text-gray-800">
                        Home
                    </a>
                    <a href="/shop" className="text-gray-600 hover:text-gray-800">
                        Shop
                    </a>
                    <a href="/about" className="text-gray-600 hover:text-gray-800">
                        About
                    </a>
                    <a href="/contact" className="text-gray-600 hover:text-gray-800">
                        Contact
                    </a>
                </nav>

                {/* Cart and Menu for Mobile */}
                <div className="flex items-center space-x-4">
                    <a href="/cart" className="relative text-gray-800 hover:text-gray-600">
                        {/* Cart Icon */}
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
                                d="M3 3h2l.4 2M7 13h10l1.4-7H6.6M7 13l1.4 7h7.2l1.4-7M7 13h10m-5-5V3m-5 2h10"
                            />
                        </svg>
                        {/* Cart Items Count */}
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                            3
                        </span>
                    </a>

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
                <nav className="md:hidden">
                    <ul className="flex flex-col p-4 space-y-2 bg-gray-100">
                        <li>
                            <a href="/" className="block text-gray-600 hover:text-gray-800">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/shop" className="block text-gray-600 hover:text-gray-800">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="block text-gray-600 hover:text-gray-800">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block text-gray-600 hover:text-gray-800">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}

        </header>
    );
};

export default Header;
