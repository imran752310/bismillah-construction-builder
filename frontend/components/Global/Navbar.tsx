import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <div>Logo</div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">Project</Link>
          <Link href="/">Aboute Us</Link>
        </div>
        <div>
          <button>mood</button>
          <button>admin</button>
        </div>
      </div>
    </nav>
  );
};
