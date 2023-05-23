import { svgCollection } from "../assets/img/svgCollection";
import logo from '../assets/img/logo.png'
import avatar from '../assets/img/avatar.png'
import gear from '../assets/img/gear.png'
import { useEffect, useState } from "react";
import { userProps, NavItemProps } from "../types/types";



const SidebarUser = ({ name, position, img }: userProps) => {
    return (
        <div className="side__user">
            <img src={img} alt="" className="side__user__avatar" />
            <div>
                <div className="side__user__name">{name}</div>
                <div className="side__user__position">{position}</div>
            </div>
        </div>
    );
}


const NavItem = ({ iconId, children, isActive }: NavItemProps) => {
    const [linkClass, setLinkClass] = useState('side__navitem')
    useEffect(() => {
        setLinkClass('side__navitem')
        if (isActive !== undefined) {
            setLinkClass(`side__navitem--active`)
        }
    }, [isActive])
    return (
        <div className={linkClass}>
            <div>{svgCollection[iconId]} <span>{children}</span></div>
            {svgCollection.shevron}
        </div>
    )
}

export function Aside({ }) {
    return (
        <div className="side__wrapper">
            <img src={gear} alt="" className="side__menuLogo" />
            <aside className='side'>
                <div>
                    <div className="side__logo">
                        <img src={logo} alt="logo" className="side__logo__img" />
                        <span className="side__logo__version">v.01</span>
                    </div>
                    <nav className="side__nav">

                        <NavItem iconId="key">
                            Dashboard
                        </NavItem>
                        <NavItem iconId="cube" >
                            Product
                        </NavItem>
                        <NavItem iconId="user" isActive>
                            Customers
                        </NavItem>
                        <NavItem iconId="wallet" >
                            Income
                        </NavItem>
                        <NavItem iconId="discount">
                            Promote
                        </NavItem>
                        <NavItem iconId="question">
                            Help
                        </NavItem>

                    </nav>
                </div>
                <SidebarUser
                    name="Evano"
                    position="Project Manager"
                    img={avatar}

                />
            </aside>
        </div>
    )
}