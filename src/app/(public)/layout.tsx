import { Header } from '@/components/Header'
import React, { type PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Layout
