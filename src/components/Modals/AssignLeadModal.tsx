import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserCheck, Calendar, TrendingUp } from 'lucide-react';

interface AssignLeadModalProps {
  open: boolean;
  onClose: () => void;
  leadId?: string;
  leadName?: string;
}

const AssignLeadModal: React.FC<AssignLeadModalProps> = ({ open, onClose, leadId, leadName }) => {
  const [selectedRM, setSelectedRM] = useState('');
  const [priority, setPriority] = useState('');
  const [notes, setNotes] = useState('');

  const relationshipManagers = [
    {
      id: 'rm1',
      name: 'Sarah Wilson',
      workload: 'Light',
      specialization: 'Home Loans',
      performance: '4.8/5',
      currentLeads: 23
    },
    {
      id: 'rm2',
      name: 'David Miller',
      workload: 'Medium',
      specialization: 'Personal Banking',
      performance: '4.5/5',
      currentLeads: 32
    },
    {
      id: 'rm3',
      name: 'Lisa Chen',
      workload: 'Heavy',
      specialization: 'Business Banking',
      performance: '4.6/5',
      currentLeads: 45
    }
  ];

  const handleAssign = () => {
    console.log('Assigning lead:', { leadId, selectedRM, priority, notes });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserCheck className="w-5 h-5" />
            Assign Lead to Relationship Manager
          </DialogTitle>
          <DialogDescription>
            {leadName && `Assigning lead: ${leadName}`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold">Select Relationship Manager</Label>
            <div className="mt-2 space-y-3">
              {relationshipManagers.map((rm) => (
                <div
                  key={rm.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedRM === rm.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedRM(rm.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {rm.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{rm.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Specialization: {rm.specialization}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            rm.workload === 'Light' ? 'default' :
                            rm.workload === 'Medium' ? 'secondary' : 'destructive'
                          }
                        >
                          {rm.workload} Load
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {rm.currentLeads} leads | ⭐ {rm.performance}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Lead Priority</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Expected Follow-up</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="this_week">This Week</SelectItem>
                  <SelectItem value="next_week">Next Week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Assignment Notes</Label>
            <Textarea
              placeholder="Add any specific instructions or notes for the RM..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleAssign} disabled={!selectedRM}>
              <TrendingUp className="w-4 h-4 mr-2" />
              Assign Lead
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignLeadModal;