import levitatingTooth from "@/assets/decorative-dental/levitating-tooth.png";

export type DentalDecorSurface =
  | "home-services"
  | "home-about"
  | "home-reviews"
  | "home-location"
  | "doctors-featured"
  | "doctors-list"
  | "doctors-trust"
  | "doctors-reviews"
  | "doctors-cta"
  | "service-process"
  | "service-advantages"
  | "service-doctors"
  | "service-faq"
  | "service-cta";

export type DentalDecorItem = {
  id: string;
  src: string;
  className: string;
  opacity: number;
  parallax: number;
  float: number;
  rotation: number;
  duration: number;
  delay?: number;
};

const tooth = levitatingTooth;

export const dentalDecorBySurface: Record<DentalDecorSurface, DentalDecorItem[]> = {
  "home-services": [
    {
      id: "home-services-tooth",
      src: tooth,
      className: "right-[-4rem] top-6 w-36 sm:right-4 sm:top-8 sm:w-52 lg:right-20 lg:top-10 lg:w-72",
      opacity: 0.15,
      parallax: 56,
      float: 10,
      rotation: 13,
      duration: 7,
    },
  ],
  "home-about": [
    {
      id: "home-about-tooth",
      src: tooth,
      className: "left-[-4.5rem] bottom-2 w-40 sm:left-6 sm:bottom-8 sm:w-56 lg:left-24 lg:w-64",
      opacity: 0.13,
      parallax: 44,
      float: 8,
      rotation: -16,
      duration: 8,
      delay: 0.4,
    },
  ],
  "home-reviews": [
    {
      id: "home-reviews-tooth",
      src: tooth,
      className: "right-[-5rem] bottom-8 w-44 sm:right-8 sm:w-56 lg:right-28 lg:w-72",
      opacity: 0.12,
      parallax: 48,
      float: 9,
      rotation: 22,
      duration: 7.6,
      delay: 0.2,
    },
  ],
  "home-location": [
    {
      id: "home-location-tooth",
      src: tooth,
      className: "left-[-3.5rem] top-3 w-36 sm:left-8 sm:top-8 sm:w-48 lg:left-16 lg:w-60",
      opacity: 0.12,
      parallax: 38,
      float: 7,
      rotation: -10,
      duration: 8.4,
    },
  ],
  "doctors-featured": [
    {
      id: "doctors-featured-tooth",
      src: tooth,
      className: "right-[-4rem] top-8 w-36 sm:right-6 sm:w-52 lg:right-24 lg:w-64",
      opacity: 0.13,
      parallax: 46,
      float: 8,
      rotation: 15,
      duration: 7.2,
    },
  ],
  "doctors-list": [
    {
      id: "doctors-list-tooth",
      src: tooth,
      className: "left-[-5rem] bottom-12 w-44 sm:left-8 sm:w-56 lg:left-24 lg:w-72",
      opacity: 0.1,
      parallax: 52,
      float: 10,
      rotation: -18,
      duration: 8.2,
      delay: 0.3,
    },
  ],
  "doctors-trust": [
    {
      id: "doctors-trust-tooth",
      src: tooth,
      className: "right-[-4rem] top-4 w-36 sm:right-8 sm:w-48 lg:right-20 lg:w-60",
      opacity: 0.11,
      parallax: 36,
      float: 7,
      rotation: 12,
      duration: 7.4,
    },
  ],
  "doctors-reviews": [
    {
      id: "doctors-reviews-tooth",
      src: tooth,
      className: "left-[-4rem] top-14 w-36 sm:left-6 sm:w-48 lg:left-20 lg:w-60",
      opacity: 0.1,
      parallax: 42,
      float: 8,
      rotation: -14,
      duration: 8,
      delay: 0.5,
    },
  ],
  "doctors-cta": [
    {
      id: "doctors-cta-tooth",
      src: tooth,
      className: "right-[-4rem] bottom-0 w-36 sm:right-6 sm:w-48 lg:right-16 lg:w-56",
      opacity: 0.11,
      parallax: 34,
      float: 7,
      rotation: 19,
      duration: 7.8,
    },
  ],
  "service-process": [
    {
      id: "service-process-tooth",
      src: tooth,
      className: "right-[-4rem] top-8 w-36 sm:right-8 sm:w-52 lg:right-28 lg:w-64",
      opacity: 0.12,
      parallax: 48,
      float: 9,
      rotation: 17,
      duration: 7.2,
    },
  ],
  "service-advantages": [
    {
      id: "service-advantages-tooth",
      src: tooth,
      className: "left-[-4.5rem] bottom-4 w-40 sm:left-8 sm:w-52 lg:left-20 lg:w-64",
      opacity: 0.1,
      parallax: 42,
      float: 8,
      rotation: -15,
      duration: 8.2,
      delay: 0.4,
    },
  ],
  "service-doctors": [
    {
      id: "service-doctors-tooth",
      src: tooth,
      className: "right-[-4rem] top-6 w-36 sm:right-10 sm:w-48 lg:right-24 lg:w-60",
      opacity: 0.09,
      parallax: 36,
      float: 7,
      rotation: 11,
      duration: 7.6,
    },
  ],
  "service-faq": [
    {
      id: "service-faq-tooth",
      src: tooth,
      className: "left-[-4rem] top-16 w-36 sm:left-8 sm:w-48 lg:left-24 lg:w-60",
      opacity: 0.09,
      parallax: 40,
      float: 8,
      rotation: -12,
      duration: 8,
      delay: 0.2,
    },
  ],
  "service-cta": [
    {
      id: "service-cta-tooth",
      src: tooth,
      className: "right-[-4rem] bottom-0 w-36 sm:right-10 sm:w-48 lg:right-24 lg:w-56",
      opacity: 0.1,
      parallax: 30,
      float: 7,
      rotation: 16,
      duration: 7.4,
    },
  ],
};
