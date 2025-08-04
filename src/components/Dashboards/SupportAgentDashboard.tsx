import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  TicketIcon,
  Clock,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  User,
  Search,
  Filter,
  History,
  Phone,
  Mail
} from 'lucide-react';
import { mockTickets, mockCustomers } from '@/data/mockData';

const SupportAgentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const ticketStats = [
    {
      title: 'Open Tickets',
      value: '23',
      change: '+5',
      icon: TicketIcon,
      color: 'text-destructive'
    },
    {
      title: 'In Progress',
      value: '15',
      change: '+3',
      icon: Clock,
      color: 'text-warning'
    },
    {
      title: 'Completed Today',
      value: '12',
      change: '+8',
      icon: CheckCircle,
      color: 'text-success'
    },
    {
      title: 'SLA Breaches',
      value: '2',
      change: '-1',
      icon: AlertTriangle,
      color: 'text-destructive'
    }
  ];

  const ticketsByStatus = [
    { status: 'Open', count: 23, color: 'text-destructive' },
    { status: 'In Progress', count: 15, color: 'text-warning' },
    { status: 'Completed', count: 47, color: 'text-success' },
    { status: 'SLA Breach', count: 2, color: 'text-destructive' }
  ];

  const recentConversations = [
    {
      id: '1',
      customer: 'John Smith',
      lastMessage: 'Thank you for resolving my banking issue quickly!',
      timestamp: '2 minutes ago',
      status: 'Resolved'
    },
    {
      id: '2',
      customer: 'Emily Johnson',
      lastMessage: 'Can you help me with my debit card activation?',
      timestamp: '15 minutes ago',
      status: 'Active'
    },
    {
      id: '3',
      customer: 'Michael Brown',
      lastMessage: 'I need to update my contact information',
      timestamp: '1 hour ago',
      status: 'Pending'
    }
  ];

  const assignedTickets = [
    {
      id: 'TKT001',
      customer: 'John Smith',
      subject: 'Unable to access online banking',
      priority: 'High',
      status: 'Open',
      slaTime: '2 hours remaining',
      assignedTime: '2024-01-20 09:00'
    },
    {
      id: 'TKT004',
      customer: 'Sarah Wilson',
      subject: 'Credit card limit increase request',
      priority: 'Medium',
      status: 'In Progress',
      slaTime: '6 hours remaining',
      assignedTime: '2024-01-20 10:30'
    },
    {
      id: 'TKT005',
      customer: 'David Miller',
      subject: 'Loan payment schedule inquiry',
      priority: 'Low',
      status: 'Open',
      slaTime: '12 hours remaining',
      assignedTime: '2024-01-20 11:15'
    }
  ];

  const getSlaTimeColor = (slaTime: string) => {
    const hours = parseInt(slaTime.split(' ')[0]);
    if (hours <= 2) return 'text-destructive';
    if (hours <= 6) return 'text-warning';
    return 'text-success';
  };

  const handleViewCustomerHistory = (customerId: string) => {
    console.log(`Viewing history for customer ${customerId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Support Agent Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Mike Support</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Call Customer
          </Button>
          <Button size="sm">
            <MessageSquare className="w-4 h-4 mr-2" />
            New Ticket
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search tickets, customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ticketStats.map((stat, index) => {
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
        {/* Tickets by Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TicketIcon className="w-5 h-5" />
              Tickets by Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ticketsByStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.status === 'Open' ? 'bg-destructive' :
                      item.status === 'In Progress' ? 'bg-warning' :
                      item.status === 'Completed' ? 'bg-success' : 'bg-destructive'
                    }`} />
                    <span className="font-medium">{item.status}</span>
                  </div>
                  <span className={`font-bold ${item.color}`}>{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Customer Conversations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Recent Conversations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentConversations.map((conversation) => (
                <div key={conversation.id} className="p-3 border border-border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{conversation.customer}</h4>
                    <Badge 
                      variant={
                        conversation.status === 'Active' ? 'default' :
                        conversation.status === 'Resolved' ? 'secondary' : 'outline'
                      }
                    >
                      {conversation.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{conversation.lastMessage}</p>
                  <p className="text-xs text-muted-foreground">{conversation.timestamp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SLA Breach Countdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            SLA Breach Countdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {assignedTickets.map((ticket) => (
              <div key={ticket.id} className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{ticket.id}</h4>
                  <Badge 
                    variant={
                      ticket.priority === 'High' ? 'destructive' :
                      ticket.priority === 'Medium' ? 'default' : 'secondary'
                    }
                  >
                    {ticket.priority}
                  </Badge>
                </div>
                <p className="text-sm font-medium mb-1">{ticket.customer}</p>
                <p className="text-sm text-muted-foreground mb-3">{ticket.subject}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${getSlaTimeColor(ticket.slaTime)}`}>
                    {ticket.slaTime}
                  </span>
                  <Badge variant="outline">{ticket.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Tickets Table */}
      <Card>
        <CardHeader>
          <CardTitle>Ticket Management</CardTitle>
          <CardDescription>View and manage support tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="assigned" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="assigned">Assigned to Me</TabsTrigger>
              <TabsTrigger value="all">All Tickets</TabsTrigger>
              <TabsTrigger value="priority">High Priority</TabsTrigger>
              <TabsTrigger value="customers">Customer History</TabsTrigger>
            </TabsList>

            <TabsContent value="assigned" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">My Assigned Tickets</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>SLA Time</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assignedTickets.map((ticket) => (
                    <TableRow key={ticket.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            ticket.priority === 'High' ? 'destructive' :
                            ticket.priority === 'Medium' ? 'default' : 'secondary'
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            ticket.status === 'Open' ? 'destructive' :
                            ticket.status === 'In Progress' ? 'default' : 'secondary'
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell className={getSlaTimeColor(ticket.slaTime)}>
                        {ticket.slaTime}
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          Resolve
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">All Support Tickets</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter by Status
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTickets.map((ticket) => (
                    <TableRow key={ticket.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.customerName}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            ticket.priority === 'High' ? 'destructive' :
                            ticket.priority === 'Medium' ? 'default' : 'secondary'
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            ticket.status === 'Open' ? 'destructive' :
                            ticket.status === 'In Progress' ? 'default' : 'secondary'
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{ticket.assignedTo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="priority" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">High Priority Tickets</h3>
                <Badge variant="destructive">Urgent Attention Required</Badge>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTickets.filter(t => t.priority === 'High').map((ticket) => (
                    <TableRow key={ticket.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.customerName}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <Badge variant="destructive">{ticket.status}</Badge>
                      </TableCell>
                      <TableCell>{ticket.createdDate}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="default">
                          Take Action
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="customers" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Customer History</h3>
                <p className="text-sm text-muted-foreground">
                  View customer interaction history before resolving tickets
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer Name</TableHead>
                    <TableHead>Account Number</TableHead>
                    <TableHead>Last Interaction</TableHead>
                    <TableHead>Total Tickets</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCustomers.slice(0, 5).map((customer) => (
                    <TableRow key={customer.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.accountNumber}</TableCell>
                      <TableCell>{customer.lastActivity}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {Math.floor(Math.random() * 5) + 1} tickets
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={customer.status === 'Active' ? 'default' : 'secondary'}>
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleViewCustomerHistory(customer.id)}
                        >
                          <History className="w-4 h-4 mr-1" />
                          View History
                        </Button>
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

export default SupportAgentDashboard;