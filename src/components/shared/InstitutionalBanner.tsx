import {logos} from "../../data/logos"
export default function InstitutionalBanner() {
  return (
    <div
      className="
        sticky top-0 z-50
        bg-lm-bg-secondary dark:bg-white
        border-b border-lm-bg-secondary dark:border-gray-200
        flex items-center justify-center
        px-4 py-2
      "
    >
      <img
        src={logos.coesione}
        alt="Logo Coesione Italia (Calabria)"
        className="h-12 w-auto object-contain"
      />
    </div>
  )
}