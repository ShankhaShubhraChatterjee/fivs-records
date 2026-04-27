import FooterCard from "@/app/_components/footer_card/page"
import Header from "@/app/_components/header/page"
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
      <SidebarHeader className="mt-3">
        <Header />
      </SidebarHeader>
      <SidebarContent className="mt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2">Account Navigations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="font-bold">
                  <Link href="/user/admin/clients">Clients & Investors</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="font-bold">
                  Overview
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* Footer content */}
        <FooterCard />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}