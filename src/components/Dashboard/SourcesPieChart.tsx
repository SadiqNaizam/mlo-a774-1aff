import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip as ShadTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#38BDF8' }, // sky-400
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#818CF8' }, // indigo-400
];

const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);

const SourcesPieChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'new' | 'total'>('total');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold text-lg">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ 
                    background: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="percentage"
                  paddingAngle={2}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.map((source) => (
              <div key={source.name} className="grid grid-cols-10 items-center text-sm font-medium">
                <div className="col-span-5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: source.color }}></span>
                  <span>{source.name}</span>
                </div>
                <span className="col-span-3 text-right text-muted-foreground">$ {source.value}</span>
                <span className="col-span-2 text-right text-muted-foreground">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <TooltipProvider>
            <ShadTooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center p-0.5 bg-secondary rounded-md">
                    <Button
                        size="sm"
                        onClick={() => setActiveTab('new')}
                        className={cn(
                            'px-2 py-0.5 h-auto text-xs font-semibold',
                            activeTab === 'new' ? 'bg-card shadow-sm text-foreground' : 'bg-transparent text-muted-foreground hover:bg-transparent'
                        )}
                    >
                        New leads total
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => setActiveTab('total')}
                        className={cn(
                            'px-2 py-0.5 h-auto text-xs font-semibold',
                            activeTab === 'total' ? 'bg-card shadow-sm text-foreground' : 'bg-transparent text-muted-foreground hover:bg-transparent'
                        )}
                    >
                        from leads total
                    </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle between total new leads and leads from existing sources.</p>
              </TooltipContent>
            </ShadTooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;
