import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"

const questions = [
  {
    id: 1,
    text: "How would you react if your investment lost 20% of its value in a year?",
    options: [
      { text: "Sell everything immediately", score: 1 },
      { text: "Sell some investments", score: 2 },
      { text: "Do nothing", score: 3 },
      { text: "Buy more at a lower price", score: 4 },
    ],
  },
  {
    id: 2,
    text: "What's your primary investment goal?",
    options: [
      { text: "Preserve my wealth", score: 1 },
      { text: "Generate steady income", score: 2 },
      { text: "Grow my wealth over time", score: 3 },
      { text: "Aggressively maximize returns", score: 4 },
    ],
  },
  {
    id: 3,
    text: "How long do you plan to hold your investments?",
    options: [
      { text: "Less than 1 year", score: 1 },
      { text: "1-3 years", score: 2 },
      { text: "3-7 years", score: 3 },
      { text: "More than 7 years", score: 4 },
    ],
  },
  {
    id: 4,
    text: "How much investment experience do you have?",
    options: [
      { text: "None", score: 1 },
      { text: "Some knowledge, limited experience", score: 2 },
      { text: "Good knowledge, some experience", score: 3 },
      { text: "Extensive knowledge and experience", score: 4 },
    ],
  },
  {
    id: 5,
    text: "What percentage of your total savings are you planning to invest?",
    options: [
      { text: "Less than 25%", score: 1 },
      { text: "25% to 50%", score: 2 },
      { text: "50% to 75%", score: 3 },
      { text: "More than 75%", score: 4 },
    ],
  },
]

export default function RiskAssessmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Risk Assessment</h1>
          <p className="text-muted-foreground">Determine your investment risk tolerance</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Risk Tolerance Questionnaire</CardTitle>
          <CardDescription>
            Answer these questions to help us understand your risk tolerance and investment preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {questions.map((question) => (
              <div key={question.id} className="space-y-4">
                <h3 className="text-lg font-medium">
                  {question.id}. {question.text}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-accent/50"
                    >
                      <div className="h-5 w-5 rounded-full border-2 border-primary mr-3 flex-shrink-0"></div>
                      <span>{option.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset</Button>
          <Button>Submit Assessment</Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Current Risk Profile</CardTitle>
            <CardDescription>Based on your portfolio allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Risk Level: Moderate</span>
              <span className="text-amber-500 font-medium">65/100</span>
            </div>
            <Progress value={65} className="h-2 mb-6" />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Market Volatility Exposure</h4>
                  <p className="text-sm text-muted-foreground">
                    Your portfolio has moderate exposure to market volatility, with 60% in equities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Diversification Level</h4>
                  <p className="text-sm text-muted-foreground">
                    Your investments are well-diversified across multiple asset classes and sectors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Time Horizon</h4>
                  <p className="text-sm text-muted-foreground">
                    Your long-term investment horizon (10+ years) allows for higher risk tolerance.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk-Adjusted Recommendations</CardTitle>
            <CardDescription>AI-powered suggestions based on your risk profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-accent/50 rounded-lg">
                <h4 className="font-medium mb-1">Asset Allocation</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Consider adjusting your portfolio to better match your risk tolerance:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Stocks: 60% → 65%</div>
                  <div>Bonds: 30% → 25%</div>
                  <div>Cash: 5% → 5%</div>
                  <div>Alternatives: 5% → 5%</div>
                </div>
              </div>

              <div className="p-3 bg-accent/50 rounded-lg">
                <h4 className="font-medium mb-1">Investment Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Your moderate risk profile suggests a balanced approach with a focus on growth. Consider dollar-cost
                  averaging into index funds and ETFs for long-term growth.
                </p>
              </div>

              <div className="p-3 bg-accent/50 rounded-lg">
                <h4 className="font-medium mb-1">Risk Mitigation</h4>
                <p className="text-sm text-muted-foreground">
                  To reduce portfolio volatility, consider increasing exposure to defensive sectors like utilities and
                  consumer staples, and maintain a 5-10% cash reserve for opportunities.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Apply Recommendations</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Risk Assessment History</CardTitle>
          <CardDescription>Track how your risk profile has changed over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "March 15, 2023", score: 72, profile: "Moderately Aggressive", change: "+7 points" },
              { date: "September 10, 2022", score: 65, profile: "Moderate", change: "-3 points" },
              { date: "February 22, 2022", score: 68, profile: "Moderate", change: "+12 points" },
              { date: "July 5, 2021", score: 56, profile: "Moderately Conservative", change: "Initial assessment" },
            ].map((assessment, i) => (
              <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{assessment.date}</p>
                  <p className="text-sm text-muted-foreground">Risk Profile: {assessment.profile}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Score: {assessment.score}/100</p>
                  <p className="text-sm text-muted-foreground">{assessment.change}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

