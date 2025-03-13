"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Calendar, DollarSign, Target, TrendingUp, Clock } from "lucide-react"

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    target: 15000,
    current: 8750,
    deadline: "2023-12-31",
    category: "Savings",
    priority: "High",
    progress: 58,
  },
  {
    id: 2,
    name: "Down Payment for House",
    target: 60000,
    current: 23500,
    deadline: "2025-06-30",
    category: "Housing",
    priority: "Medium",
    progress: 39,
  },
  {
    id: 3,
    name: "Retirement Savings",
    target: 1000000,
    current: 125000,
    deadline: "2050-01-01",
    category: "Retirement",
    priority: "Medium",
    progress: 12.5,
  },
  {
    id: 4,
    name: "Vacation Fund",
    target: 5000,
    current: 3200,
    deadline: "2023-08-15",
    category: "Leisure",
    priority: "Low",
    progress: 64,
  },
]

export default function FinancialGoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Financial Goals</h1>
          <p className="text-muted-foreground">Track and manage your financial objectives</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Goal
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="mb-4">
          <TabsTrigger value="active">Active Goals</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid gap-6">
            {goals.map((goal) => (
              <Card key={goal.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{goal.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {goal.category} • Priority: {goal.priority}
                      </CardDescription>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {goal.progress}% Complete
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={goal.progress} className="h-2" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Target Amount</p>
                          <p className="font-medium">${goal.target.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Current Amount</p>
                          <p className="font-medium">${goal.current.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm text-muted-foreground">Target Date</p>
                          <p className="font-medium">{new Date(goal.deadline).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>
                      {Math.round((new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}{" "}
                      days remaining
                    </span>
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button size="sm">Add Funds</Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Goals</CardTitle>
              <CardDescription>Goals you've successfully achieved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "New Laptop",
                    target: 2000,
                    completedDate: "2023-01-15",
                    category: "Electronics",
                  },
                  {
                    name: "Pay Off Credit Card",
                    target: 4500,
                    completedDate: "2022-11-30",
                    category: "Debt Repayment",
                  },
                ].map((goal, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{goal.name}</p>
                      <p className="text-sm text-muted-foreground">{goal.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${goal.target.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">
                        Completed: {new Date(goal.completedDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Financial Goals</CardTitle>
              <CardDescription>Overview of all your financial objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-accent">
                    <tr>
                      <th scope="col" className="px-4 py-3 rounded-l-lg">
                        Goal Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Target
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Current
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Deadline
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Progress
                      </th>
                      <th scope="col" className="px-4 py-3 rounded-r-lg">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ...goals,
                      {
                        id: 5,
                        name: "New Laptop",
                        target: 2000,
                        current: 2000,
                        deadline: "2023-01-15",
                        category: "Electronics",
                        priority: "Medium",
                        progress: 100,
                      },
                      {
                        id: 6,
                        name: "Pay Off Credit Card",
                        target: 4500,
                        current: 4500,
                        deadline: "2022-11-30",
                        category: "Debt Repayment",
                        priority: "High",
                        progress: 100,
                      },
                    ].map((goal, i) => (
                      <tr key={i} className="border-b">
                        <td className="px-4 py-3 font-medium">{goal.name}</td>
                        <td className="px-4 py-3">{goal.category}</td>
                        <td className="px-4 py-3">${goal.target.toLocaleString()}</td>
                        <td className="px-4 py-3">${goal.current.toLocaleString()}</td>
                        <td className="px-4 py-3">{new Date(goal.deadline).toLocaleDateString()}</td>
                        <td className="px-4 py-3">
                          <div className="w-full bg-accent rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${goal.progress}%` }}></div>
                          </div>
                          <span className="text-xs">{goal.progress}%</span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              goal.progress === 100 ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {goal.progress === 100 ? "Completed" : "In Progress"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Create New Financial Goal</CardTitle>
          <CardDescription>Set up a new financial objective to track</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="goal-name">Goal Name</Label>
                <Input id="goal-name" placeholder="e.g., New Car Fund" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-category">Category</Label>
                <select className="w-full p-2 border rounded-md" id="goal-category">
                  <option>Savings</option>
                  <option>Housing</option>
                  <option>Retirement</option>
                  <option>Education</option>
                  <option>Leisure</option>
                  <option>Debt Repayment</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="target-amount">Target Amount ($)</Label>
                <Input id="target-amount" type="number" placeholder="10000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="current-amount">Current Amount ($)</Label>
                <Input id="current-amount" type="number" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Target Date</Label>
                <Input id="deadline" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <input type="radio" id="priority-high" name="priority" className="mr-2" />
                  <Label htmlFor="priority-high">High</Label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="priority-medium" name="priority" className="mr-2" checked />
                  <Label htmlFor="priority-medium">Medium</Label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="priority-low" name="priority" className="mr-2" />
                  <Label htmlFor="priority-low">Low</Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <textarea
                id="notes"
                className="w-full p-2 border rounded-md min-h-[100px]"
                placeholder="Add any additional details about this financial goal..."
              ></textarea>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Create Goal</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Goal Insights</CardTitle>
          <CardDescription>AI-powered recommendations for your financial goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Savings Rate Analysis</h4>
                  <p className="text-sm text-blue-700">
                    At your current savings rate, you'll reach your "Down Payment for House" goal 3 months later than
                    planned. Consider increasing monthly contributions by $250 to stay on track.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Goal Prioritization</h4>
                  <p className="text-sm text-green-700">
                    Your emergency fund should be your top priority. Once you've saved 3-6 months of expenses, you can
                    accelerate contributions to your other goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800">Investment Opportunity</h4>
                  <p className="text-sm text-amber-700">
                    For your long-term goals like retirement, consider investing in a diversified portfolio rather than
                    a savings account to potentially earn higher returns over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

