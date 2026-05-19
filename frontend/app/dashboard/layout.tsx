import AppSidebar from "@/components/dashboard/AppSidebar";
import DashboardNavbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#030824]">
      <DashboardNavbar />
      <div className="flex">
      <AppSidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
    </div>
  );
}