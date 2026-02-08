<template>
  <ServicePageLayout
    title="Operations Optimization"
    subtitle="Smart scheduling and workflow automation"
    category="Operations"
    :icon="faChartLine"
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
  faChartLine, faCalendarAlt, faTasks, faRobot, faBell, faRoute, faChartBar,
  faClock, faDollarSign, faUserFriends, faCheckCircle,
  faRocket, faLayerGroup, faBuilding, faDesktop
} from '@fortawesome/free-solid-svg-icons'

const heroImage = new URL('../assets/office green1.jpeg', import.meta.url).href

const benefits = [
  {
    icon: faClock,
    value: '40%',
    unit: 'Faster',
    title: 'Response Times',
    description: 'Automated dispatching and optimized routing reduce service delays'
  },
  {
    icon: faDollarSign,
    value: '25%',
    unit: 'Cost Reduction',
    title: 'Lower Operational Costs',
    description: 'Efficient resource allocation and preventive maintenance lower costs'
  },
  {
    icon: faCheckCircle,
    value: '95%',
    unit: 'Compliance',
    title: 'SLA Adherence',
    description: 'Automated tracking and escalations ensure service level agreement compliance'
  }
]

const features = [
  {
    icon: faCalendarAlt,
    title: 'Smart Scheduling',
    description: 'AI-powered scheduling optimizes technician routes, maintenance windows, and resource allocation'
  },
  {
    icon: faTasks,
    title: 'Workflow Automation',
    description: 'Automated work order creation, assignment, and tracking with priority-based routing'
  },
  {
    icon: faRobot,
    title: 'Predictive Maintenance',
    description: 'Machine learning algorithms predict equipment failures before they occur'
  },
  {
    icon: faBell,
    title: 'Real-Time Alerts',
    description: 'Instant notifications for SLA breaches, emergency situations, and critical updates'
  },
  {
    icon: faRoute,
    title: 'Optimized Routing',
    description: 'Geographic optimization of service routes to reduce travel time and costs'
  },
  {
    icon: faChartBar,
    title: 'Performance Analytics',
    description: 'Track KPIs, technician productivity, and operational efficiency metrics'
  }
]

const steps = [
  {
    title: 'Process Assessment',
    description: 'Analyze current workflows and identify optimization opportunities'
  },
  {
    title: 'Automation Design',
    description: 'Design automated workflows and scheduling rules'
  },
  {
    title: 'System Integration',
    description: 'Connect with existing systems and data sources'
  },
  {
    title: 'Optimization Launch',
    description: 'Deploy optimized workflows and monitor performance'
  }
]

const packages = [
  {
    name: 'Basic',
    price: '$299',
    description: 'Essential workflow optimization',
    icon: faRocket,
    features: [
      'Basic scheduling',
      'Work order management',
      'Email notifications',
      'Performance dashboard',
      'Up to 10 users'
    ]
  },
  {
    name: 'Optimizer',
    price: '$799',
    description: 'Advanced automation platform',
    icon: faLayerGroup,
    features: [
      'Smart scheduling',
      'Workflow automation',
      'Predictive maintenance',
      'Real-time alerts',
      'API integrations',
      'Unlimited users'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete operational transformation',
    icon: faBuilding,
    features: [
      'Custom AI models',
      'Dedicated support',
      'On-site training',
      'Custom integrations',
      'SLA management',
      '24/7 monitoring'
    ]
  }
]

const relatedServices = [
  {
    id: 1,
    title: 'Digital Management',
    description: 'Integrated digital facilities platform',
    path: '/services/digital-management',
    icon: faDesktop
  },
  {
    id: 5,
    title: 'Analytics & Insights',
    description: 'Data-driven decision making',
    path: '/services/analytics-insights',
    icon: faChartBar
  },
  {
    id: 3,
    title: 'Consultancy Services',
    description: 'Expert guidance and strategic planning',
    path: '/services/consultancy-services',
    icon: faUserFriends
  }
]
</script>