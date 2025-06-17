
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Waves, Circle, Speaker } from 'lucide-react';
import { useGeneratorData } from '../hooks/useApi';
import LoadingSpinner from './LoadingSpinner';

const GeneratorCards = () => {
  const { data: generators, isLoading, error } = useGeneratorData();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'zap': return <Zap className="h-5 w-5" />;
      case 'waves': return <Waves className="h-5 w-5" />;
      case 'circle': return <Circle className="h-5 w-5" />;
      case 'speaker': return <Speaker className="h-5 w-5" />;
      default: return <Zap className="h-5 w-5" />;
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="h-32">
            <CardContent className="flex items-center justify-center h-full">
              <LoadingSpinner />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive/50">
        <CardContent className="p-6 text-center">
          <p className="text-destructive">Failed to load generator data</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {generators?.map((generator) => (
        <Card key={generator.id} className="border-primary/20 bg-gradient-to-br from-card to-card/80">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{generator.name}</CardTitle>
            <div className="text-primary">
              {getIcon(generator.icon)}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-1">
              {generator.energy} kWh
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              {generator.description}
            </p>
            <Badge 
              variant={generator.status === 'active' ? 'default' : 'secondary'}
              className="text-xs"
            >
              {generator.status}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GeneratorCards;
