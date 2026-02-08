<template>
  <ServicePageLayout
    title="Digital Management"
    subtitle="Integrated digital facilities platform"
    category="Digital Management"
    :icon="faDesktop"
    :hero-image="heroImage"
    :benefits="benefits"
    :features="features"
    :steps="steps"
    :packages="packages"
    :related-services="relatedServices"
  />
</template>

<script setup>
import ServicePageLayout from '../services/ServicePageLayout.vue'
import { 
  faDesktop, faChartLine, faClock, faDollarSign, faShield, faUserFriends,
  faDatabase, faMobileAlt, faCloud, faSync, faChartBar,
  faRocket, faLayerGroup, faBuilding
} from '@fortawesome/free-solid-svg-icons'

const heroImage = new URL('../assets/office green2.jpeg', import.meta.url).href

const benefits = [
  {
    icon: faChartLine,
    value: '40%',
    unit: 'Cost Reduction',
    title: 'Lower Operational Costs',
    description: 'Automate manual processes and reduce paperwork through digital workflows'
  },
  {
    icon: faClock,
    value: '99.9%',
    unit: 'Uptime',
    title: 'Increased Reliability',
    description: 'Cloud-native architecture ensures high availability and reliability'
  },
  {
    icon: faDollarSign,
    value: '25%',
    unit: 'Higher ROI',
    title: 'Improved Returns',
    description: 'Real-time insights lead to better decision-making and higher returns'
  }
]

const features = [
  {
    icon: faDatabase,
    title: 'Centralized Data Management',
    description: 'Secure document storage with version control, expiry tracking, and bulk export capabilities'
  },
  {
    icon: faMobileAlt,
    title: 'Mobile-First Platform',
    description: 'Progressive Web App with offline data entry, camera integration, and GPS tagging'
  },
  {
    icon: faCloud,
    title: 'Cloud-Native Architecture',
    description: 'Multi-tenant SaaS platform with organization-isolated data and custom branding'
  },
  {
    icon: faSync,
    title: 'Automated Workflows',
    description: 'Configurable approval chains, conditional routing logic, and SLA-based escalations'
  },
  {
    icon: faChartBar,
    title: 'Advanced Analytics',
    description: 'Pre-built and custom reports with dashboard customization and data visualization'
  },
  {
    icon: faShield,
    title: 'Enterprise Security',
    description: 'GDPR compliance, multi-factor authentication, and comprehensive audit trails'
  }
]

const steps = [
  {
    title: 'Platform Setup',
    description: 'Configure your organization structure, branding, and user roles'
  },
  {
    title: 'Data Migration',
    description: 'Import existing property portfolios, assets, and tenant information'
  },
  {
    title: 'Team Onboarding',
    description: 'Train your staff and configure access permissions'
  },
  {
    title: 'Go Live',
    description: 'Launch the platform and begin digital operations'
  }
]

const packages = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Essential digital management for small teams',
    icon: faRocket,
    features: [
      'Up to 50 properties',
      'Basic reporting',
      'Email support',
      'Mobile access',
      'Document management'
    ]
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Complete digital platform for growing organizations',
    icon: faLayerGroup,
    features: [
      'Unlimited properties',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom branding',
      'Workflow automation'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale operations',
    icon: faBuilding,
    features: [
      'Custom integrations',
      'Dedicated support',
      'On-premise deployment',
      'Training & onboarding',
      '24/7 phone support',
      'SLA guarantees'
    ]
  }
]

const relatedServices = [
  {
    id: 2,
    title: 'Operations Optimization',
    description: 'Smart scheduling and workflow automation',
    path: '/services/operations-optimization',
    icon: faChartLine
  },
  {
    id: 6,
    title: 'Compliance & Security',
    description: 'Regulatory compliance and protection',
    path: '/services/compliance-security',
    icon: faShield
  },
  {
    id: 5,
    title: 'Analytics & Insights',
    description: 'Data-driven decision making',
    path: '/services/analytics-insights',
    icon: faChartBar
  }
]
</script>