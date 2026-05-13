export type Language = "ru" | "kk";

export type BilingualText = {
  ru: string;
  kk: string;
};

export type BilingualStringArray = {
  ru: string[];
  kk: string[];
};

export type FAQItem = {
  question: BilingualText;
  answer: BilingualText;
};

export type ServiceDetailItem = {
  iconName: string;
  title: BilingualText;
  text: BilingualText;
};

export type ServiceProcessDetail = {
  iconName: string;
  title: BilingualText;
  text: BilingualText;
};

export type ServiceBeforeAfterCase = {
  title: BilingualText;
  beforeImage: string;
  afterImage: string;
  useSlider?: boolean;
};

export type ServiceData = {
  id: string;
  iconName: string; // we will map this to a Phosphor icon in the component
  title: BilingualText;
  heroAccent: BilingualText;
  heroImage: string;
  heroHighlights: ServiceDetailItem[];
  shortDescription: BilingualText;
  benefits: BilingualStringArray;
  suitableFor: BilingualStringArray;
  explanation: BilingualText;
  steps: BilingualStringArray;
  processDetails: ServiceProcessDetail[];
  advantages: ServiceDetailItem[];
  timeline: BilingualText;
  startingPrice: BilingualText;
  priceCaption: BilingualText;
  priceNote?: BilingualText;
  faq: FAQItem[];
  beforeAfterCases?: ServiceBeforeAfterCase[];
  relatedIds: string[];
};

export type Doctor = {
  id: string;
  name: BilingualText;
  specialty: BilingualText;
  description: BilingualText;
  photo: string;
  serviceIds: string[];
};

export type LandingPriceRow = {
  label: BilingualText;
  value: BilingualText;
  note?: BilingualText;
};

export type LandingSpecialistRole = {
  title: BilingualText;
  description: BilingualText;
};

export type LandingServicePanel = {
  id: string;
  serviceId: string;
  iconName: string;
  title: BilingualText;
  shortTitle: BilingualText;
  summary: BilingualText;
  bullets: BilingualStringArray;
  prices: LandingPriceRow[];
  specialists: LandingSpecialistRole[];
  faqs: FAQItem[];
};
