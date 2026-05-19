import React from "react";
import Image from "next/image";

export const Portfolio = () => {
  return (
    <section className="bg-[#071127]">
      <div className="max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-2">
          {/* col-1  */}
          <div>
            <div className="mb-8 flex items-center  gap-5">
              <div className="h-[1px] w-12 bg-[#d6a84f]" />
              <p className="text-sm uppercase tracking-[5px] text-[#d6a84f]">
                Our Portfolio
              </p>
            </div>
            <h1 className="max-w-5xl text-white font-black  leading-[0.95] tracking-tight md:text-[60px]">
              Signature Projects
            </h1>
            <p className="mt-8 max-w-2xl text-md leading-9 text-gray-300">
              Bismillah Constructors & Builders — delivering premium Each
              project is a testament to our commitment to quality, innovation,
              and timely delivery. Explore our growing portfolio across Pakistan
            </p>
          </div>
          {/* cols-2  */}
          <div className="justify-bottom">
            <div className="flex flex-wrap gap-3 ">
              <span className="text-white">Filter :</span>
              <span className="px-5 py-2 rounded-full border border-[#5B4720] bg-[#111827] text-[#D4A43C] text-sm">
                Villas
              </span>

              <span className="px-5 py-2 rounded-full border border-[#5B4720] bg-[#111827] text-[#D4A43C] text-sm">
                Apartments
              </span>

              <span className="px-5 py-2 rounded-full border border-[#5B4720] bg-[#111827] text-[#D4A43C] text-sm">
                Townships
              </span>
            </div>
          </div>
          {/* cols-2-end  */}
        </div>
        <div className="py-6">
          <p className="text-white">Showing 8 of 12 projects</p>
        </div>

        {/* Cards  */}

        <div className="max-w-7xl mx-auto grid  grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
         
     
        {/* card end  */}
         <div className="w-full max-w-[340px] overflow-hidden rounded-[24px] border border-[#163055] bg-[#061327]">
            {/* Image Section */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src="/card1.jfif"
                alt="Project"
                width={340}
                height={300}
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061327]" />

              {/* Top Tags */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-md">
                  Residential
                </span>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  ● Completed
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-[18px] font-bold leading-tight text-white">
                Al-Noor Residences
              </h3>

              <p className="mt-3 text-[12px] leading-7 text-[#94A3B8]">
                A prestigious residential complex featuring 48 premium villas
                with state...
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-[#17304f] pt-4">
                <div className="flex items-center gap-4 text-[12px] text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    {/* <MapPin size={15} /> */}
                    <span>DHA Phase 6</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* <Calendar size={15} /> */}
                    <span>2023</span>
                  </div>
                </div>

                <span className="text-sm font-semibold text-[#F59E0B]">
                  PKR 2.4B
                </span>
              </div>
            </div>
          </div>
         {/* Cards  */}
          <div className="w-full max-w-[340px] overflow-hidden rounded-[24px] border border-[#163055] bg-[#061327]">
            {/* Image Section */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src="/card1.jfif"
                alt="Project"
                width={300}
                height={300}
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061327]" />

              {/* Top Tags */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-md">
                  Residential
                </span>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  ● Completed
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-[18px] font-bold leading-tight text-white">
                Al-Noor Residences
              </h3>

              <p className="mt-3 text-[12px] leading-7 text-[#94A3B8]">
                A prestigious residential complex featuring 48 premium villas
                with state...
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-[#17304f] pt-4">
                <div className="flex items-center gap-4 text-[12px] text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    {/* <MapPin size={15} /> */}
                    <span>DHA Phase 6</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* <Calendar size={15} /> */}
                    <span>2023</span>
                  </div>
                </div>

                <span className="text-sm font-semibold text-[#F59E0B]">
                  PKR 2.4B
                </span>
              </div>
            </div>
          </div>
        {/* card end  */}

         {/* Cards  */}
          <div className="w-full max-w-[340px] overflow-hidden rounded-[24px] border border-[#163055] bg-[#061327]">
            {/* Image Section */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src="/card1.jfif"
                alt="Project"
                width={300}
                height={300}
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061327]" />

              {/* Top Tags */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-md">
                  Residential
                </span>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  ● Completed
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-[18px] font-bold leading-tight text-white">
                Al-Noor Residences
              </h3>

              <p className="mt-3 text-[12px] leading-7 text-[#94A3B8]">
                A prestigious residential complex featuring 48 premium villas
                with state...
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-[#17304f] pt-4">
                <div className="flex items-center gap-4 text-[12px] text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    {/* <MapPin size={15} /> */}
                    <span>DHA Phase 6</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* <Calendar size={15} /> */}
                    <span>2023</span>
                  </div>
                </div>

                <span className="text-sm font-semibold text-[#F59E0B]">
                  PKR 2.4B
                </span>
              </div>
            </div>
          </div>
        {/* card end  */}
         {/* Cards  */}

          <div className="w-full max-w-[340px] overflow-hidden rounded-[24px] border border-[#163055] bg-[#061327]">
            {/* Image Section */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src="/card1.jfif"
                alt="Project"
                width={300}
                height={300}
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061327]" />

              {/* Top Tags */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 backdrop-blur-md">
                  Residential
                </span>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  ● Completed
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-[18px] font-bold leading-tight text-white">
                Al-Noor Residences
              </h3>

              <p className="mt-3 text-[12px] leading-7 text-[#94A3B8]">
                A prestigious residential complex featuring 48 premium villas
                with state...
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-[#17304f] pt-4">
                <div className="flex items-center gap-4 text-[12px] text-[#94A3B8]">
                  <div className="flex items-center gap-1">
                    {/* <MapPin size={15} /> */}
                    <span>DHA Phase 6</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* <Calendar size={15} /> */}
                    <span>2023</span>
                  </div>
                </div>

                <span className="text-sm font-semibold text-[#F59E0B]">
                  PKR 2.4B
                </span>
              </div>
            </div>
          </div>
        {/* card end  */}
           </div>
           <div className="max-w-7xl text-center m-6 ">
             <button className="px-5 py-2 rounded-full border border-[#5B4720] bg-[#111827] text-[#D4A43C] text-sm">
                View All Projects
              </button>
           </div>
      </div>
    </section>
  );
};
