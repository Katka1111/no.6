'use client'

import React, { useState } from 'react'
import { BarChart, Activity, FileText, CreditCard, PieChart, User, Settings, HelpCircle, Download, Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, Bar, BarChart as RechartsBarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts'

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { name: 'Dashboard', icon: BarChart },
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
        <BarChart className="mr-2" />
        <h1 className="text-xl font-bold">Life Insurance</h1>
      </div>
      {menuItems.map((item) => (
        <button
          key={item.name}
          className={`flex items-center w-full p-2 mt-2 text-left ${
            activeItem === item.name ? 'bg-gray-200' : ''
          }`}
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
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Premium Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$567,890</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
            }} className="h-[300px]">
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
            <ChartContainer config={{
              value: {
                label: "Policies",
                color: "hsl(var(--chart-1))",
              },
            }} className="h-[300px]">
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

const PoliciesContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Your Insurance Policies</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        <li>
          <h3 className="font-semibold">Term Life Insurance</h3>
          <p>Policy Number: TL-12345 | Coverage: $500,000 | Premium: $50/month</p>
        </li>
        <li>
          <h3 className="font-semibold">Whole Life Insurance</h3>
          <p>Policy Number: WL-67890 | Coverage: $250,000 | Premium: $150/month</p>
        </li>
        <li>
          <h3 className="font-semibold">Universal Life Insurance</h3>
          <p>Policy Number: UL-24680 | Coverage: $750,000 | Premium: $200/month</p>
        </li>
      </ul>
      <Button className="mt-4">Add New Policy</Button>
    </CardContent>
  </Card>
)

const ClaimsContent = () => {
  const claimsData = [
    { name: 'Jan', claims: 4 },
    { name: 'Feb', claims: 3 },
    { name: 'Mar', claims: 2 },
    { name: 'Apr', claims: 5 },
    { name: 'May', claims: 1 },
    { name: 'Jun', claims: 3 },
  ]

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Claims Management</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">Active Claims</h3>
              <p>Medical Claim #MC-001 | Amount: $2,500 | Status: Under Review</p>
            </li>
            <li>
              <h3 className="font-semibold">Recent Claims</h3>
              <p>Dental Claim #DC-003 | Amount: $500 | Status: Approved</p>
              <p>Vision Claim #VC-002 | Amount: $200 | Status: Paid</p>
            </li>
          </ul>
          <Button className="mt-4">File New Claim</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Monthly Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{
            claims: {
              label: "Claims",
              color: "hsl(var(--chart-1))",
            },
          }} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={claimsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="claims" fill="var(--color-claims)" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  )
}

const PaymentsContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Payment History</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        <li>
          <h3 className="font-semibold">Term Life Insurance (TL-12345)</h3>
          <p>Last Payment: $50 | Date: May 1, 2023 | Status: Paid</p>
        </li>
        <li>
          <h3 className="font-semibold">Whole Life Insurance (WL-67890)</h3>
          <p>Last Payment: $150 | Date: May 5, 2023 | Status: Paid</p>
        </li>
        <li>
          <h3 className="font-semibold">Universal Life Insurance (UL-24680)</h3>
          <p>Last Payment: $200 | Date: May 10, 2023 | Status: Pending</p>
        </li>
      </ul>
      <Button className="mt-4">Make a Payment</Button>
    </CardContent>
  </Card>
)

const ReportsContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Insurance Reports</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        <li>
          <h3 className="font-semibold">Annual Policy Statement</h3>
          <p>Year: 2022 | Generated: January 15, 2023</p>
          <Button variant="outline" size="sm">Download PDF</Button>
        </li>
        <li>
          <h3 className="font-semibold">Claims Summary</h3>
          <p>Period: Q1 2023 | Generated: April 5, 2023</p>
          <Button variant="outline" size="sm">Download PDF</Button>
        </li>
        <li>
          <h3 className="font-semibold">Premium Payment History</h3>
          <p>Period: Last 12 months | Generated: May 1, 2023</p>
          <Button variant="outline" size="sm">Download PDF</Button>
        </li>
      </ul>
    </CardContent>
  </Card>
)

const ProfileContent = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Insurance St, Safety City, SC 12345",
    beneficiary: "Jane Doe (Spouse)"
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }))
    saveChanges({ [name]: value })
  }

  const saveChanges = async (changes) => {
    // Simulating an API call to save changes
    await new Promise(resolve => setTimeout(resolve, 500))
    console.log('Saved changes:', changes)

  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" value={profile.phone} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" name="address" value={profile.address} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="beneficiary">Primary Beneficiary</Label>
            <Input id="beneficiary" name="beneficiary" value={profile.beneficiary} onChange={handleChange} />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

const SettingsContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Account Settings</CardTitle>
    </CardHeader>
    <CardContent>
      <form className="space-y-4">
        <div>
          <Label htmlFor="notifications">Notification Preferences</Label>
          <select id="notifications" className="w-full mt-1 rounded-md border-gray-300">
            <option>Email and SMS</option>
            <option>Email only</option>
            <option>SMS only</option>
          </select>
        </div>
        <div>
          <Label htmlFor="language">Language</Label>
          <select id="language" className="w-full mt-1 rounded-md border-gray-300">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div className="flex items-center">
          <input id="paperless" type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          <Label htmlFor="paperless" className="ml-2">Opt for paperless statements</Label>
        </div>
        <Button type="submit">Save Settings</Button>
      </form>
    </CardContent>
  </Card>
)

const HelpSupportContent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Help & Support</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <p><Mail className="inline mr-2" /> support@lifeinsurance.com</p>
          <p><Phone className="inline mr-2" /> 1-800-123-4567</p>
        </div>
        <div>
          <h3 className="font-semibold">FAQs</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>How do I file a claim?</li>
            <li>What types of life insurance do you offer?</li>
            <li>How can I change my beneficiary?</li>
            <li>What is the claims process?</li>
          </ul>
        </div>
        <Button>Start Live Chat</Button>
      </div>
    </CardContent>
  </Card>
)

const MainContent = ({ activeItem }) => {
  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{activeItem}</h2>
        <div className="flex items-center">
          <span className="mr-4">Jan 20, 2023 - Feb 09, 2023</span>
          <Button variant="outline"><Download className="mr-2" />Download</Button>
        </div>
      </div>
      {activeItem === 'Dashboard' && <DashboardContent />}
      {activeItem === 'Policies' && <PoliciesContent />}
      {activeItem === 'Claims' && <ClaimsContent />}
      {activeItem === 'Payments' && <PaymentsContent />}
      {activeItem === 'Reports' && <ReportsContent />}
      {activeItem === 'Profile' && <ProfileContent />}
      {activeItem === 'Settings' && <SettingsContent />}
      {activeItem === 'Help & Support' && <HelpSupportContent />}
    </div>
  )
}

export function Dashboard() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <MainContent activeItem={activeItem} />
    </div>
  )
}