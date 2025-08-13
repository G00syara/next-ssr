import React from 'react'

type Params = { username?: string }

const TestPage = async ({ params }: { params: Promise<Params> }) => {
    const { username } = await params

    return (
        <div>
            <h1>
                Profile @{username}
            </h1>
        </div>
    )
}

export default TestPage
