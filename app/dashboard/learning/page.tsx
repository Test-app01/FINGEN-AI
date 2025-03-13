import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, CheckCircle, Play, Award, Star, Search } from "lucide-react"

const modules = [
  {
    id: 1,
    title: "Investment Basics",
    description: "Learn the fundamentals of investing and financial markets",
    lessons: [
      { id: "l1", title: "What is Investing?", duration: "10 min", completed: true },
      { id: "l2", title: "Types of Investment Assets", duration: "15 min", completed: true },
      { id: "l3", title: "Risk and Return", duration: "12 min", completed: false },
      { id: "l4", title: "Building a Portfolio", duration: "18 min", completed: false },
    ],
    progress: 50,
  },
  {
    id: 2,
    title: "Stock Market Fundamentals",
    description: "Understand how the stock market works and how to analyze stocks",
    lessons: [
      { id: "l5", title: "How Stock Markets Work", duration: "15 min", completed: false },
      { id: "l6", title: "Reading Stock Charts", duration: "20 min", completed: false },
      { id: "l7", title: "Fundamental Analysis", duration: "25 min", completed: false },
      { id: "l8", title: "Technical Analysis", duration: "22 min", completed: false },
    ],
    progress: 0,
  },
  {
    id: 3,
    title: "Mutual Funds & ETFs",
    description: "Discover the benefits of diversified investment vehicles",
    lessons: [
      { id: "l9", title: "What are Mutual Funds?", duration: "12 min", completed: false },
      { id: "l10", title: "ETFs Explained", duration: "15 min", completed: false },
      { id: "l11", title: "Choosing the Right Fund", duration: "18 min", completed: false },
      { id: "l12", title: "Fund Fees and Expenses", duration: "14 min", completed: false },
    ],
    progress: 0,
  },
  {
    id: 4,
    title: "Retirement Planning",
    description: "Plan for a secure financial future with retirement strategies",
    lessons: [
      { id: "l13", title: "Retirement Account Types", duration: "15 min", completed: false },
      { id: "l14", title: "Calculating Retirement Needs", duration: "20 min", completed: false },
      { id: "l15", title: "Social Security Benefits", duration: "16 min", completed: false },
      { id: "l16", title: "Withdrawal Strategies", duration: "18 min", completed: false },
    ],
    progress: 0,
  },
]

export default function LearningPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Learning Center</h1>
          <p className="text-muted-foreground">Personalized financial education tailored to your goals</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for topics..."
            className="pl-9 pr-4 py-2 border rounded-md w-full md:w-64"
          />
        </div>
      </div>

      {/* Learning Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Journey</CardTitle>
          <CardDescription>Track your progress through our financial education modules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-accent/50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-1">12.5%</div>
              <p className="text-sm text-muted-foreground text-center">Overall Completion</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-accent/50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-1">2</div>
              <p className="text-sm text-muted-foreground text-center">Lessons Completed</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-accent/50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-1">14</div>
              <p className="text-sm text-muted-foreground text-center">Lessons Remaining</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-accent/50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-1">3</div>
              <p className="text-sm text-muted-foreground text-center">Learning Streak (Days)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Next Lesson */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
        <CardHeader>
          <CardTitle>Recommended Next Lesson</CardTitle>
          <CardDescription>Continue where you left off</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 aspect-video bg-blue-100 rounded-lg flex items-center justify-center">
              <Play className="h-12 w-12 text-blue-500" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold mb-2">Risk and Return</h3>
              <p className="text-muted-foreground mb-4">
                Learn about the relationship between risk and return, and how to balance them in your investment
                portfolio.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">12 minutes</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Investment Basics</span>
                </div>
              </div>
              <Button>Continue Learning</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Modules */}
      <Tabs defaultValue="modules">
        <TabsList className="mb-4">
          <TabsTrigger value="modules">Learning Modules</TabsTrigger>
          <TabsTrigger value="completed">Completed Lessons</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
        </TabsList>

        <TabsContent value="modules">
          <div className="grid gap-6">
            {modules.map((module) => (
              <Card key={module.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{module.title}</CardTitle>
                      <CardDescription className="mt-1">{module.description}</CardDescription>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {module.progress}% Complete
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={module.progress} className="h-2 mb-4" />

                  <div className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className={`flex items-center justify-between p-3 rounded-lg border ${
                          lesson.completed ? "bg-green-50 border-green-100" : "hover:bg-accent/50"
                        }`}
                      >
                        <div className="flex items-center">
                          {lesson.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          ) : (
                            <Play className="h-5 w-5 text-blue-500 mr-3" />
                          )}
                          <span className={lesson.completed ? "text-green-800" : ""}>{lesson.title}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          <Button variant="ghost" size="sm">
                            {lesson.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Lessons</CardTitle>
              <CardDescription>Review lessons you've already completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {modules.flatMap((module) =>
                  module.lessons
                    .filter((lesson) => lesson.completed)
                    .map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-3 rounded-lg border bg-green-50 border-green-100"
                      >
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <div>
                            <p className="font-medium text-green-800">{lesson.title}</p>
                            <p className="text-sm text-muted-foreground">{module.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          <Button variant="outline" size="sm">
                            Review
                          </Button>
                        </div>
                      </div>
                    )),
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookmarked">
          <Card>
            <CardHeader>
              <CardTitle>Bookmarked Lessons</CardTitle>
              <CardDescription>Lessons you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-3" />
                    <div>
                      <p className="font-medium">Technical Analysis</p>
                      <p className="text-sm text-muted-foreground">Stock Market Fundamentals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">22 min</span>
                    <Button variant="ghost" size="sm">
                      Start
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-amber-500 mr-3" />
                    <div>
                      <p className="font-medium">Calculating Retirement Needs</p>
                      <p className="text-sm text-muted-foreground">Retirement Planning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">20 min</span>
                    <Button variant="ghost" size="sm">
                      Start
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Learning Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Your Achievements</CardTitle>
          <CardDescription>Track your learning milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-blue-500" />
              </div>
              <h4 className="font-medium text-center">First Lesson</h4>
              <p className="text-xs text-muted-foreground text-center">Completed your first lesson</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="font-medium text-center">Module Master</h4>
              <p className="text-xs text-muted-foreground text-center">Complete an entire module</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg opacity-50">
              <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <Clock className="h-8 w-8 text-gray-400" />
              </div>
              <h4 className="font-medium text-center">Consistent Learner</h4>
              <p className="text-xs text-muted-foreground text-center">Learn for 7 days in a row</p>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg opacity-50">
              <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <BookOpen className="h-8 w-8 text-gray-400" />
              </div>
              <h4 className="font-medium text-center">Knowledge Seeker</h4>
              <p className="text-xs text-muted-foreground text-center">Complete 10 lessons</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Learning Assistant */}
      <Card className="bg-blue-50 border-blue-100">
        <CardHeader>
          <CardTitle>AI Learning Assistant</CardTitle>
          <CardDescription>Have questions about any financial topic? Ask our AI assistant</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Ask anything about investing..."
              className="flex-grow px-4 py-2 border rounded-md"
            />
            <Button>Ask AI</Button>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>Example questions:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>What's the difference between stocks and bonds?</li>
              <li>How do I calculate compound interest?</li>
              <li>Explain dollar-cost averaging</li>
              <li>What is a good expense ratio for an ETF?</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

