import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  name: string;
  to: string;
  offseat: number;
};

export default function NavLink({ name, to, offseat }: Props) {
  return (
    <li className="text-th-primary text-base md:text-xl font-bold md:font-medium">
      {to.startsWith("/") ? (
        <Link href={to}>{name}</Link>
      ) : (
        <ScrollLink smooth={true} to={to} offset={offseat} duration={1500}>
          <button>{name}</button>
        </ScrollLink>
      )}
    </li>
  );
}
