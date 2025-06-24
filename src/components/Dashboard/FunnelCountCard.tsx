import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-slate-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalFunnelCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const FunnelCountCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-lg">Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-5xl font-bold">600</span>
          <span className="ml-2 text-muted-foreground">active leads</span>
        </div>
        <div className="flex w-full h-2 rounded-full overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={stage.color}
              style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }}
            />
          ))}
        </div>
        <div className="space-y-4">
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-12 items-center text-sm">
              <div className="col-span-5 flex items-center">
                <span className={`h-2.5 w-2.5 rounded-full mr-3 ${stage.color}`}></span>
                <span className="text-foreground font-medium">{stage.name}</span>
              </div>
              <div className="col-span-2 text-muted-foreground text-right font-medium">{stage.count}</div>
              <div className="col-span-2 text-muted-foreground text-right font-medium">$ {stage.value}</div>
              <div className="col-span-3 text-muted-foreground text-right font-medium flex justify-end">
                {stage.name === 'Qualified' ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-pointer">{stage.duration}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>average time on this stage</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <span>{stage.duration}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCountCard;
