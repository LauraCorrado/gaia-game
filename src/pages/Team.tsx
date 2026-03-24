import { useState } from "react";
import {
  Globe,
  Linkedin,
  Instagram,
  Facebook,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Hero from "../components/ui/Hero";
import Button from "../components/ui/Button";
import { partners } from "../data/partners";
import type { Partner, SocialLink } from "../data/partners";
import heroTeam from "../assets/img/hero/team_hero.webp";

const socialIconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

const socialLabelMap: Record<SocialLink["platform"], string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
};

function ContributionSection({
  paragraphs,
  accent,
}: {
  paragraphs: string[];
  accent: string;
  btnColor: Partner["btnColor"];
}) {
  const [expanded, setExpanded] = useState(false);

  const first = paragraphs[0];
  const rest = paragraphs.slice(1);

  return (
    <div className="border-t border-current/10 pt-4 flex flex-col gap-2">
      <p className="text-lm-text-secondary dark:text-dm-text-secondary text-sm leading-relaxed">
        {first}
      </p>

      {rest.length > 0 && (
        <>
          {expanded && (
            <div className="flex flex-col gap-2">
              {rest.map((para, i) => (
                <p
                  key={i}
                  className="text-lm-text-secondary dark:text-dm-text-secondary text-sm leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={`
              self-start flex items-center gap-1 border p-2 rounded border-dashed
              text-xs font-semibold uppercase tracking-wide
              cursor-pointer transition-opacity hover:opacity-70
              focus-visible:outline-2 focus-visible:outline-offset-2
              mt-1 ${accent}
            `}
          >
            {expanded ? (
              <>
                Mostra meno <ChevronUp size={14} aria-hidden="true" />
              </>
            ) : (
              <>
                Leggi di più <ChevronDown size={14} aria-hidden="true" />
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}

function PartnerCard({ p }: { p: Partner }) {
  return (
    <article
      className="
    group
    rounded-2xl overflow-hidden flex flex-col
    border border-current/10
    transition-all duration-300
    hover:shadow-lg
    bg-lm-bg-secondary dark:bg-dm-bg-secondary
  "
    >
      <div className={`h-1.5 w-full ${p.accentBar}`} />
      <div className="relative p-5 flex items-center justify-between">
        <div
          className={`
      absolute inset-0 opacity-0
      transition-opacity duration-300
      ${p.color}
      group-hover:opacity-100
    `}
        />

        {/* contenuto */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-2 rounded-md bg-white/80 dark:bg-white">
            <img
              src={p.logo}
              alt={`Logo ${p.name}`}
              className="h-12 w-auto object-contain"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-lm-text-primary dark:text-dm-text-primary">
              {p.name}
            </h2>
            <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
              {p.role}
            </p>
          </div>
        </div>

        {p.role.toLowerCase().includes("capofila") && (
          <span className="relative z-10 text-xs px-3 py-1 rounded-full bg-black/10 text-lm-text-primary">
            Capofila
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col gap-5 border-t border-current/10 relative">
        <p className="text-sm text-lm-text-primary dark:text-dm-text-primary leading-relaxed">
          {p.description}
        </p>

        <div className="relative rounded-xl p-4 bg-black/5 dark:bg-white/5">
          <div
            className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${p.accentBar}`}
          />

          <p className={`text-xs font-semibold uppercase mb-2 ${p.accent}`}>
            Contributo al progetto GAIA
          </p>

          <ContributionSection
            paragraphs={p.contribution.paragraphs}
            accent={p.accent}
            btnColor={p.btnColor}
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {p.socials?.map((s) => {
              const Icon = socialIconMap[s.platform];
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLabelMap[s.platform]}
                  className={`
                    p-2 rounded-md
                    transition-colors duration-200
                    hover:bg-black/10 dark:hover:bg-white/10
                    ${p.accent}
                  `}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <a href={p.website} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" color={p.btnColor} size="sm">
              <Globe size={14} />
              {p.btnLabel ?? "Visita il sito"}
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}
export default function Team() {
  return (
    <>
      <Hero
        badge="GAIA · Il Team"
        title="La nostra squadra"
        subtitle="Persone, competenze e visioni che collaborano per costruire giochi accessibili e inclusivi"
        image={heroTeam}
        accentColor="green"
      />

      <div className="max-w-6xl mx-auto px-4 py-16 ">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <section aria-labelledby="team-intro-title" className="mb-12">
            <h1
              id="team-intro-title"
              className="text-lm-text-primary dark:text-dm-text-primary mb-4"
            >
              Un partenariato solido e consolidato
            </h1>

            <p className="text-lg text-lm-text-secondary dark:text-dm-text-secondary max-w-3xl md:max-w-5xl">
              Grazie al lavoro di squadra, GAIA crea un ecosistema di gioco
              inclusivo in cui i bambini con ASD possono apprendere,
              socializzare e divertirsi, abbattendo le barriere e valorizzando
              le loro capacità.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {partners.map((p) => (
              <PartnerCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
