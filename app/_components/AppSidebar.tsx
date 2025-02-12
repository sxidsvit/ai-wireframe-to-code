import React from 'react'
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
} from '@/components/ui/sidebar'
import {
  Calendar,
  CircleDollarSign,
  Home,
  Inbox,
  Paintbrush,
  Search,
  Settings,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  {
    title: 'Workspace',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'Design',
    url: '/designs',
    icon: Paintbrush,
  },
  {
    title: 'Credits',
    url: '/credits',
    icon: CircleDollarSign,
  },
]

export function AppSidebar() {
  const path = usePathname()
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4">
          <Link href={'/'}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                src={'/logo.svg'}
                alt="logo"
                width={800}
                height={80}
                className="w-[40px] h-[40px]"
              />
              <h2 className="font-bold text-md">Wireframe To Code</h2>
            </div>
          </Link>
          <h2 className="text-sm text-gray-400 text-center">Build Awesome</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {items.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg
                                 ${path == item.url && 'bg-gray-200'}
                                 `}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <h2 className="p-2 text-gray-400 text-sm">Copyright @Tubeguruji</h2>
      </SidebarFooter>
    </Sidebar>
  )
}
