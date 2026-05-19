"use client";

import Link from "next/link";
import{ MenuIcon, } from '@mui/icons-material/Menu';

export default function DashboardNavbar() {
  return (
    <header className="h-16 border-b  flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden">
          {/* <Menu className="w-6 h-6" /> */}
        </button>

         <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6a84f] text-[#d6a84f]"></div>
            <div>
              <h2 className="text-[20px] font-extrabold leading-none tracking-tight text-[#d6a84f]">
                Bismillah
              </h2>
              <p className="text-[8px] uppercase tracking-[2.5px] text-gray-300">
                Constructors & Builders
              </p>
            </div>
          </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        

        <Link
          href="/profile"
          className="flex items-center gap-2"
        >
          

          <div className="hidden sm:block text-left">
          
            <p className="text-sm text-gray-500 border px-4 py-1 rounded">Admin</p>
          </div>
        </Link>
      </div>
    </header>
  );
}