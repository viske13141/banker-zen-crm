import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth, UserRole } from '@/contexts/AuthContext';
import { Building2, Shield, Users, Headphones, User } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const roleIcons = {
  admin: Shield,
  bank_manager: Building2,
  relationship_manager: Users,
  support_agent: Headphones,
  customer: User,
};

const roleLabels = {
  admin: 'System Administrator',
  bank_manager: 'Bank Manager',
  relationship_manager: 'Relationship Manager',
  support_agent: 'Support Agent',
  customer: 'Customer',
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('customer');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const success = login(email, password, role);
    
    if (success) {
      toast({
        title: "Login Successful",
        description: `Welcome back! Redirecting to your ${roleLabels[role]} dashboard.`,
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const RoleIcon = roleIcons[role];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light/20 to-accent/20">
      <div className="w-full max-w-md p-6">
        <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">SecureBank CRM</CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to access your dashboard
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <Select value={role} onValueChange={(value) => setRole(value as UserRole)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border">
                    {Object.entries(roleLabels).map(([value, label]) => {
                      const Icon = roleIcons[value as UserRole];
                      return (
                        <SelectItem key={value} value={value} className="cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            <span>{label}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <RoleIcon className="w-4 h-4" />
                    Sign in as {roleLabels[role]}
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Demo Credentials: Any email/password combination works
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;