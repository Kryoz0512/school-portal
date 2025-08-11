import { NotepadText, Sheet, School, Users } from "lucide-react";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const navTeacher = [
 {
  name: "Manage Students",
  path: "/teacher_dashboard/manage_students",
  link: "manage_students",
  icon: Users,
 },
 {
  name: "Sections",
  path: "/teacher_dashboard/sections",
  link: "sections",
  icon: School,
 },

 {
  name: "Schedule",
  path: "/teacher_dashboard/schedule",
  link: "schedule",
  icon: Sheet,
 },
];

export function NavTeacher() {
 const location = useLocation();

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">
    <SidebarMenu className="gap-3">
     {navTeacher.map((item) => {
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
