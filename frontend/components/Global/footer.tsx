// components/Footer.tsx

// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Twitter,
//   Youtube,
//   Building2,
// } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-[#2b2b2b] text-white">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Left Section */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full border border-[#d4a017] flex items-center justify-center">
                {/* <Building2 className="w-5 h-5 text-[#d4a017]" /> */}
              </div>

              <div>
                <h2 className="text-[#d4a017] font-semibold text-[20px] leading-none">
                  Bismillah
                </h2>
                <p className="text-[10px] tracking-[2px] text-gray-300 uppercase mt-1">
                  Constructors & Builders
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#c6d0e1] text-[15px] leading-8 max-w-[320px]">
              Building Pakistan&apos;s future with quality, integrity,
              and innovation since 2004. ISO 9001:2015 certified.
              Serving Karachi, Lahore & Islamabad.
            </p>

            {/* Social Icons
            <div className="flex items-center gap-3 mt-8">
              {[
                <Facebook key="fb" size={16} />,
                <Instagram key="ig" size={16} />,
                <Linkedin key="ln" size={16} />,
                <Twitter key="tw" size={16} />,
                <Youtube key="yt" size={16} />,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center text-gray-300 hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300 cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div> */}
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#d4a017] uppercase tracking-[1px] font-semibold text-sm mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-[#c6d0e1] text-[15px]">
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Our Team
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                News & Updates
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                CSR Initiatives
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#d4a017] uppercase tracking-[1px] font-semibold text-sm mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-[#c6d0e1] text-[15px]">
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Residential Construction
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Commercial Buildings
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Renovation
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Infrastructure
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Project Management
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-[#d4a017] uppercase tracking-[1px] font-semibold text-sm mb-6">
              Projects
            </h3>

            <ul className="space-y-4 text-[#c6d0e1] text-[15px]">
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Karachi Portfolio
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Lahore Portfolio
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Islamabad Portfolio
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Ongoing Projects
              </li>
              <li className="hover:text-[#d4a017] cursor-pointer transition">
                Completed Projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}