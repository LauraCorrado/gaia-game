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

// Social
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
      <p
        className={`text-xs font-semibold uppercase tracking-wide mb-1 ${accent}`}
      >
        Il contributo al progetto GAIA
      </p>

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
              self-start flex items-center gap-1
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
      className={`
        rounded-xl overflow-hidden flex flex-col
        border border-current/10 backdrop-blur-sm
        transition-shadow duration-200 hover:shadow-md
        ${p.color}
      `}
    >
      <div
        className={`h-1.5 w-full shrink-0 ${p.accentBar}`}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-md dark:bg-white">
    <img
      src={p.logo}
      alt={`Logo ${p.name}`}
      className="h-14 w-auto object-contain shrink-0"
    />
  </div>
          <div>
            <h2 className={`text-xl font-semibold leading-tight ${p.accent}`}>
              {p.name}
            </h2>
            <p className="text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary">
              {p.role}
            </p>
          </div>
        </div>

        <p className="text-lm-text-primary dark:text-dm-text-primary text-sm leading-relaxed">
          {p.description}
        </p>

        <ContributionSection
          paragraphs={p.contribution.paragraphs}
          accent={p.accent}
          btnColor={p.btnColor}
        />

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            {p.socials &&
              p.socials.length > 0 &&
              p.socials.map((s) => {
                const Icon = socialIconMap[s.platform];
                return (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLabelMap[s.platform]}
                    className={`p-1.5 rounded-md transition-opacity hover:opacity-70 ${p.accent}`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
          </div>

          <a href={p.website} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" color={p.btnColor} size="sm">
              <Globe size={14} aria-hidden="true" />
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

      <div className="border">
        <div className="max-w-6xl mx-auto px-4 py-16 ">
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
