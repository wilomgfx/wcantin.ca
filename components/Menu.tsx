import Image from "next/image";
import Link from "next/link";
const Menu = () => {
  return (
    <nav className="flex flex-row items-center border-b-2 border-black bg-white">
      <Link href="/">
        <Image
          className="ml-5 mt-2 mb-2"
          priority
          src="/images/logo.svg"
          height={120}
          width={120}
          alt="William Cantin logo"
        />
      </Link>
      <ul className="ml-5 mr-5 mt-2 mb-2 flex flex-1 justify-around">
        <li>
          <MenuItem href="/blog" text="Blog" />
        </li>
        <li>
          <MenuItem text="Projects" />
        </li>
        <li>
          <MenuItem text="Contact" />
        </li>
        <li>
          <MenuItem text="Resume" />
        </li>
      </ul>
    </nav>
  );
};
//<Link href="/">← Back to home</Link>
const MenuItem = ({ href, text }: { href?: string; text: string }) => {
  return (
    <Link href={href ? href : "/"} className="text-lg font-medium text-black">
      {text}
    </Link>
  );
};

export default Menu;
