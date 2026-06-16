import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/auth";
import { AdminNav } from "@/components/admin/AdminNav";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await verifyAdminSession();
  if (!authed) {
    redirect("/admin/login");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-tan-100">
      <AdminNav />
      <main className="flex-1 overflow-auto min-w-0 p-4 sm:p-6 md:p-8">{children}</main>
    </div>
  );
}
