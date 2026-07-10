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
      className="group h-[4.9rem] w-full justify-start rounded-full border-white/20 bg-white/5 px-4 text-left text-[1.05rem] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all hover:scale-[1.02] hover:border-white/40 hover:bg-white/10 active:scale-[0.98] sm:h-[5.4rem] sm:px-5 sm:text-[1.18rem] [&_svg]:size-7"
    >
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.04] group-hover:bg-white group-hover:text-[#4c4b4b] sm:size-16">
          <Icon data-icon="inline-start" weight="bold" aria-hidden="true" />
        </span>
        <span className="ml-4 min-w-0 flex-1 whitespace-normal leading-tight tracking-wide">{label}</span>
      </a>
    </Button>
  )
}
