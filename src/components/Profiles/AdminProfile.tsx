import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Mail, 
  Phone, 
  Shield,
  Calendar,
  Settings,
  Users,
  Building2,
  Key,
  Edit,
  Activity,
  Database
} from 'lucide-react';

interface AdminProfileProps {
  open: boolean;
  onClose: () => void;
}

const AdminProfile: React.FC<AdminProfileProps> = ({ open, onClose }) => {
  const adminData = {
    id: 'ADM001',
    name: 'Admin User',
    email: 'admin@bank.com',
    phone: '+1 (555) 111-2222',
    department: 'System Administration',
    joinDate: '2019-01-15',
    clearanceLevel: 'Level 5 - Full Access',
    lastLogin: '2024-01-20 08:30 AM',
    avatar: 'AU'
  };

  const systemStats = [
    { label: 'Total Users', value: '1,234', change: '+45', period: 'This Month' },
    { label: 'System Uptime', value: '99.9%', change: '+0.1%', period: 'Last 30 Days' },
    { label: 'Active Sessions', value: '347', change: '+23', period: 'Current' },
    { label: 'Data Processed', value: '2.8TB', change: '+156GB', period: 'Today' }
  ];

  const permissions = [
    { module: 'User Management', access: 'Full Access', status: 'Active' },
    { module: 'Customer Data', access: 'Read/Write', status: 'Active' },
    { module: 'Financial Reports', access: 'Full Access', status: 'Active' },
    { module: 'System Configuration', access: 'Full Access', status: 'Active' },
    { module: 'Audit Logs', access: 'Read Only', status: 'Active' },
    { module: 'Branch Management', access: 'Full Access', status: 'Active' }
  ];

  const recentActions = [
    { action: 'Created new user account for Sarah Johnson', time: '2 hours ago', type: 'User Management' },
    { action: 'Updated system security settings', time: '4 hours ago', type: 'Security' },
    { action: 'Generated quarterly report', time: '6 hours ago', type: 'Reports' },
    { action: 'Approved KYC document batch', time: '1 day ago', type: 'Compliance' },
    { action: 'Backed up customer database', time: '1 day ago', type: 'System' }
  ];

  const systemHealth = [
    { component: 'Database Server', status: 'Healthy', uptime: '99.9%' },
    { component: 'Authentication Service', status: 'Healthy', uptime: '100%' },
    { component: 'Payment Gateway', status: 'Warning', uptime: '98.5%' },
    { component: 'Backup System', status: 'Healthy', uptime: '99.8%' }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Administrator Profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Header */}
          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="text-lg font-bold">
                {adminData.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{adminData.name}</h3>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              <p className="text-muted-foreground">System Administrator</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {adminData.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {adminData.phone}
                </span>
              </div>
              <div className="mt-2">
                <Badge variant="destructive" className="flex items-center gap-1 w-fit">
                  <Shield className="w-3 h-3" />
                  {adminData.clearanceLevel}
                </Badge>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="system">System Health</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="activity">Activity Log</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Administrator Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Employee ID</span>
                      <span className="text-sm font-medium">{adminData.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Department</span>
                      <span className="text-sm font-medium">{adminData.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Join Date</span>
                      <span className="text-sm font-medium">{adminData.joinDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last Login</span>
                      <span className="text-sm font-medium">{adminData.lastLogin}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">System Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {systemStats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <p className="text-lg font-bold text-primary">{stat.value}</p>
                          <p className="text-xs font-medium">{stat.label}</p>
                          <p className="text-xs text-muted-foreground">{stat.period}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="system" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    System Health Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemHealth.map((system, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">{system.component}</h4>
                          <p className="text-sm text-muted-foreground">Uptime: {system.uptime}</p>
                        </div>
                        <Badge 
                          variant={
                            system.status === 'Healthy' ? 'default' :
                            system.status === 'Warning' ? 'secondary' : 'destructive'
                          }
                        >
                          {system.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="permissions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    Access Permissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {permissions.map((permission, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">{permission.module}</h4>
                          <p className="text-sm text-muted-foreground">{permission.access}</p>
                        </div>
                        <Badge variant="default">{permission.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Recent Administrative Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActions.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.action}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                            <Badge variant="outline" className="text-xs">{activity.type}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Personal Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Manage System Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    System Configuration
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Database className="w-4 h-4 mr-2" />
                    Database Management
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminProfile;