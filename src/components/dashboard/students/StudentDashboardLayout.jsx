import { SiteHeader } from "./SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../SideBar";

export default function StudentDashboardLayout() {
 return (
  <SidebarProvider
   style={{
    "--sidebar-width": "calc(var(--spacing) * 72)",
    "--header-height": "calc(var(--spacing) * 12)",
   }}
  >
   <SideBar variant="inset" />
   <SidebarInset>
    <SiteHeader />
    <Outlet />
   </SidebarInset>
  </SidebarProvider>
 );
}
