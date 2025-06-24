import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import RevenueChart from '../components/Dashboard/RevenueChart';
import LeadsLostReasons from '../components/Dashboard/LeadsLostReasons';
import OtherStatsCard from '../components/Dashboard/OtherStatsCard';

/**
 * The main dashboard page for the Lead Management Dashboard application.
 * This page serves as the central hub, presenting an overview of key metrics and analytics.
 * It is built using the `MainAppLayout` which provides the consistent sidebar and header structure.
 * The main content area is composed of several specialized data visualization components:
 * - `StatsCardGrid`: Displays top-level funnel and source metrics.
 * - `RevenueChart`: Shows lead tracking data over time.
 * - `LeadsLostReasons` and `OtherStatsCard`: Provide further detailed statistics.
 * This component orchestrates the layout of these elements into a cohesive dashboard view.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        {/* Top row: Funnel count and Sources pie chart */}
        <StatsCardGrid />

        {/* Middle row: Main leads tracking line chart */}
        <RevenueChart />

        {/* Bottom row: Reasons for lost leads and other miscellaneous data */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LeadsLostReasons />
          <OtherStatsCard />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
