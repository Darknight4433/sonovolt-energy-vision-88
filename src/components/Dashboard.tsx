
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Zap, Volume2, TrendingUp, MapPin, AlertTriangle, CheckCircle, Activity, Waves, Navigation, Cpu } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useEnergyData, useLocations, useDashboardStats, useGeneratorData } from '../hooks/useApi';
import LoadingSpinner from './LoadingSpinner';

const Dashboard = () => {
  const { data: energyData, isLoading: energyLoading, error: energyError } = useEnergyData();
  const { data: locations, isLoading: locationsLoading, error: locationsError } = useLocations();
  const { data: stats, isLoading: statsLoading, error: statsError } = useDashboardStats();
  const { data: generators, isLoading: generatorLoading, error: generatorError } = useGeneratorData();

  // Multi-technology chart data
  const multiTechData = [
    { time: '00:00', piezo: 1.2, teng: 0.8, linear: 0.5, total: 2.5 },
    { time: '04:00', piezo: 1.5, teng: 1.0, linear: 0.6, total: 3.1 },
    { time: '08:00', piezo: 1.8, teng: 1.2, linear: 0.7, total: 3.7 },
    { time: '12:00', piezo: 1.9, teng: 1.2, linear: 0.7, total: 3.8 },
    { time: '16:00', piezo: 2.1, teng: 1.4, linear: 0.8, total: 4.3 },
    { time: '20:00', piezo: 1.7, teng: 1.1, linear: 0.6, total: 3.4 },
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

  if (energyError || locationsError || statsError || generatorError) {
    return (
      <div className="text-center py-20">
        <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">Error Loading Dashboard</h2>
        <p className="text-muted-foreground">
          Unable to fetch data from the server. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      {/* Header Stats - 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card className="bg-gray-900 border-green-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Total Energy Harvested</CardTitle>
            <Zap className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <div className="text-3xl font-bold text-green-400">22.3 kWh</div>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <span className="text-green-500 mr-1">+15%</span> from yesterday
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-blue-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Piezo Output</CardTitle>
            <Volume2 className="h-5 w-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            {generatorLoading ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <div className="text-3xl font-bold text-white">12.8 kWh</div>
                <p className="text-xs text-gray-400">High voltage, low current</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-orange-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">TENG Layer</CardTitle>
            <Volume2 className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            {generatorLoading ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <div className="text-3xl font-bold text-white">7.2 kWh</div>
                <p className="text-xs text-gray-400">Friction energy capture</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-red-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">Linear Generator</CardTitle>
            <MapPin className="h-5 w-5 text-red-500" />
          </CardHeader>
          <CardContent>
            {generatorLoading ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <div className="text-3xl font-bold text-white">2.3 kWh</div>
                <p className="text-xs text-gray-400">Electromagnetic boost</p>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-green-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300">System Efficiency</CardTitle>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <LoadingSpinner size="sm" />
            ) : (
              <>
                <div className="text-3xl font-bold text-white">94.2%</div>
                <Progress value={94.2} className="mt-2 bg-gray-700" />
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Multi-Technology Chart */}
      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">Hybrid Energy Generation - Multi-Technology Output</CardTitle>
        </CardHeader>
        <CardContent>
          {energyLoading ? (
            <div className="h-[400px] flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={multiTechData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="time" 
                  stroke="#9CA3AF" 
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF" 
                  tick={{ fill: '#9CA3AF' }}
                  domain={[0, 8]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: 'white'
                  }}
                  labelStyle={{ color: 'white' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="piezo" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Piezo Disc"
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="teng" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  name="TENG Layer"
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="linear" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  name="Linear Generator"
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="total" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Total Output"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Technology Component Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-blue-400" />
              <CardTitle className="text-lg font-medium text-blue-300">Piezo Disc Array</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-200 mb-2">Pressure from steps</p>
            <div className="text-2xl font-bold text-white mb-1">High V, Low I</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-6 w-6 text-orange-400" />
              <CardTitle className="text-lg font-medium text-orange-300">TENG Layer</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-200 mb-2">Sliding/friction motion</p>
            <div className="text-2xl font-bold text-white mb-1">Microamps</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-900/50 to-red-800/30 border-red-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Navigation className="h-6 w-6 text-red-400" />
              <CardTitle className="text-lg font-medium text-red-300">Linear Generator</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-red-200 mb-2">Vertical/shake motion</p>
            <div className="text-2xl font-bold text-white mb-1">Moderate I</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/30 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center space-x-2">
              <Cpu className="h-6 w-6 text-purple-400" />
              <CardTitle className="text-lg font-medium text-purple-300">Copper Layer</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-200 mb-2">Capacitive buildup</p>
            <div className="text-2xl font-bold text-white mb-1">Minor Charge</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-900 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-white">Energy Generation Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            {energyLoading ? (
              <div className="h-[300px] flex items-center justify-center">
                <LoadingSpinner />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="energy" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-white">Noise Levels by Kerala Areas</CardTitle>
          </CardHeader>
          <CardContent>
            {locationsLoading ? (
              <div className="h-[300px] flex items-center justify-center">
                <LoadingSpinner />
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={locations}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#9CA3AF" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={11}
                  />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="noise" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Location Status */}
      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardHeader>
          <CardTitle className="text-white">Kerala Location Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {locationsLoading ? (
            <div className="flex justify-center py-8">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="space-y-4">
              {locations?.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(location.status)}
                    <div>
                      <h3 className="font-medium text-white">{location.name}</h3>
                      <p className="text-sm text-gray-400">{location.devices} active devices</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Energy</p>
                      <p className="font-bold text-green-400">{location.energy} kW</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Noise</p>
                      <p className="font-bold text-white">{location.noise} dB</p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(location.status)}>
                      {location.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
