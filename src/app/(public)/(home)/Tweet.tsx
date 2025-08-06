import { PAGES } from "@/config/pages.config";
import type { ITweet } from "@/shared/types/tweet.types";
import Link from "next/link";

interface TweetProps {
  tweet: ITweet;
  className?: string;
}

export function Tweet({ tweet, className = "" }: TweetProps) {
  return (
    <div className={`${className}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
            {tweet.author.charAt(0)}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1">
            <Link href={PAGES.PROFILE(tweet.author)} className="font-bold text-gray-900">{tweet.author}</Link>
          </div>
          <p className="mt-1 text-gray-800">{tweet.text}</p>

        </div>
      </div>
    </div>
  );
}