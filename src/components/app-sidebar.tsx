
import Header from "@/app/_components/shared/header/page"
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
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function AppSidebar() {
  const sidebarList = [
    { id: 1, name: "Overview", url: "/user/admin" },
    { id: 2, name: "Clients & Investors", url: "/user/admin/customers" },
    { id: 3, name: "Account Manager", url: "/user/admin/account-manager" },
    { id: 4, name: "Profile", url: "/user/admin/profile" }
  ]

  return (
    <Sidebar className="z-10">
      <SidebarHeader className="mt-3">
        <Header />
      </SidebarHeader>
      <SidebarContent className="mt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2">Account Navigations</SidebarGroupLabel>
          <SidebarGroupContent>
            {sidebarList.map((link) => {
              return (
                <SidebarMenuItem key={link.id}>
                  <SidebarMenuButton className="font-semibold">
                    <Link href={link.url} className="w-full">{link.name}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
          <div className="absolute inset-0 z-30 aspect-video" />
          <CardHeader className="pt-3">
            <CardAction>
              <Badge variant="secondary">Featured</Badge>
            </CardAction>
            <CardTitle>FIVS Pvt. Ltd.</CardTitle>
            <CardDescription>
              <p>&copy; S.S.Chatterjee, 2026</p>
              <p>All Rights Reserved.</p>
            </CardDescription>
          </CardHeader>
        </Card>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}