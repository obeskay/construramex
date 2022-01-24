import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { name: "Servicios", href: "#" },
  { name: "Proyectos", href: "#" },
  { name: "Contacto", href: "#" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full py-2 bg-white">
      <div className="container flex items-center justify-center mx-auto md:justify-between">
        <Image
          src={`/logos/grupo-construramex-horizontal.svg`}
          width={231}
          height={61}
          alt={`Grupo Construramex Logo`}
        />
        <menu className="hidden space-x-6 tracking-wide md:flex text-light">
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
