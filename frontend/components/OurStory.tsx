import Image from "next/image";
const OurStory = () => {
  return (
    <section className="bg-[#071127]">
      <div className="max-w-6xl mx-auto py-26">
        <div className="grid grid-cols-2 gap-10 ">
          {/* col image  */}
          <div className="m-6">
            <div className="relative">
              <div className="w-40 h-20 bg-green-400 rounded-3xl absolute top-[-30] left-[-20px]  border">
                <div className="flex items-center pt-5 pl-5 ">
                  <div className=" bg-red">icon</div>
                  <div className="text-white">
                    <h3 className="text-block ">650+</h3>
                    <p>Product built</p>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  src="/storeimage.jfif"
                  width={490}
                  height={40}
                  alt="image"
                  className=" rounded-3xl object-cover"
                />
              </div>
              <div className="bg-yellow-600 w-30 h-30 bg-green-400 rounded-xl absolute bottom-[-30] right-[-15] ">
                <div className="p-5">
                  <h1 className="font-black text-[25px]">20+</h1>
                  <p className="text-sm">YEARS OF EXCELLENCE</p>
                </div>
              </div>
            </div>
          </div>
          {/* col description  */}
          <div>
            <div>
              <div className="mb-8 flex items-center  gap-5">
                <div className="h-[1px] w-12 bg-[#d6a84f]" />
                <p className="text-sm uppercase tracking-[5px] text-[#d6a84f]">
                  Our Story
                </p>
              </div>
              <h1 className="max-w-5xl text-white font-black text-[40px]  leading-[0.95] tracking-tight ">
                Building Pakistan,
                <br />
                <b className="text-yellow-600">One Landmark at a Time</b>
              </h1>
              <p className="mt-8  text-sm text-gray-300">
                Founded in 2004 in Karachi, Bismillah Constructors & Builders
                began with a simple conviction: that every structure we build
                must honor its purpose, serve its community, and stand for
                generations. Two decades later, that conviction drives 650+
                completed projects across Pakistans three major cities <br />
                From bespoke family villas to multi-billion-rupee commercial
                towers, we bring engineering precision, aesthetic sensibility,
                and an unwavering commitment to quality — on time, every time.
              </p>

              <div className="mt-10">
                <div className="flex items-center gap-5 my-2">
                  <span className="px-3 py-1  rounded-full border border-[#5B4720] bg-[#111827] text-[#D4A43C] text-sm">
                    2004{" "}
                  </span>
                  <p className="text-white text-[12px]  text-gray-300">
                    Founded in Karachi with a vision to redefine construction
                    standards in Pakistan.
                  </p>
                </div>

                <div className="flex items-center gap-5 my-2">
                  <span className="px-3 py-1 rounded-full border border-[#5B4720] bg-[#111827] text-[#D4A43C] text-sm">
                    2004{" "}
                  </span>
                  <p className="text-white text-[12px]  text-gray-300">
                    Completed our 100th project and expanded operations to Lahore & Islamabad.
                  </p>
                </div>
                
                  <div className="flex items-center gap-5 my-2">
                  <span className="px-3 py-1 rounded-full border border-[#5B4720] bg-[#111827] text-[#D4A43C] text-sm">
                    2004{" "}
                  </span>
                  <p className="text-white text-[12px]  text-gray-300">
                    Completed our 100th project and expanded operations to Lahore & Islamabad.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

        <div className=" max-w-7xl mx-auto py-26">
            <div className="text-center text-white">
                <h1 className="font-black text-2xl my-2">Our Core Value</h1>
                <p className="text-white text-[14px]  text-gray-300">The principles that guide every decision we make.</p>
            </div>

            <div>
                <div className="grid grid-cols-4 gap-6 mt-15">
                        <div className=" bg-blue text-center text-white border-1 border-white rounded-xl p-5">
                            <p>logo</p>
                            <h3 className="font-black text-md">Bismillah — Begin with Purpose</h3>
                            <p className="text-white text-[12px]  text-gray-300">Every project starts with intention, prayer, and responsibility.</p>
                        </div>
                        <div className=" bg-blue text-center text-white border-1 border-white rounded-xl p-5">
                            <p>logo</p>
                            <h3 className="font-black text-md">Bismillah — Begin with Purpose</h3>
                            <p className="text-white text-[12px]  text-gray-300">Every project starts with intention, prayer, and responsibility.</p>
                        </div>
                         <div className=" bg-blue text-center text-white border-1 border-white rounded-xl p-5">
                            <p>logo</p>
                            <h3 className="font-black text-md">Bismillah — Begin with Purpose</h3>
                            <p className="text-white text-[12px]  text-gray-300">Every project starts with intention, prayer, and responsibility.</p>
                        </div>
                         <div className=" bg-blue text-center text-white border-1 border-white rounded-xl p-5">
                            <p>logo</p>
                            <h3 className="font-black text-md">Bismillah — Begin with Purpose</h3>
                            <p className="text-white text-[12px]  text-gray-300">Every project starts with intention, prayer, and responsibility.</p>
                        </div>
                </div>
            </div>

        </div>
    </section>

  );
};

export default OurStory;
