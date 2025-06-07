
# SONOVOLT - Sound Energy Management System

A comprehensive web application for monitoring, managing, and visualizing energy harvested from noise pollution across Kerala, India.

## Features

- **Real-time Dashboard**: Monitor energy generation and noise levels
- **Live Monitoring**: Real-time sensor data with WebSocket support
- **Kerala Locations**: Track multiple monitoring points across Kerala
- **Data Visualization**: Interactive charts and graphs
- **Responsive Design**: Works on desktop and mobile devices
- **Backend Integration**: Ready for API integration with fallback to mock data

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Charts**: Recharts library
- **State Management**: TanStack React Query
- **Real-time**: WebSocket support
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd sonovolt-app
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.development .env.local
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Environment Configuration

### Development (.env.development)
```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
VITE_USE_MOCK_DATA=true
```

### Production (.env.production)
```
VITE_API_BASE_URL=https://your-api.sonovolt.com/api
VITE_WS_URL=wss://your-api.sonovolt.com
VITE_USE_MOCK_DATA=false
```

## Backend Integration

The application is designed to work with a REST API backend. Expected endpoints:

### API Endpoints

- `GET /api/energy-data` - Energy generation over time
- `GET /api/locations` - Kerala monitoring locations
- `GET /api/sensors/live` - Live sensor data
- `GET /api/dashboard/stats` - Dashboard statistics

### WebSocket

Real-time updates via WebSocket connection at `/sensors` endpoint.

### Data Models

See `src/types/index.ts` for TypeScript interfaces:
- `EnergyData` - Time-series energy data
- `Location` - Monitoring location info
- `SensorData` - Real-time sensor readings
- `DashboardStats` - Summary statistics

## Development

### Mock Data

When `VITE_USE_MOCK_DATA=true`, the application uses mock data from `src/services/api.ts`. This allows development without a backend.

### Real-time Features

- WebSocket connection for live updates
- Automatic reconnection on connection loss
- Fallback to API polling if WebSocket fails

### Error Handling

- Error boundaries for component crashes
- Loading states for all data fetching
- Graceful error messages for API failures

## Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
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
└── lib/                # Utilities
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
