"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Clock, LayoutDashboard, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/appointments", label: "Appointments", icon: Calendar },
  { href: "/admin/availability", label: "Availability", icon: Clock },
];

export function AdminNav() {
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden bg-olive-900 text-white border-b border-white/10">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-serif text-base font-bold truncate">JacqLaw Admin</p>
            <p className="text-[10px] text-white/50">Appointment Management</p>
          </div>
          <button
            onClick={handleLogout}
            className="shrink-0 flex items-center gap-1.5 px-3 py-2 text-xs text-white/70 hover:text-white rounded-lg hover:bg-white/10"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign Out
          </button>
        </div>
        <nav className="flex overflow-x-auto border-t border-white/10 px-2 py-2 gap-1 scrollbar-hide">
          {links.map((link) => {
            const active =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors",
                  active
                    ? "bg-olive-600 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <link.icon className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/50 hover:text-white whitespace-nowrap shrink-0"
          >
            ← Site
          </Link>
        </nav>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 bg-olive-900 text-white min-h-screen flex-col">
        <div className="p-6 border-b border-white/10">
          <p className="font-serif text-lg font-bold">JacqLaw Admin</p>
          <p className="text-xs text-white/50 mt-1">Appointment Management</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => {
            const active =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  active
                    ? "bg-olive-600 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            href="/"
            className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            ← Back to Site
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white/50 hover:text-white transition-colors w-full"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
