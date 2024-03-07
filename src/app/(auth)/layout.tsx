'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'ForgotPassword', href: '/forgotpwd' }
]

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathname = usePathname()

    return (
        <>
            {
                navlinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link href={link.href}
                            key={link.name}
                            className={isActive ? "text-red-500": "text-green-400"}>
                            {link.name}
                        </Link>
                    )
                })
            }
            {children}

        </>
    );
}
