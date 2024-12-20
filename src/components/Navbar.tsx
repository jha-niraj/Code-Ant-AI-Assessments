import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navigation } from './Sidebar'
import { Link, useLocation } from "react-router-dom";
import { cn } from '@/lib/utils'

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="flex md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="md:hidden" size="icon">
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                        <SheetTitle className="flex items-center gap-2 text-left">
                            <span className="font-semibold">CodeAnt AI</span>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-4">
                        <div className="relative">
                            <select className="w-full appearance-none rounded-md border bg-transparent py-1 pl-3 pr-8 text-sm">
                                <option>UtkarshDhairyaPanwar</option>
                            </select>
                        </div>
                        <nav className="flex flex-col space-y-2">
                            {navigation.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={cn(
                                            'flex items-center rounded-md px-2 py-2 text-sm font-medium',
                                            pathname === item.href
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        )}
                                    >
                                        <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

