import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Lock, User, CreditCard, Shield, Globe, Moon, Sun } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </div>
      </div>

      <Tabs defaultValue="account">
        <TabsList className="mb-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full md:w-1/2 space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="w-full md:w-1/2 space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full md:w-1/2 space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="w-full md:w-1/2 space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1985-06-15" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main Street" />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full md:w-1/3 space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div className="w-full md:w-1/3 space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="NY" />
                </div>
                <div className="w-full md:w-1/3 space-y-2">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" defaultValue="10001" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Update your profile image</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2">
                  <Button variant="outline">Upload New Picture</Button>
                  <p className="text-sm text-muted-foreground">
                    Recommended: Square image, at least 300x300 pixels, less than 2MB.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Protect your account with an additional security layer
                    </p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Login Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive alerts when someone logs into your account</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Sessions</CardTitle>
              <CardDescription>Manage your active sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { device: "MacBook Pro", location: "New York, USA", lastActive: "Now", current: true },
                  { device: "iPhone 13", location: "New York, USA", lastActive: "2 hours ago", current: false },
                  { device: "Windows PC", location: "Boston, USA", lastActive: "Yesterday", current: false },
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">
                        {session.device}{" "}
                        {session.current && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Current</span>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {session.location} • {session.lastActive}
                      </p>
                    </div>
                    {!session.current && (
                      <Button variant="outline" size="sm">
                        Log Out
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-red-500">
                Log Out of All Devices
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { title: "Account Updates", description: "Important changes to your account" },
                      { title: "Security Alerts", description: "Suspicious activity and security notices" },
                      { title: "Portfolio Alerts", description: "Significant changes in your investments" },
                      { title: "Market Updates", description: "Daily or weekly market summaries" },
                      { title: "Educational Content", description: "New lessons and learning resources" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Switch defaultChecked={i < 3} />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Push Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { title: "Price Alerts", description: "When stocks hit your target prices" },
                      { title: "Portfolio Performance", description: "Daily portfolio performance updates" },
                      { title: "Goal Progress", description: "Updates on your financial goals" },
                      { title: "New Features", description: "Announcements about new platform features" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Switch defaultChecked={i < 2} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Disable All</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Display Settings</CardTitle>
              <CardDescription>Customize your dashboard experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4" />
                  <Switch />
                  <Moon className="h-4 w-4" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Language</p>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                </div>
                <select className="p-2 border rounded-md">
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese (Simplified)</option>
                </select>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Dashboard Layout</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 cursor-pointer bg-accent">
                    <div className="h-20 border-2 border-dashed rounded mb-2 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Default</span>
                    </div>
                    <p className="text-sm font-medium text-center">Standard</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer">
                    <div className="h-20 border-2 border-dashed rounded mb-2 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Compact</span>
                    </div>
                    <p className="text-sm font-medium text-center">Compact</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer">
                    <div className="h-20 border-2 border-dashed rounded mb-2 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Detailed</span>
                    </div>
                    <p className="text-sm font-medium text-center">Detailed</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Investment Preferences</CardTitle>
              <CardDescription>Customize your investment experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="risk-tolerance">Risk Tolerance</Label>
                <select id="risk-tolerance" className="w-full p-2 border rounded-md">
                  <option>Conservative</option>
                  <option selected>Moderate</option>
                  <option>Aggressive</option>
                </select>
                <p className="text-sm text-muted-foreground">
                  This affects your investment recommendations and portfolio suggestions
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment-focus">Investment Focus</Label>
                <select id="investment-focus" className="w-full p-2 border rounded-md">
                  <option>Growth</option>
                  <option>Income</option>
                  <option>Value</option>
                  <option selected>Balanced</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Excluded Sectors</Label>
                <div className="flex flex-wrap gap-2">
                  {["Tobacco", "Weapons", "Gambling", "Fossil Fuels"].map((sector, i) => (
                    <div key={i} className="flex items-center gap-1 bg-accent rounded-full px-3 py-1">
                      <span className="text-sm">{sector}</span>
                      <button className="text-muted-foreground">×</button>
                    </div>
                  ))}
                  <button className="text-sm text-primary">+ Add More</button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Update Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-accent/50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Premium Plan</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Your subscription renews on September 15, 2023</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium">$19.99/month</p>
                  <div>
                    <Button variant="outline" size="sm" className="mr-2">
                      Change Plan
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-500">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Plan Features</h3>
                <ul className="space-y-2">
                  {[
                    "Advanced portfolio analytics",
                    "Real-time market data",
                    "AI-powered investment recommendations",
                    "Unlimited financial goals",
                    "Priority customer support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 09/2025</p>
                    </div>
                  </div>
                  <div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium mr-2">
                      Default
                    </span>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: "Aug 15, 2023", amount: "$19.99", status: "Paid", invoice: "INV-2023-0815" },
                  { date: "Jul 15, 2023", amount: "$19.99", status: "Paid", invoice: "INV-2023-0715" },
                  { date: "Jun 15, 2023", amount: "$19.99", status: "Paid", invoice: "INV-2023-0615" },
                  { date: "May 15, 2023", amount: "$19.99", status: "Paid", invoice: "INV-2023-0515" },
                ].map((invoice, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">{invoice.date}</p>
                      <p className="text-sm text-muted-foreground">{invoice.invoice}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{invoice.amount}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                        {invoice.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

