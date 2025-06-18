import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Users, Target, Award, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const contributors = [
    {
      name: 'Vaishanvi L',
      role: 'Lead Developer',
      description: 'Full-stack development and system architecture',
      avatar: 'V'
    },
    {
      name: 'Rishi R S',
      role: 'Hardware Engineer',
      description: 'Sensor integration and hardware optimization',
      avatar: 'R'
    },
    {
      name: 'Devanandan SS',
      role: 'Lead Developer',
      description: 'Analytics and machine learning implementation',
      avatar: 'D'
    },
    {
      name: 'Niranjan Manu',
      role: 'Research Engineer',
      description: 'Energy harvesting research and development',
      avatar: 'N'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <img 
            src="/lovable-uploads/ee109677-cf2d-47d7-9615-cbb5e46cbd5a.png" 
            alt="SONOVOLT Logo" 
            className="w-8 h-8"
          />
          <h1 className="text-3xl font-bold">About SONOVOLT</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Revolutionary hybrid energy harvesting technology that transforms ambient noise and vibrations 
          into clean, renewable electricity through advanced acoustic and mechanical energy conversion.
        </p>
      </div>

      {/* How SONOVOLT Works */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-primary" />
            <span>How SONOVOLT Technology Works</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Multi-Layer Energy Harvesting</h3>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium text-blue-600">Piezoelectric Layer</h4>
                  <p className="text-sm text-muted-foreground">
                    Converts mechanical pressure and vibrations from sound waves into electrical energy 
                    through crystal deformation. Generates high voltage, low current output.
                  </p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium text-orange-600">TENG (Triboelectric) Layer</h4>
                  <p className="text-sm text-muted-foreground">
                    Harnesses friction energy from air movement and surface contact. Captures energy 
                    from wind, traffic vibrations, and human movement through electrostatic induction.
                  </p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium text-red-600">Linear Electromagnetic Generator</h4>
                  <p className="text-sm text-muted-foreground">
                    Uses magnetic induction to convert mechanical motion into electricity. Optimized 
                    for low-frequency vibrations common in urban environments.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Advanced Energy Management</h3>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium">Acoustic Resonance Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Smart frequency tuning maximizes energy capture from specific noise patterns. 
                    Adaptive algorithms adjust resonance to match environmental conditions.
                  </p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium">Power Conditioning Circuit</h4>
                  <p className="text-sm text-muted-foreground">
                    Converts variable AC output to stable DC power. Includes voltage regulation, 
                    energy storage, and load management for consistent power delivery.
                  </p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg">
                  <h4 className="font-medium">IoT Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Real-time monitoring and control through wireless sensors. Remote diagnostics, 
                    performance optimization, and predictive maintenance capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To transform urban noise pollution into a valuable renewable energy resource, 
              creating sustainable power solutions for smart cities while contributing to 
              environmental noise reduction and energy independence.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Our Vision</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A future where every sound contributes to sustainable energy generation, 
              making cities self-powered through innovative acoustic energy harvesting 
              technology deployed at scale across urban infrastructure.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technical Specifications */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">Power Output</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Peak Power: 50W per m²</li>
                <li>• Average Power: 15-25W per m²</li>
                <li>• Voltage Range: 5-24V DC</li>
                <li>• Efficiency: 85-94%</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Operating Conditions</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Frequency Range: 20Hz - 20kHz</li>
                <li>• Sound Level: 40-120 dB</li>
                <li>• Temperature: -20°C to +60°C</li>
                <li>• Weather Resistance: IP67</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Installation</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Modular Design</li>
                <li>• Easy Maintenance</li>
                <li>• Wireless Monitoring</li>
                <li>• 20+ Year Lifespan</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contributors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-primary" />
            <span>Our Team</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributors.map((contributor, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  {contributor.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{contributor.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {contributor.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    {contributor.description}
                  </p>
                </div>
                <div className="flex justify-center space-x-2">
                  <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                  <Mail className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impact */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Making a Real Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Devices Deployed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50 MWh</div>
              <p className="text-sm text-muted-foreground">Clean Energy Generated</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25%</div>
              <p className="text-sm text-muted-foreground">Noise Reduction</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
