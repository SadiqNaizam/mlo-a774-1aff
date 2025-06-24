import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  tooltip?: string;
}

const statsData: Stat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days.' },
];

const OtherStat: React.FC<Stat> = ({ value, label, tooltip }) => (
  <div>
    <p className="text-4xl font-bold text-foreground">{value}</p>
    <div className="flex items-center gap-1.5 mt-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  </div>
);

const OtherStatsCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-lg">Other data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <OtherStat key={index} {...stat} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OtherStatsCard;
