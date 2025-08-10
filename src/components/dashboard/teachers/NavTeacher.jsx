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
  icon: Users
 },
 {
  name: "Sections",
  path: "/teacher_dashboard/sections",
  link: "sections",
  icon: School
 },

 {
  name: "Schedule",
  path: "/teacher_dashboard/schedule",
  link: "schedule",
  icon: Sheet
 }
]

export function NavTeacher() {
 const location = useLocation();

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">
    <SidebarMenu className="gap-3">
     {navTeacher.map((nt) => {
      const isActive = location.pathname === nt.path;
      return (
       <Link to={nt.link} key={nt.link}>
        <SidebarMenuItem key={nt.name}>
         <SidebarMenuButton isActive={isActive} tooltip={nt.name}>
          {nt.icon && <nt.icon />}
          <span>{nt.name}</span>
         </SidebarMenuButton>
        </SidebarMenuItem>
       </Link>
      );
     })}
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup >
 );
}
