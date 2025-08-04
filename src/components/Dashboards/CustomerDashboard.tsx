import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  CreditCard,
  DollarSign,
  FileText,
  Upload,
  Download,
  Eye,
  Search,
  Filter,
  Building2,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { mockTransactions, mockKycDocuments } from '@/data/mockData';

const CustomerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const accountSummary = {
    savingsBalance: 125000,
    currentBalance: 45000,
    fixedDeposits: 200000,
    loanOutstanding: 350000,
    creditCardLimit: 50000,
    creditCardUsed: 12500
  };

  const accountCards = [
    {
      title: 'Savings Account',
      balance: '$125,000',
      accountNumber: 'SAV-001234',
      type: 'Primary',
      icon: Building2,
      color: 'text-primary'
    },
    {
      title: 'Current Account',
      balance: '$45,000',
      accountNumber: 'CUR-001235',
      type: 'Business',
      icon: DollarSign,
      color: 'text-success'
    },
    {
      title: 'Credit Card',
      balance: '$12,500 / $50,000',
      accountNumber: '****-1234',
      type: 'Premium',
      icon: CreditCard,
      color: 'text-info'
    }
  ];

  const applicationStatus = [
    {
      id: '1',
      type: 'Fixed Deposit',
      amount: '$50,000',
      status: 'Approved',
      appliedDate: '2024-01-15',
      expectedProcessing: '2024-01-25'
    },
    {
      id: '2',
      type: 'Home Loan',
      amount: '$500,000',
      status: 'Under Review',
      appliedDate: '2024-01-10',
      expectedProcessing: '2024-02-10'
    },
    {
      id: '3',
      type: 'Personal Loan',
      amount: '$25,000',
      status: 'Pending Documents',
      appliedDate: '2024-01-18',
      expectedProcessing: '2024-02-15'
    }
  ];

  const kycDocuments = [
    {
      id: '1',
      type: 'Passport',
      status: 'Approved',
      uploadDate: '2024-01-15',
      expiryDate: '2029-01-15'
    },
    {
      id: '2',
      type: 'Utility Bill',
      status: 'Approved',
      uploadDate: '2024-01-15',
      expiryDate: '2024-04-15'
    },
    {
      id: '3',
      type: 'Income Certificate',
      status: 'Pending Review',
      uploadDate: '2024-01-20',
      expiryDate: '2024-07-20'
    }
  ];

  const handleDownloadStatement = (period: string) => {
    console.log(`Downloading ${period} statement...`);
  };

  const handleUploadDocument = () => {
    console.log('Opening document upload dialog...');
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Banking Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Alice Customer</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload Documents
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download Statement
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search transactions, documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accountCards.map((account, index) => {
          const Icon = account.icon;
          return (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{account.title}</CardTitle>
                <Icon className={`w-4 h-4 ${account.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{account.balance}</div>
                <p className="text-xs text-muted-foreground">{account.accountNumber}</p>
                <Badge variant="outline" className="mt-2">
                  {account.type}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Portfolio Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Portfolio Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-primary">
                ${accountSummary.savingsBalance.toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">Total Savings</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-success">
                ${accountSummary.fixedDeposits.toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">Fixed Deposits</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-destructive">
                ${accountSummary.loanOutstanding.toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">Outstanding Loans</p>
            </div>
            <div className="text-center p-4 border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-info">
                ${(accountSummary.creditCardLimit - accountSummary.creditCardUsed).toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">Available Credit</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Account Management</CardTitle>
          <CardDescription>Manage your accounts, transactions, and applications</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="transactions" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="kyc">KYC Documents</TabsTrigger>
              <TabsTrigger value="statements">Statements</TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    Last 30 Days
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Debit</TableHead>
                    <TableHead className="text-right">Credit</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTransactions.map((transaction) => (
                    <TableRow key={transaction.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.type}</Badge>
                      </TableCell>
                      <TableCell className="text-right text-destructive">
                        {transaction.debit > 0 ? `$${transaction.debit.toLocaleString()}` : '-'}
                      </TableCell>
                      <TableCell className="text-right text-success">
                        {transaction.credit > 0 ? `$${transaction.credit.toLocaleString()}` : '-'}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${transaction.balance.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="applications" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">FD/Loan Application Status</h3>
                <Button size="sm">
                  New Application
                </Button>
              </div>
              <div className="space-y-4">
                {applicationStatus.map((application) => (
                  <Card key={application.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold">{application.type}</h4>
                          <p className="text-sm text-muted-foreground">Amount: {application.amount}</p>
                        </div>
                        <Badge 
                          variant={
                            application.status === 'Approved' ? 'default' :
                            application.status === 'Under Review' ? 'secondary' : 'outline'
                          }
                        >
                          {application.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Applied Date</p>
                          <p className="font-medium">{application.appliedDate}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Expected Processing</p>
                          <p className="font-medium">{application.expectedProcessing}</p>
                        </div>
                      </div>
                      {application.status === 'Under Review' && (
                        <div className="mt-3 p-2 bg-info/10 rounded-lg">
                          <p className="text-sm text-info">Your application is currently under review. We'll notify you once it's processed.</p>
                        </div>
                      )}
                      {application.status === 'Pending Documents' && (
                        <div className="mt-3 p-2 bg-warning/10 rounded-lg">
                          <p className="text-sm text-warning">Additional documents required. Please upload the missing documents.</p>
                          <Button size="sm" variant="outline" className="mt-2">
                            <Upload className="w-3 h-3 mr-1" />
                            Upload Documents
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="kyc" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">KYC Documents</h3>
                <Button size="sm" onClick={handleUploadDocument}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload New Document
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kycDocuments.map((doc) => (
                  <Card key={doc.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium">{doc.type}</h4>
                          <p className="text-sm text-muted-foreground">
                            Uploaded: {doc.uploadDate}
                          </p>
                        </div>
                        <Badge 
                          variant={
                            doc.status === 'Approved' ? 'default' :
                            doc.status === 'Pending Review' ? 'secondary' : 'destructive'
                          }
                        >
                          {doc.status === 'Approved' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {doc.status === 'Pending Review' && <Clock className="w-3 h-3 mr-1" />}
                          {doc.status === 'Rejected' && <AlertCircle className="w-3 h-3 mr-1" />}
                          {doc.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Expires: {doc.expiryDate}
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        {doc.status === 'Approved' && (
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="statements" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Account Statements</h3>
                <p className="text-sm text-muted-foreground">
                  Download your account statements
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-medium mb-2">Current Month</h4>
                    <p className="text-sm text-muted-foreground mb-3">January 2024</p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleDownloadStatement('current')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-success" />
                    <h4 className="font-medium mb-2">Last 3 Months</h4>
                    <p className="text-sm text-muted-foreground mb-3">Oct - Dec 2023</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleDownloadStatement('quarterly')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-info" />
                    <h4 className="font-medium mb-2">Last 6 Months</h4>
                    <p className="text-sm text-muted-foreground mb-3">Jul - Dec 2023</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleDownloadStatement('half-yearly')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <FileText className="w-8 h-8 mx-auto mb-2 text-warning" />
                    <h4 className="font-medium mb-2">Annual Statement</h4>
                    <p className="text-sm text-muted-foreground mb-3">Full Year 2023</p>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleDownloadStatement('annual')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Custom Date Range</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate statement for a specific date range
                </p>
                <div className="flex gap-2 items-end">
                  <div className="flex-1">
                    <label className="text-sm font-medium">From Date</label>
                    <Input type="date" />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium">To Date</label>
                    <Input type="date" />
                  </div>
                  <Button>
                    Generate
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerDashboard;