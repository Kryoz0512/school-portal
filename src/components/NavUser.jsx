import { CircleUserIcon, EllipsisVerticalIcon, PowerIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 useSidebar,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/User";

export function NavUser() {
 const { isMobile } = useSidebar();
 const navigate = useNavigate();
 const { user: username, setUser, setRole } = useUser();

 const gotoLogin = () => {
  setUser("");
  setRole("");
  return navigate("/login");
 };

 return (
  <SidebarMenu>
   <SidebarMenuItem>
    <DropdownMenu>
     <DropdownMenuTrigger asChild>
      <SidebarMenuButton
       size="lg"
       className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
      >
       <Avatar className="h-8 w-8 rounded-lg grayscale">
        <AvatarImage src={""} alt={username} />
        <AvatarFallback className="rounded-lg">{username[0]}</AvatarFallback>
       </Avatar>
       <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{username}</span>
        <span className="text-muted-foreground truncate text-xs">
         {username.split(" ").join("").toLowerCase() + "@gmail.com"}
        </span>
       </div>
       <EllipsisVerticalIcon className="ml-auto size-4" />
      </SidebarMenuButton>
     </DropdownMenuTrigger>
     <DropdownMenuContent
      className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align="end"
      sideOffset={4}
     >
      <DropdownMenuLabel className="p-0 font-normal">
       <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <Avatar className="h-8 w-8 rounded-lg">
         <AvatarImage src={""} alt={username} />
         <AvatarFallback className="rounded-lg">{username[0]}</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
         <span className="truncate font-medium">{username}</span>
         <span className="text-muted-foreground truncate text-xs">
          {username.split(" ").join("").toLowerCase() + "@gmail.com"}
         </span>
        </div>
       </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
       <DropdownMenuItem>
        <CircleUserIcon />
        Account
       </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={gotoLogin}>
       <PowerIcon />
       Log out
      </DropdownMenuItem>
     </DropdownMenuContent>
    </DropdownMenu>
   </SidebarMenuItem>
  </SidebarMenu>
 );
}
