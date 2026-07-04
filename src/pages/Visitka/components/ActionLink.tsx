import type { ComponentType } from "react"
import type { IconProps } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"

type ActionLinkProps = {
  label: string
  href: string
  external?: boolean
  icon: ComponentType<IconProps>
}

export function ActionLink({ label, href, external, icon: Icon }: ActionLinkProps) {
  return (
    <Button
      asChild
      variant="outline"
      className="group h-[4.9rem] w-full justify-start rounded-full border-white/75 bg-[#fffaf3]/72 px-4 text-left text-[1.05rem] font-semibold text-[#3f3531] shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_20px_42px_rgba(76,50,36,0.12)] backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-white hover:bg-white/88 hover:text-[#342b28] active:translate-y-[1px] sm:h-[5.4rem] sm:px-5 sm:text-[1.18rem] [&_svg]:size-7"
    >
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#a83d2b] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_10px_24px_rgba(142,47,35,0.22)] transition-transform duration-300 group-hover:scale-[1.04] sm:size-16">
          <Icon data-icon="inline-start" weight="bold" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 whitespace-normal leading-tight">{label}</span>
      </a>
    </Button>
  )
}
