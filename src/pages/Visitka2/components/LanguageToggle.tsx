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
      className="rounded-full border border-white/20 bg-white/5 p-1 shadow-md backdrop-blur-md"
    >
      <ToggleGroupItem
        value="kk"
        aria-label="Қазақша"
        className="h-9 min-w-11 rounded-full border-0 px-3 text-xs font-bold tracking-normal text-white/70 data-[state=on]:bg-white data-[state=on]:text-[#4c4b4b]"
      >
        KZ
      </ToggleGroupItem>
      <ToggleGroupItem
        value="ru"
        aria-label="Русский"
        className="h-9 min-w-11 rounded-full border-0 px-3 text-xs font-bold tracking-normal text-white/70 data-[state=on]:bg-white data-[state=on]:text-[#4c4b4b]"
      >
        RU
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
