import { CategoryType } from './categories';
import { 
  ClipboardList, FileText, Workflow, Database, 
  MessageSquare, DollarSign, Users, Headphones,
  Cloud, Lock, Zap, BarChart
} from 'lucide-react';

interface Tool {
  name: string;
  category: CategoryType;
  replaces: string;
  description: string;
  features: string[];
  requirements: string[];
  savings: {
    cost: string;
    efficiency: string;
  };
  integration: string[];
  examples: {
    company: string;
    outcome: string;
  }[];
  icon: any;
}

export const tools: Tool[] = [
  {
    name: 'Monday.com',
    category: 'Project Management',
    replaces: 'Spreadsheet-based project tracking, email chains, and manual status updates',
    description: 'Visual project management platform that centralizes team collaboration and task tracking',
    features: [
      'Customizable workflows and automations',
      'Real-time progress tracking',
      'Resource allocation',
      'Time tracking',
      'Multiple project views (Kanban, Gantt, Calendar)'
    ],
    requirements: [
      'Internet-connected devices',
      'Web browser or mobile app',
      'User training (1-2 hours)',
      'Project template setup'
    ],
    savings: {
      cost: '20-30% reduction in project management overhead',
      efficiency: '40% improvement in team collaboration'
    },
    integration: [
      'Slack',
      'Microsoft Teams',
      'Google Workspace',
      'Jira',
      'GitHub'
    ],
    examples: [
      {
        company: 'Discovery Limited',
        outcome: 'Reduced project delivery time by 35% across 200+ team members'
      },
      {
        company: 'Vodacom',
        outcome: 'Improved resource utilization by 25% in digital transformation projects'
      }
    ],
    icon: ClipboardList
  },
  {
    name: 'DocuSign',
    category: 'Document Management',
    replaces: 'Physical document signing, printing, scanning, and courier services',
    description: 'Digital document signing and workflow platform',
    features: [
      'Electronic signatures',
      'Document tracking',
      'Template management',
      'Audit trails',
      'Mobile signing'
    ],
    requirements: [
      'Email accounts',
      'Internet connection',
      'Compatible devices',
      'Digital document formats'
    ],
    savings: {
      cost: '60-85% reduction in document processing costs',
      efficiency: '90% faster document turnaround time'
    },
    integration: [
      'Salesforce',
      'Microsoft 365',
      'Google Workspace',
      'SAP',
      'Oracle'
    ],
    examples: [
      {
        company: 'Standard Bank',
        outcome: 'Reduced contract signing time from 2 weeks to 2 hours'
      },
      {
        company: 'Old Mutual',
        outcome: 'Saved R2.5M annually in paper and courier costs'
      }
    ],
    icon: FileText
  },
  {
    name: 'Zapier',
    category: 'Workflow Automation',
    replaces: 'Manual data entry, repetitive tasks, and system updates',
    description: 'No-code automation platform connecting 3000+ apps',
    features: [
      'Custom workflow automation',
      'Multi-step zaps',
      'Error handling',
      'Scheduled tasks',
      'Conditional logic'
    ],
    requirements: [
      'Subscription to connected apps',
      'API access',
      'Basic workflow planning',
      'Internet connectivity'
    ],
    savings: {
      cost: '40% reduction in manual task costs',
      efficiency: '80% time saved on repetitive tasks'
    },
    integration: [
      'Gmail',
      'Slack',
      'Trello',
      'Shopify',
      'QuickBooks'
    ],
    examples: [
      {
        company: 'Takealot',
        outcome: 'Automated 75% of customer support workflows'
      },
      {
        company: 'Property24',
        outcome: 'Reduced listing processing time by 90%'
      }
    ],
    icon: Workflow
  },
  {
    name: 'Snowflake',
    category: 'Data Processing',
    replaces: 'Traditional data warehouses, manual data integration, and analysis',
    description: 'Cloud data platform with scalable storage and computing',
    features: [
      'Unlimited scalability',
      'Automatic optimization',
      'Data sharing',
      'Pay-per-use pricing',
      'Built-in security'
    ],
    requirements: [
      'Cloud infrastructure',
      'Data migration plan',
      'Technical expertise',
      'Security compliance'
    ],
    savings: {
      cost: '50% reduction in data warehouse costs',
      efficiency: '70% faster query performance'
    },
    integration: [
      'AWS',
      'Azure',
      'GCP',
      'Tableau',
      'Power BI'
    ],
    examples: [
      {
        company: 'MultiChoice',
        outcome: 'Consolidated 5 data warehouses into one platform'
      },
      {
        company: 'Capitec Bank',
        outcome: 'Achieved 99.9% faster data processing'
      }
    ],
    icon: Database
  }
];