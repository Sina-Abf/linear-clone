"use client";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";
import Container from "./container";
import HamburgerIcon from "./icons/hamburger";
import Logo from "./icons/logo";

const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "h-[calc(100vh_-_var(--navigation-height))] md:translate-x-0 md:block fixed md:opacity-100 md:relative top-navigation-height left-0 md:top-0 w-full md:w-auto md:h-auto md:bg-transparent overflow-auto bg-background transition-opacity duration-500 md:transition-none",
              hamburgerMenuIsOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vw]"
            )}
          >
            <ul
              className={classNames(
                "flex flex-col md:flex-row h-full md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-gray-dark md:[&_li]:border-none",
                "[&_a]:text-md ease-in [&_a]:duration-300 [&_a]:translate-y-8 md:[&_a]:translate-y-0  [&_a]:h-navigation-height [&_a]:flex [&_a]:items-center [&_a]:w-full [&_a:hover]:text-gray [&_a]:transition-[color, transform] [&_a]:md:transition-colors [&_a]:mr-6 md:[&_a]:text-sm",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>

        <button
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          className="ml-6 md:hidden"
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
export default Header;
