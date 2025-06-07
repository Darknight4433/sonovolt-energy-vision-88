
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

## Contributers
1. Darknight4433
2. DEVIL-009
3. Rishi.R.S

## License

This project is licensed under the MIT License.
