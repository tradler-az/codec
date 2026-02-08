<template>
  <ServicePageLayout
    title="Advertising & Marketing"
    subtitle="Digital campaigns and brand growth"
    category="Marketing"
    :icon="faBullhorn"
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
  faBullhorn, faChartLine, faTarget, faVideo, faHashtag, faEnvelope,
  faEye, faMagnifyingGlassChart, faDollarSign, faUsers,
  faRocket, faLayerGroup, faBuilding, faLightbulb
} from '@fortawesome/free-solid-svg-icons'

const heroImage = new URL('../assets/office green2.jpeg', import.meta.url).href

const benefits = [
  {
    icon: faUsers,
    value: '40%',
    unit: 'Higher',
    title: 'Occupancy Rates',
    description: 'Targeted marketing campaigns attract qualified tenants faster'
  },
  {
    icon: faDollarSign,
    value: '3x',
    unit: 'ROI',
    title: 'Measurable Returns',
    description: 'Track campaign performance with clear attribution models'
  },
  {
    icon: faEye,
    value: '80%',
    unit: 'Increase',
    title: 'Brand Recognition',
    description: 'Strategic positioning increases property portfolio value'
  }
]

const features = [
  {
    icon: faBullhorn,
    title: 'Digital Campaign Management',
    description: 'End-to-end campaign planning, execution, and optimization across digital channels'
  },
  {
    icon: faChartLine,
    title: 'Performance Analytics',
    description: 'Real-time campaign tracking, ROI measurement, and conversion optimization'
  },
  {
    icon: faTarget,
    title: 'Targeted Advertising',
    description: 'Precision targeting based on property portfolios, tenant demographics, and geographic data'
  },
  {
    icon: faVideo,
    title: 'Video Marketing',
    description: 'Professional property tours, virtual walkthroughs, and promotional videos'
  },
  {
    icon: faHashtag,
    title: 'Social Media Strategy',
    description: 'Content creation, community management, and influencer partnerships'
  },
  {
    icon: faEnvelope,
    title: 'Email Marketing',
    description: 'Automated email campaigns, newsletter management, and lead nurturing'
  }
]

const steps = [
  {
    title: 'Audience Analysis',
    description: 'Identify target audiences and develop buyer personas'
  },
  {
    title: 'Campaign Strategy',
    description: 'Create multi-channel marketing strategies'
  },
  {
    title: 'Content Creation',
    description: 'Develop compelling content and creative assets'
  },
  {
    title: 'Launch & Optimize',
    description: 'Execute campaigns and continuously optimize performance'
  }
]

const packages = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Basic digital marketing',
    icon: faRocket,
    features: [
      'Social media management',
      'Basic analytics',
      'Monthly reporting',
      'Email campaigns',
      'Up to 3 properties'
    ]
  },
  {
    name: 'Growth',
    price: '$1,499',
    description: 'Complete marketing suite',
    icon: faLayerGroup,
    features: [
      'Multi-channel campaigns',
      'Advanced analytics',
      'Video production',
      'Targeted advertising',
      'A/B testing',
      'Unlimited properties'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale marketing strategy',
    icon: faBuilding,
    features: [
      'Custom campaign strategy',
      'Dedicated team',
      'Market research',
      'Brand development',
      'Competitor analysis',
      'Quarterly strategy reviews'
    ]
  }
]

const relatedServices = [
  {
    id: 5,
    title: 'Analytics & Insights',
    description: 'Data-driven decision making',
    path: '/services/analytics-insights',
    icon: faChartLine
  },
  {
    id: 3,
    title: 'Consultancy Services',
    description: 'Expert guidance and strategic planning',
    path: '/services/consultancy-services',
    icon: faLightbulb
  },
  {
    id: 1,
    title: 'Digital Management',
    description: 'Integrated digital facilities platform',
    path: '/services/digital-management',
    icon: faBullhorn
  }
]
</script>