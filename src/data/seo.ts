import type { Language, ServiceData } from "@/types";
import { clinicContact, hasContactValue } from "@/data/clinicContact";

type LocalizedSeoText = Record<Language, string>;

export type PageSeoContent = {
  title: LocalizedSeoText;
  description: LocalizedSeoText;
  keywords: string[];
};

export type ServiceSeoContent = PageSeoContent & {
  intro: LocalizedSeoText;
};

export const homeSeo: PageSeoContent = {
  title: {
    ru: "Стоматология Актау | Зубная клиника IMPLANTIUM",
    kk: "Ақтау стоматология | IMPLANTIUM",
  },
  description: {
    ru: "Зубная клиника IMPLANTIUM — стоматология в Актау: имплантация зубов, брекеты, лечение зубов, удаление, чистка и коронки. Запись на консультацию.",
    kk: "IMPLANTIUM — Ақтау стоматология: тіс имплантациясы, брекет, тіс емдеу Ақтау, жұлу, тазалау және қаптама. Кеңеске жазылыңыз.",
  },
  keywords: [
    "стоматология Актау",
    "зубная клиника Актау",
    "имплантация зубов Актау",
    "брекеты Актау",
    "лечение зубов Актау",
    "Ақтау стоматология",
    "тіс емдеу Ақтау",
  ],
};

export const doctorsSeo: PageSeoContent = {
  title: {
    ru: "Стоматологи в Актау | Врачи IMPLANTIUM",
    kk: "Ақтаудағы стоматологтар | IMPLANTIUM дәрігерлері",
  },
  description: {
    ru: "Врачи стоматологической клиники IMPLANTIUM в Актау: имплантолог, ортодонт, терапевт, хирург и специалисты по протезированию.",
    kk: "Ақтаудағы IMPLANTIUM стоматологиясының дәрігерлері: имплантолог, ортодонт, терапевт, хирург және протездеу мамандары.",
  },
  keywords: [
    "стоматолог Актау",
    "врач стоматолог Актау",
    "ортодонт Актау",
    "имплантолог Актау",
    "детальный план лечения зубов Актау",
    "Ақтауда стоматолог",
  ],
};

