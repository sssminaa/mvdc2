import React from 'react';
import './Sidebar.css'

import { NavLink , Link} from "react-router-dom";

const menuList = [
    {label:"Main", to:'/main'},
    {label:"Analysis", to:'/analysis'},
    {label:"Issue Log", to:'/issuelog'}
]

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar__top">
                <Link to="/main" className='sidebar__header'>
                    <img src="../" className="sidebar__logo" alt="mvdc2로고" />
                </Link>
            </div>
            <nav className='sidebar__nav'>
                <ul className="sidebar__menu">
                    {menuList.map((menu)=>(
                        <li className="sidebar__item" key={menu.to}>
                            <NavLink
                                to={menu.to}
                                className={({ isActive }) =>
                                    `sidebar__link ${isActive ? "is-active" : ""}`
                                }
                            >{menu.label}
                            </NavLink>
                        </li>
                    )
                    )}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
