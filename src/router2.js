import React from 'react';
import { BrowserRouter , NavLink } from 'react-router-dom'
import './navlink.css'

export default function Router2() {
    return(
        <BrowserRouter>
        <nav className="nav">
            <NavLink to='/'
            className={({isActive})=>isActive?"active_menu":"menu"}
            style={({isActive}) => {
                return {
                    fontWeight: isActive? "bold" : ""
                };
            }}>Home</NavLink>-&nbsp;
            <NavLink to = '/product' className={({isActive})=>isActive? "active_menu":"menu"}>product</NavLink>-&nbsp;
            <NavLink to = '/member' className={({isActive})=>isActive? "active_menu":"menu"}>member</NavLink>-&nbsp;
            <NavLink to = '/contact' className={({isActive})=>isActive? "active_menu":"menu"}>contact Us</NavLink>
        </nav>
        </BrowserRouter>
    )
}