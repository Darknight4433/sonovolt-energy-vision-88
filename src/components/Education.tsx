
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Lightbulb, Users, Wrench } from 'lucide-react';

const Education = () => {
  const sustainabilityTips = [
    {
      title: 'Optimize Sensor Placement',
      description: 'Position Sonic Tiles in areas with consistent ambient noise for maximum energy generation.',
      benefit: 'Up to 30% increase in efficiency',
      icon: TrendingUp,
    },
    {
      title: 'Monitor Peak Hours',
      description: 'Track noise patterns to predict energy generation and plan operation schedules.',
      benefit: 'Better resource allocation',
      icon: TrendingUp,
    },
    {
      title: 'Community Engagement',
      description: 'Educate local communities about noise awareness and sustainable energy practices.',
      benefit: 'Increased environmental consciousness',
      icon: Users,
    },
    {
      title: 'Regular Maintenance',
      description: 'Keep sensors clean and calibrated for optimal performance and longevity.',
      benefit: 'Extended device lifespan',
      icon: Wrench,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Lightbulb className="w-8 h-8 text-orange-500" />
          <h1 className="text-3xl font-bold">Sustainability Tips</h1>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sustainabilityTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <Card key={index} className="border-2 border-green-500/50 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{tip.description}</p>
                <div className="flex items-center space-x-2 text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{tip.benefit}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Community Section */}
      <Card className="border-2 border-green-500/30 bg-card/30">
        <CardContent className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Join the SONOVOLT Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with educators, engineers, and sustainability advocates who are passionate about 
            transforming noise pollution into renewable energy solutions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
