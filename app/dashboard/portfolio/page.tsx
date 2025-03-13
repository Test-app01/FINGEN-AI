import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { ArrowUpRight, RefreshCw } from "lucide-react"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const portfolioData = [
  { name: "Stocks", value: 60 },
  { name: "Bonds", value: 25 },
  { name: "Cash", value: 10 },
  { name: "Crypto", value: 5 },
]

const stocksData = [
  { name: "Technology", value: 40 },
  { name: "Healthcare", value: 20 },
  { name: "Financial", value: 15 },
  { name: "Consumer", value: 15 },
  { name: "Energy", value: 10 },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Portfolio Overview</h1>
          <p className="text-muted-foreground">Manage and track your investments</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Last updated: 10 mins ago
          </Button>
          <Button>Add Investment</Button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +20.1% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4%</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +2.3% from benchmark
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Moderate</div>
            <p className="text-xs text-muted-foreground">Based on asset allocation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Diversification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Good</div>
            <p className="text-xs text-muted-foreground">Across 12 sectors</p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Allocation */}
      <Tabs defaultValue="allocation">
        <TabsList className="mb-4">
          <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
          <TabsTrigger value="stocks">Stock Breakdown</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="allocation">
          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Your current investment mix</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={portfolioData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {portfolioData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Allocation Details</h3>
                  <div className="space-y-4">
                    {portfolioData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full mr-2"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          ></div>
                          <span>{item.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-medium">{item.value}%</span>
                          <span className="text-muted-foreground">${(item.value * 452.32).toFixed(2)}k</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Recommended Allocation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Based on your risk profile and goals, our AI recommends:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Stocks: 65%</div>
                      <div>Bonds: 20%</div>
                      <div>Cash: 10%</div>
                      <div>Crypto: 5%</div>
                    </div>
                    <Button className="mt-4" variant="outline" size="sm">
                      Rebalance Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stocks">
          <Card>
            <CardHeader>
              <CardTitle>Stock Breakdown</CardTitle>
              <CardDescription>Sector allocation within your stock portfolio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={stocksData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {stocksData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Top Holdings</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Apple Inc. (AAPL)", sector: "Technology", value: "$5,230.45", change: "+2.4%" },
                      { name: "Microsoft Corp. (MSFT)", sector: "Technology", value: "$4,120.30", change: "+1.8%" },
                      { name: "Amazon.com Inc. (AMZN)", sector: "Consumer", value: "$3,540.12", change: "+3.2%" },
                      { name: "Johnson & Johnson (JNJ)", sector: "Healthcare", value: "$2,890.75", change: "+0.5%" },
                      { name: "JPMorgan Chase (JPM)", sector: "Financial", value: "$2,450.60", change: "-0.8%" },
                    ].map((stock, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent">
                        <div>
                          <p className="font-medium">{stock.name}</p>
                          <p className="text-xs text-muted-foreground">{stock.sector}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{stock.value}</p>
                          <p className={`text-xs ${stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                            {stock.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View All Holdings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>Historical returns and benchmarks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg mb-6">
                Performance Chart (Time vs. Return)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">1 Year Return</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-green-500">+12.4%</div>
                    <p className="text-xs text-muted-foreground">vs. S&P 500: +10.2%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">3 Year Return</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-green-500">+45.7%</div>
                    <p className="text-xs text-muted-foreground">vs. S&P 500: +38.5%</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">5 Year Return</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-2xl font-bold text-green-500">+82.3%</div>
                    <p className="text-xs text-muted-foreground">vs. S&P 500: +76.1%</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest portfolio changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: "buy", asset: "AAPL", amount: "$1,200.00", shares: "5.2 shares", time: "2 hours ago" },
              { type: "sell", asset: "TSLA", amount: "$950.00", shares: "3.8 shares", time: "1 day ago" },
              { type: "dividend", asset: "MSFT", amount: "$32.50", shares: "", time: "1 week ago" },
              { type: "buy", asset: "VTI", amount: "$2,000.00", shares: "10.5 shares", time: "2 weeks ago" },
            ].map((transaction, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg border">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    transaction.type === "buy"
                      ? "bg-green-100 text-green-600"
                      : transaction.type === "sell"
                        ? "bg-red-100 text-red-600"
                        : "bg-amber-100 text-amber-600"
                  }`}
                >
                  {transaction.type === "buy" ? "B" : transaction.type === "sell" ? "S" : "D"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <p className="text-sm font-medium capitalize">{transaction.type}</p>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <p className="text-sm">{transaction.asset}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{transaction.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{transaction.amount}</p>
                  {transaction.shares && <p className="text-xs text-muted-foreground">{transaction.shares}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">View All Transactions</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

