'use client'

import MenuItem from '@/components/MenuItem'
import { PAGES } from '@/config/pages.config'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

export function ShopMenu() {
	const pathname = usePathname()

	return (
		<nav className="flex items-center gap-4 mb-5">
			<MenuItem
				href={PAGES.SHOP}
				title='SSR'
				isActive={!!match(PAGES.SHOP)(pathname)}
			/>
			<MenuItem
				href={PAGES.SSG}
				title='SSG'
				isActive={!!match(PAGES.SSG)(pathname)}
			/>
			<MenuItem
				href={PAGES.ISR}
				title='ISR'
				isActive={!!match(PAGES.ISR)(pathname)}
			/>
		</nav>
	)
}
