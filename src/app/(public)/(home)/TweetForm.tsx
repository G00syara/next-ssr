import { postTweet } from "@/server-actions/post-tweet";

export const TweetForm = () => {
    return (
        <form action={postTweet} className="flex flex-col gap-4 p-4 border border-gray-200 rounded-xl bg-white mx-auto mb-2">
            <input
                name="content"
                className="p-3 border border-gray-200 rounded-lg text-base outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 min-h-[100px]"
                placeholder="What's happening?"
            />
            <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
                    Tweet
                </button>
            </div>
        </form>
    );
};