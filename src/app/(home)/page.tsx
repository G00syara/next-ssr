import { tweets } from "@/shared/data/tweet.const";
import { Tweet } from "./Tweet";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-500">Twitter Feed</h1>
          <p className="text-gray-600">Latest tweets from your network</p>
        </header>
        <div className="space-y-4">
          {tweets.map((tweet) => (
            <Tweet 
              key={tweet.author} 
              tweet={tweet} 
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow" 
            />
          ))}
        </div>
      </div>
    </div>
  );
}