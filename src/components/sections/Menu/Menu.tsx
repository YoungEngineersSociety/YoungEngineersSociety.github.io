import React from 'react';
import useMenu from '../../../hooks/Apollo/useMenu/useMenu';
import { Link } from 'react-router-dom';

const Menu = () => {
    const {
        error,
        loading,
        menuItems
    } = useMenu();

    if(error || loading) {
        return <>error or loading</>;
    }

    return (
        <nav className="fixed top-0 z-10 w-full h-24 bg-white">
            <ul className="absolute top-0 flex flex-row justify-center w-full h-full">
    {menuItems.map(item => <Link to={item.link.path}>{item.text}</Link>)}
            </ul>
        </nav>
    )
}

export default Menu;