export const serviceSeo: Record<string, ServiceSeoContent> = {
  implants: {
    title: {
      ru: "Имплантация зубов в Актау | IMPLANTIUM",
      kk: "Ақтауда тіс имплантациясы | IMPLANTIUM",
    },
    description: {
      ru: "Имплантация зубов в Актау в клинике IMPLANTIUM: подбор импланта, 3D-диагностика, коронки на имплантах и понятный план лечения.",
      kk: "Ақтауда IMPLANTIUM клиникасында тіс имплантациясы: имплант таңдау, 3D диагностика, имплантқа қаптама және түсінікті ем жоспары.",
    },
    intro: {
      ru: "Ищете имплантацию зубов в Актау? В IMPLANTIUM врач подбирает систему имплантов под клиническую ситуацию, бюджет и будущую эстетику улыбки.",
      kk: "Ақтауда тіс имплантациясын іздесеңіз, IMPLANTIUM дәрігері имплант жүйесін жағдайыңызға, бюджетке және күтілетін эстетикаға сай таңдайды.",
    },
    keywords: ["имплантация зубов Актау", "импланты Актау", "имплантолог Актау", "зубной имплант Актау", "Ақтауда тіс имплантациясы"],
  },
  "bone-augmentation": {
    title: {
      ru: "Костная пластика в Актау | IMPLANTIUM",
      kk: "Ақтауда сүйек пластикасы | IMPLANTIUM",
    },
    description: {
      ru: "Костная пластика в Актау перед имплантацией: диагностика, подбор материала и подготовка надежной основы для импланта.",
      kk: "Ақтауда имплантация алдындағы сүйек пластикасы: диагностика, материал таңдау және имплантқа сенімді негіз дайындау.",
    },
    intro: {
      ru: "Костная пластика в Актау помогает подготовить надежную основу для имплантации, если объема костной ткани недостаточно.",
      kk: "Ақтауда сүйек пластикасы сүйек көлемі жеткіліксіз болған жағдайда имплантацияға сенімді негіз дайындауға көмектеседі.",
    },
    keywords: ["костная пластика Актау", "наращивание костной ткани Актау", "подготовка к имплантации Актау", "сүйек пластикасы Ақтау"],
  },
  frenectomy: {
    title: {
      ru: "Пластика уздечки в Актау | IMPLANTIUM",
      kk: "Ақтауда жүгеншені кесу | IMPLANTIUM",
    },
    description: {
      ru: "Пластика уздечки в Актау: аккуратная стоматологическая процедура под анестезией с понятными рекомендациями по восстановлению.",
      kk: "Ақтауда жүгеншені түзету: анестезиямен жасалатын ұқыпты стоматологиялық процедура және қалпына келу бойынша нақты кеңес.",
    },
    intro: {
      ru: "Пластика уздечки в Актау проводится, когда короткая уздечка мешает речи, прикусу, движению губы или языку.",
      kk: "Ақтауда жүгеншені түзету сөйлеуге, тістемге, ерін немесе тіл қозғалысына кедергі болған жағдайда жасалады.",
    },
    keywords: ["пластика уздечки Актау", "подрезание уздечки Актау", "френэктомия Актау", "жүгеншені кесу Ақтау"],
  },
  "tooth-extraction": {
    title: {
      ru: "Удаление зуба в Актау | IMPLANTIUM",
      kk: "Ақтауда тіс жұлу | IMPLANTIUM",
    },
    description: {
      ru: "Удаление зуба в Актау под анестезией: бережная хирургия, диагностика перед процедурой и рекомендации для спокойного восстановления.",
      kk: "Ақтауда тісті анестезиямен жұлу: ұқыпты хирургия, процедура алдындағы диагностика және қалпына келу бойынша кеңес.",
    },
    intro: {
      ru: "Удаление зуба в Актау в IMPLANTIUM проводится бережно, с предварительным осмотром и объяснением дальнейших шагов восстановления.",
      kk: "Ақтауда IMPLANTIUM клиникасында тіс жұлу алдын ала тексерумен және қалпына келу кезеңдерін түсіндірумен жасалады.",
    },
    keywords: ["удаление зуба Актау", "удалить зуб Актау", "хирург стоматолог Актау", "тіс жұлу Ақтау"],
  },
  "wisdom-tooth-removal": {
    title: {
      ru: "Удаление зуба мудрости в Актау | IMPLANTIUM",
      kk: "Ақтауда ақыл тісін жұлу | IMPLANTIUM",
    },
    description: {
      ru: "Удаление зуба мудрости в Актау: оценка положения зуба, анестезия, бережное удаление и рекомендации после процедуры.",
      kk: "Ақтауда ақыл тісін жұлу: тістің орналасуын бағалау, анестезия, ұқыпты жұлу және процедурадан кейінгі кеңестер.",
    },
    intro: {
      ru: "Если беспокоит зуб мудрости в Актау, врач IMPLANTIUM оценивает снимок и планирует безопасное удаление.",
      kk: "Ақтауда ақыл тісі мазаласа, IMPLANTIUM дәрігері суретті бағалап, қауіпсіз жұлу жоспарын жасайды.",
    },
    keywords: ["удаление зуба мудрости Актау", "зуб мудрости Актау", "сложное удаление зуба Актау", "ақыл тісін жұлу Ақтау"],
  },
  crowns: {
    title: {
      ru: "Коронки на зубы в Актау | IMPLANTIUM",
      kk: "Ақтауда тіс қаптамалары | IMPLANTIUM",
    },
    description: {
      ru: "Коронки на зубы в Актау: металлокерамика, циркон, коронки на импланты и восстановление эстетики улыбки.",
      kk: "Ақтауда тіс қаптамалары: металлокерамика, циркон, имплантқа қаптама және күлкі эстетикасын қалпына келтіру.",
    },
    intro: {
      ru: "Коронки в Актау помогают восстановить форму, функцию и внешний вид зуба после разрушения или лечения.",
      kk: "Ақтауда тіс қаптамалары тіс бұзылғаннан немесе емделгеннен кейін оның пішінін, қызметін және көрінісін қалпына келтіреді.",
    },
    keywords: ["коронки Актау", "коронки на зубы Актау", "цирконовые коронки Актау", "металлокерамика Актау", "тіс қаптамасы Ақтау"],
  },
  dentures: {
    title: {
      ru: "Протезирование зубов в Актау | IMPLANTIUM",
      kk: "Ақтауда тіс протездері | IMPLANTIUM",
    },
    description: {
      ru: "Протезирование зубов в Актау: съемные и несъемные решения, восстановление жевания, дикции и уверенной улыбки.",
      kk: "Ақтауда тіс протездері: алмалы және тұрақты шешімдер, шайнау, сөйлеу және сенімді күлкіні қалпына келтіру.",
    },
    intro: {
      ru: "Протезирование зубов в Актау подбирается индивидуально: врач учитывает количество зубов, прикус, комфорт и эстетику.",
      kk: "Ақтауда тіс протездері жеке таңдалады: дәрігер тіс санына, тістемге, жайлылыққа және эстетикаға қарайды.",
    },
    keywords: ["протезирование зубов Актау", "протезы Актау", "съемные протезы Актау", "несъемные протезы Актау", "тіс протездері Ақтау"],
  },
  braces: {
    title: {
      ru: "Брекеты в Актау | IMPLANTIUM",
      kk: "Ақтауда брекет | IMPLANTIUM",
    },
    description: {
      ru: "Брекеты в Актау: консультация ортодонта, металлические и самолигирующие системы, план коррекции прикуса и зубного ряда.",
      kk: "Ақтауда брекет: ортодонт кеңесі, металл және өзін-өзі байланыстыратын жүйелер, тістем мен тіс қатарын түзету жоспары.",
    },
    intro: {
      ru: "Брекеты в Актау помогают исправить прикус и выровнять зубы; ортодонт IMPLANTIUM подбирает систему после диагностики.",
      kk: "Ақтауда брекет тістемді түзетуге және тістерді тегістеуге көмектеседі; IMPLANTIUM ортодонты жүйені диагностикадан кейін таңдайды.",
    },
    keywords: ["брекеты Актау", "ортодонт Актау", "исправление прикуса Актау", "металлические брекеты Актау", "Ақтауда брекет"],
  },
  treatment: {
    title: {
      ru: "Лечение зубов в Актау | IMPLANTIUM",
      kk: "Ақтауда тіс емдеу | IMPLANTIUM",
    },
    description: {
      ru: "Лечение зубов в Актау: кариес, пульпит, периодонтит, диагностика и восстановление зуба с комфортной анестезией.",
      kk: "Ақтауда тіс емдеу: кариес, пульпит, периодонтит, диагностика және жайлы анестезиямен тісті қалпына келтіру.",
    },
    intro: {
      ru: "Лечение зубов в Актау в IMPLANTIUM начинается с диагностики, чтобы сохранить зуб и выбрать спокойный план лечения.",
      kk: "Ақтауда IMPLANTIUM клиникасында тіс емдеу диагностикадан басталады, бұл тісті сақтап, дұрыс ем жоспарын таңдауға көмектеседі.",
    },
    keywords: ["лечение зубов Актау", "кариес Актау", "пульпит Актау", "пломба Актау", "стоматолог терапевт Актау", "Ақтауда тіс емдеу"],
  },
  cleaning: {
    title: {
      ru: "Чистка зубов в Актау | IMPLANTIUM",
      kk: "Ақтауда тіс тазалау | IMPLANTIUM",
    },
    description: {
      ru: "Профессиональная чистка зубов в Актау: снятие налета и зубного камня, Air Flow, полировка и профилактика здоровья десен.",
      kk: "Ақтауда кәсіби тіс тазалау: қақ пен тіс тасын алу, Air Flow, жылтырату және қызыл иек саулығының алдын алу.",
    },
    intro: {
      ru: "Профессиональная чистка зубов в Актау помогает убрать налет и камень, освежить улыбку и подготовить зубы к лечению.",
      kk: "Ақтауда кәсіби тіс тазалау қақ пен тіс тасын кетіруге, күлкіні сергітуге және тісті емге дайындауға көмектеседі.",
    },
    keywords: ["чистка зубов Актау", "профессиональная гигиена Актау", "Air Flow Актау", "зубной камень Актау", "Ақтауда тіс тазалау"],
  },
};

