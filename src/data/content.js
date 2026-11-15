/**
 * Site content — single source of truth.
 * Anything wrapped in [Placeholder: …] is business information FlintData
 * still needs to supply. Search the codebase for "Placeholder" to find them all.
 */
import {
  ScanLine,
  FileText,
  AudioLines,
  Database,
  ShieldCheck,
  FlaskConical,
  Box,
  Users,
  HeartPulse,
  Car,
  ShoppingCart,
  Sprout,
  Bot,
  GraduationCap,
  Cpu,
  Target,
  UserCheck,
  Lock,
  Layers,
  Zap,
  Microscope,
  MessagesSquare,
  PenTool,
  BadgeCheck,
  PackageCheck,
} from 'lucide-react';

export const company = {
  name: 'FlintData',
  tagline: 'Powering AI with Human-Quality Data.',
  description:
    'FlintData is an AI data annotation and research company helping organizations build better AI systems through reliable, accurate and scalable data solutions.',
  email: '[Placeholder: hello@yourdomain.com]',
  careersEmail: '[Placeholder: careers@yourdomain.com]',
  phone: '[Placeholder: +00 000 000 0000]',
  address: '[Placeholder: Office address, City, Country]',
  hours: '[Placeholder: Business hours & time zone]',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
];

export const services = [
  {
    id: 'image-video',
    icon: ScanLine,
    title: 'Image and Video Annotation',
    description:
      'Bounding boxes, polygons, semantic and instance segmentation, keypoints and frame-accurate object tracking for computer vision models.',
    tags: ['Bounding boxes', 'Segmentation', 'Tracking'],
  },
  {
    id: 'text',
    icon: FileText,
    title: 'Text Annotation',
    description:
      'Named entity recognition, classification, sentiment, intent and relationship labelling to train and fine-tune language models.',
    tags: ['NER', 'Classification', 'Sentiment'],
  },
  {
    id: 'audio',
    icon: AudioLines,
    title: 'Audio and Speech Annotation',
    description:
      'Transcription, speaker diarization, timestamping and acoustic event tagging for speech recognition and voice AI.',
    tags: ['Transcription', 'Diarization', 'Events'],
  },
  {
    id: 'collection',
    icon: Database,
    title: 'Data Collection and Curation',
    description:
      'Sourcing, filtering and organizing representative datasets that match your target domain, edge cases and distribution needs.',
    tags: ['Sourcing', 'Filtering', 'Balancing'],
  },
  {
    id: 'processing-qa',
    icon: ShieldCheck,
    title: 'Data Processing and Quality Assurance',
    description:
      'Cleaning, normalization, de-duplication and multi-layer review workflows that keep every dataset consistent and audit-ready.',
    tags: ['Cleaning', 'Review layers', 'Consistency'],
  },
  {
    id: 'evaluation',
    icon: FlaskConical,
    title: 'AI Model Evaluation and Research',
    description:
      'Human evaluation, benchmark design, red-teaming and output rating that reveal how your models behave in the real world.',
    tags: ['Human eval', 'Benchmarks', 'Red-teaming'],
  },
  {
    id: 'lidar',
    icon: Box,
    title: 'LiDAR and 3D Point Cloud Annotation',
    description:
      '3D cuboids, point-level segmentation and sensor-fusion labelling for autonomous systems, mapping and spatial AI.',
    tags: ['3D cuboids', 'Point segmentation', 'Sensor fusion'],
  },
  {
    id: 'hitl',
    icon: Users,
    title: 'Human-in-the-Loop AI Solutions',
    description:
      'Expert reviewers embedded in your pipeline to validate predictions, handle low-confidence cases and continuously improve models.',
    tags: ['Validation', 'Edge cases', 'Active learning'],
  },
];

