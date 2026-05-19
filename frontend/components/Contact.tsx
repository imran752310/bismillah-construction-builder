

export default function ContactSection() {
  return (
    <section className="w-full bg-[#030824] text-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#D7A63F] text-sm mb-4 flex items-center justify-center gap-4">
            <span className="w-14 h-[1px] bg-[#D7A63F]" />
            Get In Touch
            <span className="w-14 h-[1px] bg-[#D7A63F]" />
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Start Your Project Today
          </h2>

          <p className="text-[#A7B0D1] text-base md:text-lg max-w-3xl mx-auto mt-6 leading-8">
            Ready to build? Share your vision with us and well provide a
            detailed consultation and quotation within 48 hours.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {/* Card */}
          {/* <InfoCard
            icon={ size={20} />}
            title="Call Us"
            details={["+92 21 3456 7890", "+92 300 1234 567"]}
            iconBg="bg-[#0A2E2D]"
            iconColor="text-[#35E0B5]"
          /> */}


         

        
        </div>

        {/* Main Box */}
        <div className="grid lg:grid-cols-2 border border-[#1A2347] rounded-[26px] overflow-hidden bg-[#07112E]">
          {/* Left Form */}
          <div className="p-8 md:p-12 border-r border-[#1A2347]">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-bold">Send Us a Message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="FULL NAME *"
                  placeholder="Ahmed Khan"
                />

                <InputField
                  label="EMAIL ADDRESS *"
                  placeholder="ahmed@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="PHONE NUMBER"
                  placeholder="+92 300 1234 567"
                />

                <div>
                  <label className="text-xs tracking-widest text-[#B2BAD5] uppercase block mb-3">
                    Service Required
                  </label>

                  <select className="w-full h-[58px] bg-[#0A1738] border border-[#243156] rounded-2xl px-5 text-[#A7B0D1] outline-none focus:border-[#D7A63F]">
                    <option>Select a service...</option>
                    <option>Construction</option>
                    <option>Architecture</option>
                    <option>Interior Design</option>
                    <option>Renovation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs tracking-widest text-[#B2BAD5] uppercase block mb-3">
                  PROJECT DETAILS *
                </label>

                <textarea
                  rows={5}
                  placeholder="Describe your project — location, size, timeline, and any specific requirements..."
                  className="w-full bg-[#0A1738] border border-[#243156] rounded-2xl px-5 py-4 text-[#A7B0D1] outline-none resize-none focus:border-[#D7A63F]"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[58px] rounded-2xl bg-[#D7A63F] text-black font-bold flex items-center justify-center gap-3 hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#0A1638] to-[#10162C]">
            <h3 className="text-4xl font-extrabold leading-tight mb-8">
              Why Work With <br />
              <span className="text-[#D7A63F]">
                Bismillah Constructors?
              </span>
            </h3>

            <div className="space-y-5 mb-10">
              {[
                "ISO 9001:2015 certified quality management",
                "Experienced team of 500+ engineers & craftsmen",
                "End-to-end project delivery — design to handover",
                "Competitive pricing with no hidden costs",
                "Post-completion maintenance & warranty",
                "Trusted by government & private sector alike",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  

                  <p className="text-[#C7D0EE] leading-7">{item}</p>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="border border-[#2C355A] rounded-2xl p-6 bg-[#131B35]">
              <p className="italic text-[#D9E2FF] leading-7 mb-6">
                “Bismillah Constructors transformed our vision into a
                masterpiece. Professional, punctual, and truly dedicated to
                quality.”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D7A63F] flex items-center justify-center text-black font-bold">
                  AK
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Arif Khan
                  </h4>

                  <p className="text-sm text-[#98A2C5]">
                    Director, Al-Noor Properties
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Components ------------------------------- */

function InfoCard({
  icon,
  title,
  details,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  details: string[];
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="bg-[#07112E] border border-[#1C2648] rounded-3xl p-7 min-h-[180px]">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconBg}`}
      >
        <div className={iconColor}>{icon}</div>
      </div>

      <h4 className="text-xl font-bold mb-4">{title}</h4>

      <div className="space-y-2">
        {details.map((item, index) => (
          <p key={index} className="text-[#A7B0D1] text-sm leading-7">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-xs tracking-widest text-[#B2BAD5] uppercase block mb-3">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-[58px] bg-[#0A1738] border border-[#243156] rounded-2xl px-5 text-[#A7B0D1] outline-none focus:border-[#D7A63F]"
      />
    </div>
  );
}