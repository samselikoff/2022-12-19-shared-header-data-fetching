"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  className,
  activeClassName,
  inactiveClassName,
  children,
  href,
  ...rest
}: any) {
  let pathname = usePathname();

  let classes =
    pathname === href
      ? `${className} ${activeClassName}`
      : `${className} ${inactiveClassName}`;

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
