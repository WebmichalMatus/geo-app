
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <Navbar isBordered isBlurred maxWidth="full">
            <NavbarBrand className="w-full">
                <p className="font-bold text-inherit text-primary">Michal's Geo app</p>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-6" justify="end">
                <NavbarItem>
                    <NavLink className="font-medium transition-all hover:opacity-80 hover:text-primary" to="/">Country List</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink className="font-medium transition-all hover:opacity-80 hover:text-primary" to="wished-countries">Wished countries</NavLink>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

