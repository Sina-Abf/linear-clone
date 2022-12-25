import Link from "next/link";
import Button from "./button";
import Container from "./container";
import Logo from "./icons/logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)]">
        <Link className="flex items-center" href="/">
          <Logo className="w-auto h-[1.8rem] mr-4" />
        </Link>

        <nav className="h-full">
          <ul className="flex h-full items-center [&_a]:text-sm [&_a:hover]:text-gray [&_a]:transition-colors [&_a]:mr-6">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li>
              <Link href="#">Customers</Link>
            </li>
            <li>
              <Link href="#">Changelog</Link>
            </li>
            <li>
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

        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
