"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { ChevronUp, WalletIcon, ChevronDown } from "lucide-react";
import Resources from "./Resources";
import { Collapse } from "@material-tailwind/react";
import { Sling as Hamburger } from "hamburger-react";

type Props = {};

function Navbar({}: Props) {
  const [open, setOpen] = useState(false);
  const [collaps, setcollaps] = useState(false);
  const toggleOpen = () => {
    setcollaps(!collaps);
  };
  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-background ">
      <nav className="flex items-center justify-between h-[10vh] px-4 relative">
        <div className=" md:hidden uppercased text-base"> VentureX</div>
        <ul className="md:flex items-center space-x-8 hidden  ">
          <li
            className={buttonVariants({
              variant: "leftAlignBtn",
              className: "uppercased",
            })}
          >
            VentureX
          </li>

          <li>
            <Button asChild className="w-full" variant="ghost">
              <Link href="/">About Us</Link>
            </Button>
          </li>
          <li>
            <Button asChild className="w-full" variant="ghost">
              <Link href="/">Community</Link>
            </Button>
          </li>
          <li>
            <Resources />
          </li>
        </ul>
        <div className="hidden md:block">
          <Button className="w-full" variant="outline">
            Connect Wallet
          </Button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
          <Hamburger size={24} rounded onToggle={() => setOpen(!open)} />
        </div>
      </nav>
      <div className={`w-full, ${open ? "block" : "hidden"} md:hidden `}>
        <div className="bg-border h-px w-full my-2" />
        <div className="min-h-[90vh] py-4  flex flex-col justify-between ">
          <ul className="space-y-4">
            <li>
              <Button asChild className="w-full" variant="leftAlignBtn">
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button asChild className="w-full" variant="leftAlignBtn">
                <Link href="/">Explore</Link>
              </Button>
            </li>
            <li>
              <Button
                onClick={toggleOpen}
                className="w-full justify-between"
                variant="leftAlignBtn"
              >
                Resources {collaps ? <ChevronUp /> : <ChevronDown />}
              </Button>
              <Collapse open={collaps}>
                <div className=" px-4 w-full">
                  <Button asChild className="w-full" variant="leftAlignBtn">
                    <Link href="/">Governance</Link>
                  </Button>
                  <Button asChild className="w-full" variant="leftAlignBtn">
                    <Link href="/">Treasury</Link>
                  </Button>
                  <Button asChild className="w-full" variant="leftAlignBtn">
                    <Link href="/">Tokenomics</Link>
                  </Button>
                  <Button asChild className="w-full" variant="leftAlignBtn">
                    <Link href="/">Investment strategy</Link>
                  </Button>
                </div>
              </Collapse>
            </li>
            <li>
              <Button asChild className="w-full" variant="leftAlignBtn">
                <Link href="/">Explore</Link>
              </Button>
            </li>
          </ul>

          <div className="p-4">
            <Button className="w-full" variant="outline">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
