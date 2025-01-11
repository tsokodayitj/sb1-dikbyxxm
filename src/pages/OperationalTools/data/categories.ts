export const categories = [
  'Project Management',
  'Document Management',
  'Workflow Automation',
  'Data Processing',
  'Communication',
  'Financial Operations',
  'Human Resources',
  'Customer Service'
] as const;

export type CategoryType = typeof categories[number];