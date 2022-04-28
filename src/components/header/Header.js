import React, { useContext, useRef } from 'react';
import './header.css'
import { useEffect } from 'react';
import { authContext } from './../../context/AuthContext';
const Header = () => {
    const { accessToken, setAccessToken } = useContext(authContext)
    const handleLogout = () => {
        setAccessToken(null)
        sessionStorage.removeItem("token")
    }

    const headerRef = useRef()
    useEffect(() => {
        const handleScrollHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shink')
            } else {
                headerRef.current.classList.remove('shink')
            }
        }
        window.addEventListener("scroll", handleScrollHeader)

        return () => {
            window.removeEventListener("scroll", handleScrollHeader)
        }
    }, [])
    return (
        <div className="header" ref={headerRef}>
            <h1>Petfinder</h1>
            {accessToken ? (
                <span className="logout" onClick={handleLogout}>
                    <i class='bx bx-log-out'></i>LogOut
                </span>
            ) : ""}

        </div>
    );
};

export default Header;