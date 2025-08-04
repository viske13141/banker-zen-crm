import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserPlus, Edit, Trash2, Shield, Users } from 'lucide-react';

interface ManageUsersModalProps {
  open: boolean;
  onClose: () => void;
}

const ManageUsersModal: React.FC<ManageUsersModalProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('users');
  const [showAddUser, setShowAddUser] = useState(false);

  const users = [
    {
      id: '1',
      name: 'John Manager',
      email: 'john.manager@bank.com',
      role: 'Bank Manager',
      branch: 'Downtown',
      status: 'Active',
      lastLogin: '2024-01-20'
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@bank.com',
      role: 'Relationship Manager',
      branch: 'Downtown',
      status: 'Active',
      lastLogin: '2024-01-20'
    },
    {
      id: '3',
      name: 'Mike Support',
      email: 'mike.support@bank.com',
      role: 'Support Agent',
      branch: 'All',
      status: 'Active',
      lastLogin: '2024-01-19'
    }
  ];

  const roles = [
    { id: '1', name: 'Admin', permissions: ['All'], users: 1 },
    { id: '2', name: 'Bank Manager', permissions: ['Branch Management', 'User Management', 'Reports'], users: 3 },
    { id: '3', name: 'Relationship Manager', permissions: ['Customer Management', 'Lead Management'], users: 12 },
    { id: '4', name: 'Support Agent', permissions: ['Ticket Management', 'Customer Support'], users: 8 },
    { id: '5', name: 'Customer', permissions: ['Self Service'], users: 12345 }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            User Management
          </DialogTitle>
          <DialogDescription>
            Manage system users, roles, and permissions
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">System Users</h3>
              <Button onClick={() => setShowAddUser(true)}>
                <UserPlus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Branch</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.branch}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-destructive">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="roles" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Roles & Permissions</h3>
              <Button variant="outline">
                <Shield className="w-4 h-4 mr-2" />
                Add Role
              </Button>
            </div>

            <div className="grid gap-4">
              {roles.map((role) => (
                <div key={role.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{role.name}</h4>
                      <p className="text-sm text-muted-foreground">{role.users} users</p>
                    </div>
                    <Button size="sm" variant="outline">Edit</Button>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.map((permission, index) => (
                      <Badge key={index} variant="outline">{permission}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audit" className="space-y-4">
            <h3 className="text-lg font-semibold">User Activity Audit Logs</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>IP Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2024-01-20 14:30:00</TableCell>
                  <TableCell>Sarah Wilson</TableCell>
                  <TableCell>Customer Profile View</TableCell>
                  <TableCell>CUST001</TableCell>
                  <TableCell>192.168.1.100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2024-01-20 14:25:00</TableCell>
                  <TableCell>John Manager</TableCell>
                  <TableCell>Report Download</TableCell>
                  <TableCell>Monthly Branch Report</TableCell>
                  <TableCell>192.168.1.101</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>

        {/* Add User Modal */}
        {showAddUser && (
          <Dialog open={showAddUser} onOpenChange={setShowAddUser}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>First Name</Label>
                    <Input placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter email address" />
                </div>
                <div>
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank_manager">Bank Manager</SelectItem>
                      <SelectItem value="relationship_manager">Relationship Manager</SelectItem>
                      <SelectItem value="support_agent">Support Agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Branch</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="downtown">Downtown Branch</SelectItem>
                      <SelectItem value="uptown">Uptown Branch</SelectItem>
                      <SelectItem value="suburban">Suburban Branch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowAddUser(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setShowAddUser(false)}>
                    Create User
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ManageUsersModal;