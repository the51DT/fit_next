// components/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IaSubItem {
    name: string;
    screenId: string;
    path: string;
    fileName: string;
}

interface IaItem {
    link: string;
    id: number;
    Level1: string;
    screenId: string;
    path: string;
    fileName: string;
    Level2?: IaSubItem[];
}

interface IaData {
    siteName: string;
    IaList: IaItem[];
}

const Navbar = () => {
    const [iaData, setIaData] = useState<IaData | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        fetch("/ia.json")
        .then((response) => response.json())
        .then((data: IaData) => setIaData(data))
        .catch((error) => console.error("Error fetching IA data:", error));
    }, []);

    if (pathname === "/" || pathname === "/admin/login") return null;

    return (
        <header className="w-full flex justify-between items-center guide-header__wrap">
        <h1 className="text-xl font-semibold Slate-50">
            <Link href="/">{iaData?.siteName || "Site Title"}</Link>
        </h1>
        <nav className="navi">
            <button></button>
            <ul>
            {iaData?.IaList.map((item) => (
                <li key={item.id}>
                    <Link href={`${item.path}${item.link}`}>{item.Level1}</Link>
                </li>
            ))}
            </ul>
        </nav>
        </header>
    );
};

export default Navbar;