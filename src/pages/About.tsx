
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Database, Zap, BarChart3, Smartphone, Cloud, Waves, Speaker, Battery, Settings } from 'lucide-react';

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

  const workingPrinciple = [
    {
      title: 'Sound Wave Capture',
      description: 'Piezoelectric sensors (Sonic Tiles) capture ambient noise and sound waves from traffic, machinery, and urban environments.',
      icon: Waves,
      details: 'Our sensors convert mechanical vibrations from sound waves into electrical energy using piezoelectric materials.'
    },
    {
      title: 'Energy Conversion',
      description: 'Multiple energy harvesting technologies work together: Piezoelectric generators, TENG (Triboelectric) layers, Linear generators, and Acoustic resonators.',
      icon: Battery,
      details: 'Each technology captures different aspects of sound energy, maximizing overall conversion efficiency.'
    },
    {
      title: 'Data Processing',
      description: 'Real-time monitoring systems process noise levels, energy output, and environmental conditions.',
      icon: Settings,
      details: 'Advanced algorithms optimize energy capture and predict generation patterns based on noise patterns.'
    },
    {
      title: 'Energy Storage & Distribution',
      description: 'Generated energy is stored in batteries and can power small devices or feed into local grids.',
      icon: Zap,
      details: 'Smart power management ensures optimal energy utilization and grid integration.'
    }
  ];

  const contributors = [
    'Vaishanvi L',
    'Rishi R S',
    'Devanandan SS'
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

      {/* How SONOVOLT Works */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl text-center flex items-center justify-center space-x-3">
            <Speaker className="w-8 h-8 text-primary" />
            <span>How SONOVOLT Works</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workingPrinciple.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="border-primary/30 bg-gradient-to-br from-card to-primary/5">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-medium text-primary">{step.details}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Energy Harvesting Technologies */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Energy Harvesting Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Piezoelectric Generators</h3>
              <p className="text-sm">Convert mechanical stress from sound waves directly into electrical energy using crystal materials.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-lg">
              <h3 className="font-bold text-lg mb-2">TENG Layers</h3>
              <p className="text-sm">Triboelectric nanogenerators harvest energy from contact and separation of materials due to sound vibrations.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Linear Generators</h3>
              <p className="text-sm">Electromagnetic induction systems that convert linear motion from sound waves into electrical power.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Acoustic Resonators</h3>
              <p className="text-sm">Specialized chambers that amplify specific sound frequencies to maximize energy capture efficiency.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GitHub Section */}
      <div className="flex justify-center space-x-4">
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
