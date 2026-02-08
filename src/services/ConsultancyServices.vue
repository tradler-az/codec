<template>
  <ServicePageLayout
    title="Consultancy Services"
    subtitle="Expert guidance and strategic planning"
    category="Consultancy"
    :icon="faLightbulb"
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
  faLightbulb, faUsers, faChartPie, faHandshake, faGears, faAward,
  faChartLine, faDollarSign, faClock, faCheckCircle,
  faRocket, faLayerGroup, faBuilding, faShield
} from '@fortawesome/free-solid-svg-icons'

const heroImage = new URL('../assets/office green4.jpeg', import.meta.url).href

const benefits = [
  {
    icon: faChartLine,
    value: '15+',
    unit: 'Years',
    title: 'Industry Expertise',
    description: 'Access to extensive facility management consulting experience'
  },
  {
    icon: faDollarSign,
    value: '30%',
    unit: 'Higher ROI',
    title: 'Measurable Results',
    description: 'Clear ROI tracking and performance improvement metrics'
  },
  {
    icon: faCheckCircle,
    value: '100%',
    unit: 'Custom',
    title: 'Tailored Solutions',
    description: 'Strategies that address your specific challenges and objectives'
  }
]

const features = [
  {
    icon: faChartPie,
    title: 'Strategic Planning',
    description: 'Comprehensive facility management strategy development aligned with business objectives'
  },
  {
    icon: faGears,
    title: 'Digital Transformation',
    description: 'Guidance on technology adoption, platform selection, and implementation roadmaps'
  },
  {
    icon: faLightbulb,
    title: 'Process Optimization',
    description: 'Workflow analysis and redesign to improve efficiency and reduce costs'
  },
  {
    icon: faUsers,
    title: 'Change Management',
    description: 'Support for organizational change, training programs, and adoption strategies'
  },
  {
    icon: faHandshake,
    title: 'Vendor Strategy',
    description: 'Vendor selection, contract negotiation, and performance management frameworks'
  },
  {
    icon: faAward,
    title: 'Compliance Advisory',
    description: 'Regulatory compliance strategy and audit preparation support'
  }
]

const steps = [
  {
    title: 'Discovery & Assessment',
    description: 'Understand your current state and identify improvement opportunities'
  },
  {
    title: 'Strategy Development',
    description: 'Create tailored strategies and implementation roadmaps'
  },
  {
    title: 'Implementation Support',
    description: 'Guide execution and provide expert oversight'
  },
  {
    title: 'Continuous Improvement',
    description: 'Monitor results and refine strategies for ongoing optimization'
  }
]

const packages = [
  {
    name: 'Advisory',
    price: '$2,500',
    description: 'Strategic advisory sessions',
    icon: faRocket,
    features: [
      '4 advisory sessions',
      'Strategy assessment',
      'Action plan',
      'Email support',
      '30-day follow-up'
    ]
  },
  {
    name: 'Transformation',
    price: '$9,999',
    description: 'Complete digital transformation',
    icon: faLayerGroup,
    features: [
      'Full strategy development',
      'Implementation roadmap',
      'Change management',
      'Monthly reviews',
      'Dedicated consultant',
      'Training sessions'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Ongoing strategic partnership',
    icon: faBuilding,
    features: [
      'Dedicated team',
      'Quarterly strategy reviews',
      'Vendor management',
      'Compliance oversight',
      'Performance monitoring',
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
    id: 1,
    title: 'Digital Management',
    description: 'Integrated digital facilities platform',
    path: '/services/digital-management',
    icon: faUsers
  }
]
</script>