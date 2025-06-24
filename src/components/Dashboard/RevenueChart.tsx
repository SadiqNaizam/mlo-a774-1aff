import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Area } from 'recharts';
import { cn } from '@/lib/utils';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 60 },
  { name: 'April', closedWon: 45, closedLost: 25 },
  { name: 'May', closedWon: 68, closedLost: 95 },
  { name: 'June', closedWon: 82, closedLost: 5 },
  { name: 'July', closedWon: 90, closedLost: 45 },
  { name: 'August', closedWon: 30, closedLost: 98 },
];

type ChartTab = 'Leads came' | 'Leads Converted' | 'Total deals size';

const RevenueChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<ChartTab>('Leads Converted');

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-semibold text-lg">Leads tracking</CardTitle>
            <div className="flex items-end gap-6 mt-2">
              <div>
                <span className="text-4xl font-bold">680</span>
                <span className="ml-2 text-muted-foreground">total closed</span>
              </div>
              <div>
                <span className="text-4xl font-bold">70</span>
                <span className="ml-2 text-muted-foreground">total lost</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center p-1 bg-secondary rounded-lg">
              {(['Leads came', 'Leads Converted', 'Total deals size'] as ChartTab[]).map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-3 py-1 h-auto text-xs font-semibold',
                    activeTab === tab ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {tab}
                </Button>
              ))}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground text-xs">
                  <CalendarIcon className="h-4 w-4" />
                  <span>last 6 months</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>last 30 days</DropdownMenuItem>
                <DropdownMenuItem>last 3 months</DropdownMenuItem>
                <DropdownMenuItem>last 6 months</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ 
                background: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <defs>
              <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="closedWon" stroke="#10B981" fillOpacity={1} fill="url(#colorWon)" />
            <Area type="monotone" dataKey="closedLost" stroke="#EF4444" fillOpacity={1} fill="url(#colorLost)" />
            <Line type="monotone" dataKey="closedWon" stroke="#10B981" strokeWidth={2} dot={{ r: 4, fill: '#10B981' }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="closedLost" stroke="#EF4444" strokeWidth={2} dot={{ r: 4, fill: '#EF4444' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#10B981] rounded-sm"></span>
          <span className="text-muted-foreground">Closed won</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-[#EF4444] rounded-sm"></span>
          <span className="text-muted-foreground">Closed lost</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RevenueChart;
