import { Sheet, ContactRound, Users, BookOpenText, School, BookMarked } from "lucide-react";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const navAdmin = [
 {
  name: "Enrollment",
  path: "/admin_dashboard/enrollment",
  link: "enrollment",
  icon: BookOpenText,
 },
 {
  name: "Manage Students",
  path: "/admin_dashboard/students",
  link: "students",
  icon: Users,
 },
 {
  name: "Manage Teachers",
  path: "/admin_dashboard/teachers",
  link: "teachers",
  icon: ContactRound,
 },
 {
  name: "Manage Section",
  path: "/admin_dashboard/sections",
  link: "sections",
  icon: School,
 },
 {
  name: "Manage Schedule",
  path: "/admin_dashboard/schedule",
  link: "schedule",
  icon: Sheet,
 },
 {
  name: "Archive",
  path: "/admin_dashboard/archive",
  link: "archive",
  icon: BookMarked ,
 },
];

export function NavAdmin() {
 const location = useLocation();
 const isActive = location.pathname;

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">
    <SidebarMenu className="gap-3">
     {navAdmin.map((item) => {
      const isActive = location.pathname === item.path;
      return (
       <Link to={item.link} key={item.link}>
        <SidebarMenuItem key={item.name}>
         <SidebarMenuButton
          className="cursor-pointer"
          isActive={isActive}
          tooltip={item.name}
         >
          {item.icon && <item.icon />}
          <span>{item.name}</span>
         </SidebarMenuButton>
        </SidebarMenuItem>
       </Link>
      );
     })}
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 );
}
