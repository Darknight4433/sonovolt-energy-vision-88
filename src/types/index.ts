
export interface EnergyData {
  time: string;
  energy: number;
  noise: number;
}

export interface Location {
  name: string;
  energy: number;
  noise: number;
  status: 'optimal' | 'high' | 'low';
  devices: number;
  coordinates?: { lat: number; lng: number };
}

export interface SensorData {
  id: string;
  location: string;
  noise: number;
  energy: number;
  status: 'active' | 'maintenance' | 'offline';
  lastUpdate: string;
  timestamp: string;
}

export interface GeneratorData {
  id: string;
  name: string;
  energy: number;
  description: string;
  status: 'active' | 'maintenance' | 'offline';
  icon: string;
}

export interface DashboardStats {
  totalEnergyGenerated: number;
  averageNoiseLevel: number;
  activeDevices: number;
  efficiencyRate: number;
}

export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}
