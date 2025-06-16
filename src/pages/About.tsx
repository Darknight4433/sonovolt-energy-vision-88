
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Github, ExternalLink, Code, Database, Zap, BarChart3, Smartphone, Cloud } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React 18', icon: Code, description: 'Modern UI framework' },
    { name: 'TypeScript', icon: Code, description: 'Type-safe development' },
    { name: 'Tailwind CSS', icon: Code, description: 'Utility-first styling' },
    { name: 'Recharts', icon: BarChart3, description: 'Data visualization' },
    { name: 'TanStack Query', icon: Database, description: 'Data fetching' },
    { name: 'WebSocket', icon: Cloud, description: 'Real-time updates' }
  ];

  const features = [
    {
      title: 'Real-time Dashboard',
      description: 'Monitor energy generation and noise levels across Kerala locations',
      icon: BarChart3
    },
    {
      title: 'Live Monitoring',
      description: 'Real-time sensor data with WebSocket support for instant updates',
      icon: Zap
    },
    {
      title: 'Kerala Locations',
      description: 'Track multiple monitoring points across Kerala with interactive maps',
      icon: Database
    },
    {
      title: 'Responsive Design',
      description: 'Works seamlessly on desktop and mobile devices',
      icon: Smartphone
    }
  ];

  const contributors = [
    'Darknight4433',
    'Rishi.R.S',
    'DEVIL-00'
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-energy to-sound rounded-lg flex items-center justify-center">
            <Zap className="w-7 h-7 text-black" />
          </div>
          <h1 className="text-4xl font-bold text-energy">SONOVOLT</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Sound Energy Management System - A comprehensive web application for monitoring, managing, and visualizing energy harvested from noise pollution across Kerala, India.
        </p>
      </div>

      {/* Download & GitHub Section */}
      <div className="flex justify-center space-x-4">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Download className="w-5 h-5 mr-2" />
          Download Project
        </Button>
        <Button variant="outline" size="lg">
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
        </Button>
        <Button variant="outline" size="lg">
          <ExternalLink className="w-5 h-5 mr-2" />
          Live Demo
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tech Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">{tech.name}</p>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Project Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Project Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary/50 p-4 rounded-lg">
            <pre className="text-sm text-muted-foreground overflow-x-auto">
{`src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── LiveMonitoring.tsx
│   └── Navigation.tsx
├── hooks/              # Custom React hooks
│   ├── useApi.ts       # API data fetching
│   └── useWebSocket.ts # WebSocket connection
├── services/           # API services
│   └── api.ts          # API client & mock data
├── types/              # TypeScript definitions
│   └── index.ts        # Data models
├── pages/              # Route components
└── lib/                # Utilities`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Contributors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contributors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {contributors.map((contributor, index) => (
              <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                {contributor}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* License & Getting Started */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-secondary/50 p-3 rounded-lg">
              <code className="text-sm">npm install</code>
            </div>
            <div className="bg-secondary/50 p-3 rounded-lg">
              <code className="text-sm">npm run dev</code>
            </div>
            <p className="text-sm text-muted-foreground">
              The application will be available at localhost:5173
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>License</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="mb-3">MIT License</Badge>
            <p className="text-sm text-muted-foreground">
              This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
