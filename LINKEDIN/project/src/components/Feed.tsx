import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: {
      name: 'Sundar Pichai',
      role: 'CEO at Google',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_Pichai_%282023%29_cropped.jpg/800px-Sundar_Pichai_%282023%29_cropped.jpg'
    },
    content: "Excited about the future of AI and its potential to solve some of humanity's biggest challenges.",
    timestamp: '2h ago',
    likes: 15420,
    comments: 892
  },
  {
   id: 2,
    author: {
      name: 'Warren Buffett',
      role: 'CEO at Berkshire Hathaway',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_Visit.jpg/800px-Warren_Buffett_KU_Visit.jpg'
    },
    content: 'The best investment you can make is in yourself. The more you learn, the more you earn.',
    timestamp: '4h ago',
    likes: 18933,
    comments: 1204
  }
];

export function Feed() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center">
            <img
              src={post.author.imageUrl}
              alt={post.author.name}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.role}</p>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <p className="mt-4">{post.content}</p>
          <div className="mt-4 flex items-center space-x-4 text-gray-500">
            <button 
              onClick={() => handleLike(post.id)}
              className={`flex items-center space-x-1 ${likedPosts.has(post.id) ? 'text-blue-600' : 'hover:text-blue-600'}`}
              aria-label={`Like post by ${post.author.name}`}
            >
              <ThumbsUp className="h-5 w-5" />
              <span>{likedPosts.has(post.id) ? post.likes + 1 : post.likes}</span>
            </button>
            <button 
              className="flex items-center space-x-1 hover:text-blue-600"
              aria-label={`Comment on post by ${post.author.name}`}
            >
              <MessageSquare className="h-5 w-5" />
              <span>{post.comments}</span>
            </button>
            <button 
              onClick={() => {
                navigator.share({
                  title: `${post.author.name}'s LinkedIn Post`,
                  text: post.content,
                  url: window.location.href
                }).catch(() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                });
              }}
              className="flex items-center space-x-1 hover:text-blue-600"
              aria-label={`Share post by ${post.author.name}`}
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}