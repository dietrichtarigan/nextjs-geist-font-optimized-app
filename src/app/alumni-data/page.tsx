"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import { Bar, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

// Mock data - Replace with actual API data later
const alumniData = {
  careerFields: {
    "Research & Academia": 35,
    "Industry & Technology": 25,
    "Data Science": 20,
    "Finance": 10,
    "Other": 10,
  },
  educationLevels: {
    "PhD": 30,
    "Masters": 45,
    "Bachelors": 25,
  },
  yearlyPlacements: {
    "2020": 50,
    "2021": 65,
    "2022": 80,
    "2023": 95,
  },
  locations: {
    "North America": 40,
    "Europe": 25,
    "Asia": 20,
    "Australia": 10,
    "Other": 5,
  },
}

const years = ["All", "2020", "2021", "2022", "2023"]
const careerTypes = ["All", "Research & Academia", "Industry & Technology", "Data Science", "Finance", "Other"]

export default function AlumniDataPage() {
  const [selectedYear, setSelectedYear] = useState("All")
  const [selectedCareerType, setSelectedCareerType] = useState("All")

  // Chart configurations
  const careerFieldsConfig = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom" as const,
        },
        title: {
          display: true,
          text: "Career Fields Distribution",
        },
      },
    },
    data: {
      labels: Object.keys(alumniData.careerFields),
      datasets: [
        {
          data: Object.values(alumniData.careerFields),
          backgroundColor: [
            "rgba(54, 162, 235, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(201, 203, 207, 0.8)",
          ],
        },
      ],
    },
  }

  const yearlyPlacementsConfig = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom" as const,
        },
        title: {
          display: true,
          text: "Yearly Placements",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    data: {
      labels: Object.keys(alumniData.yearlyPlacements),
      datasets: [
        {
          label: "Number of Placements",
          data: Object.values(alumniData.yearlyPlacements),
          backgroundColor: "rgba(75, 192, 192, 0.8)",
        },
      ],
    },
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Alumni Data Analytics</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore career paths and success stories of HIMAFI alumni
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCareerType} onValueChange={setSelectedCareerType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select career type" />
                </SelectTrigger>
                <SelectContent>
                  {careerTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedYear("All")
                  setSelectedCareerType("All")
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Alumni</CardTitle>
                <CardDescription>Graduated since 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">290+</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Employment Rate</CardTitle>
                <CardDescription>Within 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">92%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Salary</CardTitle>
                <CardDescription>First job after graduation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">$65K</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Presence</CardTitle>
                <CardDescription>Countries with alumni</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">25+</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Career Distribution</CardTitle>
                <CardDescription>
                  Distribution of alumni across different career fields
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <Pie {...careerFieldsConfig} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Yearly Placements</CardTitle>
                <CardDescription>
                  Number of alumni placed each year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <Bar {...yearlyPlacementsConfig} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Statistics */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Education Levels</CardTitle>
                <CardDescription>
                  Highest degree obtained by alumni
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(alumniData.educationLevels).map(([level, percentage]) => (
                    <div key={level}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{level}</span>
                        <span className="text-sm text-gray-500">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>
                  Where our alumni are making an impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(alumniData.locations).map(([location, percentage]) => (
                    <div key={location}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{location}</span>
                        <span className="text-sm text-gray-500">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
