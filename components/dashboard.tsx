'use client'

import React, { useState } from 'react'
import {
  BarChart as LucideBarChart,
  Activity,
  FileText,
  CreditCard,
  PieChart,
  User,
  Settings,
  HelpCircle,
  Download
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts'

const Sidebar = ({ activeItem, setActiveItem }: { activeItem: string; setActiveItem: (item: string) => void }) => {
  const menuItems = [
    { name: 'Dashboard', icon: LucideBarChart },
    { name: 'Policies', icon: FileText },
    { name: 'Claims', icon: Activity },
    { name: 'Payments', icon: CreditCard },
    { name: 'Reports', icon: PieChart },
    { name: 'Profile', icon: User },
    { name: 'Settings', icon: Settings },
    { name: 'Help & Support', icon: HelpCircle },
  ]

  return (
    <div className="w-64 bg-white border-r h-screen p-4">
      <div className="flex items-center mb-8">
        <LucideBarChart className="mr-2" />
        <h1 className="text-xl font-bold">Life Insurance</h1>
      </div>
      {menuItems.map((item) => (
        <button
          key={item.name}
          className={`flex items-center w-full p-2 mt-2 text-left ${activeItem === item.name ? 'bg-gray-200' : ''}`}
          onClick={() => setActiveItem(item.name)}
        >
          <item.icon className="mr-2" />
          {item.name}
        </button>
      ))}
    </div>
  )
}

const DashboardContent = () => {
  const monthlyRevenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 5500 },
  ]

  const policyDistributionData = [
    { name: 'Term Life', value: 400 },
    { name: 'Whole Life', value: 300 },
    { name: 'Universal Life', value: 300 },
    { name: 'Variable Life', value: 200 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-gray-500">+20% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-gray-500">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Premium Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$567,890</div>
            <p className="text-xs text-gray-500">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-gray-500">+2% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: 'Revenue',
                  color: 'hsl(var(--chart-1))',
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyRevenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Policy Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: 'Policies',
                  color: 'hsl(var(--chart-1))',
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={policyDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {policyDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

// Main component definition
export function Dashboard() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <MainContent activeItem={activeItem} />
    </div>
  )
}

const MainContent = ({ activeItem }: { activeItem: string }) => {
  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{activeItem}</h2>
        <div className="flex items-center">
          <span className="mr-4">Jan 20, 2023 - Feb 09, 2023</span>
          <Button variant="outline">
            <Download className="mr-2" />
            Download
          </Button>
        </div>
      </div>
      {activeItem === 'Dashboard' && <DashboardContent />}
      {/* Add other content components similarly */}
    </div>
  )
}
