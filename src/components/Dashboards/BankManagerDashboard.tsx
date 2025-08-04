import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Building2,
  TrendingUp,
  Users,
  ClipboardList,
  Calendar,
  Download,
  Search,
  Target,
  AlertCircle,
  Clock,
  Filter,
  UserCheck
} from 'lucide-react';
import { mockCustomers, mockLeads, mockMeetings } from '@/data/mockData';
import AssignLeadModal from '@/components/Modals/AssignLeadModal';

const BankManagerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAssignLead, setShowAssignLead] = useState(false);
  const [selectedLead, setSelectedLead] = useState<{ id: string; name: string } | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const branchStats = [
    {
      title: 'Branch Customers',
      value: '2,456',
      change: '+5.2%',
      icon: Users,
      color: 'text-primary'
    },
    {
      title: 'Lead Conversion Rate',
      value: '68%',
      change: '+12%',
      icon: Target,
      color: 'text-success'
    },
    {
      title: 'Pending Tasks',
      value: '24',
      change: '-8%',
      icon: ClipboardList,
      color: 'text-warning'
    },
    {
      title: 'This Month Revenue',
      value: '$2.4M',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-info'
    }
  ];

  const rmPerformance = [
    {
      name: 'Sarah Wilson',
      customers: 145,
      leadsConverted: 23,
      revenue: '$850K',
      rating: 4.8,
      status: 'Excellent'
    },
    {
      name: 'David Miller',
      customers: 132,
      leadsConverted: 18,
      revenue: '$720K',
      rating: 4.5,
      status: 'Good'
    },
    {
      name: 'Lisa Chen',
      customers: 128,
      leadsConverted: 21,
      revenue: '$780K',
      rating: 4.6,
      status: 'Good'
    }
  ];

  const pendingTasks = [
    {
      id: '1',
      task: 'Review loan application - John Smith',
      priority: 'High',
      dueDate: '2024-01-22',
      type: 'Approval'
    },
    {
      id: '2',
      task: 'Monthly performance review - Sarah Wilson',
      priority: 'Medium',
      dueDate: '2024-01-23',
      type: 'Review'
    },
    {
      id: '3',
      task: 'Customer escalation - Premium account',
      priority: 'High',
      dueDate: '2024-01-21',
      type: 'Escalation'
    }
  ];

  const handleDownloadReport = (type: string, period: string) => {
    console.log(`Downloading ${type} ${period} report...`);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bank Manager Dashboard</h1>
          <p className="text-muted-foreground">Downtown Branch Operations Overview</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            This Month
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium">Performance</label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option value="all">All Performance</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Time Period</label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search customers, RMs, tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {branchStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}>
                    {stat.change}
                  </span>{' '}
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RM Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Relationship Manager Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rmPerformance.map((rm, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{rm.name}</h4>
                    <Badge variant={rm.status === 'Excellent' ? 'default' : 'secondary'}>
                      {rm.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Customers</p>
                      <p className="font-semibold">{rm.customers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Leads Converted</p>
                      <p className="font-semibold">{rm.leadsConverted}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Revenue</p>
                      <p className="font-semibold">{rm.revenue}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rating</p>
                      <p className="font-semibold">⭐ {rm.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks & Escalations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Pending Tasks & Escalations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingTasks.map((task) => (
                <div key={task.id} className="p-4 border border-border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{task.task}</h4>
                    <Badge 
                      variant={
                        task.priority === 'High' ? 'destructive' :
                        task.priority === 'Medium' ? 'default' : 'secondary'
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{task.type}</span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Meetings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming RM/Customer Meetings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMeetings.map((meeting) => (
                <TableRow key={meeting.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{meeting.customerName}</TableCell>
                  <TableCell>{meeting.date} at {meeting.time}</TableCell>
                  <TableCell>{meeting.purpose}</TableCell>
                  <TableCell>{meeting.location}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{meeting.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Reports Section */}
      <Card>
        <CardHeader>
          <CardTitle>Download Reports</CardTitle>
          <CardDescription>Generate and download branch performance reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleDownloadReport('branch-performance', 'monthly')}
            >
              <Download className="w-5 h-5" />
              Monthly Branch Report
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleDownloadReport('rm-performance', 'weekly')}
            >
              <Download className="w-5 h-5" />
              Weekly RM Report
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleDownloadReport('customer-analytics', 'monthly')}
            >
              <Download className="w-5 h-5" />
              Customer Analytics
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => handleDownloadReport('revenue', 'quarterly')}
            >
              <Download className="w-5 h-5" />
              Revenue Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Branch Customer Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Branch Customer Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="text-2xl font-bold text-primary">2,456</h3>
                  <p className="text-muted-foreground">Total Customers</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="text-2xl font-bold text-success">234</h3>
                  <p className="text-muted-foreground">New This Month</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="text-2xl font-bold text-info">95.2%</h3>
                  <p className="text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-3">Age Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>18-30</span>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>31-45</span>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>46-60</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>60+</span>
                      <span className="font-medium">12%</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold mb-3">Account Types</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Savings</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Current</span>
                      <span className="font-medium">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business</span>
                      <span className="font-medium">5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="products" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="text-xl font-bold">1,245</h3>
                  <p className="text-muted-foreground">Loan Accounts</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="text-xl font-bold">3,456</h3>
                  <p className="text-muted-foreground">Credit Cards</p>
                </div>
                <div className="text-center p-4 border border-border rounded-lg">
                  <h3 className="text-xl font-bold">2,134</h3>
                  <p className="text-muted-foreground">Investment Products</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        </Card>

        {/* Modals */}
        <AssignLeadModal
          open={showAssignLead}
          onClose={() => {
            setShowAssignLead(false);
            setSelectedLead(null);
          }}
          leadId={selectedLead?.id}
          leadName={selectedLead?.name}
        />
      </div>
    );
  };
  
  export default BankManagerDashboard;