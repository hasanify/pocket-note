"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tabs = [
  { id: "home", label: "Home", href: "/" },
  { id: "notes", label: "Notes", href: "/notes" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => window?.location?.pathname === tab.href)?.id
  );

  return (
    <nav className="gap-2 max-w-[1000px] mb-12 p-2 mx-auto text-center">
      <Link
        onClick={() => setActiveTab("home")}
        href={"/"}
        className="flex items-center justify-center gap-2 mb-2 md:absolute "
      >
        <Image
          width={50}
          height={50}
          alt={"Logo"}
          src={"/images/logo.png"}
        ></Image>
        <div className="text-2xl font-semibold">PocketNote</div>
      </Link>
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
          p-4 text-xl font-semibold relative uppercase transition-all text-slate-900 
          ${activeTab === tab.id ? "" : "hover:text-slate-700"}
          `}
          href={tab.href}
        >
          {activeTab === tab.id && (
            <motion.div
              transition={{ duration: 0.1 }}
              layoutId={"active"}
              className="absolute inset-0 py-1 mt-12 bg-yellow-200 rounded-full"
            />
          )}

          {tab.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
