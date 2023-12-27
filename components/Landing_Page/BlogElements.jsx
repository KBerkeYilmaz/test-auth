"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogElements = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch("api/posts");
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          // Handle non-200 responses
          throw new Error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
      setLoading(false); //
    };

    fetchPosts();
  }, []);

  return (
    <section
      id="blog"
      className="h-screen lg:h-[50vh] w-screen overflow-hidden my-10" // Full viewport height
    >
      <div className="flex flex-col items-center w-full h-full px-[67px]">
        <div className="w-full flex items-center">
          <h1 className="text-4xl w-1/2">Blog Yazılarını Görüntüle</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows1 gap-10 w-full lg:h-[full] m-10">
          {/* Adjusted grid */}
          {post.slice(0, 4).map(
            (
              item,
              index 
            ) => (
              <div
                key={index}
                className="bg-red-300 rounded-[32px] h-full p-4" 
              >
                <h1 className="text-[5rem] font-bold h-1/3">{index + 1}</h1>
                <h2 className="text-[2rem] font-semibold">{item.title}</h2>
                <p>{item.article}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogElements;
