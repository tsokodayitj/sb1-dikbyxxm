import { Lightbulb, Settings, Shield, Users } from 'lucide-react';

export const services = [
  {
    id: 'growth-innovation',
    title: 'Growth & Innovation',
    subheading: 'Grow, Evolve, and Disrupt Your Market',
    description: 'Whether you\'re launching a new product, entering a new market, or creating an entirely new business, our Growth & Innovation team helps you identify opportunities, craft winning strategies, and turn bold ideas into high-performing ventures.',
    icon: Lightbulb,
    services: [
      {
        title: 'Growth Strategy & Market Analysis',
        points: [
          'Data-driven market opportunity assessment',
          'Competitive positioning and differentiation strategy',
          'Scenario-based planning to ensure resilience and agility',
          'Market entry and expansion roadmaps'
        ]
      },
      {
        title: 'New Venture Creation',
        points: [
          'Lean Startup frameworks to accelerate product-market fit',
          'Business model innovation and validation',
          'Go-to-market strategy development',
          'Investment readiness and fundraising support'
        ]
      }
    ],
    outcomes: [
      '10–15% faster market entry',
      '20% average increase in revenue within the first year',
      'Successful launch of new products/services within 6 months'
    ]
  },
  {
    id: 'operational-transformation',
    title: 'Operational Transformation',
    subheading: 'Streamline Operations for Peak Performance',
    description: 'From organizational restructuring to end-to-end process optimization, we design operational models that reduce costs, improve customer satisfaction, and drive sustainable growth. Our digitization expertise then enables organizations to harness the power of technology for faster, smarter workflows.',
    icon: Settings,
    services: [
      {
        title: 'Operations Strategy & Reconfiguration',
        points: [
          'Lean and Six Sigma methodologies for cost and efficiency gains',
          'Supply chain optimization and resilience building',
          'Resource allocation and capacity planning',
          'Process reengineering and standardization'
        ]
      },
      {
        title: 'Workflow Digitization',
        points: [
          'Cloud-based platforms and AI-driven insights for real-time decision-making',
          'Digital transformation roadmap development',
          'Technology stack assessment and optimization',
          'Change management and digital adoption support'
        ]
      }
    ],
    outcomes: [
      '30% cost reduction in supply chain within 12 months',
      '25% faster time-to-market through digitized workflows',
      '40% improvement in operational efficiency'
    ]
  },
  {
    id: 'governance-controls',
    title: 'Governance & Controls',
    subheading: 'Fortify Your Governance & Risk Management',
    description: 'Strong governance and internal controls are vital for sustainable success. Our proactive approach helps you mitigate risks, ensure compliance, and build a culture of accountability.',
    icon: Shield,
    services: [
      {
        title: 'Internal Controls Assessment',
        points: [
          'Identify gaps in financial, operational, and IT controls',
          'Risk-based control framework development',
          'Continuous monitoring and improvement programs',
          'Control automation and efficiency enhancement'
        ]
      },
      {
        title: 'Risk & Compliance Frameworks',
        points: [
          'Industry-specific compliance solutions that safeguard brand reputation',
          'Regulatory compliance assessment and roadmap',
          'Risk management strategy development',
          'Governance structure optimization'
        ]
      }
    ],
    outcomes: [
      'Reduced risk exposure by up to 40%',
      'Enhanced stakeholder confidence through transparent reporting',
      'Improved regulatory compliance scores'
    ]
  },
  {
    id: 'leadership-coaching',
    title: 'Leadership & Coaching',
    subheading: 'Empower Leadership at Every Level',
    description: 'Great strategies and operations require exceptional leaders. Our coaching and leadership development programs help executives and emerging leaders sharpen decision-making, inspire teams, and navigate change confidently.',
    icon: Users,
    services: [
      {
        title: 'Executive Coaching Labs',
        points: [
          'One-on-one sessions with certified coaches tailored to your organization\'s challenges',
          'Strategic thinking and decision-making enhancement',
          'Change management and organizational transformation leadership',
          'Executive presence and communication development'
        ]
      },
      {
        title: 'Leadership Development Programs',
        points: [
          'Interactive workshops and skill-building sessions',
          '360° feedback assessments and personalized development plans',
          'Team alignment and collaboration enhancement',
          'Succession planning and talent development'
        ]
      }
    ],
    outcomes: [
      'Improved senior team alignment by 35%',
      '20% reduction in turnover at the leadership level',
      'Enhanced leadership effectiveness scores'
    ]
  }
];