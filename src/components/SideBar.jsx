import { Link } from "react-router-dom";
import { NavAdmin } from "./dashboard/admin/NavAdmin";
import { AdminUser } from "./dashboard/admin/AdminUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import santorLogo from "../assets/santorlogo.png";

const data = {
 user: {
  name: "Czianel",
  email: "Mimician@gmail.com",
  avatar: "/avatars/shadcn.jpg",
  role: "admin",
 },
};

export function SideBar({ ...props }) {
 return (
  <Sidebar collapsible="offcanvas" {...props}>
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem>
      <SidebarMenuButton
       asChild
       className="data-[slot=sidebar-menu-button]:!p-1.5"
      >
       <Link to={"#"}>
        <Avatar>
         <AvatarImage src={santorLogo} />
         <AvatarFallback>SNHS</AvatarFallback>
        </Avatar>
        <span>SNHS</span>
       </Link>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>
   <SidebarContent>
    <NavAdmin />
   </SidebarContent>
   <SidebarFooter>
    <AdminUser user={data.user} />
   </SidebarFooter>
  </Sidebar>
 );
}
