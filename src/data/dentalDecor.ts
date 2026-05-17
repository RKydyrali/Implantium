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
  /** Subtle sway amplitude in degrees while levitating */
  sway?: number;
};

const tooth = levitatingTooth;

function decor(
  id: string,
  className: string,
  overrides: Partial<Omit<DentalDecorItem, "id" | "src" | "className">> = {}
): DentalDecorItem {
  return {
    id,
    src: tooth,
    className,
    opacity: 0.2,
    parallax: 44,
    float: 14,
    rotation: 12,
    duration: 7.5,
    sway: 3,
    ...overrides,
  };
}

export const dentalDecorBySurface: Record<DentalDecorSurface, DentalDecorItem[]> = {
  "home-services": [
    decor("home-services-tooth-a", "right-[-4rem] top-6 w-36 sm:right-4 sm:top-8 sm:w-52 lg:right-20 lg:top-10 lg:w-72", {
      opacity: 0.22,
      parallax: 56,
      float: 16,
      rotation: 13,
      duration: 7,
    }),
    decor("home-services-tooth-b", "left-[-3.5rem] bottom-4 w-24 sm:left-4 sm:bottom-10 sm:w-32 lg:left-16 lg:w-40", {
      opacity: 0.16,
      parallax: 32,
      float: 12,
      rotation: -22,
      duration: 8.4,
      delay: 0.6,
      sway: 4,
    }),
    decor("home-services-tooth-c", "right-[12%] top-[42%] hidden w-20 sm:block sm:w-28 lg:w-32", {
      opacity: 0.13,
      parallax: 24,
      float: 10,
      rotation: 8,
      duration: 9,
      delay: 1.1,
    }),
  ],
  "home-about": [
    decor("home-about-tooth-a", "left-[-4.5rem] bottom-2 w-40 sm:left-6 sm:bottom-8 sm:w-56 lg:left-24 lg:w-64", {
      opacity: 0.21,
      parallax: 44,
      float: 15,
      rotation: -16,
      duration: 8,
      delay: 0.4,
    }),
    decor("home-about-tooth-b", "right-[-3rem] top-10 w-28 sm:right-8 sm:top-16 sm:w-36 lg:right-28 lg:w-44", {
      opacity: 0.15,
      parallax: 36,
      float: 12,
      rotation: 19,
      duration: 7.6,
      delay: 0.9,
    }),
  ],
  "home-reviews": [
    decor("home-reviews-tooth-a", "right-[-5rem] bottom-8 w-44 sm:right-8 sm:w-56 lg:right-28 lg:w-72", {
      opacity: 0.2,
      parallax: 48,
      float: 15,
      rotation: 22,
      duration: 7.6,
      delay: 0.2,
    }),
    decor("home-reviews-tooth-b", "left-[-3.5rem] top-20 w-28 sm:left-6 sm:w-36 lg:left-20 lg:w-44", {
      opacity: 0.14,
      parallax: 30,
      float: 11,
      rotation: -11,
      duration: 8.8,
      delay: 0.7,
    }),
  ],
  "home-location": [
    decor("home-location-tooth-a", "left-[-3.5rem] top-3 w-36 sm:left-8 sm:top-8 sm:w-48 lg:left-16 lg:w-60", {
      opacity: 0.2,
      parallax: 38,
      float: 14,
      rotation: -10,
      duration: 8.4,
    }),
    decor("home-location-tooth-b", "right-[-2.5rem] bottom-6 w-24 sm:right-10 sm:w-32 lg:right-24 lg:w-40", {
      opacity: 0.15,
      parallax: 28,
      float: 11,
      rotation: 14,
      duration: 7.2,
      delay: 0.5,
    }),
  ],
  "doctors-featured": [
    decor("doctors-featured-tooth-a", "right-[-4rem] top-8 w-36 sm:right-6 sm:w-52 lg:right-24 lg:w-64", {
      opacity: 0.21,
      parallax: 46,
      float: 14,
      rotation: 15,
      duration: 7.2,
    }),
    decor("doctors-featured-tooth-b", "left-[-3rem] bottom-16 w-28 sm:left-8 sm:w-36 lg:left-20 lg:w-44", {
      opacity: 0.14,
      parallax: 34,
      float: 11,
      rotation: -18,
      duration: 8.6,
      delay: 0.45,
    }),
  ],
  "doctors-list": [
    decor("doctors-list-tooth-a", "left-[-5rem] bottom-12 w-44 sm:left-8 sm:w-56 lg:left-24 lg:w-72", {
      opacity: 0.2,
      parallax: 52,
      float: 16,
      rotation: -18,
      duration: 8.2,
      delay: 0.3,
    }),
    decor("doctors-list-tooth-b", "right-[-3rem] top-24 w-32 sm:right-12 sm:w-40 lg:right-32 lg:w-48", {
      opacity: 0.15,
      parallax: 38,
      float: 12,
      rotation: 10,
      duration: 7.4,
      delay: 0.8,
    }),
    decor("doctors-list-tooth-c", "left-[8%] top-[18%] hidden w-20 sm:block sm:w-24 lg:w-28", {
      opacity: 0.12,
      parallax: 22,
      float: 9,
      rotation: 6,
      duration: 9.2,
      delay: 1.2,
    }),
  ],
  "doctors-trust": [
    decor("doctors-trust-tooth-a", "right-[-4rem] top-4 w-36 sm:right-8 sm:w-48 lg:right-20 lg:w-60", {
      opacity: 0.19,
      parallax: 36,
      float: 13,
      rotation: 12,
      duration: 7.4,
    }),
    decor("doctors-trust-tooth-b", "left-[-3rem] bottom-8 w-28 sm:left-10 sm:w-36 lg:left-28 lg:w-44", {
      opacity: 0.14,
      parallax: 30,
      float: 11,
      rotation: -14,
      duration: 8,
      delay: 0.55,
    }),
  ],
  "doctors-reviews": [
    decor("doctors-reviews-tooth-a", "left-[-4rem] top-14 w-36 sm:left-6 sm:w-48 lg:left-20 lg:w-60", {
      opacity: 0.18,
      parallax: 42,
      float: 14,
      rotation: -14,
      duration: 8,
      delay: 0.5,
    }),
    decor("doctors-reviews-tooth-b", "right-[-2.5rem] bottom-10 w-28 sm:right-10 sm:w-36 lg:right-24 lg:w-44", {
      opacity: 0.14,
      parallax: 32,
      float: 11,
      rotation: 17,
      duration: 7.8,
      delay: 0.2,
    }),
  ],
  "doctors-cta": [
    decor("doctors-cta-tooth-a", "right-[-4rem] bottom-0 w-36 sm:right-6 sm:w-48 lg:right-16 lg:w-56", {
      opacity: 0.19,
      parallax: 34,
      float: 13,
      rotation: 19,
      duration: 7.8,
    }),
    decor("doctors-cta-tooth-b", "left-[-3rem] top-8 w-24 sm:left-8 sm:w-32 lg:left-24 lg:w-40", {
      opacity: 0.14,
      parallax: 26,
      float: 10,
      rotation: -9,
      duration: 8.4,
      delay: 0.65,
    }),
  ],
  "service-process": [
    decor("service-process-tooth-a", "right-[-4rem] top-8 w-36 sm:right-8 sm:w-52 lg:right-28 lg:w-64", {
      opacity: 0.2,
      parallax: 48,
      float: 15,
      rotation: 17,
      duration: 7.2,
    }),
    decor("service-process-tooth-b", "left-[-3.5rem] bottom-20 w-32 sm:left-6 sm:w-40 lg:left-20 lg:w-48", {
      opacity: 0.15,
      parallax: 36,
      float: 12,
      rotation: -12,
      duration: 8.2,
      delay: 0.4,
    }),
  ],
  "service-advantages": [
    decor("service-advantages-tooth-a", "left-[-4.5rem] bottom-4 w-40 sm:left-8 sm:w-52 lg:left-20 lg:w-64", {
      opacity: 0.19,
      parallax: 42,
      float: 14,
      rotation: -15,
      duration: 8.2,
      delay: 0.4,
    }),
    decor("service-advantages-tooth-b", "right-[-3rem] top-12 w-28 sm:right-10 sm:w-36 lg:right-28 lg:w-44", {
      opacity: 0.14,
      parallax: 30,
      float: 11,
      rotation: 13,
      duration: 7.6,
      delay: 0.85,
    }),
  ],
  "service-doctors": [
    decor("service-doctors-tooth-a", "right-[-4rem] top-6 w-36 sm:right-10 sm:w-48 lg:right-24 lg:w-60", {
      opacity: 0.18,
      parallax: 36,
      float: 13,
      rotation: 11,
      duration: 7.6,
    }),
    decor("service-doctors-tooth-b", "left-[-3rem] bottom-12 w-28 sm:left-8 sm:w-36 lg:left-24 lg:w-44", {
      opacity: 0.14,
      parallax: 28,
      float: 11,
      rotation: -16,
      duration: 8.4,
      delay: 0.5,
    }),
  ],
  "service-faq": [
    decor("service-faq-tooth-a", "left-[-4rem] top-16 w-36 sm:left-8 sm:w-48 lg:left-24 lg:w-60", {
      opacity: 0.18,
      parallax: 40,
      float: 14,
      rotation: -12,
      duration: 8,
      delay: 0.2,
    }),
    decor("service-faq-tooth-b", "right-[-2.5rem] bottom-16 w-28 sm:right-12 sm:w-36 lg:right-32 lg:w-44", {
      opacity: 0.14,
      parallax: 32,
      float: 11,
      rotation: 15,
      duration: 7.4,
      delay: 0.7,
    }),
  ],
  "service-cta": [
    decor("service-cta-tooth-a", "right-[-4rem] bottom-0 w-36 sm:right-10 sm:w-48 lg:right-24 lg:w-56", {
      opacity: 0.19,
      parallax: 30,
      float: 13,
      rotation: 16,
      duration: 7.4,
    }),
    decor("service-cta-tooth-b", "left-[-3rem] top-6 w-24 sm:left-12 sm:w-32 lg:left-28 lg:w-40", {
      opacity: 0.14,
      parallax: 24,
      float: 10,
      rotation: -8,
      duration: 8.6,
      delay: 0.6,
    }),
  ],
};