export const industries = [
  {
    id: 'healthcare',
    icon: HeartPulse,
    name: 'Healthcare',
    summary:
      'Carefully handled annotation for medical imaging, clinical text and health-related AI, with privacy built into every workflow.',
    useCases: ['Medical image segmentation', 'Clinical text entity extraction', 'Diagnostic model evaluation'],
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive',
    summary:
      'Perception data for driver assistance and autonomous driving, from camera frames to multi-sensor LiDAR scenes.',
    useCases: ['2D/3D object detection', 'Lane and drivable-area labelling', 'Sensor-fusion annotation'],
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    name: 'Retail and E-commerce',
    summary:
      'Structured product and customer data that powers search, recommendations, visual commerce and support automation.',
    useCases: ['Product attribute tagging', 'Search relevance rating', 'Review sentiment analysis'],
  },
  {
    id: 'agriculture',
    icon: Sprout,
    name: 'Agriculture',
    summary:
      'Field, aerial and satellite imagery annotation that helps models monitor crops, detect issues and support decisions.',
    useCases: ['Crop and weed segmentation', 'Plant health classification', 'Aerial imagery labelling'],
  },
  {
    id: 'robotics',
    icon: Bot,
    name: 'Robotics',
    summary:
      'Spatial, visual and interaction data that teaches robots to perceive, grasp and navigate complex environments.',
    useCases: ['Object pose and keypoints', '3D scene understanding', 'Task demonstration labelling'],
  },
  {
    id: 'education',
    icon: GraduationCap,
    name: 'Education',
    summary:
      'Learning-focused datasets for tutoring systems, assessment tools and accessible educational content.',
    useCases: ['Answer and rubric grading', 'Content difficulty tagging', 'Speech data for language learning'],
  },
  {
    id: 'technology',
    icon: Cpu,
    name: 'Technology and AI',
    summary:
      'Training, fine-tuning and evaluation data for teams building foundation models, assistants and AI-native products.',
    useCases: ['Instruction and preference data', 'LLM output evaluation', 'Multimodal dataset creation'],
  },
];

export const reasons = [
  {
    icon: Target,
    title: 'Accuracy and Quality',
    description:
      'Clear guidelines, calibrated annotators and layered review so every label is one your model can trust.',
  },
  {
    icon: UserCheck,
    title: 'Skilled Annotation Workforce',
    description:
      'Trained specialists and domain-aware reviewers who understand the context behind the data they label.',
  },
  {
    icon: Lock,
    title: 'Data Security',
    description:
      'Access controls, confidentiality agreements and secure handling practices to protect sensitive information.',
  },
  {
    icon: Layers,
    title: 'Scalable Operations',
    description:
      'Flexible teams and repeatable workflows that grow from pilot batches to production-scale pipelines.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'Efficient tooling and parallel workstreams that keep delivery on schedule without trading off quality.',
  },
  {
    icon: Microscope,
    title: 'Research-Driven Approach',
    description:
      'Annotation strategies informed by how models learn — so the data we produce actually moves performance.',
  },
];

export const processSteps = [
  {
    icon: MessagesSquare,
    title: 'Understand Requirements',
    description: 'We align on goals, data types, label taxonomy, quality targets and timelines.',
  },
  {
    icon: Database,
    title: 'Data Collection',
    description: 'We source, receive or curate the data and prepare it securely for annotation.',
  },
  {
    icon: PenTool,
    title: 'Annotation and Processing',
    description: 'Trained annotators label and process data against detailed, versioned guidelines.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assurance',
    description: 'Multi-stage review, consensus checks and corrections validate every batch.',
  },
  {
    icon: PackageCheck,
    title: 'Delivery and Feedback',
    description: 'Data ships in your preferred format, and your feedback refines the next iteration.',
  },
];

export const careerAreas = [
  'Data Annotation Specialists',
  'Quality Assurance Reviewers',
  'Domain Experts',
  'Project & Delivery Managers',
  'AI Research & Evaluation',
  'Engineering & Tooling',
];

export const socialLinks = [
  // [Placeholder] Replace "#" with real profile URLs
  { id: 'linkedin', label: 'FlintData on LinkedIn', href: '#' },
  { id: 'x', label: 'FlintData on X', href: '#' },
  { id: 'github', label: 'FlintData on GitHub', href: '#' },
  { id: 'youtube', label: 'FlintData on YouTube', href: '#' },
];
