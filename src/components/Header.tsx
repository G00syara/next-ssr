import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/vercel.svg"
                        alt="Logo"
                        width={28}
                        height={28}
                        priority
                        className="hover:opacity-80 transition-opacity"
                    />
                    <span className="text-xl font-bold text-gray-800 hidden sm:inline">TwitterClone</span>
                </Link>
                <Menu />
            </div>
        </header>
    )
}
