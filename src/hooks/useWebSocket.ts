
import { useEffect, useState, useCallback } from 'react';

interface UseWebSocketOptions {
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
}

export const useWebSocket = <T>(
  url: string, 
  options: UseWebSocketOptions = {}
) => {
  const { reconnectInterval = 3000, maxReconnectAttempts = 5 } = options;
  
  const [data, setData] = useState<T | null>(null);
  const [connected, setConnected] = useState(false);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(url);
      
      ws.onopen = () => {
        console.log('WebSocket connected');
        setConnected(true);
        setReconnectAttempts(0);
        setError(null);
      };
      
      ws.onmessage = (event) => {
        try {
          const parsedData = JSON.parse(event.data);
          setData(parsedData);
        } catch (parseError) {
          console.error('Error parsing WebSocket data:', parseError);
          setError('Error parsing received data');
        }
      };
      
      ws.onclose = () => {
        console.log('WebSocket disconnected');
        setConnected(false);
        
        // Auto-reconnect logic
        if (reconnectAttempts < maxReconnectAttempts) {
          setTimeout(() => {
            setReconnectAttempts(prev => prev + 1);
            connect();
          }, reconnectInterval);
        } else {
          setError('Max reconnection attempts reached');
        }
      };
      
      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        setError('WebSocket connection error');
      };
      
      return ws;
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      setError('Failed to create WebSocket connection');
      return null;
    }
  }, [url, reconnectInterval, maxReconnectAttempts, reconnectAttempts]);

  useEffect(() => {
    const ws = connect();
    
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [connect]);

  const reconnect = useCallback(() => {
    setReconnectAttempts(0);
    connect();
  }, [connect]);

  return { data, connected, error, reconnect };
};
