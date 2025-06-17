
import { EnergyData, Location, SensorData, DashboardStats, GeneratorData, ApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

class ApiService {
  private async fetchWithErrorHandling<T>(url: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ApiResponse<T> = await response.json();
      return data.data;
    } catch (error) {
      console.error(`API Error fetching ${url}:`, error);
      throw error;
    }
  }

  // Get energy data for charts
  async getEnergyData(): Promise<EnergyData[]> {
    return this.fetchWithErrorHandling<EnergyData[]>('/energy-data');
  }

  // Get Kerala locations data
  async getLocations(): Promise<Location[]> {
    return this.fetchWithErrorHandling<Location[]>('/locations');
  }

  // Get live sensor data
  async getLiveSensorData(): Promise<SensorData[]> {
    return this.fetchWithErrorHandling<SensorData[]>('/sensors/live');
  }

  // Get dashboard stats
  async getDashboardStats(): Promise<DashboardStats> {
    return this.fetchWithErrorHandling<DashboardStats>('/dashboard/stats');
  }

  // Get generator data
  async getGeneratorData(): Promise<GeneratorData[]> {
    return this.fetchWithErrorHandling<GeneratorData[]>('/generators');
  }

  // Submit sensor reading (for future use)
  async submitSensorReading(sensorId: string, data: Partial<SensorData>): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/sensors/${sensorId}/reading`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting sensor reading:', error);
      throw error;
    }
  }
}

export const apiService = new ApiService();

// Mock data for development when backend is not available
export const mockData = {
  energyData: [
    { time: '00:00', energy: 2.4, noise: 45 },
    { time: '04:00', energy: 1.8, noise: 35 },
    { time: '08:00', energy: 4.2, noise: 65 },
    { time: '12:00', energy: 3.8, noise: 58 },
    { time: '16:00', energy: 5.1, noise: 72 },
    { time: '20:00', energy: 3.2, noise: 52 },
  ],
  
  locations: [
    { name: 'Kochi Metro', energy: 5.8, noise: 85, status: 'high' as const, devices: 15 },
    { name: 'Thiruvananthapuram Bus Terminal', energy: 4.2, noise: 72, status: 'optimal' as const, devices: 12 },
    { name: 'Kozhikode Railway Station', energy: 3.8, noise: 68, status: 'optimal' as const, devices: 10 },
    { name: 'Thrissur Cultural Centre', energy: 2.9, noise: 58, status: 'optimal' as const, devices: 8 },
    { name: 'Alappuzha Boat Jetty', energy: 2.1, noise: 45, status: 'low' as const, devices: 6 },
    { name: 'Palakkad Market', energy: 3.5, noise: 62, status: 'optimal' as const, devices: 9 },
  ],
  
  sensorData: [
    { 
      id: 'ST-001', 
      location: 'Central School - Main Entrance',
      noise: 67.2, 
      energy: 4.3, 
      status: 'active' as const,
      lastUpdate: '2 sec ago',
      timestamp: new Date().toISOString()
    },
    { 
      id: 'ST-002', 
      location: 'Bus Terminal - Platform A',
      noise: 82.1, 
      energy: 6.1, 
      status: 'active' as const,
      lastUpdate: '1 sec ago',
      timestamp: new Date().toISOString()
    },
    { 
      id: 'ST-003', 
      location: 'City Hospital - Ambulance Bay',
      noise: 45.8, 
      energy: 2.9, 
      status: 'active' as const,
      lastUpdate: '3 sec ago',
      timestamp: new Date().toISOString()
    },
    { 
      id: 'ST-004', 
      location: 'Main Square - Central Area',
      noise: 59.4, 
      energy: 3.7, 
      status: 'active' as const,
      lastUpdate: '1 sec ago',
      timestamp: new Date().toISOString()
    },
    { 
      id: 'ST-005', 
      location: 'Highway Junction - Overpass',
      noise: 73.6, 
      energy: 5.2, 
      status: 'maintenance' as const,
      lastUpdate: '15 min ago',
      timestamp: new Date().toISOString()
    },
    { 
      id: 'ST-006', 
      location: 'University Campus - Library',
      noise: 38.2, 
      energy: 1.8, 
      status: 'active' as const,
      lastUpdate: '2 sec ago',
      timestamp: new Date().toISOString()
    },
  ],
  
  dashboardStats: {
    totalEnergyGenerated: 22.3,
    averageNoiseLevel: 65.0,
    activeDevices: 60,
    efficiencyRate: 92.8,
  },

  generatorData: [
    {
      id: 'GEN-001',
      name: 'Piezo Output',
      energy: 12.8,
      description: 'High voltage, low current',
      status: 'active' as const,
      icon: 'zap'
    },
    {
      id: 'GEN-002',
      name: 'TENG Layer',
      energy: 7.2,
      description: 'Friction energy capture',
      status: 'active' as const,
      icon: 'waves'
    },
    {
      id: 'GEN-003',
      name: 'Linear Generator',
      energy: 2.3,
      description: 'Electromagnetic boost',
      status: 'active' as const,
      icon: 'circle'
    },
    {
      id: 'GEN-004',
      name: 'Acoustic Resonator',
      energy: 4.1,
      description: 'Sound wave conversion',
      status: 'active' as const,
      icon: 'speaker'
    }
  ]
};
