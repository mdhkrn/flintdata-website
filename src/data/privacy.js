/**
 * Privacy Policy content. Rendered by components/pages/PrivacyPolicy.jsx.
 * Have this reviewed by qualified legal counsel before relying on it.
 */
import { company, services } from './content.js';

// Identifies the organisation responsible for the data. Fill in company.legalName
// and company.address in content.js; the sentence appears once they are set.
const controllerBlock = company.legalName
  ? [
      {
        p: `The website and the services described here are operated by ${company.legalName}${
          company.address ? `, ${company.address}` : ''
        }, which is responsible for the personal information described in this policy.`,
      },
    ]
  : [];
export const privacyMeta = {
  title: 'Privacy Policy',
  effectiveDate: '15 November 2026',
};

// Each section: id, heading, and blocks of { p } (paragraph) or { list } (bullets).
export const privacySections = [
  {
    id: 'introduction',
    heading: 'Introduction',
    blocks: [
      {
        p: 'Flint Data ("Flint Data", "we", "us" or "our") is an AI data annotation and research company operating at flintdata.ai. This Privacy Policy explains what personal information we collect, how we use it, who we share it with, and the choices and rights available to you.',
      },
      ...controllerBlock,
      {
        p: 'It applies to visitors of our website, people who contact us about our services, job applicants, and individuals whose personal information may appear in data we handle while delivering services to our clients.',
      },
    ],
  },
  {
    id: 'information-we-collect',
    heading: 'Information we collect',
    blocks: [
      { p: 'We collect only the information we need for the purposes described in this policy:' },
      {
        list: [
          'Contact and inquiry information — when you use our contact form or email us: your full name, email address, company name (optional), the service you are interested in, and the project details you choose to share.',
          'Job application information — when you apply to work with us: your name, contact details, CV, the languages you work in (for example, Indic languages for linguistic annotation roles) and any other information you include in your application.',
          'Correspondence — the content of emails and messages you exchange with us.',
          'Technical information — like most websites, our hosting provider may automatically record standard server log data such as IP address, browser type, device information and the pages requested, for security and reliability purposes.',
        ],
      },
      {
        p: 'We do not use cookies, advertising or analytics on this website, and we do not knowingly collect sensitive personal information through it. Please do not include sensitive personal information in the contact form.',
      },
      {
        p: 'While you fill in the contact form, your browser keeps an unsent draft in this tab’s session storage so it is not lost if you leave the page. The draft stays on your device, is never sent to us until you submit the form, and is cleared when you send it or close the tab.',
      },
    ],
  },
  {
    id: 'client-data',
    heading: 'Data we process for our clients',
    blocks: [
      { p: 'Our services include:' },
      {
        list: services.map((s) => s.title),
      },
      {
        p: 'In delivering these services, we may handle datasets supplied by our clients or collected for them. These datasets can contain personal information — for example, people visible in images or video, names or other details in text, or voices in audio recordings.',
      },
      {
        p: 'For client data, we act on behalf of and under the documented instructions of the client, who decides why and how the data is processed. In particular:',
      },
      {
        list: [
          'We use client data only to perform the services agreed with that client.',
          'We do not sell client data or use it to train our own products or models without the client’s written permission.',
          'Access is limited to team members and annotators who need it for the project and who are bound by confidentiality obligations.',
          'At the end of a project, client data is returned or deleted as set out in our agreement with the client, unless we are legally required to keep it.',
        ],
      },
      {
        p: 'Where we collect new data for a client (for example, text or speech recordings), we tell contributors what is being collected and why, obtain their consent where required, and use their contributions only for the purpose they agreed to.',
      },
      {
        p: 'If you believe your personal information is included in a dataset we process for a client, you may contact us at contact@flintdata.ai. Where appropriate, we will direct your request to the relevant client and support them in responding.',
      },
    ],
  },
  {
    id: 'how-we-use',
    heading: 'How we use your information',
    blocks: [
      {
        list: [
          'To respond to your inquiries and prepare proposals for our services.',
          'To deliver, manage and improve the services we provide to our clients.',
          'To assess job applications and communicate with candidates.',
          'To keep our website and systems secure and functioning properly.',
          'To comply with legal obligations and to establish, exercise or defend legal claims.',
        ],
      },
      {
        p: 'We process your personal information on the basis of your consent, to take steps you have requested before entering into a contract, to perform a contract, to comply with the law, or for our legitimate business purposes where these are not overridden by your rights. We do not use your information for automated decision-making that has legal or similarly significant effects on you.',
      },
    ],
  },
  {
    id: 'sharing',
    heading: 'How we share information',
    blocks: [
      { p: 'We do not sell your personal information. We share it only in these circumstances:' },
      {
        list: [
          'Service providers — trusted providers who support our operations (such as website hosting, email, and Google Workspace, where contact form submissions are stored), under obligations to protect the information and use it only on our instructions.',
          'Clients — for client data, as required to deliver the services they engaged us for.',
          'Legal requirements — where we are required to do so by law, regulation, court order or a lawful request from a public authority.',
          'Business changes — in connection with a merger, acquisition or sale of assets, subject to equivalent privacy protections.',
        ],
      },
    ],
  },
  {
    id: 'retention',
    heading: 'Data retention',
    blocks: [
      {
        p: 'We keep personal information only for as long as it is needed for the purpose it was collected for, or as required by law. Inquiry information is kept for as long as needed to respond and manage any resulting relationship. Job application information is kept for as long as needed to consider your application, and for a reasonable period afterwards unless you ask us to delete it sooner. Client data is retained and deleted according to our agreement with the client.',
      },
    ],
  },
  {
    id: 'security',
    heading: 'Data security',
    blocks: [
      {
        p: 'We use appropriate technical and organisational measures to protect personal information against unauthorised access, loss, misuse or alteration. These include access controls, confidentiality agreements and secure handling practices for project data. No method of transmission or storage is completely secure, but we work to protect your information and to respond promptly to any security incident in line with applicable law.',
      },
    ],
  },
  {
    id: 'transfers',
    heading: 'International transfers',
    blocks: [
      {
        p: 'Our clients and service providers may be located in different countries. Where personal information is transferred across borders, we take steps to ensure it remains protected in line with this policy and applicable data protection laws.',
      },
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your rights and choices',
    blocks: [
      { p: 'Subject to applicable law, you may have the right to:' },
      {
        list: [
          'Access the personal information we hold about you and learn how it is used.',
          'Correct or update information that is inaccurate or incomplete.',
          'Request deletion of your personal information.',
          'Withdraw consent at any time, where we rely on your consent.',
          'Object to or request restriction of certain processing.',
          'Raise a grievance with us, and lodge a complaint with the relevant data protection authority.',
        ],
      },
      {
        p: 'To exercise any of these rights, email contact@flintdata.ai. We may need to verify your identity before acting on your request, and we will respond within the timeframe required by applicable law.',
      },
    ],
  },
  {
    id: 'children',
    heading: 'Children’s privacy',
    blocks: [
      {
        p: 'Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children through our website. If you believe a child has provided us with personal information, please contact us and we will delete it.',
      },
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    blocks: [
      {
        p: 'We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. The updated version will be posted on this page with a new effective date.',
      },
    ],
  },
  {
    id: 'contact-us',
    heading: 'Contact us',
    blocks: [
      {
        p: 'For questions, requests or grievances about this Privacy Policy or how we handle personal information, contact Flint Data at contact@flintdata.ai.',
      },
    ],
  },
];
