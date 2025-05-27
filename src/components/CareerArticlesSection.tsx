"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

// Mock data - Replace with actual API data later
const articles = [
  {
    id: 1,
    title: "Career Paths in Quantum Computing",
    excerpt: "Explore the growing field of quantum computing and the opportunities it presents for physics graduates.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    readTime: "5 min read",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "From Physics to Data Science",
    excerpt: "How physics graduates can leverage their analytical skills in the data science industry.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    readTime: "4 min read",
    date: "2024-01-12",
  },
  {
    id: 3,
    title: "Success Story: Physics Alumni in Tech",
    excerpt: "Meet our alumni who are making waves in the technology sector with their physics background.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    readTime: "6 min read",
    date: "2024-01-10",
  },
]

export default function CareerArticlesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Career Articles</h2>
          <p className="mt-4 text-lg text-gray-600">
            Insights, guides, and success stories to help you navigate your career in physics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48" style={{ position: 'relative', minHeight: '12rem' }}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="flex-grow pt-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Link href={`/articles/${article.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/articles">
            <Button size="lg" className="font-semibold">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
