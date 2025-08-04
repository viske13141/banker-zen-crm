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
  CreditCard,
  TicketIcon,
  Download,
  Search,
  Filter,
  Bell,
  Activity,
  UserCheck,
  Building2,
  Settings,
  FileBarChart,
  UserPlus
} from 'lucide-react';
import { mockCustomers, mockLeads, mockTickets, mockActivityLogs, mockReports } from '@/data/mockData';
import CustomerProfile from '@/components/Profiles/CustomerProfile';
import LeadProfile from '@/components/Profiles/LeadProfile';
import ManageUsersModal from '@/components/Modals/ManageUsersModal';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<string | null>(null);
  const [showManageUsers, setShowManageUsers] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const stats = [
    {
      title: 'Total Customers',
      value: '12,345',
      change: '+12%',
      icon: Users,
      color: 'text-primary'
    },
    {
      title: 'Active Leads',
      value: '1,234',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-success'
    },
    {
      title: 'Total Accounts',
      value: '15,678',
      change: '+5%',
      icon: CreditCard,
      color: 'text-info'
    },
    {
      title: 'Open Tickets',
      value: '89',
      change: '-15%',
      icon: TicketIcon,
      color: 'text-warning'
    }
  ];

  const usersByRole = [
    { role: 'Bank Manager', count: 12, active: 11, status: 'Active' },
    { role: 'Relationship Manager', count: 45, active: 42, status: 'Active' },
    { role: 'Support Agent', count: 28, active: 25, status: 'Active' },
    { role: 'Customer', count: 12345, active: 11890, status: 'Active' }
  ];

  const handleDownloadReport = (type: string) => {
    // Simulate download
    console.log(`Downloading ${type} report...`);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Complete system overview and management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowManageUsers(true)}>
            <Settings className="w-4 h-4 mr-2" />
            Manage Users
          </Button>
          <Button variant="outline" size="sm">
            <FileBarChart className="w-4 h-4 mr-2" />
            View Reports
          </Button>
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Data
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Role</label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option value="all">All Roles</option>
                  <option value="customer">Customer</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Date Range</label>
                <select className="w-full mt-1 p-2 border rounded">
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
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
          placeholder="Search customers, leads, tickets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Users by Role */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5" />
              Active Users by Role
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {usersByRole.map((role, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{role.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {role.active} of {role.count} active
                    </p>
                  </div>
                  <Badge variant={role.status === 'Active' ? 'default' : 'secondary'}>
                    {role.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Logs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockActivityLogs.slice(0, 4).map((log) => (
                <div key={log.id} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{log.action}</p>
                    <p className="text-xs text-muted-foreground">{log.user}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(log.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications & Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications & Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                <div>
                  <p className="text-sm font-medium">High Priority Ticket</p>
                  <p className="text-xs text-muted-foreground">
                    Ticket TKT001 requires immediate attention
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2" />
                <div>
                  <p className="text-sm font-medium">System Maintenance</p>
                  <p className="text-xs text-muted-foreground">
                    Scheduled for tonight 11 PM - 2 AM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2" />
                <div>
                  <p className="text-sm font-medium">New User Registration</p>
                  <p className="text-xs text-muted-foreground">
                    25 new customers registered today
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Data Tables */}
      <Card>
        <CardHeader>
          <CardTitle>System Data</CardTitle>
          <CardDescription>Detailed view of customers, leads, and tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="customers" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="customers">Customers</TabsTrigger>
              <TabsTrigger value="leads">Leads</TabsTrigger>
              <TabsTrigger value="tickets">Tickets</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="customers" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Customer Management</h3>
                <Button size="sm" onClick={() => handleDownloadReport('customer')}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Account Type</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>RM</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCustomers.map((customer) => (
                    <TableRow 
                      key={customer.id} 
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => setSelectedCustomer(customer.id)}
                    >
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.accountType}</TableCell>
                      <TableCell>${customer.balance.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={customer.status === 'Active' ? 'default' : 'secondary'}>
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.relationshipManager}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="leads" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Lead Management</h3>
                <Button size="sm" onClick={() => handleDownloadReport('lead')}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assigned To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockLeads.map((lead) => (
                    <TableRow 
                      key={lead.id} 
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => setSelectedLead(lead.id)}
                    >
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
                      <TableCell>{lead.assignedTo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="tickets" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Ticket Management</h3>
                <Button size="sm" onClick={() => handleDownloadReport('ticket')}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <h3 className="text-lg font-semibold">Available Reports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockReports.map((report) => (
                  <Card key={report.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{report.name}</h4>
                        <Badge variant="outline">{report.format}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Generated: {report.generatedDate}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Size: {report.size}
                      </p>
                      <Button size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        </Card>

        {/* Modals */}
        {selectedCustomer && (
          <CustomerProfile
            customerId={selectedCustomer}
            onClose={() => setSelectedCustomer(null)}
          />
        )}

        {selectedLead && (
          <LeadProfile
            leadId={selectedLead}
            onClose={() => setSelectedLead(null)}
          />
        )}

        <ManageUsersModal
          open={showManageUsers}
          onClose={() => setShowManageUsers(false)}
        />
      </div>
    );
  };
  
  export default AdminDashboard;