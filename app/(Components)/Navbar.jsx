"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const tabs = [
  { id: "home", label: "Home", href: "/" },
  { id: "notes", label: "Notes", href: "/notes" },
  { id: "signup", label: "Sign Up", href: "/signup" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTab = tabs.find(
        (tab) => tab.href === window.location.pathname
      )?.id;

      if (currentTab) {
        setActiveTab(currentTab);
      }
    }
  }, []);

  return (
    <>
      <nav className="gap-0 p-4 md:gap-2 max-w-[1000px] mx-auto text-center">
        <Link
          onClick={() => setActiveTab("home")}
          href={"/"}
          className="flex items-center justify-center gap-2 mb-2 md:absolute "
        >
          <Image width={50} height={50} alt={"Logo"} src={"/images/logo.png"} />
          <div className="text-2xl font-semibold">PocketNote</div>
        </Link>
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
          px-2 md:px-4 text-xl font-semibold relative uppercase transition-all text-slate-900 
          ${activeTab === tab.id ? "" : "hover:text-slate-700"}
          `}
            href={tab.href}
          >
            {activeTab === tab.id && (
              <motion.div
                transition={{ duration: 0.1 }}
                layoutId={"active"}
                className="absolute inset-0 py-1 mt-6 bg-yellow-200 rounded-full"
              />
            )}

            {tab.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
