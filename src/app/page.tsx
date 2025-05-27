import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import OpportunitiesCarousel from "@/components/OpportunitiesCarousel"
import CareerArticlesSection from "@/components/CareerArticlesSection"
import { GraduationCap, Users, Briefcase, Award } from "lucide-react"

const stats = [
  { name: "Active Students", value: "500+", icon: GraduationCap },
  { name: "Alumni Network", value: "2,000+", icon: Users },
  { name: "Partner Companies", value: "50+", icon: Briefcase },
  { name: "Success Stories", value: "100+", icon: Award },
]

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0" style={{ position: 'absolute' }}>
          <div className="relative w-full h-full" style={{ position: 'relative' }}>
            <Image
              src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
              alt="Physics laboratory"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Shape Your Future in Physics
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200">
            Discover opportunities, explore career paths, and connect with industry leaders
            through HIMAFI Career Center
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/opportunities">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/articles">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.name} className="p-6">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <OpportunitiesCarousel />

      {/* Articles Section */}
      <CareerArticlesSection />

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join HIMAFI Career Center and unlock a world of opportunities in physics and beyond.
            Connect with mentors, discover your path, and build your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/alumni-data">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Alumni Data
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About HIMAFI</h3>
              <p className="text-gray-600">
                Physics Student Association dedicated to supporting students in their academic and professional journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/opportunities" className="text-gray-600 hover:text-gray-900">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-gray-600 hover:text-gray-900">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/alumni-data" className="text-gray-600 hover:text-gray-900">
                    Alumni Data
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/articles/career-guide" className="text-gray-600 hover:text-gray-900">
                    Career Guide
                  </Link>
                </li>
                <li>
                  <Link href="/articles/interview-tips" className="text-gray-600 hover:text-gray-900">
                    Interview Tips
                  </Link>
                </li>
                <li>
                  <Link href="/articles/cv-writing" className="text-gray-600 hover:text-gray-900">
                    CV Writing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@himafi.org" className="text-gray-600 hover:text-gray-900">
                    contact@himafi.org
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900">
                    +123 456 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© {new Date().getFullYear()} HIMAFI Career Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
