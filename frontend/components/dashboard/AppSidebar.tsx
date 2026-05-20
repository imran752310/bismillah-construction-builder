// "use client";

// import Link from "next/link";

// import HomeIcon from "@mui/icons-material/Home";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";
// import BarChartIcon from "@mui/icons-material/BarChartOutlined";

// const menuItems = [
//   { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
//   { name: "Hero Section", href: "/", icon: HomeIcon },
//   { name: "Projects", href: "/users", icon: PeopleIcon },
//   { name: "About Us", href: "/analytics", icon: BarChartIcon },
//   { name: "Contact Info", href: "/analytics", icon: BarChartIcon },
//   { name: "Settings", href: "/settings", icon: SettingsIcon },
// ];

// export default function AppSidebar() {
//   return (
//     <aside className="w-64 h-screen bg-[#d1a15f] opacity-80 text-white p-4 flex flex-col">
//       <nav className="flex flex-col gap-2">
//         {menuItems.map((item) => {
//           const Icon = item.icon;

//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-600 transition"
//             >
//               <Icon />
//               <span>{item.name}</span>
//             </Link>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }