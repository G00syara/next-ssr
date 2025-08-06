'use client'

import { useSearchParams } from "next/navigation"

const Explore = () => {
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')

    return (
        <div>
            <h1>Explore {!!tag && `by #${tag}`}</h1>
        </div>
    )
}

export default Explore
