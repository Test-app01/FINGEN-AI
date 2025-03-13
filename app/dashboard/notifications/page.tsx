"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, AlertTriangle, CheckCircle, Info, TrendingUp, Calendar, Clock, DollarSign } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with important alerts and information</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Mark All as Read</Button>
          <Button>
            <Bell className="mr-2 h-4 w-4" />
            Manage Preferences
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>View all your recent notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                    title: "Market Volatility Alert",
                    description: "Unusual market volatility detected in your watchlist stocks.",
                    time: "10 minutes ago",
                    type: "alert",
                    read: false,
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5 text-green-500" />,
                    title: "Portfolio Update",
                    description: "Your portfolio has increased by 2.3% today.",
                    time: "2 hours ago",
                    type: "update",
                    read: false,
                  },
                  {
                    icon: <Calendar className="h-5 w-5 text-blue-500" />,
                    title: "Goal Milestone",
                    description: "You've reached 50% of your Emergency Fund goal!",
                    time: "Yesterday",
                    type: "update",
                    read: false,
                  },
                  {
                    icon: <Info className="h-5 w-5 text-purple-500" />,
                    title: "New Learning Content",
                    description: "New lesson added: 'Understanding ETF Expense Ratios'",
                    time: "2 days ago",
                    type: "update",
                    read: true,
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                    title: "Transaction Completed",
                    description: "Your purchase of 3.5 shares of VTI was successful.",
                    time: "3 days ago",
                    type: "update",
                    read: true,
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-amber-500" />,
                    title: "Upcoming Bill Payment",
                    description: "Your credit card payment is due in 3 days.",
                    time: "4 days ago",
                    type: "alert",
                    read: true,
                  },
                  {
                    icon: <DollarSign className="h-5 w-5 text-blue-500" />,
                    title: "Dividend Payment",
                    description: "You received a $32.50 dividend payment from MSFT.",
                    time: "1 week ago",
                    type: "update",
                    read: true,
                  },
                ].map((notification, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-lg border ${
                      !notification.read ? "bg-accent/50 border-primary/20" : ""
                    }`}
                  >
                    <div className="mt-0.5">{notification.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{notification.title}</p>
                        {!notification.read && <span className="h-2 w-2 rounded-full bg-primary"></span>}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      {notification.read ? "Mark Unread" : "Mark Read"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Load More
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="unread">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>Notifications you haven't read yet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                    title: "Market Volatility Alert",
                    description: "Unusual market volatility detected in your watchlist stocks.",
                    time: "10 minutes ago",
                    type: "alert",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5 text-green-500" />,
                    title: "Portfolio Update",
                    description: "Your portfolio has increased by 2.3% today.",
                    time: "2 hours ago",
                    type: "update",
                  },
                  {
                    icon: <Calendar className="h-5 w-5 text-blue-500" />,
                    title: "Goal Milestone",
                    description: "You've reached 50% of your Emergency Fund goal!",
                    time: "Yesterday",
                    type: "update",
                  },
                ].map((notification, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg border bg-accent/50 border-primary/20">
                    <div className="mt-0.5">{notification.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{notification.title}</p>
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Mark Read
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>Important notifications that require attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <AlertTriangle className="h-5 w-5 text-amber-500" />,
                    title: "Market Volatility Alert",
                    description: "Unusual market volatility detected in your watchlist stocks.",
                    time: "10 minutes ago",
                    read: false,
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-amber-500" />,
                    title: "Upcoming Bill Payment",
                    description: "Your credit card payment is due in 3 days.",
                    time: "4 days ago",
                    read: true,
                  },
                  {
                    icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
                    title: "Security Alert",
                    description: "New login detected from an unrecognized device.",
                    time: "2 weeks ago",
                    read: true,
                  },
                ].map((notification, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-lg border ${
                      !notification.read ? "bg-accent/50 border-primary/20" : ""
                    }`}
                  >
                    <div className="mt-0.5">{notification.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{notification.title}</p>
                        {!notification.read && <span className="h-2 w-2 rounded-full bg-primary"></span>}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      {notification.read ? "Mark Unread" : "Mark Read"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="updates">
          <Card>
            <CardHeader>
              <CardTitle>Updates</CardTitle>
              <CardDescription>General updates and information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <TrendingUp className="h-5 w-5 text-green-500" />,
                    title: "Portfolio Update",
                    description: "Your portfolio has increased by 2.3% today.",
                    time: "2 hours ago",
                    read: false,
                  },
                  {
                    icon: <Calendar className="h-5 w-5 text-blue-500" />,
                    title: "Goal Milestone",
                    description: "You've reached 50% of your Emergency Fund goal!",
                    time: "Yesterday",
                    read: false,
                  },
                  {
                    icon: <Info className="h-5 w-5 text-purple-500" />,
                    title: "New Learning Content",
                    description: "New lesson added: 'Understanding ETF Expense Ratios'",
                    time: "2 days ago",
                    read: true,
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                    title: "Transaction Completed",
                    description: "Your purchase of 3.5 shares of VTI was successful.",
                    time: "3 days ago",
                    read: true,
                  },
                  {
                    icon: <DollarSign className="h-5 w-5 text-blue-500" />,
                    title: "Dividend Payment",
                    description: "You received a $32.50 dividend payment from MSFT.",
                    time: "1 week ago",
                    read: true,
                  },
                ].map((notification, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-lg border ${
                      !notification.read ? "bg-accent/50 border-primary/20" : ""
                    }`}
                  >
                    <div className="mt-0.5">{notification.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{notification.title}</p>
                        {!notification.read && <span className="h-2 w-2 rounded-full bg-primary"></span>}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      {notification.read ? "Mark Unread" : "Mark Read"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Email Notifications</h3>
              <div className="space-y-3">
                {[
                  { title: "Portfolio Updates", description: "Daily summary of portfolio performance" },
                  { title: "Market Alerts", description: "Significant market movements and news" },
                  { title: "Security Alerts", description: "Login attempts and security notifications" },
                  { title: "Goal Progress", description: "Updates on your financial goals" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex h-6 items-center">
                      <input
                        id={`email-${i}`}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked={i < 3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Push Notifications</h3>
              <div className="space-y-3">
                {[
                  { title: "Portfolio Updates", description: "Daily summary of portfolio performance" },
                  { title: "Market Alerts", description: "Significant market movements and news" },
                  { title: "Security Alerts", description: "Login attempts and security notifications" },
                  { title: "Goal Progress", description: "Updates on your financial goals" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex h-6 items-center">
                      <input
                        id={`push-${i}`}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked={i !== 3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

