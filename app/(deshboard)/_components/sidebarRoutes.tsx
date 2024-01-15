"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const guestRoute = [
  {
    icon: Layout,
    label: "Deshboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },

];
export const SidebarRoutes = () => {
  const route = guestRoute;
  return (
    <div className="flex flex-col w-full">
      {route.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
