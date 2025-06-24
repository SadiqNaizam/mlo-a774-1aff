import React from 'react';
import FunnelCountCard from './FunnelCountCard';
import SourcesPieChart from './SourcesPieChart';

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <FunnelCountCard />
      </div>
      <div className="lg:col-span-2">
        <SourcesPieChart />
      </div>
    </div>
  );
};

export default StatsCardGrid;
