'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { RefreshCcw, Plus, Search } from 'lucide-react';
import { useState } from "react"

interface Repository {
    name: string
    isPublic: boolean
    language: string
    size: number
    updatedAt: string
    collaborators?: string[]
    labels?: string[]
}

const repositories: Repository[] = [
    {
        name: "design-system",
        isPublic: true,
        language: "React",
        size: 7320,
        updatedAt: "1 day ago"
    },
    {
        name: "codeant-ci-app",
        isPublic: false,
        language: "Javascript",
        size: 5871,
        updatedAt: "2 days ago",
        labels: ["Anonymous"]
    },
    {
        name: "analytics-dashboard",
        isPublic: false,
        language: "Python",
        size: 4521,
        updatedAt: "5 days ago",
        labels: ["sahil"]
    },
    {
        name: "mobile-app",
        isPublic: true,
        language: "Swift",
        size: 3096,
        updatedAt: "3 days ago"
    },
    {
        name: "e-commerce-platform",
        isPublic: false,
        language: "Java",
        size: 6210,
        updatedAt: "6 days ago"
    },
    {
        name: "blog-website",
        isPublic: true,
        language: "HTML/CSS",
        size: 1876,
        updatedAt: "4 days ago"
    },
    {
        name: "social-network",
        isPublic: false,
        language: "PHP",
        size: 5432,
        updatedAt: "7 days ago"
    }
]

const languageColors: Record<string, string> = {
    React: "bg-blue-400",
    Javascript: "bg-yellow-400",
    Python: "bg-green-500",
    Swift: "bg-orange-500",
    Java: "bg-red-500",
    "HTML/CSS": "bg-purple-500",
    PHP: "bg-indigo-500"
}

export default function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredRepositories = repositories.filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-xl font-semibold mb-1">Repositories</h1>
                    <p className="text-sm text-gray-500">{repositories.length} total repositories</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <RefreshCcw className="w-4 h-4 mr-2" />
                        Refresh All
                    </Button>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Repository
                    </Button>
                </div>
            </div>

            <div className="relative mb-6">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                    placeholder="Search Repositories"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>

            <div className="space-y-2">
                {
                    filteredRepositories.map((repo) => (
                        <div
                            key={repo.name}
                            className="flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-medium">{repo.name}</span>
                                        <Badge variant={repo.isPublic ? "secondary" : "outline"} className="text-xs">
                                            {repo.isPublic ? "Public" : "Private"}
                                        </Badge>
                                        {
                                            repo.labels?.map((label) => (
                                                <Badge
                                                    key={label}
                                                    variant="secondary"
                                                    className={`text-xs ${label === "Anonymous" ? "bg-pink-100 text-pink-700" : "bg-yellow-100 text-yellow-700"
                                                        }`}
                                                >
                                                    {label}
                                                </Badge>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center gap-6 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-3 h-3 rounded-full ${languageColors[repo.language]}`} />
                                            {repo.language}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>{repo.size} KB</span>
                                        </div>
                                        <div>Updated {repo.updatedAt}</div>
                                    </div>
                                </div>
                            </div>
                            {
                                repo.collaborators && (
                                    <div className="flex -space-x-2">
                                        {
                                            repo.collaborators.map((collaborator, index) => (
                                                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                                                    <img src={`/placeholder.svg?height=32&width=32`} alt={collaborator} />
                                                </Avatar>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

