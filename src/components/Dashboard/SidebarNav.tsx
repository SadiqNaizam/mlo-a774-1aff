import React from 'react';
import { cn } from '@/lib/utils';
import { LayoutGrid, Users, User, FileText, FileStack, ShoppingBasket, Mail, Archive, Calendar, HelpCircle, Settings } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

const NavLink: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive = false }) => (
  <a
    href={href}
    className={cn(
      'flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors',
      isActive
        ? 'bg-sidebar-primary text-sidebar-primary-foreground'
        : 'text-sidebar-foreground hover:bg-sidebar-accent'
    )}
  >
    <Icon className="mr-3 h-5 w-5" />
    <span>{label}</span>
  </a>
);

const mainNavItems = [
  { href: '#', icon: LayoutGrid, label: 'Dashboard', isActive: true },
  { href: '#', icon: Users, label: 'Leads' },
  { href: '#', icon: User, label: 'Customers' },
  { href: '#', icon: FileText, label: 'Proposals' },
  { href: '#', icon: FileStack, label: 'Invoices' },
  { href: '#', icon: ShoppingBasket, label: 'Items' },
  { href: '#', icon: Mail, label: 'Mail' },
  { href: '#', icon: Archive, label: 'Shoebox' },
  { href: '#', icon: Calendar, label: 'Calendar' },
];

const supportNavItems = [
  { href: '#', icon: HelpCircle, label: 'Help' },
  { href: '#', icon: Settings, label: 'Settings' },
];

const SidebarNav: React.FC = () => {
  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-14 items-center border-b border-sidebar-border px-6">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-foreground text-background">
             <span className="font-bold text-sm">B</span>
          </div>
      </div>
      <div className="flex flex-1 flex-col justify-between overflow-y-auto">
        <nav className="flex-1 space-y-2 p-4">
          {mainNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </nav>
        <div className="border-t border-sidebar-border p-4">
          <nav className="space-y-2">
            {supportNavItems.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
