import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import DashboardHeader from '@/components/Layout/DashboardHeader';
import Chatbot from '@/components/Layout/Chatbot';
import AdminDashboard from '@/components/Dashboards/AdminDashboard';
import BankManagerDashboard from '@/components/Dashboards/BankManagerDashboard';
import RelationshipManagerDashboard from '@/components/Dashboards/RelationshipManagerDashboard';
import SupportAgentDashboard from '@/components/Dashboards/SupportAgentDashboard';
import CustomerDashboard from '@/components/Dashboards/CustomerDashboard';

const DashboardRouter = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'bank_manager':
        return <BankManagerDashboard />;
      case 'relationship_manager':
        return <RelationshipManagerDashboard />;
      case 'support_agent':
        return <SupportAgentDashboard />;
      case 'customer':
        return <CustomerDashboard />;
      default:
        return <div>Dashboard not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="p-6">
        {renderDashboard()}
      </main>
      <Chatbot />
    </div>
  );
};

export default DashboardRouter;