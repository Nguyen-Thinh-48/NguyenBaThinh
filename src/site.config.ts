/**
 * Single source of truth for everything personal on the site.
 * Edit this file rather than hunting through components.
 */
export const site = {
  name: 'Nguyen Ba Thinh',
  shortName: 'Thinh',
  role: 'AIoT & Edge AI Engineer',
  tagline: 'Computer Vision · Embedded Systems · Real-time Networking',
  description:
    'I build AI systems that run on the edge — face recognition on Hailo-8L, ' +
    '4G-connected drones, and transformers written from scratch to understand ' +
    'what the accelerators are actually doing.',

  location: 'Ho Chi Minh City, Vietnam',

  // Contact shown publicly. The CV also lists a phone number and street address;
  // those are deliberately left off a public web page. Add them here only if you
  // want them indexed by search engines.
  email: 'bathinh13579@gmail.com',

  links: {
    github: 'https://github.com/Nguyen-Thinh-48',
    // linkedin: 'https://www.linkedin.com/in/<your-handle>',
  },

  cv: '/cv/Nguyen_Ba_Thinh.pdf',

  /** Headline numbers shown in the hero. Keep to three. */
  stats: [
    { value: '<300', unit: 'ms', label: 'Drone video + telemetry latency over 4G' },
    { value: '25', unit: 'FPS', label: 'Face recognition on Hailo-8L + Pi 5' },
    { value: '95.82', unit: '%', label: 'Accuracy after structured pruning' },
  ],

  /** Grouped skills for the About page and the home page expertise block. */
  expertise: [
    {
      group: 'Edge AI & Acceleration',
      items: ['Hailo-8L / HailoRT', 'TensorRT', 'ONNX Runtime', 'Structured pruning', 'INT8 quantization', 'Jetson Nano'],
    },
    {
      group: 'Computer Vision',
      items: ['OpenCV', 'SCRFD', 'MobileFaceNet / ArcFace', 'YOLO', 'Stereo camera fusion', 'Anti-spoofing'],
    },
    {
      group: 'Embedded & Hardware',
      items: ['Raspberry Pi 5 / CM5', 'PX4 Autopilot', 'MAVLink', 'SIM7600G-H 4G', 'IMX219 / OV5647', 'V4L2, Picamera2'],
    },
    {
      group: 'Backend & Streaming',
      items: ['Go', 'Python', 'C++', 'gomavlib', 'GStreamer', 'RTSP / MediaMTX', 'WebSocket', 'REST'],
    },
    {
      group: 'AI Systems',
      items: ['PyTorch', 'LangChain', 'RAG', 'PostgreSQL + PGVector', 'Google Gemini', 'n8n'],
    },
    {
      group: 'Platform & Tooling',
      items: ['Docker / Compose', 'Linux', 'WireGuard VPN', 'Git', 'GitHub Actions', 'Makefile', 'React + TypeScript'],
    },
  ],

  education: {
    degree: 'Bachelor of Engineering — IoT & Applied Artificial Intelligence',
    school: 'Industrial University of Ho Chi Minh City',
    period: '2020 – 2026',
    note: 'Completed degree requirements, awaiting graduation.',
  },

  research: {
    title:
      'Efficient Face Recognition on Embedded Devices via Structured Pruning and Stereo-Camera Feature Fusion',
    advisor: 'Dr. Cao Van Kien',
    note: 'Graduation thesis, Faculty of Electronics Technology.',
  },

  certificate: {
    title: 'Engineering Project (eProjects)',
    issuer: 'Arizona State University & Dow Vietnam STEM Program',
  },

  experience: [
    {
      company: 'BEE HOOME TECHNOLOGY JSC',
      role: 'Fullstack Engineer',
      period: 'May 2025 — Present',
      summary:
        'Self-hosted conversational AI: an n8n + RAG chatbot answering Facebook and Instagram customers 24/7 from a company knowledge base.',
    },
    {
      company: 'HBQ Technology',
      role: 'R&D Engineer',
      period: 'April 2025 — April 2026',
      summary:
        'Connected drone platform (4G/5G video + MAVLink control) and an edge face recognition product on Raspberry Pi 5 with a Hailo-8L accelerator.',
    },
  ],
} as const;

export type Site = typeof site;
