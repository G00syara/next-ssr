import React from 'react'

type Params = { tag?: string }

const TestPage = async ({ searchParams }: { searchParams: Promise<Params> }) => {
    const { tag } = await searchParams

    return (
        <div>
            <h1>Explore {!!tag && `by #${tag}`}</h1>
        </div>
    )
}

export default TestPage
