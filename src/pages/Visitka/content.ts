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
  phone: "tel:+77027133939",
  whatsapp: `https://wa.me/77027133939?text=${encodeURIComponent("Здравствуйте! Хочу записаться на прием")}`,
  location: "https://2gis.kz/aktau/firm/70000001038002984/tab/reviews",
  instagram: "https://www.instagram.com/implantium.aktau",
  website: "https://implantium.kz",
}

export const content: Record<Language, PageCopy> = {
  kk: {
    metaTitle: "IMPLANTIUM | Ақтаудағы стоматологиялық клиника",
    kicker: "Dental clinic",
    titleLines: ["Ақтаудағы", "стоматологиялық", "клиника"],
    mission: "Біздің миссия — мүлтіксіз ем, үздіксіз дамуда.",
    actions: {
      call: { label: "Қоңырау шалу", href: links.phone },
      whatsapp: { label: "WhatsApp-қа жазу", href: links.whatsapp, external: true },
      location: { label: "Біз қайдамыз", href: links.location, external: true },
      instagram: { label: "Instagram", href: links.instagram, external: true },
      website: { label: "Сайтымыз", href: links.website, external: true },
    },
  },
  ru: {
    metaTitle: "IMPLANTIUM | Стоматологическая клиника в Актау",
    kicker: "Dental clinic",
    titleLines: ["Стоматологическая", "клиника в городе", "Актау"],
    mission: "Наша миссия — безупречное лечение и постоянное развитие.",
    actions: {
      call: { label: "Позвонить нам", href: links.phone },
      whatsapp: { label: "Написать в WhatsApp", href: links.whatsapp, external: true },
      location: { label: "Где мы находимся", href: links.location, external: true },
      instagram: { label: "Наш Instagram", href: links.instagram, external: true },
      website: { label: "Наш сайт", href: links.website, external: true },
    },
  },
}
