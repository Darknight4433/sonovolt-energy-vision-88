
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Zap, Volume2, TrendingUp, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Dashboard = () => {
  const energyData = [
    { time: '00:00', energy: 2.4, noise: 45 },
    { time: '04:00', energy: 1.8, noise: 35 },
    { time: '08:00', energy: 4.2, noise: 65 },
    { time: '12:00', energy: 3.8, noise: 58 },
    { time: '16:00', energy: 5.1, noise: 72 },
    { time: '20:00', energy: 3.2, noise: 52 },
  ];

  const locations = [
    { name: 'Central School', energy: 4.2, noise: 68, status: 'optimal', devices: 12 },
    { name: 'Bus Terminal', energy: 5.8, noise: 85, status: 'high', devices: 8 },
    { name: 'City Hospital', energy: 2.1, noise: 42, status: 'low', devices: 6 },
    { name: 'Main Square', energy: 3.5, noise: 59, status: 'optimal', devices: 15 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-success';
      case 'high': return 'text-warning';
      case 'low': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'optimal': return <CheckCircle className="w-4 h-4 text-success" />;
      case 'high': return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'low': return <AlertTriangle className="w-4 h-4 text-muted-foreground" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Energy Generated</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">15.8 kWh</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Noise Level</CardTitle>
            <Volume2 className="h-4 w-4 text-sound" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">63.5 dB</div>
            <p className="text-xs text-muted-foreground">
              Across all locations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
            <MapPin className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">41</div>
            <p className="text-xs text-success">
              <CheckCircle className="inline w-3 h-3 mr-1" />
              All systems operational
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <Progress value={94.2} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Energy Generation Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="energy" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Noise Levels by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={locations}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="noise" fill="hsl(var(--sound))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Location Status */}
      <Card>
        <CardHeader>
          <CardTitle>Location Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locations.map((location, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(location.status)}
                  <div>
                    <h3 className="font-medium">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">{location.devices} active devices</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Energy</p>
                    <p className="font-bold text-primary">{location.energy} kW</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Noise</p>
                    <p className="font-bold">{location.noise} dB</p>
                  </div>
                  <Badge variant="outline" className={getStatusColor(location.status)}>
                    {location.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
