"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeedElements = () => {
  const [feed, setFeed] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Define the async function inside the useEffect
    const fetchPosts = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch("api/feeds"); // Adjust the endpoint as necessary
        if (response.ok) {
          const data = await response.json();
          setFeed(data);
        } else {
          // Handle non-200 responses
          throw new Error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error("Failed to fetch feeds:", error);
      }
      setLoading(false); // Stop loading regardless of success or failure
    };

    fetchPosts(); // Call the async function
  }, []);


  return (
    <section
      id="feed"
      className="h-screen lg:h-[50vh] w-screen p-4 lg:px-[67px] flex flex-col items-center justify-center"
    >
      <div className="h-full w-full lg:h-[225px] lg:w-[1378px]  flex flex-col items-start justify-between gap-20 lg:flex-row lg:items-center lg:justify-between border-white border-[1px] lg:gap-[92px] px-12 py-12 rounded-[32px] lg:px-[56px] lg:py-[24px]">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          feed.length > 0 &&
          feed.map((item, index) => (
            
              <div key={index} className=" flex flex-col items-center justify-start h-1/4 lg:w-[231px] lg:h-[123px]">
                <div className="w-full flex justify-start items-center py-2 lg:h-full">
                  <Image
                    src={"/Group.svg"}
                    width={24}
                    height={24}
                    alt={"sparkle"}
                  />
                </div>
                <h1 className="w-full flex justify-start">{item.title}</h1>
                <p className="w-full flex justify-start">{item.article}</p>
              </div>
            
          ))
        )}
      </div>
    </section>
  );
};

export default FeedElements;
