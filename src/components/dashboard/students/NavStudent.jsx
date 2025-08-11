import { NotepadText, StickyNote, CalendarCheck, Notebook } from "lucide-react";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const navStudent = [
 {
  name: "Clearance",
  path: "/student_dashboard/clearance",
  link: "clearance",
  icon: NotepadText,
 },
 {
  name: "Report Card",
  path: "/student_dashboard/report_card",
  link: "report_card",
  icon: StickyNote,
 },
 {
  name: "Schedule",
  path: "/student_dashboard/schedule",
  link: "schedule",
  icon: CalendarCheck,
 },
 {
  name: "Subject",
  path: "/student_dashboard/subject",
  link: "subject",
  icon: Notebook,
 },
];

export function NavStudent() {
 const location = useLocation();
 const isActive = location.pathname;

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">
    <SidebarMenu className="gap-3">
     {navStudent.map((item) => {
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
