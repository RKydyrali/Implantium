import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import type { Language } from "../content"

type LanguageToggleProps = {
  value: Language
  onChange: (value: Language) => void
}

export function LanguageToggle({ value, onChange }: LanguageToggleProps) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(next: string) => {
        if (next === "kk" || next === "ru") {
          onChange(next)
        }
      }}
      variant="outline"
      size="sm"
      aria-label="Language"
      className="rounded-full border border-white/70 bg-white/58 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_12px_24px_rgba(78,54,39,0.09)] backdrop-blur-xl"
    >
      <ToggleGroupItem
        value="kk"
        aria-label="Қазақша"
        className="h-9 min-w-11 rounded-full border-0 px-3 text-xs font-bold tracking-normal text-[#6f5f59] data-[state=on]:bg-[#a83d2b] data-[state=on]:text-white"
      >
        KZ
      </ToggleGroupItem>
      <ToggleGroupItem
        value="ru"
        aria-label="Русский"
        className="h-9 min-w-11 rounded-full border-0 px-3 text-xs font-bold tracking-normal text-[#6f5f59] data-[state=on]:bg-[#a83d2b] data-[state=on]:text-white"
      >
        RU
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
