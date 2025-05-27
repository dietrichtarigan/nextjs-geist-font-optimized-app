"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

// Mock data - Replace with actual API data later
const opportunities = [
  {
    id: 1,
    title: "Research Internship at CERN",
    type: "Internship",
    deadline: "2024-03-15",
    description: "Join CERN's summer research program in particle physics",
  },
  {
    id: 2,
    title: "Physics Innovation Competition",
    type: "Competition",
    deadline: "2024-04-01",
    description: "Present your innovative physics project and win prizes",
  },
  {
    id: 3,
    title: "Quantum Computing Scholarship",
    type: "Scholarship",
    deadline: "2024-05-30",
    description: "Full scholarship for quantum computing specialization",
  },
  {
    id: 4,
    title: "NASA Space Research Program",
    type: "Internship",
    deadline: "2024-03-20",
    description: "Research opportunity in space physics at NASA",
  },
]

export default function OpportunitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === opportunities.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === opportunities.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? opportunities.length - 1 : prevIndex - 1
    )
  }

  // Format date function
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Opportunities</h2>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="w-full flex-shrink-0 px-4"
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100">
                    {opportunity.type}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Deadline: {formatDate(opportunity.deadline)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/opportunities/${opportunity.id}`} className="w-full">
                    <Button className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {opportunities.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-gray-800 w-4' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
