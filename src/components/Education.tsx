
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Lightbulb, TrendingUp, Users, Zap, Volume2, Recycle } from 'lucide-react';

const Education = () => {
  const educationalContent = [
    {
      title: "How SONOVOLT Works",
      description: "Learn about the science behind converting sound waves into electrical energy using piezoelectric technology.",
      icon: Zap,
      category: "Technology",
      readTime: "5 min read",
      level: "Beginner"
    },
    {
      title: "Noise Pollution Impact",
      description: "Understand the environmental and health effects of noise pollution in urban environments.",
      icon: Volume2,
      category: "Environment",
      readTime: "8 min read",
      level: "Intermediate"
    },
    {
      title: "Sustainable Energy Solutions",
      description: "Explore how sound energy harvesting contributes to renewable energy goals and sustainability.",
      icon: Recycle,
      category: "Sustainability",
      readTime: "10 min read",
      level: "Advanced"
    },
    {
      title: "Community Benefits",
      description: "Discover how SONOVOLT installations benefit schools, hospitals, and public spaces.",
      icon: Users,
      category: "Social Impact",
      readTime: "6 min read",
      level: "Beginner"
    }
  ];

  const tips = [
    {
      title: "Optimize Sensor Placement",
      description: "Position Sonic Tiles in areas with consistent ambient noise for maximum energy generation.",
      impact: "Up to 30% increase in efficiency"
    },
    {
      title: "Monitor Peak Hours",
      description: "Track noise patterns to predict energy generation and plan device operation schedules.",
      impact: "Better resource allocation"
    },
    {
      title: "Community Engagement",
      description: "Educate local communities about noise awareness and sustainable energy practices.",
      impact: "Increased environmental consciousness"
    },
    {
      title: "Regular Maintenance",
      description: "Keep sensors clean and calibrated for optimal performance and longevity.",
      impact: "Extended device lifespan"
    }
  ];

  const stats = [
    { label: "Energy Saved Annually", value: "2,500 kWh", icon: Zap },
    { label: "CO2 Emissions Reduced", value: "1.2 tons", icon: Recycle },
    { label: "Locations Monitored", value: "25+", icon: Users },
    { label: "Noise Level Improvement", value: "15%", icon: TrendingUp }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-success text-success-foreground';
      case 'Intermediate': return 'bg-warning text-warning-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">SONOVOLT Education Center</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn about sound-to-energy technology, sustainability practices, and how SONOVOLT is making a difference in communities worldwide.
        </p>
      </div>

      {/* Impact Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center p-4">
              <CardContent className="space-y-2 p-0">
                <Icon className="w-8 h-8 mx-auto text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Educational Content */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-primary" />
          Learning Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationalContent.map((content, index) => {
            const Icon = content.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{content.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{content.category}</Badge>
                          <Badge className={getLevelColor(content.level)}>
                            {content.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{content.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{content.readTime}</span>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Sustainability Tips */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Lightbulb className="w-6 h-6 mr-2 text-warning" />
          Sustainability Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{tip.description}</p>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">{tip.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Join the SONOVOLT Community</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect with educators, engineers, and sustainability advocates who are passionate about innovative energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Learning
            </Button>
            <Button variant="outline" size="lg">
              Download Resources
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
