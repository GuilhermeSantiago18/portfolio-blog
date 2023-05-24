import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

type Props = {
  name: string;
  to: string;
};

export default function NavLink({ name, to }: Props) {
  console.log(to)
  return (
    <li className="text-th-primary text-base md:text-xl font-bold md:font-medium">
      {to.startsWith("/") ? (
        <Link href={to}>{name}</Link>
      ) : (
        <ScrollLink smooth={true} to={'aboutSection'}>{name}
        </ScrollLink>
      )}
    </li>
  );
}
