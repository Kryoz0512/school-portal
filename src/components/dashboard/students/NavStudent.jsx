import { NotepadText, StickyNote, CalendarCheck, Notebook  } from "lucide-react";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

export function NavStudent() {
 const location = useLocation();
 const isActive = location.pathname;

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">
    <SidebarMenu className="gap-3">
     {/* Clearance */}
     <SidebarMenuItem>
      <Link to={"clearance"}>
       <SidebarMenuButton
        isActive={isActive === "/student_dashboard/clearance"}
        className="cursor-pointer"
        tooltip={"Clearance"}
       >
        <NotepadText />
        <span>Clearance</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

     {/* Report Card */}
     <SidebarMenuItem>
      <Link to={"report_card"}>
       <SidebarMenuButton
        isActive={isActive === "/student_dashboard/report_card"}
        className="cursor-pointer"
        tooltip={"Card"}
       >
        <StickyNote/>
        <span>Card</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

     {/* Schedule */}
     <SidebarMenuItem>
      <Link to={"schedule"}>
       <SidebarMenuButton
        isActive={isActive === "/student_dashboard/schedule"}
        className="cursor-pointer"
        tooltip={"Schedule"}
       >
        <CalendarCheck />
        <span>Schedule</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

     {/* Subject */}
     <SidebarMenuItem>
      <Link to={"subject"}>
       <SidebarMenuButton
        isActive={isActive === "/student_dashboard/subject"}
        className="cursor-pointer"
        tooltip={"Subject"}
       >
        <Notebook />
        <span>Subject</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 );
}
