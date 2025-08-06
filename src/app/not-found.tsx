import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
            <div className="text-center max-w-md mx-auto">
                <div className="animate-bounce">
                    <h1 className="text-9xl font-bold text-gray-800 mb-2">404</h1>
                </div>

                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page Not Found</h2>


                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound