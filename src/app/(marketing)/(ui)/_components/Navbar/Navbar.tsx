import { navData } from "@/app/(marketing)/(lib)/data/navData";
import Button from "@/app/_shared/Button/Button";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Hamburger/Hamburger";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 border-b border-primary-to/40 bg-black">
      <nav className="max-width flex items-center justify-between p-4">
        {" "}
        <Image
          src="/images/linear-logo-with-text.png"
          alt="Linear logo"
          height={25}
          width={90}
          className="h-fit"
        />
        {/* List of navlinks */}
        <ul className="hidden gap-7 text-sm lg:flex">
          {navData.map(({ id, name, href }) => (
            <li key={id}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <div className="hidden gap-2 lg:flex">
          <Button variant="secondary" key={1}>
            Log in
          </Button>
          <Button variant="primary" key={2}>
            Sign up
          </Button>
        </div>
        {/* Hamburger menu */}
        <div className="lg:hidden">
          <Hamburger />
        </div>
      </nav>
    </div>
  );
}
