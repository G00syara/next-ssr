import Link from 'next/link'

interface MenuItemProps {
    href: string,
    isActive: boolean,
    title: string,
}

const MenuItem = ({ href, isActive, title }: MenuItemProps) => {

    return (
        <Link className={isActive ? 'text-blue-900' : 'text-red-900'} href={href} > {title}</ Link>
    )
}

export default MenuItem
