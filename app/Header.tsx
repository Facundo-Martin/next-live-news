import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link, { LinkProps } from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import NavLinks from "../components/NavLinks";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-3xl text-center">
            Next{" "}
            <span className="underline decoration-6 decoration-orange-400">
              Live
            </span>{" "}
            News
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <div>Darkmode</div>
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-6 py-2 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Links */}
      <NavLinks />
      {/* Searchbox */}
      <SearchBox />
    </header>
  );
}
