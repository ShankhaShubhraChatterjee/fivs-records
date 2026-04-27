import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <SidebarProvider>
        <AppSidebar />
        <main className="mt-10">
          <SidebarTrigger variant="default" className="text-white relative top-18 size-10 left-1 bg-indigo-700 hover:bg-indigo-800" />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
