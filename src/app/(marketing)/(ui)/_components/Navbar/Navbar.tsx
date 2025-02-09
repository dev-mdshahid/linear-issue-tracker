import { navData } from "@/app/(marketing)/(lib)/data/navData";
import Button from "@/app/_shared/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      {" "}
      <Image
        src="/images/linear-logo-with-text.png"
        alt="Linear logo"
        height={25}
        width={90}
        className="h-fit"
      />
      {/* List of navlinks */}
      <ul className="flex gap-7 text-sm">
        {navData.map(({ id, name, href }) => (
          <li key={id}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </ul>
      {/* Buttons */}
      <div className="space-x-2">
        <Button variant="secondary">Log in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </nav>
  );
}
