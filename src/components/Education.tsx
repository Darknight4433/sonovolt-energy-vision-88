
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Lightbulb, Users, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const toggleTip = (index: number) => {
    setExpandedTip(expandedTip === index ? null : index);
  };

  const sustainabilityTips = [
    {
      title: 'Optimize Sensor Placement',
      description: 'Position Sonic Tiles in areas with consistent ambient noise for maximum energy generation.',
      benefit: 'Up to 30% increase in efficiency',
      icon: TrendingUp,
      details: 'Strategic placement of sensors near traffic intersections, industrial areas, and urban centers can significantly boost energy output. Consider factors like noise consistency, accessibility for maintenance, and protection from weather elements.'
    },
    {
      title: 'Monitor Peak Hours',
      description: 'Track noise patterns to predict energy generation and plan operation schedules.',
      benefit: 'Better resource allocation',
      icon: TrendingUp,
      details: 'Use historical data to identify peak noise periods throughout the day. This helps in planning energy storage and distribution schedules, ensuring maximum utilization of generated power during high-activity periods.'
    },
    {
      title: 'Community Engagement',
      description: 'Educate local communities about noise awareness and sustainable energy practices.',
      benefit: 'Increased environmental consciousness',
      icon: Users,
      details: 'Conduct workshops and awareness programs to help communities understand how their daily activities contribute to energy generation. This creates a sense of ownership and responsibility towards sustainable practices.'
    },
    {
      title: 'Regular Maintenance',
      description: 'Keep sensors clean and calibrated for optimal performance and longevity.',
      benefit: 'Extended device lifespan',
      icon: Wrench,
      details: 'Implement a scheduled maintenance program including sensor cleaning, calibration checks, and component inspections. Regular maintenance can extend device life by 40% and maintain optimal energy conversion efficiency.'
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
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how to maximize energy generation and promote sustainable practices with SONOVOLT technology
        </p>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sustainabilityTips.map((tip, index) => {
          const Icon = tip.icon;
          const isExpanded = expandedTip === index;
          return (
            <Card key={index} className="border-2 border-green-500/50 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-green-500" />
                  <CardTitle className="text-xl font-bold">{tip.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{tip.description}</p>
                <div className="flex items-center space-x-2 text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{tip.benefit}</span>
                </div>
                
                {isExpanded && (
                  <div className="mt-4 p-4 bg-secondary/50 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm text-muted-foreground">{tip.details}</p>
                  </div>
                )}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleTip(index)}
                  className="w-full mt-3"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Read Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Read More
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Community Section */}
      <Card className="border-2 border-green-500/30 bg-gradient-to-r from-green-50/50 to-green-100/50 dark:from-green-950/50 dark:to-green-900/50">
        <CardContent className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Join the SONOVOLT Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Connect with educators, engineers, and sustainability advocates who are passionate about 
            transforming noise pollution into renewable energy solutions.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Join Community
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
