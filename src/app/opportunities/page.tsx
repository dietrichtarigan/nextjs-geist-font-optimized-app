"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Search, SlidersHorizontal } from "lucide-react"
import Navbar from "@/components/Navbar"
import Link from "next/link"

// Mock data - Replace with actual API data later
const opportunities = [
  {
    id: 1,
    title: "Research Internship at CERN",
    type: "Internship",
    deadline: "2024-03-15",
    description: "Join CERN's summer research program in particle physics. Work alongside leading scientists and contribute to groundbreaking research.",
    location: "Geneva, Switzerland",
    company: "CERN",
  },
  {
    id: 2,
    title: "Physics Innovation Competition",
    type: "Competition",
    deadline: "2024-04-01",
    description: "Present your innovative physics project and win prizes. Open to all undergraduate physics students.",
    location: "Online",
    company: "Physics Society",
  },
  {
    id: 3,
    title: "Quantum Computing Scholarship",
    type: "Scholarship",
    deadline: "2024-05-30",
    description: "Full scholarship for quantum computing specialization. Includes mentorship and industry connections.",
    location: "Multiple Locations",
    company: "Quantum Tech Institute",
  },
  {
    id: 4,
    title: "NASA Space Research Program",
    type: "Internship",
    deadline: "2024-03-20",
    description: "Research opportunity in space physics at NASA. Work on cutting-edge space exploration projects.",
    location: "Houston, TX",
    company: "NASA",
  },
  {
    id: 5,
    title: "Physics Teaching Fellowship",
    type: "Scholarship",
    deadline: "2024-04-15",
    description: "Fellowship program for physics graduates interested in education. Full funding for teaching certification.",
    location: "National",
    company: "Education Board",
  },
]

const types = ["All", "Internship", "Competition", "Scholarship"]
const sortOptions = ["Deadline (Nearest)", "Deadline (Furthest)", "Title (A-Z)", "Title (Z-A)"]

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [sortBy, setSortBy] = useState("Deadline (Nearest)")

  // Filter and sort opportunities
  const filteredOpportunities = opportunities
    .filter((opp) => {
      const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          opp.company.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = selectedType === "All" || opp.type === selectedType
      return matchesSearch && matchesType
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Deadline (Nearest)":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        case "Deadline (Furthest)":
          return new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
        case "Title (A-Z)":
          return a.title.localeCompare(b.title)
        case "Title (Z-A)":
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore Opportunities</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover internships, competitions, and scholarships tailored for physics students
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search opportunities..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="hover-card-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100">
                      {opportunity.type}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(opportunity.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{opportunity.description}</p>
                  <div className="text-sm text-gray-500">
                    <p className="mb-1">{opportunity.company}</p>
                    <p>{opportunity.location}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={`/opportunities/${opportunity.id}`} className="w-full">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No opportunities found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedType("All")
                  setSortBy("Deadline (Nearest)")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
