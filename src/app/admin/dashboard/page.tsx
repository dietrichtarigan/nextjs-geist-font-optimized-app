"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Users,
  FileText,
  Calendar,
  Plus,
  Edit,
  Trash2,
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Settings,
  LogOut,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock data
const stats = [
  {
    title: "Total Users",
    value: "2,345",
    change: "+12%",
    icon: Users,
  },
  {
    title: "Active Opportunities",
    value: "45",
    change: "+5%",
    icon: BarChart,
  },
  {
    title: "Published Articles",
    value: "128",
    change: "+18%",
    icon: FileText,
  },
  {
    title: "Upcoming Events",
    value: "12",
    change: "+2%",
    icon: Calendar,
  },
]

const recentOpportunities = [
  {
    id: 1,
    title: "Research Internship at CERN",
    type: "Internship",
    deadline: "2024-03-15",
    status: "Active",
  },
  {
    id: 2,
    title: "Physics Innovation Competition",
    type: "Competition",
    deadline: "2024-04-01",
    status: "Active",
  },
  {
    id: 3,
    title: "Quantum Computing Scholarship",
    type: "Scholarship",
    deadline: "2024-05-30",
    status: "Draft",
  },
]

const recentArticles = [
  {
    id: 1,
    title: "Career Paths in Quantum Computing",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    status: "Published",
  },
  {
    id: 2,
    title: "From Physics to Data Science",
    author: "Michael Roberts",
    date: "2024-01-12",
    status: "Published",
  },
  {
    id: 3,
    title: "Success Story: Physics Alumni in Tech",
    author: "Emma Thompson",
    date: "2024-01-10",
    status: "Draft",
  },
]

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const { toast } = useToast()

  const handleDelete = (id: number, type: string) => {
    toast({
      title: "Item deleted",
      description: `${type} has been deleted successfully.`,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="p-6">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Button
                variant={activeSection === "dashboard" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("dashboard")}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button
                variant={activeSection === "opportunities" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("opportunities")}
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Opportunities
              </Button>
            </li>
            <li>
              <Button
                variant={activeSection === "articles" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("articles")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Articles
              </Button>
            </li>
            <li>
              <Button
                variant={activeSection === "settings" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection("settings")}
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Dashboard Overview</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-gray-500">
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Recent Opportunities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recent Opportunities</CardTitle>
              <CardDescription>
                Latest opportunities and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3">Deadline</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOpportunities.map((opportunity) => (
                      <tr key={opportunity.id} className="border-b">
                        <td className="px-6 py-4 font-medium">
                          {opportunity.title}
                        </td>
                        <td className="px-6 py-4">{opportunity.type}</td>
                        <td className="px-6 py-4">{opportunity.deadline}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              opportunity.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {opportunity.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                handleDelete(opportunity.id, "Opportunity")
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recent Articles */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Articles</CardTitle>
              <CardDescription>
                Latest articles and their publication status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-50">
                    <tr>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Author</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentArticles.map((article) => (
                      <tr key={article.id} className="border-b">
                        <td className="px-6 py-4 font-medium">
                          {article.title}
                        </td>
                        <td className="px-6 py-4">{article.author}</td>
                        <td className="px-6 py-4">{article.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              article.status === "Published"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {article.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(article.id, "Article")}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
