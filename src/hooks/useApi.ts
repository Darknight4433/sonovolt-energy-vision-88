
import { useQuery, QueryKey } from '@tanstack/react-query';
import { apiService, mockData } from '../services/api';

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

export const useEnergyData = () => {
  return useQuery({
    queryKey: ['energyData'],
    queryFn: USE_MOCK_DATA ? 
      () => Promise.resolve(mockData.energyData) : 
      apiService.getEnergyData,
    refetchInterval: 5000,
    staleTime: 3000,
  });
};

export const useLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: USE_MOCK_DATA ? 
      () => Promise.resolve(mockData.locations) : 
      apiService.getLocations,
    refetchInterval: 10000,
    staleTime: 8000,
  });
};

export const useLiveSensorData = () => {
  return useQuery({
    queryKey: ['liveSensorData'],
    queryFn: USE_MOCK_DATA ? 
      () => Promise.resolve(mockData.sensorData) : 
      apiService.getLiveSensorData,
    refetchInterval: 2000,
    staleTime: 1000,
  });
};

export const useDashboardStats = () => {
  return useQuery({
    queryKey: ['dashboardStats'],
    queryFn: USE_MOCK_DATA ? 
      () => Promise.resolve(mockData.dashboardStats) : 
      apiService.getDashboardStats,
    refetchInterval: 5000,
    staleTime: 3000,
  });
};
