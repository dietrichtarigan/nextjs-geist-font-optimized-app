"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
import { Clock, Search, Tag } from "lucide-react"
import Navbar from "@/components/Navbar"

// Mock data - Replace with actual API data later
const articles = [
  {
    id: 1,
    title: "Career Paths in Quantum Computing",
    excerpt: "Explore the growing field of quantum computing and the opportunities it presents for physics graduates. Learn about the required skills, job prospects, and leading companies.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    category: "Career Paths",
    readTime: "5 min read",
    date: "2024-01-15",
    author: "Dr. Sarah Chen",
    featured: true,
  },
  {
    id: 2,
    title: "From Physics to Data Science",
    excerpt: "How physics graduates can leverage their analytical skills in the data science industry. A comprehensive guide to transitioning into data science.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    category: "Career Paths",
    readTime: "4 min read",
    date: "2024-01-12",
    author: "Michael Roberts",
    featured: true,
  },
  {
    id: 3,
    title: "Success Story: Physics Alumni in Tech",
    excerpt: "Meet our alumni who are making waves in the technology sector with their physics background. Learn about their journey and insights.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    category: "Success Stories",
    readTime: "6 min read",
    date: "2024-01-10",
    author: "Emma Thompson",
    featured: true,
  },
  {
    id: 4,
    title: "Mastering Technical Interviews",
    excerpt: "Essential tips and strategies for physics graduates preparing for technical interviews in various industries.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    category: "Career Tips",
    readTime: "8 min read",
    date: "2024-01-08",
    author: "James Wilson",
    featured: false,
  },
  {
    id: 5,
    title: "Research Careers in Renewable Energy",
    excerpt: "Discover how physics expertise is crucial in advancing renewable energy technologies and fighting climate change.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    category: "Career Paths",
    readTime: "7 min read",
    date: "2024-01-05",
    author: "Dr. Maria Garcia",
    featured: false,
  },
]

const categories = ["All", "Career Paths", "Success Stories", "Career Tips", "Industry Insights"]

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter articles
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Career Articles</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, guides, and success stories to help you navigate your career in physics
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="hover-card-shadow">
                    <div className="relative h-48 w-full image-zoom">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{article.category}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{article.author}</span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Link href={`/articles/${article.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          Read Article
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Regular Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Card key={article.id} className="hover-card-shadow">
                  <div className="relative h-48 w-full image-zoom">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{article.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{article.author}</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href={`/articles/${article.id}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* No results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No articles found matching your criteria</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
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