export function getServiceSeo(service: ServiceData): ServiceSeoContent {
  return serviceSeo[service.id] ?? {
    title: {
      ru: `${service.title.ru} в Актау | IMPLANTIUM`,
      kk: `${service.title.kk} | IMPLANTIUM`,
    },
    description: {
      ru: `${service.title.ru} в стоматологической клинике IMPLANTIUM в Актау. Диагностика, понятный план лечения и запись на консультацию.`,
      kk: `${service.title.kk} IMPLANTIUM стоматологиясында. Диагностика, түсінікті ем жоспары және кеңеске жазылу.`,
    },
    intro: {
      ru: `${service.title.ru} в Актау проводится после диагностики и подбора индивидуального плана лечения.`,
      kk: `${service.title.kk} диагностикадан және жеке ем жоспарын таңдаудан кейін жүргізіледі.`,
    },
    keywords: [`${service.title.ru} Актау`, `${service.title.kk} Ақтау`, "стоматология Актау"],
  };
}

export function buildClinicJsonLd(siteUrl: string, serviceNames: string[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${siteUrl}/#clinic`,
    name: "IMPLANTIUM",
    alternateName: ["Стоматологическая клиника IMPLANTIUM", "IMPLANTIUM стоматологиясы"],
    description:
      "Зубная клиника в Актау: имплантация зубов, брекеты, лечение зубов. Ақтау стоматология — тіс емдеу және тіс имплантациясы.",
    url: siteUrl,
    telephone: "+77027133939",
    priceRange: "₸₸",
    image: `${siteUrl}/favicon-512.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "13 микрорайон, дом 39",
      addressLocality: "Актау",
      addressRegion: "Мангистауская область",
      postalCode: "130000",
      addressCountry: "KZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.667073,
      longitude: 51.136723,
    },
    areaServed: {
      "@type": "City",
      name: "Актау",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    medicalSpecialty: ["Dentistry", "Orthodontics", "Dental implantology"],
    availableService: serviceNames.map((name) => ({
      "@type": "MedicalProcedure",
      name,
    })),
    sameAs: [clinicContact.instagramUrl, clinicContact.twoGisUrl].filter(hasContactValue),
  };
}

export function buildServiceJsonLd(siteUrl: string, path: string, service: ServiceData, seo: ServiceSeoContent, language: Language) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: seo.title[language].replace(" | IMPLANTIUM", ""),
    alternateName: service.title[language === "ru" ? "kk" : "ru"],
    description: seo.description[language],
    serviceType: service.title.ru,
    areaServed: {
      "@type": "City",
      name: "Актау",
    },
    provider: {
      "@id": `${siteUrl}/#clinic`,
    },
    url: `${siteUrl}${path}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "KZT",
      description: `${service.startingPrice[language]}. ${service.priceCaption[language]}`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildBreadcrumbJsonLd(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

/**
 * Generates FAQPage JSON-LD from a service's FAQ items.
 * Produces rich accordion snippets in Google search results.
 */
export function buildFaqJsonLd(faqItems: { question: { ru: string; kk: string }; answer: { ru: string; kk: string } }[], language: Language) {
  if (faqItems.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question[language],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer[language],
      },
    })),
  };
}
