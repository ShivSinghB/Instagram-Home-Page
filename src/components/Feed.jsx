import {
  FaHeart,
  FaRegComment,
  FaBookmark,
  FaRegBookmark,
  FaRegHeart,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

const Feed = ({ darkMode }) => {
  const [stories, setStories] = useState([
    {
      id: 1,
      username: "shiv",
      avatar: "https://images.unsplash.com/photo-1741732311554-911ecc8da478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      username: "sneha",
      avatar: "https://plus.unsplash.com/premium_photo-1679864497965-57c00454dbd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      username: "abhishek",
      avatar: "https://plus.unsplash.com/premium_photo-1742455147775-4f5f6c09011b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      username: "stoic",
      avatar: "https://images.unsplash.com/photo-1628256901515-1ac27bb7a7ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b2ljc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      username: "juhi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      username: "samay",
      avatar: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      username: "ravi",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      username: "kanchan",
      avatar: "https://plus.unsplash.com/premium_photo-1682681907111-c13bc10b1587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "peaceful_mind",
      avatar: "https://plus.unsplash.com/premium_photo-1678853632034-66e417e0f830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVkaGhhfGVufDB8fDB8fHww",
      image:
        "https://quozio.com/image/v2/q/1019/fc679c73/lg/953cfdd71594.1/the-mind-is-everything-what-you-think-you-become.jpg",
      caption: "The mind is everything. What you think you become.",
      likes: 12345,
      liked: false,
      saved: false,
      comments: 789,
      timeAgo: "8 h",
      verified: false,
      hasOverlay: true,
    },
  ]);

  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      username: "doremon",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeICgwfg217Ree7hSLSJ_WTKCgE4985F2kDw&s",
      verified: true,
      followedBy: "im_shiv_b",
    },
    {
      id: 2,
      username: "bruce_wayne",
      avatar: "https://i.pinimg.com/736x/e0/04/4e/e0044e471a717bbe16b1ba35c3257563.jpg",
      verified: false,
      followedBy: "im_shiv_b",
    },
    {
      id: 3,
      username: "top_cruise",
      avatar: "https://hips.hearstapps.com/vidthumb/images/gettyimages-146107054-1627666642.jpg?crop=1.00xw:0.848xh;0,0&resize=1200:*",
      verified: true,
      followedBy: "im_shiv_b",
    },
    {
      id: 4,
      username: "srk",
      avatar: "https://images.firstpost.com/wp-content/uploads/2020/11/shah-rukh-khan-1579698057.jpg?im=FitAndFill=(596,336)",
      verified: true,
      followedBy: "im_shiv_b",
    },
    {
      id: 5,
      username: "leonardo_dicaprio",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhXQz0aY3kiT-EBuwgxrjuo3gAg9CY-wLxRw&s",
      verified: false,
      followedBy: "im_shiv_b",
    },
  ]);

  // Double tap like system
  const lastTapTimeRef = useRef({});
  const [showHeart, setShowHeart] = useState({});
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    if (activeStory !== null) {
      const timeout = setTimeout(() => {
        setActiveStory(null);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [activeStory]);

  const handleDoubleTap = (postId) => {
    const currentTime = new Date().getTime();
    const lastTapTime = lastTapTimeRef.current[postId] || 0;
    const timeDiff = currentTime - lastTapTime;

    if (timeDiff < 300) {
      const post = posts.find((post) => post.id === postId);
      if (!post?.liked) {
        toggleLike(postId);

        setShowHeart((prev) => ({ ...prev, [postId]: true }));
        setTimeout(() => {
          setShowHeart((prev) => ({ ...prev, [postId]: false }));
        }, 1000);
      }
    }

    lastTapTimeRef.current[postId] = currentTime;
  };

  const toggleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const toggleSave = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, saved: !post.saved };
        }
        return post;
      })
    );
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };


  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="mx-auto flex w-full max-w-[470px] flex-col px-0 md:max-w-[630px] md:px-2">
        {/* Mobile Instagram Header */}
        <div
          className={cn(
            "flex items-center justify-between border-b p-3 md:hidden",
            darkMode
              ? "border-gray-800 bg-gray-900"
              : "border-gray-200 bg-white"
          )}
        >
          <div className="h-8">
            {darkMode ? (
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="118"
                height="42"
                viewBox="0 0 118 42"
                fill="none"
              >
                <path
                  d="M8.48628 0.557828C3.84687 0.557828 0.0848999 4.35018 0.0848999 9.01575V33.547C0.0848999 38.2125 3.84687 41.9907 8.48628 41.9907H109.234C113.873 41.9907 117.636 38.2125 117.636 33.547V9.01575C117.636 4.35018 113.873 0.557828 109.234 0.557828H8.48628ZM27.9395 8.66223C33.3743 8.66223 37.7838 13.0717 37.7838 18.4775C37.7838 23.9123 33.3743 28.2927 27.9395 28.2927C22.5046 28.2927 18.0951 23.9123 18.0951 18.4775C18.0951 13.0717 22.5046 8.66223 27.9395 8.66223ZM27.9395 12.1734C24.4598 12.1734 21.6062 15.0269 21.6062 18.4775C21.6062 21.9571 24.4598 24.7815 27.9395 24.7815C31.4192 24.7815 34.2727 21.9571 34.2727 18.4775C34.2727 15.0269 31.4192 12.1734 27.9395 12.1734ZM38.5262 9.20682C40.0424 9.20682 41.2873 10.4517 41.2873 11.9679C41.2873 13.4841 40.0424 14.7581 38.5262 14.7581C36.9809 14.7581 35.736 13.4841 35.736 11.9679C35.736 10.4517 36.9809 9.20682 38.5262 9.20682ZM53.4932 12.8583H58.3361V15.39C59.0792 13.9029 60.8867 12.6298 63.4183 12.6298C68.3777 12.6298 71.2595 15.9025 71.2595 20.7192V28.7651H66.9563V21.7503C66.9563 18.6632 65.4692 16.8548 62.9667 16.8548C60.3197 16.8548 57.7891 18.6632 57.7891 22.5518V28.7651H53.4932V12.8583ZM46.9727 12.6298C48.6426 12.6298 49.7329 13.4896 50.162 14.5207V13.0336H54.3593V28.4796C54.3593 33.065 51.3303 36.2374 46.5727 36.2374C43.0259 36.2374 40.2131 34.5093 39.2966 31.5649L43.1114 30.2345C43.5404 31.5076 44.7854 32.4814 46.5727 32.4814C48.7854 32.4814 50.0576 31.3066 50.0576 29.0328V27.1481C49.6285 28.1782 48.4999 29.1233 46.7727 29.1233C43.0823 29.1233 40.1841 26.025 40.1841 20.8874C40.1841 15.6934 43.1123 12.6298 46.9727 12.6298ZM75.039 20.8874C75.039 16.1852 79.107 12.6298 84.3274 12.6298C89.5479 12.6298 93.5723 16.1852 93.5723 20.8874C93.5723 25.5896 89.5479 29.1451 84.3274 29.1451C79.107 29.1451 75.039 25.5896 75.039 20.8874ZM88.7841 29.2305C88.7841 27.5884 90.1163 26.2126 91.6916 26.2126C93.2669 26.2126 94.5991 27.5884 94.5991 29.2305C94.5991 30.8727 93.2669 32.2202 91.6916 32.2202C90.1163 32.2202 88.7841 30.8718 88.7841 29.2305ZM47.3154 16.4258C44.8711 16.4258 43.5998 18.3105 43.5998 20.9165C43.5998 23.5225 44.8711 25.3309 47.3154 25.3309C49.7329 25.3309 51.1046 23.5225 51.1046 20.9165C51.1046 18.3678 49.7329 16.4258 47.3154 16.4258ZM84.3274 16.3404C81.5646 16.3404 79.4616 18.1198 79.4616 20.8874C79.4616 23.655 81.5646 25.4345 84.3274 25.4345C87.0339 25.4345 89.1369 23.655 89.1369 20.8874C89.1369 18.1198 87.0339 16.3404 84.3274 16.3404Z"
                  fill="white"
                />
              </svg>
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                alt="Instagram"
                className="h-8 w-auto"
              />
            )}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-2xl">
              <svg
                aria-label="Notifications"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
            </button>
            <button className="text-2xl">
              <svg
                aria-label="Messenger"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.739"
                ></path>
                <path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Stories */}
        <div
          className={cn(
            "mb-4 mt-2 overflow-x-auto scrollbar-none border-b pb-4 md:mb-6 md:mt-5 md:border-none md:pb-2",
            darkMode
              ? "border-gray-800 bg-gray-900"
              : "border-gray-200 bg-white"
          )}
        >
          <div className="flex gap-4 px-4">
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center">
                <div
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px] transition-transform duration-200 hover:scale-105 md:h-16 md:w-16"
                  onClick={() => setActiveStory(story.id)}
                >
                  <div className="h-full w-full rounded-full border-[2px] border-white dark:border-gray-900">
                    <img
                      src={story.avatar}
                      alt={story.username}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <span
                  className={cn(
                    "mt-1 cursor-pointer text-xs",
                    darkMode ? "text-gray-300" : "text-gray-800"
                  )}
                >
                  {story.username}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Story Viewer - Simplified for demo */}
        {activeStory !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="relative h-full w-full max-w-md">
              <div className="absolute top-0 z-10 flex w-full items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full border-2 border-white">
                    <img
                      src={stories.find((s) => s.id === activeStory)?.avatar}
                      alt="Story"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-white">
                    {stories.find((s) => s.id === activeStory)?.username}
                  </span>
                </div>
                <button
                  className="text-white"
                  onClick={() => setActiveStory(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="h-full">
                <img
                  src={`https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=${activeStory}`}
                  alt="Story content"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Posts */}
        <div className="mb-6 flex flex-col gap-3 md:gap-5">
          {posts.map((post) => (
            <div
              key={post.id}
              className={cn(
                "overflow-hidden border-b md:rounded-lg md:border md:shadow-sm",
                darkMode
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              )}
            >
              {/* Post header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 cursor-pointer rounded-full">
                    <img
                      src={post.avatar}
                      alt={post.username}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="cursor-pointer font-semibold hover:text-gray-500">
                      {post.username}
                    </span>
                    {post.verified && (
                      <span className="ml-1 text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M8 1.5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7ZM6.5 7.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3ZM8 4a.75.75 0 1 1 0 1.5A.75.75 0 0 1 8 4Z" />
                        </svg>
                      </span>
                    )}
                    <span className="mx-1 text-gray-500">•</span>
                    <span className="text-sm text-gray-500">
                      {post.timeAgo}
                    </span>
                  </div>
                </div>
                <button className="text-current">
                  <svg
                    aria-label="More options"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </button>
              </div>

              {/* Post image */}
              <div
                className="relative aspect-square w-full overflow-hidden"
                onClick={() => handleDoubleTap(post.id)}
              >
                <img
                  src={post.image}
                  alt="Post content"
                  className="h-full w-full object-cover"
                />

                {/* Heart animation on double tap */}
                {showHeart[post.id] && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
                    <svg
                      className="h-24 w-24 animate-[like_1s_ease-in-out] text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                )}

              </div>

              {/* Post actions */}
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="text-2xl transition-colors duration-200"
                    >
                      {post.liked ? (
                        <FaHeart className="text-red-500 animate-like" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                    <button className="text-2xl">
                      <FaRegComment />
                    </button>
                    <button className="text-2xl">
                      <FiSend />
                    </button>
                  </div>
                  <button
                    onClick={() => toggleSave(post.id)}
                    className="text-2xl"
                  >
                    {post.saved ? <FaBookmark /> : <FaRegBookmark />}
                  </button>
                </div>

                {/* Likes */}
                <div className="mt-2">
                  <span className="font-semibold">
                    {formatNumber(post.likes)} likes
                  </span>
                </div>

                {/* Caption */}
                <div className="mt-1">
                  <span className="font-semibold">{post.username}</span>{" "}
                  <span
                    className={cn(
                      "text-sm",
                      darkMode ? "text-gray-300" : "text-gray-800"
                    )}
                  >
                    {post.caption}
                  </span>
                </div>

                {/* View all comments */}
                {post.comments > 0 && (
                  <button className="mt-1 text-sm text-gray-500">
                    View all {post.comments} comments
                  </button>
                )}

                {/* Add comment */}
                <div
                  className={cn(
                    "mt-3 flex items-center justify-between border-t pt-3",
                    darkMode ? "border-gray-800" : "border-gray-200"
                  )}
                >
                  <div className="flex items-center gap-2 flex-1">
                    <svg
                      aria-label="Emoji"
                      fill="currentColor"
                      height="20"
                      role="img"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className={cn(
                        "w-full border-none bg-transparent outline-none",
                        darkMode
                          ? "placeholder:text-gray-500 text-white"
                          : "placeholder:text-gray-500 text-black"
                      )}
                    />
                  </div>
                  <button className="font-semibold text-blue-500">Post</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right sidebar - Suggestions */}
      <div className="ml-8 hidden w-[320px] lg:block">
        <div className="fixed pt-6">
          {/* Current user */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 cursor-pointer rounded-full">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEloYLmGzSpXQ/profile-displayphoto-shrink_800_800/B4DZYAOTCUHIAg-/0/1743760472372?e=1750291200&v=beta&t=j2oDkMsYi-S180lSVphBaPXsG7ukmANJJHht99bmbGE"
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="cursor-pointer font-semibold">im_shiv_b</span>
                <span
                  className={cn(
                    "text-sm",
                    darkMode ? "text-gray-400" : "text-gray-500"
                  )}
                >
                  Shiv Singh Baghel
                </span>
              </div>
            </div>
            <button className="text-sm font-semibold text-blue-500 hover:text-blue-700">
              Switch
            </button>
          </div>

          {/* Suggestions header */}
          <div className="mb-3 flex items-center justify-between">
            <span
              className={cn(
                "text-sm font-semibold",
                darkMode ? "text-gray-400" : "text-gray-500"
              )}
            >
              Suggested for you
            </span>
            <button
              className={cn(
                "text-xs font-semibold hover:text-gray-500",
                darkMode ? "text-gray-200" : "text-black"
              )}
            >
              See All
            </button>
          </div>

          {/* Suggestions list */}
          <div className="flex flex-col gap-3">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 cursor-pointer rounded-full">
                    <img
                      src={suggestion.avatar}
                      alt={suggestion.username}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="cursor-pointer text-sm font-semibold hover:text-gray-500">
                        {suggestion.username}
                      </span>
                      {suggestion.verified && (
                        <span className="ml-1 text-blue-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path d="M8 1.5c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7ZM6.5 7.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3ZM8 4a.75.75 0 1 1 0 1.5A.75.75 0 0 1 8 4Z" />
                          </svg>
                        </span>
                      )}
                    </div>
                    {suggestion.followedBy ? (
                      <span
                        className={cn(
                          "text-xs",
                          darkMode ? "text-gray-400" : "text-gray-500"
                        )}
                      >
                        Followed by {suggestion.followedBy}
                      </span>
                    ) : (
                      <span
                        className={cn(
                          "text-xs",
                          darkMode ? "text-gray-400" : "text-gray-500"
                        )}
                      >
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                  Follow
                </button>
              </div>
            ))}
          </div>

          {/* Footer links */}
          <div
            className={cn(
              "mt-6 text-xs",
              darkMode ? "text-gray-500" : "text-gray-400"
            )}
          >
            <div className="mb-3 flex flex-wrap">
              <a href="#" className="mr-2 hover:underline">
                About
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                Help
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                Press
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                API
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                Jobs
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                Privacy
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                Terms
              </a>
            </div>
            <div className="mb-3 flex flex-wrap">
              <a href="#" className="mr-2 hover:underline">
                Locations
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                Language
              </a>{" "}
              •
              <a href="#" className="mx-2 hover:underline">
                Meta Verified
              </a>
            </div>
            <p>© 2025 INSTAGRAM FROM META</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
