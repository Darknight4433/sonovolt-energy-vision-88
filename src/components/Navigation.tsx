
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Settings, Users, BookOpen, Bell, LogIn, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Dashboard', icon: BarChart3 },
    { path: '/monitoring', label: 'Live Monitoring', icon: BarChart3 },
    { path: '/devices', label: 'Device Control', icon: Settings },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/users', label: 'Users', icon: Users },
    { path: '/education', label: 'Education', icon: BookOpen },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8ad00399-ddaa-4921-bbf9-b1bfb1012db9.png" 
                  alt="SONOVOLT Logo" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-xl font-bold text-energy">SONOVOLT</span>
            </Link>
            
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/20 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-muted-foreground hover:text-foreground">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full"></span>
            </button>
            
            <Link to="/signin">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Button>
            </Link>
            
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
