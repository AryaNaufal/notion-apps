// const menu = ["Search", "Notion AI", "Home", "Inbox"];

// export default function SideBar() {
//   return (
//     <div className="h-screen bg-[#202020] w-[40%] md:w-[25%] lg:w-[15%] text-[#999]">
//       <div className="flex flex-col h-full py-3">
//         <div className="hover:bg-[rgba(255,255,255,0.1)] hover:text-white cursor-pointer mx-3 px-2 py-1 rounded-md hover:font-semibold">
//           Username
//         </div>
//         <div>
//           {menu.map((item) => (
//             <div
//               key={item}
//               className="hover:bg-[rgba(255,255,255,0.1)] hover:text-white cursor-pointer mx-3 px-2 py-1 rounded-md hover:font-semibold"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//         <div className="hover:bg-[rgba(255,255,255,0.1)] hover:text-white cursor-pointer mx-3 px-2 py-1 rounded-md hover:font-semibold">
//           Task Bar
//         </div>
//       </div>
//     </div>
//   );
// }

import { ChevronDown, Home, Inbox, Plus, Search } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Menu items.
const items = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
];

export async function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Username
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Private</SidebarGroupLabel>
          <SidebarGroupAction title="Add Project">
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
