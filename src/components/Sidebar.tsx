'use client'

import { useLocation, Link } from 'react-router-dom'
import { LayoutGrid, Shield, HelpCircle, Settings, HeadphonesIcon, LogOut } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export const navigation = [
    { name: 'Repositories', href: '/', icon: LayoutGrid },
    { name: 'AI Code Review', href: '/code-review', icon: Shield },
    { name: 'Cloud Security', href: '/security', icon: Shield },
    { name: 'How to Use', href: '/help', icon: HelpCircle },
    { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="h-screen hidden md:flex w-64 flex-col border-r bg-white">
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6" />
                    <span className="font-semibold">CodeAnt AI</span>
                </div>
                <div className="relative mt-2">
                    <select className="w-full appearance-none rounded-md border bg-transparent py-1 pl-3 pr-8 text-sm">
                        <option>UtkarshDhairyaPa...</option>
                    </select>
                </div>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
                {
                    navigation.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
                                    pathname === item.href
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50'
                                )}
                            >
                                <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                {item.name}
                            </Link>
                        )
                    })
                }
            </nav>
            <div className="flex flex-col gap-4 p-4 border-t">
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>K</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                </div>
                <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                        <HeadphonesIcon className="mr-3 h-4 w-4" />
                        Support
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                        <LogOut className="mr-3 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    )
}

