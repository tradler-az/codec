<template>
  <ServicePageLayout
    title="Analytics & Insights"
    subtitle="Data-driven decision making"
    category="Analytics"
    :icon="faChartBar"
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
  faChartBar, faDatabase, faSearch, faFilter, faDownload, faBell,
  faLightbulb, faClock, faDollarSign, faCheckCircle,
  faRocket, faLayerGroup, faBuilding, faDesktop
} from '@fortawesome/free-solid-svg-icons'

const heroImage = new URL('../assets/office green6.jpeg', import.meta.url).href

const benefits = [
  {
    icon: faLightbulb,
    value: '20%',
    unit: 'Better',
    title: 'Decision Making',
    description: 'Data-driven insights lead to more informed strategic decisions'
  },
  {
    icon: faClock,
    value: '80%',
    unit: 'Time Saved',
    title: 'Automated Reporting',
    description: 'Save hours of manual report generation with automated insights'
  },
  {
    icon: faCheckCircle,
    value: '95%',
    unit: 'Accuracy',
    title: 'Predictive Capabilities',
    description: 'Anticipate market trends and operational needs before they occur'
  }
]

const features = [
  {
    icon: faChartBar,
    title: 'Portfolio Analytics',
    description: 'Comprehensive dashboards tracking occupancy rates, rental yields, and property performance'
  },
  {
    icon: faDatabase,
    title: 'Predictive Analytics',
    description: 'Forecast trends, predict maintenance needs, and optimize pricing strategies'
  },
  {
    icon: faDownload,
    title: 'Advanced Reporting',
    description: 'Custom report builder with scheduled generation and multi-format exports'
  },
  {
    icon: faBell,
    title: 'Real-Time Monitoring',
    description: 'Live dashboards with customizable widgets and drill-down capabilities'
  },
  {
    icon: faFilter,
    title: 'Data Exploration',
    description: 'Interactive data exploration tools with advanced filtering and segmentation'
  },
  {
    icon: faSearch,
    title: 'Business Intelligence',
    description: 'AI-powered insights and recommendations for operational improvements'
  }
]

const steps = [
  {
    title: 'Data Integration',
    description: 'Connect data sources and establish data pipelines'
  },
  {
    title: 'Dashboard Design',
    description: 'Create customized dashboards for different user roles'
  },
  {
    title: 'Insight Development',
    description: 'Develop key metrics, reports, and analytical models'
  },
  {
    title: 'Training & Adoption',
    description: 'Train teams on data-driven decision making processes'
  }
]

const packages = [
  {
    name: 'Basic',
    price: '$299',
    description: 'Essential analytics platform',
    icon: faRocket,
    features: [
      'Basic dashboards',
      'Monthly reports',
      'Data export',
      'Email alerts',
      'Up to 5 users'
    ]
  },
  {
    name: 'Pro',
    price: '$899',
    description: 'Advanced analytics suite',
    icon: faLayerGroup,
    features: [
      'Advanced dashboards',
      'Predictive analytics',
      'Custom reports',
      'Real-time monitoring',
      'API access',
      'Unlimited users'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete business intelligence',
    icon: faBuilding,
    features: [
      'Custom AI models',
      'Data warehousing',
      'Executive dashboards',
      'Dedicated analyst',
      'Training & onboarding',
      '24/7 support'
    ]
  }
]

const relatedServices = [
  {
    id: 2,
    title: 'Operations Optimization',
    description: 'Smart scheduling and workflow automation',
    path: '/services/operations-optimization',
    icon: faChartBar
  },
  {
    id: 1,
    title: 'Digital Management',
    description: 'Integrated digital facilities platform',
    path: '/services/digital-management',
    icon: faDesktop
  },
  {
    id: 4,
    title: 'Advertising & Marketing',
    description: 'Digital campaigns and brand growth',
    path: '/services/advertising-marketing',
    icon: faLightbulb
  }
]
</script>