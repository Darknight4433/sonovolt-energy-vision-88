
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Volume2, Zap, Activity, Pause, Play, RefreshCw } from 'lucide-react';

const LiveMonitoring = () => {
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sensorData = [
    { 
      id: 'ST-001', 
      location: 'Central School - Main Entrance',
      noise: 67.2, 
      energy: 4.3, 
      status: 'active',
      lastUpdate: '2 sec ago'
    },
    { 
      id: 'ST-002', 
      location: 'Bus Terminal - Platform A',
      noise: 82.1, 
      energy: 6.1, 
      status: 'active',
      lastUpdate: '1 sec ago'
    },
    { 
      id: 'ST-003', 
      location: 'City Hospital - Ambulance Bay',
      noise: 45.8, 
      energy: 2.9, 
      status: 'active',
      lastUpdate: '3 sec ago'
    },
    { 
      id: 'ST-004', 
      location: 'Main Square - Central Area',
      noise: 59.4, 
      energy: 3.7, 
      status: 'active',
      lastUpdate: '1 sec ago'
    },
    { 
      id: 'ST-005', 
      location: 'Highway Junction - Overpass',
      noise: 73.6, 
      energy: 5.2, 
      status: 'maintenance',
      lastUpdate: '15 min ago'
    },
    { 
      id: 'ST-006', 
      location: 'University Campus - Library',
      noise: 38.2, 
      energy: 1.8, 
      status: 'active',
      lastUpdate: '2 sec ago'
    },
  ];

  const getNoiseLevel = (noise: number) => {
    if (noise < 50) return { level: 'Low', color: 'text-success', bg: 'bg-success/20' };
    if (noise < 70) return { level: 'Moderate', color: 'text-warning', bg: 'bg-warning/20' };
    return { level: 'High', color: 'text-destructive', bg: 'bg-destructive/20' };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'maintenance': return 'bg-warning text-warning-foreground';
      case 'offline': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const SoundWaveVisualizer = ({ noise }: { noise: number }) => {
    const intensity = Math.min(noise / 100, 1);
    return (
      <div className="flex items-center space-x-1 h-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1 bg-gradient-to-t from-sound to-sound/50 sound-wave`}
            style={{
              height: `${20 + (intensity * 12 * (i + 1))}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${1 + intensity}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Live Monitoring</h1>
          <p className="text-muted-foreground">
            Real-time noise levels and energy generation
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-muted-foreground">
            Last updated: {currentTime.toLocaleTimeString()}
          </div>
          <Button
            onClick={() => setIsLive(!isLive)}
            variant={isLive ? "destructive" : "default"}
            size="sm"
          >
            {isLive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isLive ? 'Pause' : 'Resume'}
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Live Status Indicator */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-success pulse-green' : 'bg-muted-foreground'}`} />
            <div>
              <h3 className="font-semibold">System Status</h3>
              <p className="text-sm text-muted-foreground">
                {isLive ? 'Live monitoring active' : 'Monitoring paused'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Sensors</p>
              <p className="text-2xl font-bold">6</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Active</p>
              <p className="text-2xl font-bold text-success">5</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Maintenance</p>
              <p className="text-2xl font-bold text-warning">1</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sensor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sensorData.map((sensor) => {
          const noiseInfo = getNoiseLevel(sensor.noise);
          return (
            <Card key={sensor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{sensor.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">{sensor.location}</p>
                  </div>
                  <Badge className={getStatusColor(sensor.status)}>
                    {sensor.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Sound Visualization */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-5 h-5 text-sound" />
                    <span className="font-medium">Noise Level</span>
                  </div>
                  <SoundWaveVisualizer noise={sensor.noise} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg ${noiseInfo.bg}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Sound</span>
                      <Activity className="w-4 h-4 text-sound" />
                    </div>
                    <div className="mt-1">
                      <span className="text-2xl font-bold">{sensor.noise}</span>
                      <span className="text-sm text-muted-foreground ml-1">dB</span>
                    </div>
                    <Badge variant="outline" className={`mt-2 ${noiseInfo.color}`}>
                      {noiseInfo.level}
                    </Badge>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-primary/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Energy</span>
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="mt-1">
                      <span className="text-2xl font-bold text-primary">{sensor.energy}</span>
                      <span className="text-sm text-muted-foreground ml-1">kW</span>
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Updated {sensor.lastUpdate}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LiveMonitoring;
