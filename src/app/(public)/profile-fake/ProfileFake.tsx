'use client'
import { PAGES } from '@/config/pages.config'
import { useRouter } from 'next/navigation'

const ProfileFake = () => {
    const router = useRouter()

    return (
        <div>
            <h1>
                Fake Profile
            </h1>

            <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>
        </div>
    )
}

export default ProfileFake
