import { Portfolio } from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <section className="">
        {/* Background Image */}
        <div className="relative  overflow-hidden bg-[#081126] text-white min-h-screen">
          <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero.jfif')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071127]/80" />

       
        {/* Navbar */}
        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6a84f] text-[#d6a84f]"></div>
            <div>
              <h2 className="text-[28px] font-extrabold leading-none tracking-tight text-[#d6a84f]">
                Bismillah
              </h2>
              <p className="text-[10px] uppercase tracking-[2.5px] text-gray-300">
                Constructors & Builders
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden items-center gap-10 text-[12px] font-medium text-gray-200 lg:flex">
            <a href="#" className="transition hover:text-[#d6a84f]">
              Home
            </a>
            <a href="#" className="transition hover:text-[#d6a84f]">
              Services
            </a>
            <a href="#" className="transition hover:text-[#d6a84f]">
              Projects
            </a>
            <a href="#" className="transition hover:text-[#d6a84f]">
              About
            </a>
            <a href="#" className="transition hover:text-[#d6a84f]">
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button className="rounded-full border border-[#d6a84f]/60 px-6 py-2 text-sm font-medium text-[#d6a84f] transition hover:bg-[#d6a84f] hover:text-black">
              Admin
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-8">
          <div className="max-w-3xl ">
            {/* Top Label */}
            <div className="mb-8 flex items-center gap-5">
              <div className="h-[1px] w-12 bg-[#d6a84f]" />
              <p className="text-sm uppercase tracking-[5px] text-[#d6a84f]">
                Est. 2004 — Building Pakistans Future
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-5xl  font-black uppercase leading-[0.95] tracking-tight md:text-[60px]">
              <span className="block text-white">Crafting</span>
              <span className="block text-[#d6a84f]">Excellence</span>
              <span className="block text-white">In Every Build</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-md leading-9 text-gray-300">
              Bismillah Constructors & Builders — delivering premium
              residential, commercial, and infrastructure projects across
              Pakistan with uncompromising quality since 2004.
            </p>

            {/* Button */}
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <button className="rounded-full bg-[#d6a84f] px-8 py-4 text-base font-semibold text-black transition hover:scale-[1.02] hover:bg-[#e5b85c]">
                Explore Our Projects 
              </button>

              <button className="flex items-center gap-3 rounded-full border border-[#d6a84f]/40 bg-black/10 px-8 py-4 text-base font-medium text-[#d6a84f] backdrop-blur-md transition hover:border-[#d6a84f] hover:bg-[#d6a84f]/10">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6a84f]/60 text-sm">
                   
                </span>
                Get a Quote
              </button>
            </div>
          </div>
          
        </div>
        <div>
        </div>

            {/* Bottom counter */}
        <div className=" border-t border-white/10 bg-black/25 backdrop-blur-md">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-8 py-6 md:grid-cols-4">
            <div>
              <h3 className="text-[20px] font-black text-[#d6a84f]">20+</h3>
              <p className="mt-2 text-[9px] uppercase tracking-[3px] text-gray-300">
                Years of Excellence
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-black text-[#d6a84f]">650+</h3>
              <p className="mt-2 text-[9px] uppercase tracking-[3px] text-gray-300">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-black text-[#d6a84f]">100%</h3>
              <p className="mt-2 text-[9px] uppercase tracking-[3px] text-gray-300">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-black text-[#d6a84f]">PKR 80B+</h3>
              <p className="mt-2 text-[9px] uppercase tracking-[3px] text-gray-300">
                Projects Executed
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
     
          <Services />
            <Portfolio />
    
    </div>
  );
}
