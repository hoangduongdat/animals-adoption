import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigate.css'
const nav = [
    {
        displayName: 'All',
        path: '/'
    },
    {
        displayName: 'Dog',
        path: '/dog'
    },
    {
        displayName: 'Cat',
        path: '/cat'
    },
    {
        displayName: 'Rabbit',
        path: '/rabbit'
    },
    {
        displayName: 'Bird',
        path: '/bird'
    },
]
const Navigate = () => {
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <div className="navigate">
            {
                nav.map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className={item.path === pathname ? 'active' : ''}
                    >
                        {item.displayName}
                    </Link>
                ))
            }
        </div>
    );
};

export default Navigate;