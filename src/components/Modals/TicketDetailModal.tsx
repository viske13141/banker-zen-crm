import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  TicketIcon, 
  Clock, 
  User, 
  MessageSquare, 
  Activity,
  Send,
  Paperclip,
  CheckCircle,
  X
} from 'lucide-react';

interface TicketDetailModalProps {
  open: boolean;
  onClose: () => void;
  ticketId?: string;
}

const TicketDetailModal: React.FC<TicketDetailModalProps> = ({ open, onClose, ticketId }) => {
  const [newReply, setNewReply] = useState('');
  const [ticketStatus, setTicketStatus] = useState('open');
  const [internalNote, setInternalNote] = useState('');

  const ticketData = {
    id: ticketId || 'TKT001',
    subject: 'Unable to access online banking',
    customer: {
      name: 'John Smith',
      id: 'CUST001',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      avatar: 'JS'
    },
    status: 'Open',
    priority: 'High',
    category: 'Technical Support',
    assignedTo: 'Mike Support',
    createdDate: '2024-01-20 09:00:00',
    updatedDate: '2024-01-20 11:30:00',
    slaDeadline: '2024-01-20 13:00:00'
  };

  const conversationThread = [
    {
      id: 1,
      sender: 'Customer',
      name: 'John Smith',
      avatar: 'JS',
      message: 'Hi, I\'m unable to access my online banking account. I keep getting an error message that says "Invalid credentials" even though I\'m sure my password is correct.',
      timestamp: '2024-01-20 09:00:00',
      attachments: ['screenshot_error.png']
    },
    {
      id: 2,
      sender: 'Agent',
      name: 'Mike Support',
      avatar: 'MS',
      message: 'Hello John, I understand your frustration. Let me help you resolve this issue. Can you please try clearing your browser cache and cookies, then attempt to log in again?',
      timestamp: '2024-01-20 09:15:00',
      attachments: []
    },
    {
      id: 3,
      sender: 'Customer',
      name: 'John Smith',
      avatar: 'JS',
      message: 'I tried that but still having the same issue. The error persists.',
      timestamp: '2024-01-20 10:30:00',
      attachments: []
    },
    {
      id: 4,
      sender: 'Internal',
      name: 'Mike Support',
      avatar: 'MS',
      message: 'Customer has tried basic troubleshooting. Checking account status in backend system.',
      timestamp: '2024-01-20 10:35:00',
      attachments: [],
      isInternal: true
    }
  ];

  const activityLog = [
    { action: 'Ticket created', user: 'System', timestamp: '2024-01-20 09:00:00' },
    { action: 'Assigned to Mike Support', user: 'Auto-Assignment', timestamp: '2024-01-20 09:01:00' },
    { action: 'Status changed to In Progress', user: 'Mike Support', timestamp: '2024-01-20 09:15:00' },
    { action: 'Priority escalated to High', user: 'Mike Support', timestamp: '2024-01-20 10:00:00' },
    { action: 'Internal note added', user: 'Mike Support', timestamp: '2024-01-20 10:35:00' }
  ];

  const handleSendReply = () => {
    if (newReply.trim()) {
      console.log('Sending reply:', newReply);
      setNewReply('');
    }
  };

  const handleAddInternalNote = () => {
    if (internalNote.trim()) {
      console.log('Adding internal note:', internalNote);
      setInternalNote('');
    }
  };

  const handleStatusChange = (newStatus: string) => {
    setTicketStatus(newStatus);
    console.log('Status changed to:', newStatus);
  };

  const handleCloseTicket = () => {
    console.log('Closing ticket with status:', ticketStatus);
    onClose();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'default';
      case 'Low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TicketIcon className="w-5 h-5" />
            Ticket Details - {ticketData.id}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="conversation">Conversation</TabsTrigger>
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
              <TabsTrigger value="close">Close Ticket</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                {/* Ticket Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Ticket Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{ticketData.subject}</h3>
                      <p className="text-sm text-muted-foreground">ID: {ticketData.id}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant="destructive">{ticketData.status}</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Priority</p>
                        <Badge variant={getPriorityColor(ticketData.priority) as any}>
                          {ticketData.priority}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium">{ticketData.category}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Assigned To</p>
                      <p className="font-medium">{ticketData.assignedTo}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Created</p>
                        <p className="text-sm">{ticketData.createdDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Updated</p>
                        <p className="text-sm">{ticketData.updatedDate}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">SLA Deadline</p>
                      <p className="text-sm text-destructive font-medium flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {ticketData.slaDeadline}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Customer Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>{ticketData.customer.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{ticketData.customer.name}</h3>
                        <p className="text-sm text-muted-foreground">ID: {ticketData.customer.id}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-sm">{ticketData.customer.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-sm">{ticketData.customer.phone}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        <User className="w-4 h-4 mr-2" />
                        View Customer Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="conversation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Conversation Thread
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {conversationThread.map((message) => (
                      <div key={message.id} className={`flex gap-3 ${message.isInternal ? 'bg-warning/10 p-3 rounded-lg' : ''}`}>
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">{message.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{message.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {message.sender}
                            </Badge>
                            {message.isInternal && (
                              <Badge variant="secondary" className="text-xs">Internal</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{message.message}</p>
                          {message.attachments.length > 0 && (
                            <div className="flex gap-2">
                              {message.attachments.map((attachment, index) => (
                                <div key={index} className="flex items-center gap-1 text-xs text-primary">
                                  <Paperclip className="w-3 h-3" />
                                  {attachment}
                                </div>
                              ))}
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mt-4 space-y-4">
                    {/* Public Reply */}
                    <div>
                      <label className="text-sm font-medium">Add Reply</label>
                      <Textarea
                        placeholder="Type your reply to the customer..."
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                        className="mt-1"
                      />
                      <div className="flex justify-between items-center mt-2">
                        <Button variant="outline" size="sm">
                          <Paperclip className="w-4 h-4 mr-2" />
                          Attach File
                        </Button>
                        <Button onClick={handleSendReply} size="sm">
                          <Send className="w-4 h-4 mr-2" />
                          Send Reply
                        </Button>
                      </div>
                    </div>

                    {/* Internal Note */}
                    <div>
                      <label className="text-sm font-medium">Internal Note</label>
                      <Textarea
                        placeholder="Add internal note (only visible to staff)..."
                        value={internalNote}
                        onChange={(e) => setInternalNote(e.target.value)}
                        className="mt-1"
                      />
                      <div className="flex justify-end mt-2">
                        <Button onClick={handleAddInternalNote} variant="outline" size="sm">
                          Add Internal Note
                        </Button>
                      </div>
                    </div>

                    {/* Change Status */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium">Change Status:</label>
                      <Select value={ticketStatus} onValueChange={handleStatusChange}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="in_progress">In Progress</SelectItem>
                          <SelectItem value="pending">Pending Customer</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Activity Log
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activityLog.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.action}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-muted-foreground">by {activity.user}</p>
                            <p className="text-xs text-muted-foreground">• {activity.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="close" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Close Ticket
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Final Resolution Status</label>
                    <Select value={ticketStatus} onValueChange={setTicketStatus}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resolved">Resolved - Issue Fixed</SelectItem>
                        <SelectItem value="closed">Closed - Customer Satisfied</SelectItem>
                        <SelectItem value="escalated">Escalated - Requires Higher Level</SelectItem>
                        <SelectItem value="duplicate">Duplicate - Already Addressed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Final Remarks</label>
                    <Textarea
                      placeholder="Provide final comments about the resolution..."
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Close Reason (Optional)</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select close reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resolved">Issue Resolved</SelectItem>
                        <SelectItem value="customer_satisfied">Customer Satisfied</SelectItem>
                        <SelectItem value="no_response">No Customer Response</SelectItem>
                        <SelectItem value="duplicate">Duplicate Request</SelectItem>
                        <SelectItem value="invalid">Invalid Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" onClick={onClose}>
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                    <Button onClick={handleCloseTicket} className="flex-1">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Close Ticket
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketDetailModal;