import { Sheet, ContactRound, Users, BookOpenText, School } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, useLocation } from "react-router-dom";



export function NavMain() {

  const location = useLocation()
  const isActive = location.pathname

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="gap-4">
          {/* Enrollment */}
          <SidebarMenuItem>
            <Link to={"enrollment"}>
              <SidebarMenuButton
                isActive={isActive === "/dashboard/enrollment" && true} className="cursor-pointer"
                tooltip={"Enrollment"}>
                <BookOpenText />
                <span className="text-lg">Enrollment</span>
              </SidebarMenuButton>

            </Link>
          </SidebarMenuItem>

          {/* Manage Students */}
          <SidebarMenuItem>
            <Link to={"students"}>
              <SidebarMenuButton
                isActive={isActive === "/dashboard/students"}
                className="cursor-pointer" tooltip={"Manage Students"}>
                <Users />
                <span className="text-lg">Manage Students</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          {/* Manage Teachers */}
          <SidebarMenuItem>
            <Link to={"teachers"}>
              <SidebarMenuButton className="cursor-pointer" tooltip={"Manage Teachers"} isActive={isActive === "/dashboard/teachers"}>
                <ContactRound />
                <span className="text-lg">Manage Teachers </span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          {/* Manage Section */}
          <SidebarMenuItem>
            <Link to={"sections"}>
              <SidebarMenuButton className="cursor-pointer" tooltip={"Manage Section"} isActive={isActive === "/dashboard/sections"}>
                <School />
                <span className="text-lg">Manage Sections</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          {/* Manage Schedule */}
          <SidebarMenuItem>
            <Link to={"schedule"} >
              <SidebarMenuButton className="cursor-pointer" tooltip={"Manage Schedule"} isActive={isActive === "/dashboard/schedule"}>
                <Sheet />
                <span className="text-lg">Manage Schedule</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup >
  );
}
