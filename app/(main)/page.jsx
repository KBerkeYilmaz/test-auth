import FeedElements from "@components/Landing_Page/FeedElements";
import LandingHero from "@components/Landing_Page/LandingHero";
import GalleryPreview from "@components/Landing_Page/GalleryPreview";
import BlogElements from "@components/Landing_Page/BlogElements";



const Home = () => {
  return (
    <div
      id="landing"
      className="flex min-h-screen flex-col items-center justify-center relative text-white bg-trans"
    >

      {/* HERO */}
      
      <LandingHero />

      {/* BLOG POSTS */}

      <BlogElements />

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
