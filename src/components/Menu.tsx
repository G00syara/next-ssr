'use client'

import { MENU } from '@/shared/data/menu.conts'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import MenuItem from './MenuItem'
import { match } from 'path-to-regexp'

const Menu = () => {
    const pathname = usePathname()

    const segment = useSelectedLayoutSegment();

    console.log('segment');

    return (
        <nav className="flex items-center space-x-6">
            {MENU.map((menu) => <MenuItem isActive={!!match(menu.href)(pathname)} key={menu.name} title={menu.name} href={menu.href} />)}
        </nav>
    )
}

export default Menu
