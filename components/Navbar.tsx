import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuLinks = [
  { name: "Servicios", href: "#" },
  { name: "Proyectos", href: "#" },
  { name: "Contacto", href: "#" },
];

const Navbar = () => {
  const [userScroll, setUserScroll] = useState(false);
  useEffect(() => {
    {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          setUserScroll(true);
        } else {
          setUserScroll(false);
        }
      });
    }
  });

  return (
    <div
      className={`fixed top-0 z-10 w-full transition-all ${
        userScroll ? "bg-light shadow py-1" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-center mx-auto md:justify-between">
        <div className="relative transition-all">
          <Image
            src={`/logos/grupo-construramex-horizontal.svg`}
            width={182}
            height={48}
            alt={`Grupo Construramex Logo`}
          />
        </div>
        <menu
          className={`hidden space-x-6 tracking-wide md:flex transition-colors uppercase font-bold ${
            userScroll ? "text-dark" : "text-light"
          }`}
        >
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <a className="text-gray-800 hover:text-gray-900">{link.name}</a>
              </Link>
            </li>
          ))}
        </menu>
      </div>
    </div>
  );
};

export default Navbar;
