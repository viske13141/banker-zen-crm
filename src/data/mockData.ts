// Mock data for the CRM system

export const mockCustomers = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1-555-0123',
    accountNumber: 'ACC001234',
    branch: 'Downtown Branch',
    relationshipManager: 'Sarah Wilson',
    accountType: 'Premium Savings',
    balance: 125000,
    status: 'Active',
    kycStatus: 'Approved',
    joinDate: '2023-01-15',
    lastActivity: '2024-01-20'
  },
  {
    id: '2',
    name: 'Emily Johnson',
    email: 'emily.johnson@email.com',
    phone: '+1-555-0124',
    accountNumber: 'ACC001235',
    branch: 'Downtown Branch',
    relationshipManager: 'Sarah Wilson',
    accountType: 'Business Current',
    balance: 750000,
    status: 'Active',
    kycStatus: 'Pending',
    joinDate: '2023-03-22',
    lastActivity: '2024-01-19'
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@email.com',
    phone: '+1-555-0125',
    accountNumber: 'ACC001236',
    branch: 'Uptown Branch',
    relationshipManager: 'David Miller',
    accountType: 'Regular Savings',
    balance: 45000,
    status: 'Active',
    kycStatus: 'Approved',
    joinDate: '2023-06-10',
    lastActivity: '2024-01-18'
  }
];

export const mockLeads = [
  {
    id: '1',
    name: 'Robert Davis',
    email: 'robert.davis@email.com',
    phone: '+1-555-0126',
    source: 'Website',
    product: 'Home Loan',
    status: 'Hot',
    assignedTo: 'Sarah Wilson',
    value: 500000,
    createdDate: '2024-01-15',
    lastContact: '2024-01-20'
  },
  {
    id: '2',
    name: 'Lisa Wilson',
    email: 'lisa.wilson@email.com',
    phone: '+1-555-0127',
    source: 'Referral',
    product: 'Credit Card',
    status: 'Warm',
    assignedTo: 'David Miller',
    value: 15000,
    createdDate: '2024-01-12',
    lastContact: '2024-01-19'
  },
  {
    id: '3',
    name: 'Thomas Anderson',
    email: 'thomas.anderson@email.com',
    phone: '+1-555-0128',
    source: 'Walk-in',
    product: 'Fixed Deposit',
    status: 'Cold',
    assignedTo: 'Sarah Wilson',
    value: 100000,
    createdDate: '2024-01-10',
    lastContact: '2024-01-16'
  }
];

export const mockTickets = [
  {
    id: 'TKT001',
    customerId: '1',
    customerName: 'John Smith',
    subject: 'Unable to access online banking',
    description: 'Customer cannot log into their online banking account',
    priority: 'High',
    status: 'Open',
    assignedTo: 'Mike Support',
    category: 'Technical',
    createdDate: '2024-01-20',
    slaBreachTime: '2024-01-22T10:00:00',
    lastUpdated: '2024-01-20'
  },
  {
    id: 'TKT002',
    customerId: '2',
    customerName: 'Emily Johnson',
    subject: 'Debit card blocked',
    description: 'Customer\'s debit card has been blocked due to suspicious activity',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 'Mike Support',
    category: 'Account',
    createdDate: '2024-01-19',
    slaBreachTime: '2024-01-21T14:00:00',
    lastUpdated: '2024-01-20'
  },
  {
    id: 'TKT003',
    customerId: '3',
    customerName: 'Michael Brown',
    subject: 'Request for account statement',
    description: 'Customer requesting last 6 months account statement',
    priority: 'Low',
    status: 'Completed',
    assignedTo: 'Sarah Support',
    category: 'Request',
    createdDate: '2024-01-18',
    slaBreachTime: '2024-01-20T16:00:00',
    lastUpdated: '2024-01-19'
  }
];

export const mockTransactions = [
  {
    id: 'TXN001',
    accountNumber: 'ACC001234',
    date: '2024-01-20',
    description: 'Online Transfer to John Doe',
    debit: 5000,
    credit: 0,
    balance: 125000,
    type: 'Transfer'
  },
  {
    id: 'TXN002',
    accountNumber: 'ACC001234',
    date: '2024-01-19',
    description: 'Salary Credit',
    debit: 0,
    credit: 85000,
    balance: 130000,
    type: 'Credit'
  },
  {
    id: 'TXN003',
    accountNumber: 'ACC001234',
    date: '2024-01-18',
    description: 'ATM Withdrawal',
    debit: 2000,
    credit: 0,
    balance: 45000,
    type: 'Withdrawal'
  }
];

export const mockMeetings = [
  {
    id: '1',
    customerName: 'John Smith',
    customerId: '1',
    date: '2024-01-22',
    time: '10:00 AM',
    purpose: 'Home Loan Discussion',
    status: 'Scheduled',
    location: 'Downtown Branch'
  },
  {
    id: '2',
    customerName: 'Emily Johnson',
    customerId: '2',
    date: '2024-01-23',
    time: '2:00 PM',
    purpose: 'Investment Planning',
    status: 'Scheduled',
    location: 'Online'
  }
];

export const mockReports = [
  {
    id: '1',
    name: 'Customer Analytics Report',
    type: 'Customer',
    generatedDate: '2024-01-20',
    format: 'PDF',
    size: '2.5 MB'
  },
  {
    id: '2',
    name: 'Lead Conversion Report',
    type: 'Lead',
    generatedDate: '2024-01-19',
    format: 'Excel',
    size: '1.8 MB'
  },
  {
    id: '3',
    name: 'Support Tickets Summary',
    type: 'Ticket',
    generatedDate: '2024-01-18',
    format: 'PDF',
    size: '3.2 MB'
  }
];

export const mockActivityLogs = [
  {
    id: '1',
    user: 'Sarah Wilson',
    action: 'Created new customer account',
    details: 'Account ACC001237 created for Jane Doe',
    timestamp: '2024-01-20T09:30:00',
    type: 'Create'
  },
  {
    id: '2',
    user: 'Mike Support',
    action: 'Resolved support ticket',
    details: 'Ticket TKT003 marked as completed',
    timestamp: '2024-01-20T08:45:00',
    type: 'Update'
  },
  {
    id: '3',
    user: 'John Manager',
    action: 'Approved loan application',
    details: 'Home loan for $500,000 approved',
    timestamp: '2024-01-19T16:20:00',
    type: 'Approve'
  }
];

export const mockKycDocuments = [
  {
    id: '1',
    customerId: '1',
    customerName: 'John Smith',
    documentType: 'Passport',
    status: 'Approved',
    uploadDate: '2024-01-15',
    reviewDate: '2024-01-16'
  },
  {
    id: '2',
    customerId: '2',
    customerName: 'Emily Johnson',
    documentType: 'Driver License',
    status: 'Pending',
    uploadDate: '2024-01-18',
    reviewDate: null
  },
  {
    id: '3',
    customerId: '1',
    customerName: 'John Smith',
    documentType: 'Utility Bill',
    status: 'Approved',
    uploadDate: '2024-01-15',
    reviewDate: '2024-01-16'
  }
];