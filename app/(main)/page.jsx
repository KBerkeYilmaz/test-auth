import Image from "next/image";
import Link from "next/link";
import FeedElements from "@components/Landing_Page/FeedElements";
import { Bitter, Space_Mono, Lato } from "next/font/google";
import LandingHero from "@components/Landing_Page/LandingHero";
import GalleryPreview from "@components/Landing_Page/GalleryPreview";

export const blogPosts = [
  { number: 1, title: "test", article: "article article article article" },
  { number: 2, title: "test1", article: "article article article article" },
  { number: 3, title: "test2", article: "article article article article" },
  { number: 4, title: "test3", article: "article article article article" },
];

const Home = () => {
  return (
    <div
      id="landing"
      className="flex min-h-screen flex-col items-center justify-center relative text-white bg-trans"
    >

      {/* HERO */}
      
      <LandingHero />

      {/* BLOG POSTS */}

      <section
        id="blog"
        className="h-[50vh] w-screen overflow-hidden"
      >
        <div className="flex flex-col items-center w-full h-full px-[67px]">
          <div className="w-full flex items-center">
            <h1 className="text-4xl w-1/2">Blog Yazılarını Görüntüle</h1>
          </div>
          <div className="grid grid-cols-4 gap-10 w-full h-full m-10">
            {blogPosts.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-red-300 rounded-[10px] max-h-fit"
                >
                  <h1>{item.number}</h1>
                  <h2>{item.title}</h2>
                  <p>{item.article}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      
      <GalleryPreview />

      {/* FEED */}

      <FeedElements />

      {/* Footer */}

      <footer
        id="footer"
        className="h-[50vh] w-screen flex justify-center mb-[25vh]"
      >
        <div className="w-[676px] flex flex-col justify-start items-center">
          <h1 className="text-[80px] text-center">Dünyayı Bizimle Dolaşın!</h1>
          <div className="py-8">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, eum? Adipisci, provident expedita. Voluptas qui
              repellendus possimus expedita nulla ipsum aspernatur id, adipisci
              nostrum, ea consectetur enim quam. Quisquam, sunt?
            </p>
          </div>
          <div className="flex flex-col justify-end items-center h-full w-full">
            <button className="rounded-full w-[314px] h-[66px] font-sans bg-white text-[20px] text-[#333333]">
              <a href="mailto:mahmut@medusaglobal.com.tr">Şimdi İletişime Geçin</a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
