import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../sidebar/ui/sidebar"
import Link from "next/link"
import { checkRole } from "@/app/utils/roles"
import { adminItems, pupilItems, teacherItems } from "@/app/data"
import { SignOutButton } from "@clerk/nextjs"
import { LogOut } from "lucide-react"

export async function AppSidebar() {
    const isAdmin = await checkRole('admin')
    const isTeacher = await checkRole('teacher')
    const isPupil = await checkRole('pupil')

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground text-xl mb-10">
            {isAdmin && "Área Admin"}
            {isTeacher && "Área professor"}
            {isPupil && "Área aluno"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isAdmin && (
                <>
                    {adminItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-2">
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </>
              )}
              {isTeacher && (
                <>
                    {teacherItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-2">
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </>
              )}
              {isPupil && (
                <>
                    {pupilItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-2">
                            <SidebarMenuButton asChild tooltip={item.title}>
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </>
              )}
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="cursor-pointer mt-10" tooltip="Sair">
                  <SignOutButton>
                    <button>
                      <LogOut />
                      <span>Sair</span>
                    </button>
                  </SignOutButton>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
