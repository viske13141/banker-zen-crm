import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  User,
  CreditCard,
  FileCheck,
  MessageSquare,
  Calendar,
  DollarSign,
  TicketIcon,
  Phone,
  Mail,
  MapPin,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Building2
} from 'lucide-react';

interface CustomerProfileProps {
  customerId: string;
  onClose: () => void;
}

const CustomerProfile: React.FC<CustomerProfileProps> = ({ customerId, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock customer data - in real app, fetch based on customerId
  const customer = {
    id: customerId,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    status: 'Active',
    relationshipManager: 'Sarah Wilson',
    customerId: 'CUST001',
    joinDate: '2020-01-15',
    lastLogin: '2024-01-20 14:30'
  };

  const accounts = [
    {
      id: 'ACC001',
      type: 'Savings',
      number: '****1234',
      balance: 25000,
      status: 'Active'
    },
    {
      id: 'ACC002',
      type: 'Current',
      number: '****5678',
      balance: 5000,
      status: 'Active'
    }
  ];

  const transactions = [
    { id: '1', date: '2024-01-20', description: 'Online Transfer', amount: -500, type: 'Debit' },
    { id: '2', date: '2024-01-19', description: 'Salary Credit', amount: 5000, type: 'Credit' },
    { id: '3', date: '2024-01-18', description: 'ATM Withdrawal', amount: -200, type: 'Debit' }
  ];

  const kycDocuments = [
    {
      id: '1',
      type: 'Aadhaar',
      status: 'Verified',
      uploadDate: '2020-01-15',
      expiryDate: 'N/A'
    },
    {
      id: '2',
      type: 'PAN Card',
      status: 'Verified',
      uploadDate: '2020-01-15',
      expiryDate: 'N/A'
    },
    {
      id: '3',
      type: 'Address Proof',
      status: 'Pending',
      uploadDate: '2024-01-18',
      expiryDate: '2025-01-18'
    }
  ];

  const interactions = [
    {
      id: '1',
      type: 'Phone Call',
      date: '2024-01-20',
      agent: 'Sarah Wilson',
      notes: 'Discussed loan application process',
      duration: '15 mins'
    },
    {
      id: '2',
      type: 'Email',
      date: '2024-01-18',
      agent: 'Mike Support',
      notes: 'Sent account statement',
      duration: '-'
    }
  ];

  const tasks = [
    {
      id: '1',
      task: 'Follow up on loan application',
      dueDate: '2024-01-22',
      status: 'Pending',
      assignedTo: 'Sarah Wilson'
    },
    {
      id: '2',
      task: 'Update KYC documents',
      dueDate: '2024-01-25',
      status: 'In Progress',
      assignedTo: 'Sarah Wilson'
    }
  ];

  const loans = [
    {
      id: 'LOAN001',
      type: 'Home Loan',
      amount: 500000,
      outstanding: 450000,
      emi: 4500,
      nextDue: '2024-02-01'
    }
  ];

  const tickets = [
    {
      id: 'TKT001',
      subject: 'Unable to access online banking',
      status: 'Resolved',
      priority: 'High',
      created: '2024-01-15',
      resolved: '2024-01-16'
    }
  ];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {customer.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{customer.name}</h2>
              <p className="text-muted-foreground">Customer ID: {customer.customerId}</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="kyc">KYC Docs</TabsTrigger>
            <TabsTrigger value="interactions">Interactions</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="loans">Loans & FD</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{customer.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span>RM: {customer.relationshipManager}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <Badge variant="default">{customer.status}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Join Date:</span>
                    <span>{customer.joinDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Login:</span>
                    <span>{customer.lastLogin}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="accounts" className="space-y-4 mt-6">
            <div className="grid gap-4">
              {accounts.map((account) => (
                <Card key={account.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{account.type} Account</h3>
                        <p className="text-muted-foreground">Account: {account.number}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">${account.balance.toLocaleString()}</p>
                        <Badge variant="default">{account.status}</Badge>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Recent Transactions</h4>
                      <div className="space-y-2">
                        {transactions.slice(0, 3).map((txn) => (
                          <div key={txn.id} className="flex justify-between text-sm">
                            <span>{txn.description}</span>
                            <span className={txn.type === 'Credit' ? 'text-success' : 'text-destructive'}>
                              {txn.type === 'Credit' ? '+' : ''}{txn.amount}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kyc" className="space-y-4 mt-6">
            <div className="grid gap-4">
              {kycDocuments.map((doc) => (
                <Card key={doc.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{doc.type}</h3>
                        <p className="text-sm text-muted-foreground">
                          Uploaded: {doc.uploadDate}
                        </p>
                        {doc.expiryDate !== 'N/A' && (
                          <p className="text-sm text-muted-foreground">
                            Expires: {doc.expiryDate}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            doc.status === 'Verified' ? 'default' :
                            doc.status === 'Pending' ? 'secondary' : 'destructive'
                          }
                        >
                          {doc.status === 'Verified' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {doc.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                          {doc.status === 'Rejected' && <XCircle className="w-3 h-3 mr-1" />}
                          {doc.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-4 mt-6">
            <div className="space-y-4">
              {interactions.map((interaction) => (
                <Card key={interaction.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {interaction.type === 'Phone Call' && <Phone className="w-4 h-4" />}
                          {interaction.type === 'Email' && <Mail className="w-4 h-4" />}
                          <h3 className="font-semibold">{interaction.type}</h3>
                          <Badge variant="outline">{interaction.duration}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{interaction.notes}</p>
                        <p className="text-sm text-muted-foreground">
                          By: {interaction.agent} on {interaction.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4 mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.task}</TableCell>
                    <TableCell>{task.dueDate}</TableCell>
                    <TableCell>
                      <Badge variant={task.status === 'Pending' ? 'secondary' : 'default'}>
                        {task.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{task.assignedTo}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Complete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="loans" className="space-y-4 mt-6">
            <div className="grid gap-4">
              {loans.map((loan) => (
                <Card key={loan.id}>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Loan Type</p>
                        <p className="font-semibold">{loan.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Principal</p>
                        <p className="font-semibold">${loan.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Outstanding</p>
                        <p className="font-semibold">${loan.outstanding.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly EMI</p>
                        <p className="font-semibold">${loan.emi}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        Next Due Date: <span className="font-medium">{loan.nextDue}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tickets" className="space-y-4 mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Resolved</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>
                      <Badge variant={ticket.status === 'Resolved' ? 'default' : 'secondary'}>
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={ticket.priority === 'High' ? 'destructive' : 'default'}>
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{ticket.created}</TableCell>
                    <TableCell>{ticket.resolved || '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerProfile;