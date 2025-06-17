
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Lightbulb, Users, Zap } from 'lucide-react';

const Education = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Education Center</h1>
        <p className="text-lg text-muted-foreground">
          Learn about sound energy and sustainability
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Sound to Energy</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn how sound waves can be converted into electrical energy.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Educational materials and documentation.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Community</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Connect with other learners and experts.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5" />
              <span>Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Best practices and sustainability tips.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;
