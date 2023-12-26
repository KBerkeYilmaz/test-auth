import Image from "next/image";
import Link from "next/link";
import { Bitter, Space_Mono, Lato } from "next/font/google";

export const blogPosts = [
  { number: 1, title: "test", article: "article article article article" },
  { number: 2, title: "test1", article: "article article article article" },
  { number: 3, title: "test2", article: "article article article article" },
  { number: 4, title: "test3", article: "article article article article" },
];

const Home = () => {
  return (
    <div
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center relative text-white bg-trans"
    >
      <section className="min-h-fit h-[770px] w-screen relative px-[67px]">
        <div className="absolute w-[218px] h-[218px] top-[129px] left-[44px] flex justify-center items-center">
          <Image
            className="absolute bg-transparent rounded-full shadow-3xl -z-40 shadow-[#F9D866]"
            src={"/Ellipse 171.svg"}
            width={172.22}
            height={172.22}
            alt="güneş"
          />
        </div>

        <Image
          className="w-[801px] h-[796px] absolute right-[67px] -z-50 -top-[60px]"
          src={"/splash.svg"}
          width={801}
          height={796}
          alt="galaksi"
        />

        <div className="h-full w-full flex justify-start items-center z-40  text-white">
          <div className=" h-[364px] w-[639px] flex flex-col justify-start">
            <h1 className="hero-title text-[72px] font-extrabold font-[Bitter] h-1/2 leading-tight">
              Geleceğe Bizimle Ulaş!
            </h1>
            <div className="flex flex-col justify-between h-1/2 w-full">
              <p className="hero-paragraph text-[22px] w-[591px] my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed idt.
              </p>
              <button className="rounded-full w-[215px] h-[66px] hero-paragraph bg-white text-[20px] text-[#333333]">
                <a href="mailto:mahmut@medusaglobal.com.tr">Şimdi Başla</a>
              </button>
            </div>
          </div>
        </div>
      </section>

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
      <section className="h-[50vh] w-screen">
        <div className="flex flex-col items-center w-full h-full px-[67px]">
          <div className="w-full flex items-center">
            <h1 className="text-4xl w-1/2">Tüm Galeriyi Görüntüle</h1>
          </div>
          <div className="flex justify-between items-center gap-10 w-full h-full m-10">
            <div className="bg-purple-400 h-[344px] w-[411px] rounded-[32px] "></div>
            <div className="bg-orange-400 h-[344px] w-[411px] rounded-[32px] "></div>
            <div className="bg-violet-400 h-[344px] w-[411px] rounded-[32px] "></div>
          </div>
        </div>
      </section>

      {/* FEED */}

      <section
        id="feed"
        className="h-[50vh] w-screen"
      >
        <div className="flex flex-col items-center justify-center w-full h-[50vh] px-[67px]">
          <div className="h-[225px] w-[1378px] flex items-center justify-between border-white border-[1px] lg:gap-[92px] rounded-[32px] lg:px-[56px] lg:py-[24px]">
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px] ">
              <div className="w-full flex justify-start py-2 h-full">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start">Ücretsiz Kargo</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px]">
              <div className="w-full flex justify-start py-2">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start text-[24px]">
                İade Garantisi
              </h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px]">
              <div className="w-full flex justify-start py-2">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start">Sınırsız Destek</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
            <div className="flex flex-col items-center justify-start lg:w-[231px] lg:h-[123px]">
              <div className="w-full flex justify-start py-2">
                <Image
                  src={"/Group.svg"}
                  width={24}
                  height={24}
                  alt={"sparkle"}
                />
              </div>
              <h1 className="w-full flex justify-start">Taksitli Ödeme</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                quas{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </section>

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
