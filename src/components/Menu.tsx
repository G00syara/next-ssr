import { PAGES } from '@/config/pages.config'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
    return (
        <nav className="flex items-center space-x-6">
            <Link href={PAGES.HOME}>Home</Link>
            <Link href={PAGES.EXPLORE}>Explore</Link>
            <Link href={PAGES.PROFILE_FAKE}>Profile</Link>
        </nav>
    )
}

export default Menu
