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
      else {
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
        <Image src={logo} width={60} height={60} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KIKO</span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <div className="flex justify-center items-center mr-5">
          <div className="relative">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-2 h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>
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
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        {
          menu.map((item, index) => (
            <NavbarLink key={index} onClick={() => updateMenu(item.path)} as={Link} href={item.path} active={item.active}>
              {item.name}
            </NavbarLink>
          ))
        }
      </Navbar.Collapse>
    </Navbar>
  );
}
