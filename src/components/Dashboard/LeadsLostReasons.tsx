import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Reason {
  percentage: number;
  description: string;
}

const reasonsData: Reason[] = [
  { percentage: 40, description: 'The proposal is unclear' },
  { percentage: 20, description: 'However venture pursuit' },
  { percentage: 10, description: 'Other' },
  { percentage: 30, description: 'The proposal is unclear' },
];

const ReasonStat: React.FC<Reason> = ({ percentage, description }) => (
  <div>
    <p className="text-4xl font-bold text-foreground">{percentage}%</p>
    <p className="text-sm text-muted-foreground mt-1">{description}</p>
  </div>
);

const LeadsLostReasons: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-lg">Reasons of leads lost</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {reasonsData.map((reason, index) => (
            <ReasonStat key={index} {...reason} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsLostReasons;
