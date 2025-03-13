"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
  LayoutDashboard,
  PieChart,
  LineChart,
  GraduationCap,
  Target,
  Calculator,
  BookOpen,
  MessageSquare,
  Settings,
  User,
  Bell,
  LogOut,
} from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Portfolio",
    href: "/dashboard/portfolio",
    icon: PieChart,
  },
  {
    title: "Market Analysis",
    href: "/dashboard/market-analysis",
    icon: LineChart,
  },
  {
    title: "Risk Assessment",
    href: "/dashboard/risk-assessment",
    icon: Calculator,
  },
  {
    title: "Financial Goals",
    href: "/dashboard/financial-goals",
    icon: Target,
  },
  {
    title: "Educational Resources",
    href: "/dashboard/educational-resources",
    icon: GraduationCap,
  },
  {
    title: "Learning Center",
    href: "/dashboard/learning",
    icon: BookOpen,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/ai-assistant",
    icon: MessageSquare,
  },
]

const bottomNavItems = [
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-card flex flex-col h-screen">
      {/* Logo */}
      <div className="h-16 border-b flex items-center px-6">
        <Link
          href="/dashboard"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          FinAI
        </Link>
      </div>

      {/* Search - Moved from header */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full pl-9 bg-background" />
        </div>
      </div>

      {/* Main Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2", pathname === item.href && "bg-accent")}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>

      {/* Bottom Navigation */}
      <div className="border-t p-3">
        <div className="space-y-1">
          {bottomNavItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2", pathname === item.href && "bg-accent")}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Button>
            </Link>
          ))}
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}

