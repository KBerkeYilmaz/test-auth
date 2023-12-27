import Image from "next/image";

const LandingHero = () => {
  return (
    <section className="min-h-fit h-[770px] w-screen relative px-[67px]">
      <div className="absolute w-[218px] h-[218px] top-[129px] left-[44px] flex justify-center items-center">
        <Image
          className="absolute bg-transparent rounded-full shadow-3xl -z-40 shadow-[#F9D866] sun-svg"
          src={"/Ellipse 171.svg"}
          width={172.22}
          height={172.22}
          alt="güneş"
          
        />
      </div>

      <Image
        className="w-[801px] h-[796px] absolute right-[67px] -z-50 -top-[60px] galaxy-svg "
        src={"/splash.svg"}
        width={801}
        height={796}
        alt="galaksi"
        priority
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
  );
};

export default LandingHero;
