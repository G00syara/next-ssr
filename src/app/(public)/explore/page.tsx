import React, { Suspense } from 'react'
import Explore from './Explore'

const page = () => {
    return (
        <Suspense>
            <Explore />
        </Suspense>
    )
}

export default page
