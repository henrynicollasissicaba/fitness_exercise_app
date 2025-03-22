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
    <Sidebar>
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
                <div>
                    {adminItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-2">
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </div>
              )}
              {isTeacher && (
                <div>
                    {teacherItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-2">
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </div>
              )}
              {isPupil && (
                <div>
                    {pupilItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-2">
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </div>
              )}
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="cursor-pointer mt-10">
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
