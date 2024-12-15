import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { BarChart3, DollarSign, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "../ui/progress";

// Sample data for the charts
const revenueData = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 2200 },
  { month: "Mar", revenue: 2700 },
  { month: "Apr", revenue: 2400 },
  { month: "May", revenue: 2800 },
  { month: "Jun", revenue: 3200 },
];

const userActivityData = [
  { day: "Mon", active: 300 },
  { day: "Tue", active: 270 },
  { day: "Wed", active: 350 },
  { day: "Thu", active: 320 },
  { day: "Fri", active: 290 },
  { day: "Sat", active: 200 },
  { day: "Sun", active: 250 },
];

export function Dashboard() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[60px] mt-4"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <XAxis dataKey="month" hide />
                  <YAxis hide />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
            <Progress value={75} className="mt-4" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last week
            </p>
            <ChartContainer
              config={{
                active: {
                  label: "Active Users",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[60px] mt-4"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivityData}>
                  <Line
                    type="monotone"
                    dataKey="active"
                    stroke="var(--color-active)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <XAxis dataKey="day" hide />
                  <YAxis hide />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 mb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
            <Progress value={40} className="mt-4" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Monthly revenue for the past 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: "Revenue",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>
              Daily active users for the past week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                active: {
                  label: "Active Users",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivityData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Line
                    type="monotone"
                    dataKey="active"
                    stroke="var(--color-active)"
                    strokeWidth={2}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
