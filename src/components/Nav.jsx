import React, { useState, useEffect, useRef } from "react";
import Headroom from "react-headroom";
import { Link as RouterLink } from 'react-router-dom';
import DropdownItem from './DropdownItem.jsx';

function Nav() {
    const links = ["Home", "Goals", "Services", "About", "Contact"];
    const icons = [
        {
            name: '/Invoices',
            link: "Invoice",
            img: "/images/invoiceblack.png"
        },
        {
            name: '/Bilan',
            link: "Bilan",
            img: "/images/bilan.svg"
        },
        {
            name: '/CPC',
            link: "CPC",
            img: "/images/bilan.svg"
        }
    ];

    const [isShow, setShow] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const HoverOn = (link) => {
        if (link === "Services") setOpen(true);
    }

    const menuRef = useRef();

    const isLargeScreen = window.innerWidth >= 1024;

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        window.addEventListener('scroll', handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            window.removeEventListener('scroll', handleOutsideClick);
        };
    }, []);

    const preventDefault = (event, link) => {
        event.preventDefault();
        // Add custom logic if needed
        console.log(`Clicked on ${link}`);
    };

    return (
        <Headroom className="fixed w-full z-[10]">
            <nav className="w-full lg:px-20 bg-white flex lg:flex-nowrap flex-wrap items-center">
                {/* Logo */}
                <div className="w-full flex items-center justify-between px-6 py-3 lg:py-0">
                    <RouterLink to="/">
                        <p className="text-black text-lg font-bold">Fast Financial</p>
                    </RouterLink>

                    {/* Burger button */}
                    <button onClick={() => setShow(!isShow)} className="rounded-lg p-0 hover:opacity-20 focus:ring-2 focus:ring-gray-200 lg:hidden">
                        <img className="h-10 w-10" src="/images/menu.svg" alt="menu" />
                    </button>
                </div>

                {/* List */}
                <div className={`${isShow === false && "hidden "} w-full lg:block lg:w-auto`}>
                    <ul ref={menuRef} className="bg-white w-full lg:w-auto lg:static text-center text-lg lg:flex lg:justify-evenly">
                        {links.map((link, key) => (
                            <li key={key} onMouseOver={isLargeScreen ? () => HoverOn(link) : null} className="hover:bg-[#FEEEF7] py-4 lg:py-6 lg:px-5 transition-opacity duration-[400ms] cursor-pointer">
                                {link === "Services" ? (
                                    <div>
                                        <RouterLink onClick={(event) => preventDefault(event, link)} className="hover:opacity-70 hover:bg-[#FEEEF7]"
                                                    to={link}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={50}
                                                    duration={500}
                                        >
                                            {link}
                                        </RouterLink>
                                        <div className={`${isOpen === false ? "hidden" : "lg:block"} before transition-all duration-200 flex flex-col justify-start items-center lg:flex-none rounded-[10px] lg:absolute lg:bg-white lg:top-[70px] z-[10] lg:right-[185px] lg:w-[150px]`}>
                                            <ul className='p-4 shadow'>
                                                {icons.map((icon, key) => (
                                                    <RouterLink key={key} to={icon.name}>
                                                        <DropdownItem img={icon.img} link={icon.link} />
                                                    </RouterLink>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <RouterLink onClick={(event) => preventDefault(event, link)} className="hover:opacity-70"
                                                to={`/${link.toLowerCase()}`}
                                                spy={true}
                                                smooth={true}
                                                offset={50}
                                                duration={500}
                                    >
                                        {link}
                                    </RouterLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </Headroom>
    );
}

export default Nav;
