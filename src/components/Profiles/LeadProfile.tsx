import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  User,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  Tag,
  Phone,
  Mail,
  MapPin,
  Download,
  Eye,
  CheckCircle,
  Clock,
  Building2,
  DollarSign,
  UserPlus
} from 'lucide-react';

interface LeadProfileProps {
  leadId: string;
  onClose: () => void;
}

const LeadProfile: React.FC<LeadProfileProps> = ({ leadId, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [showConvertModal, setShowConvertModal] = useState(false);

  // Mock lead data - in real app, fetch based on leadId
  const lead = {
    id: leadId,
    name: 'Alice Johnson',
    email: 'alice.johnson@email.com',
    phone: '+1 (555) 987-6543',
    address: '456 Oak St, Los Angeles, CA 90001',
    source: 'Website',
    status: 'Hot',
    assignedTo: 'Sarah Wilson',
    leadId: 'LEAD001',
    createdDate: '2024-01-15',
    lastContact: '2024-01-20',
    interestedProduct: 'Home Loan',
    estimatedValue: 450000,
    notes: 'Interested in purchasing first home. Pre-approved budget of $500K.'
  };

  const activities = [
    {
      id: '1',
      type: 'Phone Call',
      date: '2024-01-20',
      agent: 'Sarah Wilson',
      notes: 'Discussed loan pre-approval process',
      duration: '20 mins',
      outcome: 'Positive'
    },
    {
      id: '2',
      type: 'Email',
      date: '2024-01-18',
      agent: 'Sarah Wilson',
      notes: 'Sent loan documentation requirements',
      duration: '-',
      outcome: 'Sent'
    },
    {
      id: '3',
      type: 'Meeting',
      date: '2024-01-16',
      agent: 'Sarah Wilson',
      notes: 'Initial consultation meeting',
      duration: '45 mins',
      outcome: 'Scheduled follow-up'
    }
  ];

  const followUps = [
    {
      id: '1',
      task: 'Send loan application form',
      dueDate: '2024-01-22',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: '2',
      task: 'Schedule property valuation',
      dueDate: '2024-01-25',
      status: 'Scheduled',
      priority: 'Medium'
    },
    {
      id: '3',
      task: 'Follow up on document submission',
      dueDate: '2024-01-28',
      status: 'Pending',
      priority: 'Medium'
    }
  ];

  const attachments = [
    {
      id: '1',
      name: 'Income Certificate.pdf',
      type: 'Income Proof',
      uploadDate: '2024-01-18',
      size: '2.4 MB'
    },
    {
      id: '2',
      name: 'ID_Copy.pdf',
      type: 'Identity Proof',
      uploadDate: '2024-01-18',
      size: '1.8 MB'
    }
  ];

  const conversionOptions = [
    'Savings Account',
    'Current Account',
    'Home Loan',
    'Personal Loan',
    'Credit Card',
    'Investment Account'
  ];

  const handleConvertToCustomer = (productType: string) => {
    console.log(`Converting lead ${leadId} to customer with product: ${productType}`);
    // In real app, this would call API to convert lead
    setShowConvertModal(false);
    onClose();
  };

  return (
    <>
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-success text-success-foreground">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold">{lead.name}</h2>
                <p className="text-muted-foreground">Lead ID: {lead.leadId}</p>
              </div>
              <div className="ml-auto">
                <Button onClick={() => setShowConvertModal(true)} className="mr-2">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Convert to Customer
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="details">Lead Details</TabsTrigger>
              <TabsTrigger value="activity">Activity History</TabsTrigger>
              <TabsTrigger value="followups">Follow-Ups</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-6">
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
                      <span>{lead.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{lead.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{lead.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span>Source: {lead.source}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Lead Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <Badge 
                        variant={
                          lead.status === 'Hot' ? 'destructive' :
                          lead.status === 'Warm' ? 'default' : 'secondary'
                        }
                      >
                        {lead.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Assigned RM:</span>
                      <span>{lead.assignedTo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Product Interest:</span>
                      <span>{lead.interestedProduct}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Value:</span>
                      <span className="font-semibold">${lead.estimatedValue.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Notes & Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label>Notes</Label>
                      <p className="text-sm text-muted-foreground mt-1">{lead.notes}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <Badge variant="outline">High Value</Badge>
                      <Badge variant="outline">First Time Buyer</Badge>
                      <Badge variant="outline">Pre-approved</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4 mt-6">
              <div className="space-y-4">
                {activities.map((activity) => (
                  <Card key={activity.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {activity.type === 'Phone Call' && <Phone className="w-4 h-4" />}
                            {activity.type === 'Email' && <Mail className="w-4 h-4" />}
                            {activity.type === 'Meeting' && <Calendar className="w-4 h-4" />}
                            <h3 className="font-semibold">{activity.type}</h3>
                            <Badge variant="outline">{activity.duration}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{activity.notes}</p>
                          <p className="text-sm text-muted-foreground">
                            By: {activity.agent} on {activity.date}
                          </p>
                        </div>
                        <Badge 
                          variant={
                            activity.outcome === 'Positive' ? 'default' : 'secondary'
                          }
                        >
                          {activity.outcome}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="followups" className="space-y-4 mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {followUps.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.task}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            task.status === 'Scheduled' ? 'default' : 'secondary'
                          }
                        >
                          {task.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            task.priority === 'High' ? 'destructive' :
                            task.priority === 'Medium' ? 'default' : 'secondary'
                          }
                        >
                          {task.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          {task.status === 'Pending' ? 'Complete' : 'View'}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="attachments" className="space-y-4 mt-6">
              <div className="grid gap-4">
                {attachments.map((file) => (
                  <Card key={file.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{file.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Type: {file.type} | Size: {file.size}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Uploaded: {file.uploadDate}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
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

            <TabsContent value="conversion" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserPlus className="w-5 h-5" />
                    Convert Lead to Customer
                  </CardTitle>
                  <CardDescription>
                    Select the product type to convert this lead into a customer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Current Lead Value</Label>
                      <p className="text-2xl font-bold text-success">
                        ${lead.estimatedValue.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <Label>Conversion Probability</Label>
                      <p className="text-2xl font-bold text-warning">85%</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Select Product Type</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {conversionOptions.map((product) => (
                        <Button
                          key={product}
                          variant="outline"
                          className="h-auto p-4 text-left"
                          onClick={() => handleConvertToCustomer(product)}
                        >
                          <div>
                            <p className="font-medium">{product}</p>
                            {product === lead.interestedProduct && (
                              <Badge variant="default" className="mt-1">Interested</Badge>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Convert to Customer Modal */}
      <Dialog open={showConvertModal} onOpenChange={setShowConvertModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Convert Lead to Customer</DialogTitle>
            <DialogDescription>
              Are you sure you want to convert this lead to a customer? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowConvertModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => handleConvertToCustomer(lead.interestedProduct)}>
              Convert Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LeadProfile;