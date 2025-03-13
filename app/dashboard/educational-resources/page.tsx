"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { BookOpen, Video, FileText, Calendar, Clock, Search, Filter, Star, Bookmark, Play } from "lucide-react"

export default function EducationalResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Educational Resources</h1>
          <p className="text-muted-foreground">Expand your financial knowledge with our curated resources</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-9 w-full md:w-64" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Introduction to Investing",
                description: "Learn the basics of investing, including key terms and concepts.",
                type: "Article",
                icon: <FileText className="h-5 w-5" />,
                duration: "10 min read",
                category: "Beginner",
                bookmarked: true
              },
              {
                title: "Understanding Stock Markets",
                description: "A comprehensive guide to how stock markets function.",
                type: "Video",
                icon: <Video className="h-5 w-5" />,
                duration: "15 min watch",
                category: "Beginner",
                bookmarked: false
              },
              {
                title: "Fundamental Analysis Explained",
                description: "Deep dive into analyzing company financials and market trends.",
                type: "Course",
                icon: <BookOpen className="h-5 w-5" />,
                duration: "2 hours",
                category: "Intermediate",
                bookmarked: true
              },
              {
                title: "Risk Management Strategies",
                description: "Learn how to protect your investments and manage risk effectively.",
                type: "Article",
                icon: <FileText className="h-5 w-5" />,
                duration: "12 min read",
                category: "Intermediate",
                bookmarked: false
              },
              {
                title: "Technical Analysis for Beginners",
                description: "Introduction to chart patterns and technical indicators.",
                type: "Video",
                icon: <Video className="h-5 w-5" />,
                duration: "20 min watch",
                category: "Beginner",
                bookmarked: false
              },
              {
                title: "Retirement Planning Essentials",
                description: "Key strategies for planning a secure retirement.",
                type: "Course",
                icon: <BookOpen className="h-5 w-5" />,
                duration: "3 hours",
                category: "All Levels",
                bookmarked: false
              },
            ].map((resource, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40 bg-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {resource.type === "Video" ? (
                      <Play className="h-12 w-12 text-primary/50" />
                    ) : (
                      resource.icon && <div className="h-12 w-12 flex items-center justify-center">{resource.icon}</div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80">
                      {resource.bookmarked ? (
                        <Bookmark className="h-4 w-4 fill-current" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        resource.type === "Article" 
                          ? "bg-blue-100 text-blue-800" 
                          : resource.type === "Video"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                      }`}>
                        {resource.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{resource.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{resource.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">(42)</span>
                  </div>
                  <Button size="sm">
                    {resource.type === "Course" ? "Enroll" : "View"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Introduction to Investing",
                description: "Learn the basics of investing, including key terms and concepts.",
                type: "Article",
                icon: <FileText className="h-5 w-5" />,
                duration: "10 min read",
                category: "Beginner",
                bookmarked: true
              },
              {
                title: "Risk Management Strategies",
                description: "Learn how to protect your investments and manage risk effectively.",
                type: "Article",
                icon: <FileText className="h-5 w-5" />,
                duration: "12 min read",
                category: "Intermediate",
                bookmarked: false
              },
              {
                title: "Understanding ETFs vs. Mutual Funds",
                description: "A comparison of two popular investment vehicles.",
                type: "Article",
                icon: <FileText className="h-5 w-5" />,
                duration: "8 min read",
                category: "Beginner",
                bookmarked: false
              },
            ].map((resource, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40 bg-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {resource.icon && <div className="h-12 w-12 flex items-center justify-center">{resource.icon}</div>}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80">
                      {resource.bookmarked ? (
                        <Bookmark className="h-4 w-4 fill-current" />
                      ) : (
                        <Bookmark className="h-4 w-4" />  
                      ) } (
                        <Bookmark className="h-4 w-4" />
                      )
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {resource.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{resource.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{resource.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">(42)</span>
                  </div>
                  <Button size="sm">View</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Stock Markets",
                description: "A comprehensive guide to how stock markets function.",
                type: "Video",
                icon: <Video className="h-5 w-5" />,
                duration: "15 min watch",
                category: "Beginner",
                bookmarked: false
              },
              {
                title: "Technical Analysis for Beginners",
                description: "Introduction to chart patterns and technical indicators.",
                type: "Video",
                icon: <Video className="h-5 w-5" />,
                duration: "20 min watch",
                category: "Beginner",
                bookmarked: false
              },
              {
                title: "Investing in Cryptocurrencies",
                description: "Learn about blockchain technology and cryptocurrency investments.",
                type: "Video",
                icon: <Video className="h-5 w-5" />,
                duration: "25 min watch",
                category: "Intermediate",
                bookmarked: false
              },
            ].map((resource, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40 bg-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary/50" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80">
                      {resource.bookmarked ? (
                        <Bookmark className="h-4 w-4 fill-current" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        {resource.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{resource.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{resource.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">(42)</span>
                  </div>
                  <Button size="sm">Watch</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fundamental Analysis Explained",
                description: "Deep dive into analyzing company financials and market trends.",
                type: "Course",
                icon: <BookOpen className="h-5 w-5" />,
                duration: "2 hours",
                category: "Intermediate",
                bookmarked: true
              },
              {
                title: "Retirement Planning Essentials",
                description: "Key strategies for planning a secure retirement.",
                type: "Course",
                icon: <BookOpen className="h-5 w-5" />,
                duration: "3 hours",
                category: "All Levels",
                bookmarked: false
              },
              {
                title: "Advanced Portfolio Management",
                description: "Learn professional portfolio management techniques.",
                type: "Course",
                icon: <BookOpen className="h-5 w-5" />,
                duration: "4 hours",
                category: "Advanced",
                bookmarked: false
              },
            ].map((resource, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40 bg-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {resource.icon && <div className="h-12 w-12 flex items-center justify-center">{resource.icon}</div>}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80">
                      {resource.bookmarked ? (
                        <Bookmark className="h-4 w-4 fill-current" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {resource.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{resource.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{resource.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">(42)</span>
                  </div>
                  <Button size="sm">Enroll</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bookmarked">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Introduction to Investing",
                description: "Learn the basics of investing, including key terms and concepts.",
                type: "Article",
                icon: <FileText className="h-5 w-5" />,
                duration: "10 min read",
                category: "Beginner",
                bookmarked: true
              },
              {
                title: "Fundamental Analysis Explained",
                description: "Deep dive into analyzing company financials and market trends.",
                type: "Course",
                icon: <BookOpen className="h-5 w-5" />,
                duration: "2 hours",
                category: "Intermediate",
                bookmarked: true
              },
            ].map((resource, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-40 bg-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {resource.type === "Video" ? (
                      <Play className="h-12 w-12 text-primary/50" />
                    ) : (
                      resource.icon && <div className="h-12 w-12 flex items-center justify-center">{resource.icon}</div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background/80">
                      <Bookmark className="h-4 w-4 fill-current" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        resource.type === "Article" 
                          ? "bg-blue-100 text-blue-800" 
                          : resource.type === "Video"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                      }`}>
                        {resource.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{resource.category}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{resource.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg mt-2">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">(42)</span>
                  </div>
                  <Button size="sm">
                    {resource.type === "Course" ? "Enroll" : "View"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Webinars</CardTitle>
          <CardDescription>Live educational sessions with financial experts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Market Outlook 2023: Navigating Uncertainty",
                presenter: "Sarah Johnson, CFA",
                date: "August 25, 2023",
                time: "2:00 PM EST",
                description: "Join our chief market strategist for insights on market trends and investment opportunities for the remainder of 2023."
              },
              {
                title: "Tax-Efficient Investing Strategies",
                presenter: "Michael Chen, CPA",
                date: "September 5, 2023",
                time: "1:00 PM EST",
                description: "Learn how to minimize tax impact on your investments and maximize after-tax returns."
              },
              {
                title: "ESG Investing: Performance and Impact",
                presenter: "Dr. Lisa Rodriguez",
                date: "September 12, 2023",
                time: "3:00 PM EST",
                description: "Explore the performance of ESG investments and their impact on corporate behavior and sustainability."
              },
            ].map((webinar, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg">
                <div className="md:w-1/4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{webinar.time}</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-bold text-lg mb-1">{webinar.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">Presenter: {webinar.presenter}</p>
                  <p className="text-sm mb-4">{webinar.description}</p>
                  <div className="flex justify-end">
                    <Button>Register</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

