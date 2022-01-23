import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { name: "Servicios", href: "#" },
  { name: "Proyectos", href: "#" },
  { name: "Contacto", href: "#" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white">
      <div className="container flex items-center justify-between mx-auto">
        <Image
          src={`/logos/grupo-construramex-horizontal.svg`}
          width={231}
          height={61}
          alt={`Grupo Construramex Logo`}
        />
        <menu className="flex space-x-6 tracking-wide text-light">
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
