import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  FileCheck,
  Phone,
  Calendar,
  Search,
  Filter,
  AlertCircle,
  DollarSign
} from 'lucide-react';
import { mockCustomers, mockLeads, mockKycDocuments } from '@/data/mockData';

const RelationshipManagerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const rmStats = [
    {
      title: 'Assigned Customers',
      value: '145',
      change: '+3',
      icon: Users,
      color: 'text-primary'
    },
    {
      title: 'Active Leads',
      value: '23',
      change: '+5',
      icon: TrendingUp,
      color: 'text-success'
    },
    {
      title: 'Tasks Today',
      value: '8',
      change: '-2',
      icon: CheckCircle,
      color: 'text-info'
    },
    {
      title: 'KYC Pending',
      value: '12',
      change: '+1',
      icon: FileCheck,
      color: 'text-warning'
    }
  ];

  const leadPipeline = [
    {
      stage: 'Prospects',
      count: 45,
      value: '$2.3M',
      color: 'bg-muted'
    },
    {
      stage: 'Qualified',
      count: 23,
      value: '$1.8M',
      color: 'bg-info'
    },
    {
      stage: 'Negotiation',
      count: 12,
      value: '$850K',
      color: 'bg-warning'
    },
    {
      stage: 'Closed Won',
      count: 8,
      value: '$420K',
      color: 'bg-success'
    }
  ];

  const recentInteractions = [
    {
      id: '1',
      customer: 'John Smith',
      type: 'Phone Call',
      date: '2024-01-20',
      notes: 'Discussed home loan options',
      followUp: '2024-01-22'
    },
    {
      id: '2',
      customer: 'Emily Johnson',
      type: 'Meeting',
      date: '2024-01-19',
      notes: 'Investment portfolio review',
      followUp: '2024-01-25'
    },
    {
      id: '3',
      customer: 'Michael Brown',
      type: 'Email',
      date: '2024-01-18',
      notes: 'Sent account statement',
      followUp: null
    }
  ];

  const dailyTasks = [
    {
      id: '1',
      task: 'Call John Smith about loan application',
      priority: 'High',
      dueTime: '10:00 AM',
      completed: false
    },
    {
      id: '2',
      task: 'Review Emily Johnson\'s investment portfolio',
      priority: 'Medium',
      dueTime: '2:00 PM',
      completed: false
    },
    {
      id: '3',
      task: 'Submit loan documentation for approval',
      priority: 'High',
      dueTime: '4:00 PM',
      completed: true
    },
    {
      id: '4',
      task: 'Prepare for tomorrow\'s client meetings',
      priority: 'Low',
      dueTime: '5:00 PM',
      completed: false
    }
  ];

  const toggleTaskCompletion = (taskId: string) => {
    console.log(`Toggle task ${taskId}`);
    // In real app, this would update the task status
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Relationship Manager Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sarah Wilson</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
          <Button size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Quick Call
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search customers, leads, tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rmStats.map((stat, index) => {
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
                  from yesterday
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Lead Pipeline Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Lead Pipeline Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leadPipeline.map((stage, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                    <div>
                      <p className="font-medium">{stage.stage}</p>
                      <p className="text-sm text-muted-foreground">{stage.count} leads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{stage.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Today's Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {dailyTasks.map((task) => (
                <div key={task.id} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="w-4 h-4 text-primary"
                  />
                  <div className="flex-1">
                    <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {task.task}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {task.dueTime}
                    </div>
                  </div>
                  <Badge 
                    variant={
                      task.priority === 'High' ? 'destructive' :
                      task.priority === 'Medium' ? 'default' : 'secondary'
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Interactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Recent Customer Interactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInteractions.map((interaction) => (
              <div key={interaction.id} className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{interaction.customer}</h4>
                  <Badge variant="outline">{interaction.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{interaction.notes}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{interaction.date}</span>
                  {interaction.followUp && (
                    <div className="flex items-center gap-1 text-warning">
                      <AlertCircle className="w-3 h-3" />
                      Follow up: {interaction.followUp}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Data Tables */}
      <Card>
        <CardHeader>
          <CardTitle>Customer & Lead Management</CardTitle>
          <CardDescription>Manage your assigned customers and active leads</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="customers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="customers">My Customers</TabsTrigger>
              <TabsTrigger value="leads">Active Leads</TabsTrigger>
              <TabsTrigger value="kyc">KYC Status</TabsTrigger>
            </TabsList>

            <TabsContent value="customers" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Assigned Customers</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Account Type</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCustomers.filter(c => c.relationshipManager === 'Sarah Wilson').map((customer) => (
                    <TableRow key={customer.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.accountType}</TableCell>
                      <TableCell>${customer.balance.toLocaleString()}</TableCell>
                      <TableCell>{customer.lastActivity}</TableCell>
                      <TableCell>
                        <Badge variant={customer.status === 'Active' ? 'default' : 'secondary'}>
                          {customer.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="leads" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Active Leads</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Status
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Product Interest</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Contact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLeads.filter(l => l.assignedTo === 'Sarah Wilson').map((lead) => (
                    <TableRow key={lead.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.product}</TableCell>
                      <TableCell>${lead.value.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            lead.status === 'Hot' ? 'destructive' :
                            lead.status === 'Warm' ? 'default' : 'secondary'
                          }
                        >
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{lead.lastContact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="kyc" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">KYC Documents Status</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Pending Only
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Document Type</TableHead>
                    <TableHead>Upload Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockKycDocuments.map((doc) => (
                    <TableRow key={doc.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{doc.customerName}</TableCell>
                      <TableCell>{doc.documentType}</TableCell>
                      <TableCell>{doc.uploadDate}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            doc.status === 'Approved' ? 'default' :
                            doc.status === 'Pending' ? 'secondary' : 'destructive'
                          }
                        >
                          {doc.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {doc.status === 'Pending' && (
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                        )}
                        {doc.status === 'Approved' && (
                          <Button size="sm" variant="ghost">
                            View
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RelationshipManagerDashboard;