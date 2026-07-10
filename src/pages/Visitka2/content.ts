export type Language = "kk" | "ru"

type ActionCopy = {
  label: string
  href: string
  external?: boolean
}

type PageCopy = {
  metaTitle: string
  kicker: string
  titleLines: string[]
  mission: string
  actions: Record<"call" | "whatsapp" | "location" | "instagram" | "website", ActionCopy>
}

const links = {
  phone: "tel:+77475000506",
  whatsapp: `https://wa.me/77475000506?text=${encodeURIComponent("Здравствуйте! Хочу записаться на прием")}`,
  location: "https://go.2gis.com/wfAzo",
  instagram: "https://www.instagram.com/inventa_dental.clinic/",
  website: "https://implantium.kz",
}

export const content: Record<Language, PageCopy> = {
  kk: {
    metaTitle: "INVENTA | Ақтаудағы стоматологиялық клиника",
    kicker: "Dental clinic",
    titleLines: ["INVENTA", "стоматологиялық", "клиникасы"],
    mission: "Біздің миссия - мүлтіксіз ем, үздіксіз дамуда.",
    actions: {
      call: { label: "Қоңырау шалу", href: links.phone },
      whatsapp: { label: "WhatsApp-қа жазу", href: links.whatsapp, external: true },
      website: { label: "Біздің сайт", href: links.website, external: true },
      location: { label: "Біз қайдамыз", href: links.location, external: true },
      instagram: { label: "Instagram", href: links.instagram, external: true },
    },
  },
  ru: {
    metaTitle: "INVENTA | Стоматологическая клиника в Актау",
    kicker: "Dental clinic",
    titleLines: ["Стоматологическая", "клиника INVENTA"],
    mission: "Наша миссия - безупречное лечение и постоянное развитие.",
    actions: {
      call: { label: "Позвонить нам", href: links.phone },
      whatsapp: { label: "Написать в WhatsApp", href: links.whatsapp, external: true },
      website: { label: "Наш сайт", href: links.website, external: true },
      location: { label: "Где мы находимся", href: links.location, external: true },
      instagram: { label: "Наш Instagram", href: links.instagram, external: true },
    },
  },
}
