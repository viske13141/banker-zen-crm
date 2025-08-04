import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { TicketIcon, MessageSquare, AlertCircle } from 'lucide-react';

interface CreateTicketModalProps {
  open: boolean;
  onClose: () => void;
  customerId?: string;
  customerName?: string;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({ 
  open, 
  onClose, 
  customerId, 
  customerName 
}) => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: '',
    description: '',
    assignTo: ''
  });

  const categories = [
    'Account Issues',
    'Card Problems',
    'Online Banking',
    'Loan Inquiry',
    'Investment Query',
    'KYC/Documentation',
    'Transaction Issues',
    'Technical Support',
    'General Inquiry'
  ];

  const supportAgents = [
    { id: 'agent1', name: 'Mike Support', specialization: 'Technical', availability: 'Available' },
    { id: 'agent2', name: 'Jane Helper', specialization: 'Account Issues', availability: 'Busy' },
    { id: 'agent3', name: 'Tom Resolver', specialization: 'Cards & Payments', availability: 'Available' }
  ];

  const handleSubmit = () => {
    console.log('Creating ticket:', { ...formData, customerId, customerName });
    onClose();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TicketIcon className="w-5 h-5" />
            Create Support Ticket
          </DialogTitle>
          <DialogDescription>
            {customerName ? `Creating ticket for: ${customerName}` : 'Create a new support ticket'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {customerName && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Customer:</strong> {customerName}
                {customerId && <span className="text-muted-foreground ml-2">({customerId})</span>}
              </p>
            </div>
          )}

          <div>
            <Label>Subject</Label>
            <Input
              placeholder="Brief description of the issue"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(' ', '_')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Priority</Label>
              <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-destructive" />
                      High Priority
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              placeholder="Detailed description of the issue..."
              className="min-h-[100px]"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>

          <div>
            <Label>Assign to Support Agent</Label>
            <Select value={formData.assignTo} onValueChange={(value) => setFormData({...formData, assignTo: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Auto-assign or select agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto-assign</SelectItem>
                {supportAgents.map((agent) => (
                  <SelectItem key={agent.id} value={agent.id}>
                    <div className="flex items-center justify-between w-full">
                      <span>{agent.name}</span>
                      <div className="flex items-center gap-2 ml-2">
                        <Badge variant="outline" className="text-xs">
                          {agent.specialization}
                        </Badge>
                        <Badge 
                          variant={agent.availability === 'Available' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {agent.availability}
                        </Badge>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {formData.priority && (
            <div className="p-3 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={getPriorityColor(formData.priority) as any}>
                  {formData.priority.toUpperCase()} PRIORITY
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {formData.priority === 'high' && 'SLA: 4 hours response time'}
                {formData.priority === 'medium' && 'SLA: 24 hours response time'}
                {formData.priority === 'low' && 'SLA: 72 hours response time'}
              </p>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!formData.subject || !formData.category || !formData.description}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Create Ticket
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTicketModal;