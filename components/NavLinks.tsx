"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { categories } from "../constants";

interface NavLinkProps {
  category: string;
}

function NavLink({ category }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path.toLowerCase() ? true : false;
  };
  return (
    <Link key={category} href={category.toLowerCase()}>
      <h4 className={clsx("navLink", isActive(category) && "text-4xl")}>
        {category}
      </h4>
    </Link>
  );
}
export default function NavLinks() {
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 font-light gap-4 pb-6 max-w-6xl mx-auto border-b-[1px] border-gray-300 ">
      {categories.map((category) => (
        <NavLink key={category} category={category} />
      ))}
    </nav>
  );
}
