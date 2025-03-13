import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { User, Award, TrendingUp, Clock, Calendar, BarChart3, BookOpen } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">User Profile</h1>
          <p className="text-muted-foreground">View and manage your profile information</p>
        </div>
        <Button>Edit Profile</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-primary" />
              </div>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Member since January 2023</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p>john.doe@example.com</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                <p>New York, NY</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Investment Style</h3>
                <p>Moderate</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Risk Tolerance</h3>
                <p>Medium</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Account Settings
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Investment Profile</CardTitle>
            <CardDescription>Your investment preferences and goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Risk Profile</h3>
                <div className="flex items-center justify-between mb-1">
                  <span>Conservative</span>
                  <span>Aggressive</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">
                  Your risk profile is <span className="font-medium">Moderate</span>, balancing growth potential with
                  risk management.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Investment Goals</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Retirement", progress: 25, target: "Age 65", current: "On track" },
                    { name: "Home Purchase", progress: 40, target: "$60,000", current: "$24,000" },
                    { name: "Emergency Fund", progress: 75, target: "$15,000", current: "$11,250" },
                    { name: "Education", progress: 10, target: "$50,000", current: "$5,000" },
                  ].map((goal, i) => (
                    <div key={i} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{goal.name}</h4>
                        <span className="text-sm">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-1.5 mb-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Target: {goal.target}</span>
                        <span>Current: {goal.current}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Investment Preferences</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { name: "Stocks", value: "60%" },
                    { name: "Bonds", value: "30%" },
                    { name: "Cash", value: "5%" },
                    { name: "Alternatives", value: "5%" },
                    { name: "Time Horizon", value: "Long-term" },
                    { name: "Focus", value: "Growth" },
                    { name: "Tax Strategy", value: "Tax-efficient" },
                    { name: "Rebalancing", value: "Quarterly" },
                  ].map((pref, i) => (
                    <div key={i} className="p-2 border rounded-lg">
                      <p className="text-xs text-muted-foreground">{pref.name}</p>
                      <p className="font-medium">{pref.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activity">
        <TabsList className="mb-4">
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="learning">Learning Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <TrendingUp className="h-5 w-5 text-green-500" />,
                    title: "Purchased 5 shares of AAPL",
                    description: "Transaction completed successfully",
                    time: "2 hours ago",
                  },
                  {
                    icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
                    title: "Updated portfolio allocation",
                    description: "Adjusted stock/bond ratio to 60/40",
                    time: "Yesterday",
                  },
                  {
                    icon: <BookOpen className="h-5 w-5 text-purple-500" />,
                    title: "Completed lesson: 'Types of Investment Assets'",
                    description: "Investment Basics module",
                    time: "3 days ago",
                  },
                  {
                    icon: <Calendar className="h-5 w-5 text-amber-500" />,
                    title: "Created new financial goal",
                    description: "Home Purchase - $60,000 by 2025",
                    time: "1 week ago",
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-red-500" />,
                    title: "Set up recurring investment",
                    description: "$500 monthly deposit to retirement account",
                    time: "2 weeks ago",
                  },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="mt-0.5">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Milestones and badges you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: <Award className="h-8 w-8 text-amber-500" />,
                    title: "First Investment",
                    description: "Made your first investment",
                    date: "Jan 15, 2023",
                    unlocked: true,
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-green-500" />,
                    title: "Portfolio Builder",
                    description: "Created a diversified portfolio",
                    date: "Feb 3, 2023",
                    unlocked: true,
                  },
                  {
                    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                    title: "Knowledge Seeker",
                    description: "Completed 5 learning modules",
                    date: "Mar 22, 2023",
                    unlocked: true,
                  },
                  {
                    icon: <Calendar className="h-8 w-8 text-purple-500" />,
                    title: "Goal Setter",
                    description: "Created 3 financial goals",
                    date: "Apr 10, 2023",
                    unlocked: true,
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-gray-400" />,
                    title: "Consistent Investor",
                    description: "Invest regularly for 6 months",
                    date: "Locked",
                    unlocked: false,
                  },
                  {
                    icon: <BarChart3 className="h-8 w-8 text-gray-400" />,
                    title: "Market Master",
                    description: "Beat market returns for 1 year",
                    date: "Locked",
                    unlocked: false,
                  },
                  {
                    icon: <Award className="h-8 w-8 text-gray-400" />,
                    title: "Financial Freedom",
                    description: "Reach your retirement goal",
                    date: "Locked",
                    unlocked: false,
                  },
                  {
                    icon: <Award className="h-8 w-8 text-gray-400" />,
                    title: "Diversification Expert",
                    description: "Invest across 5+ asset classes",
                    date: "Locked",
                    unlocked: false,
                  },
                ].map((achievement, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center p-4 border rounded-lg text-center ${
                      !achievement.unlocked ? "opacity-50" : ""
                    }`}
                  >
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      {achievement.icon}
                    </div>
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                    <p className="text-xs">{achievement.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>Track your financial education journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-medium">Overall Progress</h3>
                    <p className="text-sm text-muted-foreground">12.5% of all learning modules completed</p>
                  </div>
                  <div className="w-full md:w-1/3">
                    <Progress value={12.5} className="h-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Investment Basics",
                      progress: 50,
                      completed: "2/4 lessons",
                      lastActivity: "3 days ago",
                    },
                    {
                      title: "Stock Market Fundamentals",
                      progress: 0,
                      completed: "0/4 lessons",
                      lastActivity: "Not started",
                    },
                    {
                      title: "Mutual Funds & ETFs",
                      progress: 0,
                      completed: "0/4 lessons",
                      lastActivity: "Not started",
                    },
                    {
                      title: "Retirement Planning",
                      progress: 0,
                      completed: "0/4 lessons",
                      lastActivity: "Not started",
                    },
                  ].map((module, i) => (
                    <div key={i} className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h4 className="font-medium">{module.title}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{module.progress}%</span>
                          <span className="text-xs text-muted-foreground">{module.completed}</span>
                        </div>
                      </div>
                      <Progress value={module.progress} className="h-1.5 mb-2" />
                      <p className="text-xs text-muted-foreground">Last activity: {module.lastActivity}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-medium mb-3">Completed Lessons</h3>
                  <div className="space-y-2">
                    {[
                      {
                        title: "What is Investing?",
                        module: "Investment Basics",
                        completedDate: "Jan 20, 2023",
                      },
                      {
                        title: "Types of Investment Assets",
                        module: "Investment Basics",
                        completedDate: "Mar 22, 2023",
                      },
                    ].map((lesson, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                        <div>
                          <p className="font-medium">{lesson.title}</p>
                          <p className="text-sm text-muted-foreground">{lesson.module}</p>
                        </div>
                        <p className="text-sm">Completed: {lesson.completedDate}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue Learning</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

