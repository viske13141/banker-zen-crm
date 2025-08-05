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
  Building2,
  Calendar,
  Award,
  Target,
  TrendingUp,
  Users,
  Edit,
  MapPin
} from 'lucide-react';

interface RelationshipManagerProfileProps {
  open: boolean;
  onClose: () => void;
}

const RelationshipManagerProfile: React.FC<RelationshipManagerProfileProps> = ({ open, onClose }) => {
  const rmData = {
    id: 'RM001',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@bank.com',
    phone: '+1 (555) 456-7890',
    branch: 'Downtown Branch',
    location: 'New York, NY',
    joinDate: '2021-08-15',
    specialization: ['High Net Worth Clients', 'Investment Banking'],
    manager: 'John Manager',
    avatar: 'SW'
  };

  const performanceMetrics = [
    { label: 'Assigned Customers', value: '42', trend: '+3', color: 'text-primary' },
    { label: 'Active Leads', value: '18', trend: '+5', color: 'text-success' },
    { label: 'Conversion Rate', value: '78%', trend: '+12%', color: 'text-success' },
    { label: 'Portfolio Value', value: '$2.8M', trend: '+15%', color: 'text-success' }
  ];

  const customerDistribution = [
    { category: 'High Net Worth', count: 15, percentage: 36 },
    { category: 'Premium', count: 12, percentage: 29 },
    { category: 'Standard', count: 15, percentage: 35 }
  ];

  const recentAchievements = [
    { title: 'Top Performer Q4 2023', description: 'Highest conversion rate in branch', date: '2024-01-10' },
    { title: 'Customer Champion', description: '100% customer satisfaction score', date: '2023-12-15' },
    { title: 'Lead Master', description: 'Converted 25 leads in one month', date: '2023-11-20' }
  ];

  const upcomingTasks = [
    { task: 'Client meeting with John Smith', time: 'Today, 2:00 PM', priority: 'High' },
    { task: 'KYC document review', time: 'Today, 4:00 PM', priority: 'Medium' },
    { task: 'Follow-up call with new lead', time: 'Tomorrow, 10:00 AM', priority: 'High' },
    { task: 'Portfolio review meeting', time: 'Tomorrow, 3:00 PM', priority: 'Medium' }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Relationship Manager Profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Header */}
          <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="text-lg font-bold">
                {rmData.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{rmData.name}</h3>
                <Button size="sm" variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              <p className="text-muted-foreground">Relationship Manager • {rmData.branch}</p>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {rmData.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {rmData.phone}
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                {rmData.specialization.map((spec, index) => (
                  <Badge key={index} variant="secondary">{spec}</Badge>
                ))}
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="tasks">Tasks & Goals</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{rmData.branch}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{rmData.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Joined {rmData.joinDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Reports to {rmData.manager}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Customer Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {customerDistribution.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item.category}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{item.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {performanceMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                          <p className="text-2xl font-bold">{metric.value}</p>
                        </div>
                        <div className="text-right">
                          <TrendingUp className="w-4 h-4 text-success mb-1" />
                          <p className={`text-sm font-medium ${metric.color}`}>
                            {metric.trend}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div className="flex-1">
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tasks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Upcoming Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <h4 className="font-medium">{task.task}</h4>
                          <p className="text-sm text-muted-foreground">{task.time}</p>
                        </div>
                        <Badge 
                          variant={task.priority === 'High' ? 'destructive' : 'secondary'}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">New Customers</span>
                        <span className="text-sm font-medium">8/10</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Lead Conversions</span>
                        <span className="text-sm font-medium">12/15</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-success h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Portfolio Growth</span>
                        <span className="text-sm font-medium">$2.8M/$3M</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-info h-2 rounded-full" style={{ width: '93%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Personal Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Update Customer Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Target className="w-4 h-4 mr-2" />
                    Set Monthly Goals
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

export default RelationshipManagerProfile;