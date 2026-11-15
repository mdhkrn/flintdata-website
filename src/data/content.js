/**
 * Site content — single source of truth.
 * Edit copy here; components render from these objects.
 */
import {
  ScanLine,
  FileText,
  AudioLines,
  Database,
  ShieldCheck,
  FlaskConical,
  Users,
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
  name: 'Flint Data',
  tagline: 'Powering AI with Human-Quality Data.',
  description:
    'Flint Data is an AI data annotation and research company helping organisations build better AI systems through reliable, accurate and scalable data solutions.',
  domain: 'flintdata.ai',
  url: 'https://flintdata.ai',
  email: 'contact@flintdata.ai',
  // Legal name used in the Privacy Policy to identify the organisation responsible for the data.
  legalName: 'Flint Data',
};

/** Page URLs. The site has two pages: home (/) and the privacy policy. */
export const routes = {
  home: '/',
  privacy: '/privacy-policy/',
};

/** Link to a home-page section from any page: '#about' on home, '/#about' elsewhere. */
export const sectionHref = (id, onHome) => (onHome ? `#${id}` : `${routes.home}#${id}`);

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
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
      'Sourcing, filtering and organising representative datasets that match your target domain, edge cases and distribution needs.',
    tags: ['Sourcing', 'Filtering', 'Balancing'],
  },
  {
    id: 'processing-qa',
    icon: ShieldCheck,
    title: 'Data Processing and Quality Assurance',
    description:
      'Cleaning, normalisation, de-duplication and multi-layer review workflows that keep every dataset consistent and audit-ready.',
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
    id: 'hitl',
    icon: Users,
    title: 'Human-in-the-Loop AI Solutions',
    description:
      'Expert reviewers embedded in your pipeline to validate predictions, handle low-confidence cases and continuously improve models.',
    tags: ['Validation', 'Edge cases', 'Active learning'],
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
