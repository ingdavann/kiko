"use client";
import { Avatar, Dropdown, Navbar, NavbarLink } from "flowbite-react";
import logo from "@/public/assets/image/icon.png";
import Image from "next/image";
import { useState } from "react";
import { MenuList } from "./menu";
import Link from "next/link";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
}

export default function NavbarComponent() {
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  // handle update menu items on active
  const updateMenu = (path: string) => {
    const newMenu = MenuList.map((item) => {
      if (path === item.path) {
        return {
          ...item,
          active: true 
        };
      }
      else{
        return {
          ...item,
          active: false
        };
      }
    });
    setMenu(newMenu);
  };
  return (
    <Navbar fluid rounded className="bg-gray-50 p-4 w-[90%] mx-auto">
      <Navbar.Brand href="#">
        <Image src={logo}  width={60} height={60} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KIKO</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse >
      {
          menu.map((item, index) => (
            <NavbarLink key={index} onClick={()=>updateMenu(item.path)} as={Link} href={item.path} active={item.active}>
              {item.name}
            </NavbarLink>
          ))
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
