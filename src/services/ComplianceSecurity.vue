<template>
  <ServicePageLayout
    title="Compliance & Security"
    subtitle="Regulatory compliance and protection"
    category="Compliance"
    :icon="faShield"
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
  faShield, faFileContract, faUserLock, faClipboardCheck, faLock, faHistory,
  faCheckCircle, faClock, faUsers, faAward,
  faRocket, faLayerGroup, faBuilding, faDesktop
} from '@fortawesome/free-solid-svg-icons'

const heroImage = new URL('../assets/office green4.jpeg', import.meta.url).href

const benefits = [
  {
    icon: faCheckCircle,
    value: '100%',
    unit: 'Ready',
    title: 'Audit Preparedness',
    description: 'Always prepared for regulatory inspections and compliance audits'
  },
  {
    icon: faShield,
    value: 'SOC 2',
    unit: 'Certified',
    title: 'Enterprise Security',
    description: 'Military-grade security with SOC 2 Type II certification'
  },
  {
    icon: faAward,
    value: '24/7',
    unit: 'Monitoring',
    title: 'Risk Mitigation',
    description: 'Proactive identification and mitigation of compliance risks'
  }
]

const features = [
  {
    icon: faFileContract,
    title: 'Regulatory Compliance',
    description: 'Automated tracking of building codes, safety regulations, and environmental standards'
  },
  {
    icon: faShield,
    title: 'Security Management',
    description: 'Multi-factor authentication, role-based access control, and comprehensive audit trails'
  },
  {
    icon: faUserLock,
    title: 'Access Control',
    description: 'Granular permissions, temporary access provisioning, and user activity monitoring'
  },
  {
    icon: faClipboardCheck,
    title: 'Audit Preparation',
    description: 'Automated audit trails, compliance documentation, and inspection readiness'
  },
  {
    icon: faLock,
    title: 'Data Protection',
    description: 'GDPR compliance, data encryption, and secure file storage with expiry tracking'
  },
  {
    icon: faHistory,
    title: 'Incident Management',
    description: 'Automated incident reporting, investigation workflows, and corrective action tracking'
  }
]

const steps = [
  {
    title: 'Risk Assessment',
    description: 'Identify compliance gaps and security vulnerabilities'
  },
  {
    title: 'Policy Development',
    description: 'Create comprehensive compliance and security policies'
  },
  {
    title: 'Implementation',
    description: 'Deploy security controls and compliance tracking systems'
  },
  {
    title: 'Monitoring & Auditing',
    description: 'Continuous monitoring and regular compliance audits'
  }
]

const packages = [
  {
    name: 'Basic',
    price: '$399',
    description: 'Essential compliance tools',
    icon: faRocket,
    features: [
      'Compliance tracking',
      'Basic security',
      'Document storage',
      'Monthly reports',
      'Up to 10 users'
    ]
  },
  {
    name: 'Professional',
    price: '$1,199',
    description: 'Complete compliance suite',
    icon: faLayerGroup,
    features: [
      'Advanced compliance',
      'Multi-factor auth',
      'Audit preparation',
      'Incident management',
      'Real-time alerts',
      'Unlimited users'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Enterprise-grade security',
    icon: faBuilding,
    features: [
      'Custom compliance',
      'Dedicated security',
      'On-site audits',
      'Training programs',
      '24/7 monitoring',
      'SLA guarantees'
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
    id: 3,
    title: 'Consultancy Services',
    description: 'Expert guidance and strategic planning',
    path: '/services/consultancy-services',
    icon: faUsers
  },
  {
    id: 2,
    title: 'Operations Optimization',
    description: 'Smart scheduling and workflow automation',
    path: '/services/operations-optimization',
    icon: faShield
  }
]
</script>