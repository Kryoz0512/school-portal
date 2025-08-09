import { SiteHeader } from "./SiteHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { SideBar } from "../../SideBar";
import { useUser } from "../../../context/User";

export default function AdminDashboardLayout() {
 const { user } = useUser();
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
    {user ? <Outlet /> : <Navigate to="/login"/>}
   </SidebarInset>
  </SidebarProvider>
 );
}
