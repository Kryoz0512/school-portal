import { Sheet, ContactRound, Users, BookOpenText, School } from "lucide-react";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

export function NavAdmin() {
 const location = useLocation();
 const isActive = location.pathname;

 return (
  <SidebarGroup>
   <SidebarGroupContent className="flex flex-col gap-2">
    <SidebarMenu className="gap-3">
     {/* Enrollment */}
     <SidebarMenuItem>
      <Link to={"enrollment"}>
       <SidebarMenuButton
        isActive={isActive === "/admin_dashboard/enrollment"}
        className="cursor-pointer"
        tooltip={"Enrollment"}
       >
        <BookOpenText />
        <span>Enrollment</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

     {/* Manage Students */}
     <SidebarMenuItem>
      <Link to={"students"}>
       <SidebarMenuButton
        isActive={isActive === "/admin_dashboard/students"}
        className="cursor-pointer"
        tooltip={"Manage Students"}
       >
        <Users />
        <span>Manage Students</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

     {/* Manage Teachers */}
     <SidebarMenuItem>
      <Link to={"teachers"}>
       <SidebarMenuButton
        className="cursor-pointer"
        tooltip={"Manage Teachers"}
        isActive={isActive === "/admin_dashboard/teachers"}
       >
        <ContactRound />
        <span>Manage Teachers </span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

     {/* Manage Section */}
     <SidebarMenuItem>
      <Link to={"sections"}>
       <SidebarMenuButton
        className="cursor-pointer"
        tooltip={"Manage Section"}
        isActive={isActive === "/admin_dashboard/sections"}
       >
        <School />
        <span>Manage Sections</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>

     {/* Manage Schedule */}
     <SidebarMenuItem>
      <Link to={"schedule"}>
       <SidebarMenuButton
        className="cursor-pointer"
        tooltip={"Manage Schedule"}
        isActive={isActive === "/admin_dashboard/schedule"}
       >
        <Sheet />
        <span>Manage Schedule</span>
       </SidebarMenuButton>
      </Link>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 );
}
