import { Link, Navigate } from "react-router-dom";
import { NavAdmin } from "./dashboard/admin/NavAdmin";
import { NavStudent } from "./dashboard/students/NavStudent";
import { NavTeacher } from "./dashboard/teachers/NavTeacher";
import { NavUser } from "./NavUser";
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
import { useUser } from "../context/User";


export function SideBar({ ...props }) {
 const { role } = useUser()
 return (
  <Sidebar collapsible="offcanvas"{...props}>
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem >
      <SidebarMenuButton
       asChild
       className="data-[slot=sidebar-menu-button]:!p-1.5 pointer-events-none h-20 gap-3"
      >
       <Link to={"#"}>
        <Avatar>
         <AvatarImage src={santorLogo} />
         <AvatarFallback>SNHS</AvatarFallback>
        </Avatar>
        <span className="text-2xl">SNHS</span>
       </Link>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>
   <SidebarContent>
    {
     role === "admin" ? <NavAdmin /> : role === "student" ? <NavStudent /> : role === "teacher" ? <NavTeacher /> : <Navigate to="/login" />
    }
   </SidebarContent>
   <SidebarFooter>
    <NavUser />
   </SidebarFooter>
  </Sidebar>
 );
}
