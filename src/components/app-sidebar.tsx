import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

export default function AppSidebar() {
  return (
    <Sidebar className="z-10">
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Account Navigations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                 HOME
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        {/* Main content */}
      </SidebarContent>
      <SidebarFooter>
        {/* Footer content */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}